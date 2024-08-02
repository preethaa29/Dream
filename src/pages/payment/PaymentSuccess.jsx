import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
    const { tranId } = useParams();

    return (
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
                <FaCheckCircle style={{ fontSize: '9rem', color: '#48bb78' }} />

                <h2 style={{ fontSize: '2rem', color: '#2d3748', marginTop: '12px', fontWeight: '600' }}>Transaction Completed Successfully</h2>
                <p style={{ fontSize: '1.25rem', textAlign: 'center', color: '#4a5568', fontWeight: '500', marginTop: '8px' }}>
                    Thank you for your payment <br />
                    Transaction Id: <span style={{ color: '#2d3748', fontWeight: 'bold' }}>{tranId}</span>
                </p>
            </div>
        </div>
    );
};

export default PaymentSuccess;
