import { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import { useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../assets/js/config/api";
import { Helmet } from "react-helmet";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/css/nutrition.css";

// ─── Constants ──────────────────────────────────────────────────────────────
const ICON_MAP = {
    protein: "fas fa-dumbbell",
    butter: "fas fa-seedling",
    gainer: "fas fa-leaf",
    default: "fas fa-box",
};

const getProductIcon = (name = "") => {
    const lower = name.toLowerCase();
    if (lower.includes("protein")) return ICON_MAP.protein;
    if (lower.includes("butter")) return ICON_MAP.butter;
    if (lower.includes("gainer")) return ICON_MAP.gainer;
    return ICON_MAP.default;
};

// ─── Single product feedback card ────────────────────────────────────────────
const ProductFeedbackCard = ({ product, onSave, isOpen, isSaved, onToggle }) => {
    const [rating, setRating] = useState(product.rating || 0);
    const [hover, setHover]   = useState(0);
    const [note, setNote]     = useState(product.remarks || "");

    useEffect(() => {
        if (product.rating) setRating(product.rating);
        if (product.remarks) setNote(product.remarks);
    }, [product]);

    const handleSave = () => {
        if (!rating) return;
        onSave(product._id, { rating, remarks: note });
    };

    const productIcon = getProductIcon(product.product_name);

    return (
        <div
            className={`mb-3 br-10 overflow-hidden ${isOpen ? "border border-warning" : "border"}`}
            style={{ transition: "border-color 0.2s" }}
        >
            {/* Header */}
            <div
                className="d-flex align-items-center px-3 py-3"
                style={{
                    cursor: isSaved ? "default" : "pointer",
                    backgroundColor: isOpen ? "#fff" : "#f8f9fa",
                    gap: 10,
                }}
                onClick={() => !isSaved && onToggle()}
            >
                <div
                    className="d-flex justify-content-center align-items-center br-10 flex-shrink-0"
                    style={{ width: 38, height: 38, backgroundColor: "#f1f8e9" }}
                >
                    <i className={productIcon} style={{ fontSize: 16, color: "#8dc63f" }}></i>
                </div>

                <span className="f-rob-med f-15 text-dark flex-grow-1">{product.product_name}</span>

                <span
                    className="px-3 py-1 br-10 f-12 f-rob-med"
                    style={
                        isSaved
                            ? { backgroundColor: "#e8f5e9", color: "#2e7d32" }
                            : { backgroundColor: "#f5f5f5", color: "#9e9e9e", border: "1px solid #e0e0e0" }
                    }
                >
                    {isSaved ? "✓ Done" : "Pending"}
                </span>

                {!isSaved && (
                    <i className={`fas fa-chevron-${isOpen ? "up" : "down"} text-muted f-12 ml-1`}></i>
                )}
            </div>

            {/* Body */}
            {isOpen && !isSaved && (
                <div className="px-3 pb-3 pt-3" style={{ borderTop: "1px solid #c5e1a5" }}>

                    {/* Star rating */}
                    <label className="text-muted f-12 f-rob-med mb-2 d-block" style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Rate this product
                    </label>
                    <div
                        className="d-flex justify-content-center mb-3 br-10 py-3"
                        style={{ backgroundColor: "#f8f9fa", gap: 12 }}
                    >
                        {[1, 2, 3, 4, 5].map((n) => {
                            const val = hover || rating;
                            
                            let iconClass = "far fa-star";
                            if (val >= n) {
                                iconClass = "fas fa-star";
                            } else if (val >= n - 0.5) {
                                iconClass = "fas fa-star-half-alt";
                            }

                            const active = val >= n - 0.5;

                            return (
                                <div
                                    key={n}
                                    className="position-relative d-inline-block"
                                    style={{
                                        width: 32,
                                        height: 32,
                                        transition: "all 0.15s",
                                    }}
                                >
                                    {/* The visual star icon */}
                                    <i
                                        className={iconClass}
                                        style={{
                                            fontSize: 24,
                                            color: active ? "#8dc63f" : "#e0e0e0",
                                            transition: "all 0.15s",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            pointerEvents: "none",
                                        }}
                                    ></i>

                                    {/* Hit regions for half-star selection */}
                                    <div className="d-flex w-100 h-100" style={{ cursor: "pointer" }}>
                                        <div 
                                            className="w-50 h-100" 
                                            onMouseEnter={() => setHover(n - 0.5)}
                                            onMouseLeave={() => setHover(rating)}
                                            onClick={() => setRating(n - 0.5)}
                                        />
                                        <div 
                                            className="w-50 h-100" 
                                            onMouseEnter={() => setHover(n)}
                                            onMouseLeave={() => setHover(rating)}
                                            onClick={() => setRating(n)}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Comments */}
                    <label className="text-muted f-12 f-rob-med mb-2 d-block" style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Feedback
                    </label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Tell us what you liked or what we can improve..."
                        className="f-rob-med f-14 br-10 shadow-none mb-3"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        style={{ border: "1px solid #e0e0e0", resize: "none" }}
                    />

                    <Button
                        onClick={handleSave}
                        disabled={!rating}
                        className="w-100 py-2 f-rob-bol f-14 border-0 br-10"
                        style={{
                            backgroundColor: rating ? "#8dc63f" : "#e0e0e0",
                            color: rating ? "#fff" : "#9e9e9e",
                            transition: "all 0.2s",
                        }}
                    >
                        <i className="fas fa-check mr-2"></i> Save rating
                    </Button>
                </div>
            )}
        </div>
    );
};

// ─── Main page ────────────────────────────────────────────────────────────────
const SampleBooking = () => {
    const [searchParams] = useSearchParams();
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]     = useState(null);

    const [savedFeedbacks, setSavedFeedbacks] = useState({});
    const [activeProductId, setActiveProductId] = useState(null);
    const [submitted, setSubmitted]           = useState(false);

    const bookingId = searchParams.get("id");
    const token = searchParams.get("token");

    const fetchBooking = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axiosInstance.get("/gn-sample-booking/get", {
                params: { id: bookingId },
            });
            if (res.data.status === 200 && res.data.data?.[0]) {
                const data = res.data.data[0];
                setBooking(data);

                // Auto-open first unrated product
                const firstPending = data.products.find(p => p.rating === 0);
                if (firstPending) setActiveProductId(firstPending._id);

                // Prep saved feedbacks
                const initialSaved = {};
                data.products.forEach(p => {
                    if (p.rating > 0) initialSaved[p._id] = { rating: p.rating, remarks: p.remarks };
                });
                setSavedFeedbacks(initialSaved);
            } else {
                setError("Sample booking not found.");
            }
        } catch (err) {
            setError("Failed to load booking details.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [bookingId]);

    useEffect(() => {
        // If token is present in URL, save it to authorize subsequent calls
        if (token) {
            localStorage.setItem("fg_group_user_authorization", token);
        }

        if (bookingId) {
            fetchBooking();
        } else {
            setLoading(false);
            setError("No Booking ID found in URL");
        }
    }, [bookingId, token, fetchBooking]);

    const handleProductSave = (productId, data) => {
        const newFeedbacks = { ...savedFeedbacks, [productId]: data };
        setSavedFeedbacks(newFeedbacks);

        // Find next product that is not saved yet
        const nextProduct = booking.products.find(p => p._id !== productId && !newFeedbacks[p._id]);
        if (nextProduct) {
            setActiveProductId(nextProduct._id);
        } else {
            setActiveProductId(null);
        }
    };

    const sampleProducts = booking?.products || [];
    const doneCount = Object.keys(savedFeedbacks).length;
    const allDone   = sampleProducts.length > 0 && sampleProducts.every((p) => savedFeedbacks[p._id]);
    const progress  = sampleProducts.length > 0 ? Math.round((doneCount / sampleProducts.length) * 100) : 0;

    const handleSubmitAll = async (e) => {
        e.preventDefault();
        if (!allDone) return;

        try {
            // Map saved feedbacks back to the products array format expected by the API
            const updatedProducts = sampleProducts.map(p => ({
                _id: p._id,
                product_name: p.product_name,
                rating: savedFeedbacks[p._id].rating,
                remarks: savedFeedbacks[p._id].remarks
            }));

            const res = await axiosInstance.post("/gn-sample-booking/update", {
                id: bookingId,
                products: updatedProducts
            });

            if (res.data.status === 200) {
                setSubmitted(true);
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Feedback submitted successfully!",
                });
            } else {
                alert(res.data.message || "Failed to submit feedback.");
            }
        } catch (err) {
            alert("An error occurred while submitting feedback.");
            console.error(err);
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "100vh" }}>
                <div className="text-center">
                    <div className="spinner-border text-success mb-3" role="status"></div>
                    <p className="f-rob-med text-muted">Loading your booking details...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "100vh" }}>
                <div className="text-center p-4 card border-0 shadow-sm br-15" style={{ maxWidth: 400 }}>
                    <i className="fas fa-exclamation-circle text-danger f-48 mb-3"></i>
                    <h4 className="f-rob-bol text-dark">Oops!</h4>
                    <p className="text-muted mb-4">{error}</p>
                    <Button variant="success" className="br-10 px-4" onClick={() => window.location.reload()}>Retry</Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Helmet>
                <title>Sample Booking Update | Gomzi Nutrition</title>
                <meta name="description" content="Update your sample booking details and provide feedback for Gomzi Nutrition products." />
                <meta name="keyword" content="whey protein, peanut butter, nutrition, supplements, muscle gain, fat loss" />
            </Helmet>
            <div className="bg-white py-3 sticky-top">
                <div className="container d-flex justify-content-center">
                    <img 
                        src="/assets/images/logo/nutrition-logo.webp" 
                        alt="Gomzi Nutrition" 
                        style={{ height: "50px", width: "auto", objectFit: "contain" }} 
                    />
                </div>
            </div>

            <div className="main-content bg-light pb-5">
                <div className="px-3 px-md-5 pt-4">
                    <Row>

                        {/* ── Left: Booking & Courier ── */}
                        <Col lg={6} className="mb-4">
                            <div className="card border-0 shadow-sm br-15 h-100">
                                <div className="card-body p-4 p-md-5">

                                    <h3 className="f-rob-bol mb-4 text-black border-bottom pb-3 d-flex align-items-center">
                                        <i className="fas fa-user-circle mr-3" style={{ color: "#8dc63f" }}></i> PERSONAL DETAILS
                                    </h3>
                                    <Row className="mb-4">
                                        <Col md={6} className="mb-3 mb-md-0">
                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-3 br-10 mr-3 d-flex justify-content-center align-items-center" style={{ width: 50, height: 50, color: "#8dc63f" }}>
                                                    <i className="fas fa-user f-20"></i>
                                                </div>
                                                <div>
                                                    <label className="text-muted f-14 mb-1">Customer Name</label>
                                                    <p className="f-rob-med f-18 text-dark mb-0">{booking?.customer_name || "N/A"}</p>
                                                </div>
                                            </div>
                                        </Col>
                                       
                                    </Row>
                                    <Row className="mb-5">
                                         <Col md={6}>
                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-3 br-10 mr-3 d-flex justify-content-center align-items-center" style={{ width: 50, height: 50, color: "#8dc63f" }}>
                                                    <i className="fas fa-phone-alt f-20"></i>
                                                </div>
                                                <div>
                                                    <label className="text-muted f-14 mb-1">Phone Number</label>
                                                    <p className="f-rob-med f-18 text-dark mb-0">{booking?.mobile ? `+91 ${booking.mobile}` : "N/A"}</p>
                                                </div>
                                            </div>
                                        </Col>
                                       
                                    </Row>

                                    <h3 className="f-rob-bol mb-4 text-black border-bottom pb-3 d-flex align-items-center mt-2">
                                        <i className="fas fa-shipping-fast mr-3" style={{ color: "#8dc63f" }}></i> SHIPPING &amp; COURIER
                                    </h3>
                                    <Row className="mb-4">
                                        <Col md={12}>
                                            <div className="d-flex align-items-start">
                                                <div className="bg-light p-3 br-10 mr-3 d-flex justify-content-center align-items-center mt-1" style={{ width: 50, height: 50, minWidth: 50, color: "#8dc63f" }}>
                                                    <i className="fas fa-map-marker-alt f-20"></i>
                                                </div>
                                                <div>
                                                    <label className="text-muted f-14 mb-1">Delivery Address</label>
                                                    <p className="f-rob-med f-16 text-dark mb-0">
                                                        {booking?.address ? (
                                                            `${booking.address.address_line_1}, ${booking.address.city}, ${booking.address.state} — ${booking.address.pin_code}`
                                                        ) : (
                                                            "N/A"
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mb-4">
                                        <Col md={6} className="mb-3 mb-md-0">
                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-3 br-10 mr-3 d-flex justify-content-center align-items-center" style={{ width: 50, height: 50, minWidth: 50, color: "#8dc63f" }}>
                                                    <i className="fas fa-truck f-20"></i>
                                                </div>
                                                <div>
                                                    <label className="text-muted f-14 mb-1">Courier Name</label>
                                                    <p className="f-rob-med f-18 text-dark mb-0">{booking?.courier_name || "N/A"}</p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="d-flex align-items-center">
                                                <div className="bg-light p-3 br-10 mr-3 d-flex justify-content-center align-items-center" style={{ width: 50, height: 50, minWidth: 50, color: "#8dc63f" }}>
                                                    <i className="fas fa-barcode f-20"></i>
                                                </div>
                                                <div>
                                                    <label className="text-muted f-14 mb-1">Tracking ID</label>
                                                    <p className="f-rob-med f-18 text-dark mb-0">{booking?.tracking_id || "N/A"}</p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <div
                                                className="p-3 br-10 d-flex flex-column flex-md-row justify-content-between align-items-md-center mt-3"
                                                style={{ backgroundColor: "#f1f8e9", border: "1px solid #c5e1a5" }}
                                            >
                                                <div className="mb-3 mb-md-0 d-flex align-items-center">
                                                    <i className="fas fa-box-open mr-3 f-24" style={{ color: "#8dc63f" }}></i>
                                                    <div>
                                                        <span className="d-block text-dark f-rob-bol f-16">Track your order status</span>
                                                        <span className="text-muted f-12">Click the button to view real-time shipping updates.</span>
                                                    </div>
                                                </div>
                                                <a
                                                    href={booking?.tracking_link || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn br-10 f-rob-bol text-white px-4 py-2 border-0 shadow-sm"
                                                    style={{ backgroundColor: "#8dc63f" }}
                                                    onClick={(e) => !booking?.tracking_link && e.preventDefault()}
                                                >
                                                    Track Now <i className="fas fa-arrow-right ml-1"></i>
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                        {/* ── Right: Feedback ── */}
                        <Col lg={6}>
                            <div className="card border-0 shadow-sm br-15 h-100">
                                <div className="card-body p-4 p-md-5">

                                    {!submitted ? (
                                        <>
                                            <div className="text-center mb-4">
                                                <h3 className="f-rob-bol text-black mb-2">YOUR FEEDBACK</h3>
                                                <p className="text-muted f-14 mb-0">Rate each product from your sample order</p>
                                            </div>

                                            {/* Progress */}
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="text-muted f-12">{doneCount} of {sampleProducts.length} products rated</span>
                                                <span className="f-12 f-rob-med" style={{ color: "#2e7d32" }}>{progress}%</span>
                                            </div>
                                            <div className="w-100 br-10 mb-4" style={{ height: 5, backgroundColor: "#dcedc8" }}>
                                                <div
                                                    className="br-10"
                                                    style={{
                                                        height: "100%",
                                                        width: `${progress}%`,
                                                        backgroundColor: "#8dc63f",
                                                        transition: "width 0.3s ease",
                                                    }}
                                                />
                                            </div>

                                            {sampleProducts.map((product) => (
                                                <ProductFeedbackCard
                                                    key={product._id}
                                                    product={product}
                                                    onSave={handleProductSave}
                                                    isOpen={activeProductId === product._id}
                                                    isSaved={!!savedFeedbacks[product._id]}
                                                    onToggle={() => setActiveProductId(activeProductId === product._id ? null : product._id)}
                                                />
                                            ))}

                                            <Button
                                                onClick={handleSubmitAll}
                                                disabled={!allDone}
                                                className="w-100 py-3 f-rob-bol f-16 border-0 br-10 mt-2 shadow-sm"
                                                style={{
                                                    backgroundColor: allDone ? "#8dc63f" : "#e0e0e0",
                                                    color: allDone ? "#fff" : "#9e9e9e",
                                                    transition: "all 0.3s",
                                                }}
                                                onMouseOver={(e) => allDone && (e.currentTarget.style.transform = "translateY(-2px)")}
                                                onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                                            >
                                                <i className="fas fa-paper-plane mr-2"></i>
                                                {allDone ? "SUBMIT ALL FEEDBACK" : "Rate all products to submit"}
                                            </Button>
                                        </>
                                    ) : (
                                        <div className="text-center py-5">
                                            <h1 className="f-rob-bol text-dark mb-3" style={{ fontSize: "48px" }}>Thank you!</h1>
                                            <p className="text-muted f-18 mb-4">All your feedback has been submitted successfully.</p>
                                            <a 
                                                href="https://www.gomzilifesciences.in/nutrition/white-labelling" 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="btn btn-outline-success br-10 px-4 f-rob-bol"
                                            >
                                                Visit Our Website <i className="fas fa-external-link-alt ml-2 f-12"></i>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    );
};

export default SampleBooking;