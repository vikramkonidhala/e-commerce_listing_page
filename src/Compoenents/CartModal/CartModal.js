import './CartModal.css';

const CartModal = ({ show, handleClose, cartItems }) => {

  return (
    <>
      {show && (
        <div className="modal-backdrop">
          <div className="modal">
            <button className="close-button" onClick={handleClose}>×</button>
            <h2>Your Cart</h2>
            <h3 className="success-text">Congratulations <br /> Order Placed!</h3>
            <div className="image-wrapper">
              <img
                src="https://i.imghippo.com/files/Ins3V1729422381.png"
                alt="Plant Icon"
                className="image"
              />
            </div>
            <h4 className='cart-item-name'>{cartItems}</h4>
            <p className="message">
              Thank you for choosing Chaperone services.<br />
              We will soon get in touch with you!
            </p>
            <button className="continue-button" onClick={handleClose}>
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CartModal;
