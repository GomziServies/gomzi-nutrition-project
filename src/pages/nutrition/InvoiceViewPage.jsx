import React, { useRef, useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import HomeFooter from "../../components/partials/Footer/footer";
import { axiosInstance } from "../../assets/js/config/api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import apiConfig from "../../assets/js/config/apiConfig";

const InvoiceViewPage = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate()
  const [isDrawing, setIsDrawing] = useState(false);
  const [signatureImage, setSignatureImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [buttonHover, setButtonHover] = useState({ clear: false, save: false });
  const [isSignatureStarted, setIsSignatureStarted] = useState(true);
  const invoice_id = useParams().invoice_id || null;
  const [data, setData] = useState({})

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas.parentElement;
    canvas.width = parent.offsetWidth;
    canvas.height = 200;
  }, []);

  const getEventPos = (e, canvas) => {
    const rect = canvas.getBoundingClientRect();
    if (e.touches) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    }
  };

  const isCanvasEmpty = () => {
    const canvas = canvasRef.current;
    const blank = document.createElement("canvas");
    blank.width = canvas.width;
    blank.height = canvas.height;
    return canvas.toDataURL() === blank.toDataURL();
  };
  const disableScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflow = "";
  };

  const startDrawing = (e) => {
    if (!isSignatureStarted) return;
    e.preventDefault();

    disableScroll();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getEventPos(e, canvas);

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#000000";

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setIsSaved(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { x, y } = getEventPos(e, canvas);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    e.preventDefault();

    enableScroll();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.closePath();
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setSignatureImage(null);
    setIsSaved(false);
    setIsSignatureStarted(false);
  };

  function base64ToBlob(base64Data, contentType = 'image/png') {
    const byteCharacters = atob(base64Data.split(',')[1]);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i += 512) {
      const slice = byteCharacters.slice(i, i + 512);
      const byteNumbers = new Array(slice.length);
      for (let j = 0; j < slice.length; j++) {
        byteNumbers[j] = slice.charCodeAt(j);
      }
      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, { type: contentType });
  }

  function blobToFile(blob, fileName) {
    return new File([blob], fileName, { type: blob.type });
  }

  const saveSignature = async () => {
    const canvas = canvasRef.current;
    if (isCanvasEmpty()) {
      toast.warning("Signature is required to proceed.", {
        autoClose: 3000,
        theme: "light",
      });
      return;
    }

    if (isSaved) return;

    const base64Image = canvas.toDataURL("image/png");
    const blob = base64ToBlob(base64Image);
    const file = blobToFile(blob, String(data?.name || "").trim() + "_signature.png");
    console.log('file', file)

    const formData = new FormData();
    formData.append('directory', "user-signature");
    formData.append('files', file);
    await axios.post(apiConfig.BASE_URL + "/public/v1/file-upload", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    },)
      .then(async (res) => {
        console.log('res?.data123', res?.data)
        const signature = res?.data?.data?.fileURLs[0];
        console.log('signature', signature)
        await axiosInstance.post('/invoice/sign-invoice', {
          invoice_id,
          signature_image: signature
        })
          .then(() => {
            fetchData();
          })
          .catch((error) => {
            toast.error(error?.message || "Something went wrong while saving the signature.")
          })
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong while saving the signature.")
      })
    // setSignatureImage(image);
    setIsSaved(true);

  };

  const buttonStyle = (type) => ({
    padding: "0.8rem 1.5rem",
    backgroundColor: type === "save" ? "#86C33B" : "white",
    color: type === "save" ? "white" : "#86C33B",
    border: "1px solid #86C33B",
    borderRadius: "6px",
    fontWeight: "600",
    cursor: "pointer",
    flex: "1",
    minWidth: "120px",
    transform: buttonHover[type] ? "scale(1.05)" : "scale(1)",
    boxShadow: buttonHover[type]
      ? "0 4px 12px rgba(134, 195, 59, 0.3)"
      : "none",
    transition: "all 0.3s ease",
  });
  const [downloadPDFLoading, setDownloadPDFLoading] = useState(false)
  const handleDownloadPDF = async () => {
    setDownloadPDFLoading(true)
    await axiosInstance.get('/invoice/generate-invoice-pdf?invoice_id=' + invoice_id)
      .then((res) => {
        window.open(res?.data?.data?.file_url, '_blank');
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong while fetching invoices.");
      })
      .finally(() => setDownloadPDFLoading(false))
  };

  const fetchData = async () => {
    await axiosInstance.get('/invoice/get?invoice_id=' + invoice_id)
      .then((res) => {
        console.log('res?.data', res?.data)
        setData(res?.data?.data?.length > 0 ? res?.data?.data[0] : {});
      })
      .catch((error) => {
        toast.error(error?.message || "Something went wrong while fetching invoices.");
      })
  };
  useEffect(() => {
    if (invoice_id) {
      fetchData();
    } else {
      navigate('/invoice');
    }
  }, [invoice_id]);

  return (<>
    <NutritionHeader />
    <div
      className="signature-container"
      style={{ maxWidth: "1000px", margin: "125px auto", padding: "2rem" }}
    >
      <ToastContainer />
      <div className="signature-header">
        <h2>Digital Signature</h2>
        <p>
          Your signature is a legally binding representation of your identity.
          Please sign in the box below using your mouse or touchscreen.
        </p>
      </div>

      <table className="customer-table" style={{ marginBottom: "1rem" }}>
        <tbody>
          <tr>
            <td>
              <strong style={{ textTransform: 'capitalize' }}>Customer Name</strong>
            </td>
            <td>
              <b style={{ color: "green" }}>:</b> &nbsp;&nbsp; {data?.name}
            </td>
          </tr>
          <tr>
            <td>
              <strong style={{ textTransform: 'capitalize' }}>Email</strong>
            </td>
            <td>
              <b style={{ color: "green" }}>:</b> &nbsp;&nbsp; {data?.email}
            </td>
          </tr>
          <tr>
            <td>
              <strong style={{ textTransform: 'capitalize' }}>invoice Number</strong>
            </td>
            <td>
              <b style={{ color: "green" }}>:</b> &nbsp;&nbsp; {data?.invoice_number}
            </td>
          </tr>
          <tr>
            <td>
              <strong style={{ textTransform: 'capitalize' }}>Date</strong>
            </td>
            <td>
              <b style={{ color: "green" }}>:</b> &nbsp;&nbsp; {data?.date ? new Date(data?.date).toLocaleDateString() : "N/A"}
            </td>
          </tr>
          <tr>
            <td>
              <strong style={{ textTransform: 'capitalize' }}>Phone Number</strong>
            </td>
            <td>
              <b style={{ color: "green" }}>:</b> &nbsp;&nbsp; {data?.mobile}
            </td>
          </tr>
          <tr>
            <td>
              <strong style={{ textTransform: 'capitalize' }}>Address</strong>
            </td>
            <td>
              <b style={{ color: "green" }}>:</b> &nbsp;&nbsp; {data?.billing_address?.address_line_1}, {data?.billing_address?.city}, {data?.billing_address?.state}, {data?.billing_address?.pin_code}
            </td>
          </tr>
        </tbody>
      </table>

      <div className="payment-table" style={{ marginBottom: "1rem" }}>
        <table className="w-100">
          <thead>
            <tr className="d-flex" style={{ backgroundColor: "#f4fef0", }}>
              <th className="col-5">
                Services
              </th>
              <th className="col-3">
                Paid Amount
              </th>
              <th className="col-3">
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.items?.map((val, i) => (
              <tr className="d-flex" key={i}>
                <td className="col-5">
                  {val?.item_name}
                </td>
                <td className="col-3">
                  {val?.amount}
                </td>
                <td className="col-3">
                  {val?.totalAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data?.user_confirmation_signature_image ? (<div className="text-center">
        <button style={buttonStyle("save")} onClick={handleDownloadPDF} disabled={downloadPDFLoading}>{downloadPDFLoading ? "Loading..." : "Download PDF"}</button>
      </div>) : <>
        <div
          className="signature-canvas-container"
          style={{ position: "relative", width: "250px", margin: "1rem auto" }}
        >
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
          />
          {/* {!isSignatureStarted && (
            <button
              onClick={() => setIsSignatureStarted(true)}
              className="start_button"
            >
              Start Signature
            </button>
          )} */}
          {!isDrawing && !signatureImage && isSignatureStarted && (
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                color: "#aaa",
                pointerEvents: "none",
                userSelect: "none"
              }}
            >
              Please sign here
            </div>
          )}
        </div>

        <div
          className="signature-buttons"
          style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
        >
          <button
            onClick={clearSignature}
            onMouseEnter={() =>
              setButtonHover((prev) => ({ ...prev, clear: true }))
            }
            onMouseLeave={() =>
              setButtonHover((prev) => ({ ...prev, clear: false }))
            }
            style={buttonStyle("clear")}
          >
            Clear Signature
          </button>
          <button
            onClick={saveSignature}
            onMouseEnter={() =>
              setButtonHover((prev) => ({ ...prev, save: true }))
            }
            onMouseLeave={() =>
              setButtonHover((prev) => ({ ...prev, save: false }))
            }
            style={buttonStyle("save")}
          >
            {isSaved ? "✓ Saved" : "Save Signature"}
          </button>
        </div>
      </>}

    </div>
    <HomeFooter />
  </>
  );
};

export default InvoiceViewPage;
