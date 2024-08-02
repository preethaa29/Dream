import { useState, useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "../../assets/logo/dream-craft.png";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Contact = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState({ message: '', type: '' }); // Add state for notifications
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification({ message: '', type: '' });
      }, 10000); // Display notification for 3 seconds

      // Cleanup timeout if component unmounts before timeout is reached
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      setNotification({ message: "Please Log in first!", type: 'error' });
      return;
    }

    const info = { email, subject, message };

    axiosPublic.post('/contact', info)
      .then(res => {
        setNotification({ message: "Message sent successfully!", type: 'success' });
        window.location.href = '/'; // Redirect using window.location.href
      })
      .catch(err => {
        setNotification({ message: "Failed to send message.", type: 'error' });
      });
  };

  // Define styles for notifications
  const notificationStyles = {
    success: {
      backgroundColor: '#d4edda',
      color: '#155724',
      border: '1px solid #c3e6cb',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '10px',
    },
    error: {
      backgroundColor: '#f8d7da',
      color: '#721c24',
      border: '1px solid #f5c6cb',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '10px',
    },
  };

  return (
    <div>
      <h2 style={{ fontSize: '2.25rem', textAlign: 'center', fontWeight: '600', marginTop: '1.25rem', textDecoration: 'underline' }}>
        Contact Us
      </h2>
      
      {/* Render notification */}
      {notification.message && (
        <div style={notificationStyles[notification.type]}>
          {notification.message}
        </div>
      )}
      
      <div style={{ 
        marginTop: '2.5rem', 
        padding: '1.25rem', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        maxWidth: '80rem', 
        margin: 'auto', 
        color: '#000', 
      }}>
        <div style={{ width: '50%' }}>
          <img src={logo} alt="" style={{ width: '8rem' }} />
          <br></br>
          <hr style={{ width: '8rem' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>+6379872134</h2>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Book online or call</p>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>dreamcraft@gmail.com</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
              Send us an email or use contact form
            </p>
          </div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Our address</h2>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>
            24,1,HAL Old Airport Rd<br />  Bangalore<br /> 
          </p>
        </div>

        <div style={{ width: '50%', marginLeft: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>SEND US A MESSAGE</h2>
          <hr style={{ width: '13rem' }} />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}>
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                  backgroundColor: '#F9FAFB',
                  outline: 'none',
                  border: '1px solid #D1D5DB',
                  fontSize: '0.875rem',
                  borderRadius: '0.5rem',
                  width: '100%',
                  padding: '0.625rem',
                }}
                placeholder="name@dreamcraft.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                style={{
                  display: 'block',
                  padding: '0.75rem',
                  width: '100%',
                  fontSize: '0.875rem',
                  outline: 'none',
                  backgroundColor: '#F9FAFB',
                  borderRadius: '0.5rem',
                  border: '1px solid #D1D5DB',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                }}
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div style={{ gridColumn: 'span 2 / span 2' }}>
              <label
                htmlFor="message"
                style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '500' }}
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  display: 'block',
                  padding: '0.625rem',
                  width: '100%',
                  fontSize: '0.875rem',
                  outline: 'none',
                  backgroundColor: '#F9FAFB',
                  borderRadius: '0.5rem',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                  border: '1px solid #D1D5DB',
                }}
                placeholder="Leave a message..."
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#FFF',
                width: 'auto',
                margin: '0 auto',
                marginTop: '0.5rem',
                padding: '0.5rem',
                background: 'linear-gradient(to right, #B91C1C, #DB2777)',
                hover: 'linear-gradient(to bottom right, #DB2777, #B91C1C)',
                focus: 'none',
                ringColor: '#DB2777',
                shadow: 'rgba(255, 85, 85, 0.4) 0px 10px 15px -3px, rgba(255, 85, 85, 0.4) 0px 4px 6px -2px',
                borderRadius: '0.5rem',
                paddingLeft: '1.25rem',
                paddingRight: '1.25rem',
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
