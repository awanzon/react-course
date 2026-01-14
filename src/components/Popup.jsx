function Popup({ question, onClose }) {
  function confirm() {
    console.log("Confirm Clicked");
  }

  return (
    <div>
      <div className="popup">
        <span>{question}</span>
        <div className="popup__btns">
          <button className="popup__btn" onClick={confirm}>
            Confirm
          </button>
          <button
            className="popup__btn popup__btn--cancel"
            onClick={() => onClose()}
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop" onClick={() => onClose()}></div>
    </div>
  );
}

export default Popup;

// this is pop up component when you clicked a button.