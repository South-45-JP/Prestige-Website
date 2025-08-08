
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-container">
      <h1>Checkout & Confirmation</h1>
      <p>Review your information below before finalizing your booking.</p>

      {/* Summary section placeholder */}
      <div className="summary-card">
        <h2>Your Booking Summary</h2>
        <p><strong>Name:</strong> [Sample Name]</p>
        <p><strong>Email:</strong> [sample@email.com]</p>
        <p><strong>Service:</strong> Deep Cleaning</p>
        <p><strong>Date:</strong> April 28, 2025</p>
        <p><strong>Time:</strong> 2:00 PM</p>
      </div>

      {/* Payment placeholder */}
      <div className="payment-section">
        <h2>Payment</h2>
        <p>Online payment integration coming soon. You’ll be contacted to confirm payment after booking.</p>
      </div>

      <button className="confirm-btn">Confirm Booking</button>
    </div>
  );
}

export default Checkout;
