import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentInfo = location.state?.paymentInfo;

  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    amount: paymentInfo?.amount || '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const validateForm = () => {
    const { cardNumber, expiryDate, cvv, cardholderName } = formData;
    const newErrors = {};

    if (cardNumber.length !== 16) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = 'Invalid date format';
    }
    if (cvv.length !== 3) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    if (!cardholderName) {
      newErrors.cardholderName = 'Cardholder name is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const transactionId = `TRANS_${new Date().getTime()}`;
      navigate(`/payment/success/${transactionId}`);
    }, 2000);
  };

  useEffect(() => {
    if (paymentInfo) {
      setFormData((prevData) => ({
        ...prevData,
        amount: paymentInfo.amount,
      }));
    }
  }, [paymentInfo]);

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto', backgroundColor: '#e0e0e0', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Payment Details</h2>
      <form onSubmit={handlePayment}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cardholderName">Cardholder Name:</label>
          <input
            type="text"
            id="cardholderName"
            value={formData.cardholderName}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.cardholderName && <p style={{ color: 'red' }}>{errors.cardholderName}</p>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            maxLength={16}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
          <div style={{ flex: '0 0 48%' }}>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.expiryDate && <p style={{ color: 'red' }}>{errors.expiryDate}</p>}
          </div>
          <div style={{ flex: '0 0 48%' }}>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              maxLength={3}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {errors.cvv && <p style={{ color: 'red' }}>{errors.cvv}</p>}
          </div>
        </div>
       
        <button
          type="submit"
          disabled={isProcessing}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            backgroundColor: isProcessing ? '#bbb' : '#4CAF50',
            color: '#fff',
            border: 'none',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
          }}
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
