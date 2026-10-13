import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { createStoreReview, uploadCustomerImage } from "../../assets/js/store/storeApi";

const FILE_BASE = "https://files.fggroup.in/";
const MAX_PHOTOS = 3;
const MAX_MB = 5;
const LABELS = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

/** Write a review: star rating, comment and up to 3 photos. New reviews are approved by the team before they show. */
const ReviewDialog = ({ product, onClose, onSubmitted }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [photos, setPhotos] = useState([]); // { key, preview }
  const [uploading, setUploading] = useState(0);
  const [sending, setSending] = useState(false);
  const fileRef = useRef(null);

  const addPhotos = async (files) => {
    const room = MAX_PHOTOS - photos.length;
    const chosen = Array.from(files).slice(0, Math.max(room, 0));
    if (files.length > room) toast.info(`You can add up to ${MAX_PHOTOS} photos.`);

    for (const file of chosen) {
      if (!file.type.startsWith("image/")) {
        toast.error(`"${file.name}" is not an image`);
        continue;
      }
      if (file.size > MAX_MB * 1024 * 1024) {
        toast.error(`"${file.name}" is larger than ${MAX_MB} MB`);
        continue;
      }
      setUploading((n) => n + 1);
      try {
        const key = await uploadCustomerImage(file);
        setPhotos((p) => [...p, { key, preview: FILE_BASE + key }]);
      } catch (e) {
        toast.error(`Couldn't upload "${file.name}"`);
      } finally {
        setUploading((n) => n - 1);
      }
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!rating) return toast.error("Please select a star rating");
    if (uploading) return toast.info("Please wait for your photos to finish uploading");
    setSending(true);
    try {
      await createStoreReview({ product_id: product.id, rating, comment: comment.trim(), images: photos.map((p) => p.key) });
      toast.success("Thank you! Your review is now live on the product page.");
      onSubmitted();
    } catch (err) {
      toast.error(err.message || "Couldn't submit your review");
    } finally {
      setSending(false);
    }
  };

  const shown = hover || rating;

  return (
    <Modal title="Write a review" onClose={onClose} width={540}>
      <form onSubmit={submit}>
        <p className="gz-rv-product">{product.name}</p>

        <div className="gz-rv-stars" role="radiogroup" aria-label="Your rating" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} type="button" role="radio" aria-checked={rating === n} aria-label={`${n} star${n === 1 ? "" : "s"}`} className={n <= shown ? "on" : ""} onMouseEnter={() => setHover(n)} onClick={() => setRating(n)}>
              <FontAwesomeIcon icon={faStar} />
            </button>
          ))}
          <span>{LABELS[shown] || "Tap a star"}</span>
        </div>

        <label className="gz-form-label fw-bold mb-1 mt-3" htmlFor="rv_comment">Your review (optional)</label>
        <textarea id="rv_comment" className="gz-form-input" rows={4} maxLength={1000} value={comment} onChange={(e) => setComment(e.target.value)} placeholder="What did you like or dislike? How was the taste, quality and results?" />
        <div className="gz-hint" style={{ textAlign: "right" }}>{comment.length}/1000</div>

        <div className="gz-rv-photos">
          {photos.map((p) => (
            <div className="gz-rv-photo" key={p.key}>
              <img src={p.preview} alt="Review upload" />
              <button type="button" aria-label="Remove photo" onClick={() => setPhotos((list) => list.filter((x) => x.key !== p.key))}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          ))}
          {Array.from({ length: uploading }).map((_, i) => (
            <div className="gz-rv-photo loading" key={`u${i}`}><span className="gz-os-spinner" /></div>
          ))}
          {photos.length + uploading < MAX_PHOTOS && (
            <button type="button" className="gz-rv-add" onClick={() => fileRef.current?.click()}>
              <FontAwesomeIcon icon={faCamera} />
              <span>Add photo</span>
            </button>
          )}
          <input ref={fileRef} type="file" accept="image/*" multiple className="d-none" onChange={(e) => { addPhotos(e.target.files); e.target.value = ""; }} />
        </div>
        <div className="gz-hint">Up to {MAX_PHOTOS} photos, {MAX_MB} MB each (optional).</div>

        <div className="gz-dialog-actions">
          <button type="button" className="gz-btn-ghost" onClick={onClose} disabled={sending}>Cancel</button>
          <button type="submit" className="gz-btn-cart" disabled={sending || !!uploading}>{sending ? "Submitting…" : "Submit review"}</button>
        </div>
      </form>
    </Modal>
  );
};

export default ReviewDialog;
