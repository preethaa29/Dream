import { FaCalendarAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import Container from "../../../components/container/Container";
import { AiOutlineFieldTime } from "react-icons/ai";
import { IoTicket } from "react-icons/io5";
import organizer from "../../../assets/Organizer/organizer.jpg";
import customimg from "../../home/magicBanner/image/img3.png";

const AllServices = () => {
  return (
    <Container>
      <h3 style={{
        marginTop: '2rem', 
        marginBottom: '1.25rem', 
        textAlign: 'center', 
        textTransform: 'uppercase', 
        color: '#D32F2F', 
        fontWeight: '800', 
        fontSize: '1.875rem'
      }}>
        Our Services
      </h3>
      <div style={{
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '2rem', 
        margin: '0.75rem auto', 
        maxWidth: '1200px', // Adjust to ensure proper alignment and spacing
        '@media(min-width: 640px)': { 
          margin: '2rem auto' 
        }
      }}>
        {/* card 1 */}
        <div style={{
          borderRadius: '0.375rem', 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
          transform: 'scale(1)',
          ':hover': { 
            transform: 'scale(1.05)', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
          },
          backgroundColor: '#FFF',
          flex: '1 1 calc(50% - 1rem)', // Make sure each card takes up half of the container minus the gap
          maxWidth: 'calc(50% - 1rem)', // Ensure no overflow
          '@media(min-width: 1024px)': { 
            flex: '1 1 calc(33.33% - 1.5rem)',
            maxWidth: 'calc(33.33% - 1.5rem)'
          }
        }}>
          <div style={{
            borderRadius: '0.375rem 0.375rem 0 0',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            height: '15rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img
              src={customimg}
              alt=""
              style={{
                borderRadius: '0.375rem 0.375rem 0 0',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s',
                transform: 'scale(1)',
                ':hover': { 
                  transform: 'scale(1.10)' 
                }
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              background: 'linear-gradient(to right, #F472B6, #EC4899, #DB2777)',
              color: '#FFF',
              fontWeight: '600',
              borderTopRightRadius: '0.375rem',
              padding: '0.75rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <AiOutlineFieldTime /> Order Now
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h2 style={{
              padding: '0.25rem',
              textAlign: 'center',
              fontSize: '1.5rem',
              marginTop: '0.5rem',
              fontWeight: '600',
              color: '#D32F2F',
              textTransform: 'capitalize'
            }}>
              Craft Your Desired Events
            </h2>
            <p style={{
              margin: '0.75rem 0',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: '#D32F2F',
              fontWeight: '500'
            }}>
              Create unforgettable experiences with custom-designed events tailored to your unique vision and preferences.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/create-your-event">
                <button
                  type="button"
                  style={{
                    color: '#FFF',
                    background: 'linear-gradient(to right, #F472B6, #EC4899, #DB2777)',
                    fontWeight: '500',
                    borderRadius: '0.375rem',
                    fontSize: '1rem',
                    padding: '0.625rem 1.25rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                    ':hover': { 
                      background: 'linear-gradient(to bottom right, #EC4899, #F472B6)' 
                    },
                    ':focus': { 
                      outline: 'none', 
                      boxShadow: '0 0 0 4px rgba(244, 114, 182, 0.3)' 
                    }
                  }}
                >
                  Order for a Custom Event
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 1 end */}
        
        {/* card 2 */}
        <div style={{
          borderRadius: '0.375rem', 
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', 
          transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
          transform: 'scale(1)',
          ':hover': { 
            transform: 'scale(1.05)', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
          },
          backgroundColor: '#FFF',
          flex: '1 1 calc(50% - 1rem)', // Make sure each card takes up half of the container minus the gap
          maxWidth: 'calc(50% - 1rem)', // Ensure no overflow
          '@media(min-width: 1024px)': { 
            flex: '1 1 calc(33.33% - 1.5rem)',
            maxWidth: 'calc(33.33% - 1.5rem)'
          }
        }}>
          <div style={{
            borderRadius: '0.375rem 0.375rem 0 0',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            height: '15rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img
              src={organizer}
              alt=""
              style={{
                borderRadius: '0.375rem 0.375rem 0 0',
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                transition: 'transform 0.5s',
                transform: 'scale(1)',
                ':hover': { 
                  transform: 'scale(1.10)' 
                }
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              background: 'linear-gradient(to right, #06B6D4, #3B82F6)',
              color: '#FFF',
              fontWeight: '600',
              borderTopRightRadius: '0.375rem',
              padding: '0.75rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <IoTicket /> Book Ticket
            </div>
          </div>
          <div style={{ padding: '1.5rem' }}>
            <h2 style={{
              padding: '0.25rem',
              textAlign: 'center',
              fontSize: '1.5rem',
              marginTop: '0.5rem',
              fontWeight: '600',
              color: '#D32F2F',
              textTransform: 'capitalize'
            }}>
              Book Tickets for Premier Events
            </h2>
            <p style={{
              margin: '0.75rem 0',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: '#D32F2F',
              fontWeight: '500'
            }}>
              Easily reserve tickets for a variety of premier events, from concerts to conferences, ensuring seamless access to memorable experiences.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/events">
                <button
                  type="button"
                  style={{
                    color: '#FFF',
                    background: 'linear-gradient(to right, #06B6D4, #3B82F6)',
                    fontWeight: '500',
                    borderRadius: '0.375rem',
                    fontSize: '1rem',
                    padding: '0.625rem 1.25rem',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                    ':hover': { 
                      background: 'linear-gradient(to bottom right, #3B82F6, #06B6D4)' 
                    },
                    ':focus': { 
                      outline: 'none', 
                      boxShadow: '0 0 0 4px rgba(6, 182, 212, 0.3)' 
                    }
                  }}
                >
                  Book Ticket for Existing Events
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 end */}
      </div>
    </Container>
  );
};

export default AllServices;
