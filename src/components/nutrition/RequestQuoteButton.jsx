export default function RequestQuoteButton({
  className = "",
  style = {},
  text = "Request a Quote",
  subject = "GLS Inquiry",
}) {
  const handleOpen = () => {
    // Store subject on window for modal to access
    window.quoteSubject = subject;
    // Dispatch custom event to open the modal
    window.dispatchEvent(new Event("open-quote"));
  };

  return (
    <button
      onClick={handleOpen}
      className={` ${className}`}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      style={{
        transition: "transform 0.2s",
        ...style,
      }}
    >
      {text}
    </button>
  );
}
