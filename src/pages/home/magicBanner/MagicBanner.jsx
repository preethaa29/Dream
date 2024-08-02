import { useState } from "react";
import img4 from "./image/img4.png";
import { Link } from "react-router-dom";

const MagicBanner = () => {
  const [currentSlide] = useState(0);
  const [isNext] = useState(false);
  const [isPrev] = useState(false);

  return (
    <div style={{ marginTop: '1rem', marginBottom: '3rem' }}>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div>
          {[img4].map((img, index) => (
            <div
              key={index}
              style={{
                display: currentSlide === index ? "block" : "none",
                position: 'relative',
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  filter: 'brightness(0.60)',
                  width: '100%',
                  height: 'auto',
                }}
              />

              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '10%',  // Align content to the left
                  transform: 'translateY(-50%)',
                  color: '#f1f5f9',
                  padding: '1rem',
                  width: '100%',
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '4.25rem',
                      marginLeft: '0.25rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      color: '#cbd5e1',
                      marginBottom: '1.5rem',  // Reduced margin to bring "Book Now!" closer
                    }}
                  >
                    Dream Craft Events
                  </p>
                </div>
                <div style={{ marginBottom: '1rem' }}>  {/* Reduced margin to bring "Book Now!" closer */}
                  <h1
                    style={{
                      fontSize: '2.875rem',
                      lineHeight: '1.25rem',
                      fontWeight: 800,
                      color: '#cbd5e1',
                      marginBottom: '1rem',  // Reduced margin
                    }}
                  >
                    Our Events
                  </h1>
                </div>
                <div style={{ marginBottom: '1rem' }}> {/* Adjusted marginBottom to bring "Book Now!" closer */}
                  <h1
                    style={{
                      textShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.25)',
                      color: '#84cc16',
                      fontSize: '3rem',
                      lineHeight: 1,
                      fontWeight: 700,
                      marginBottom: '1rem',  // Adjust this value as needed
                    }}
                  >
                    Book Now!
                  </h1>
                </div>
                <div
                  style={{
                    width: '66.666667%',
                    margin: '0 auto',
                    display: 'none', // This would be overridden in larger screens
                  }}
                >
                  <p style={{ color: '#cbd5e1' }}>
                    From elegant soirées to lively gatherings, we curate diverse events for every occasion, guaranteeing a memorable experience for all guests.
                  </p>
                </div>
                <Link to="/events">
                  <button
                    type="button"
                    style={{
                      marginTop: '1rem',
                      padding: '0.5rem 1.75rem',
                      fontSize: '1.125rem',
                      lineHeight: '1.75rem',
                      fontWeight: 500,
                      color: '#ffffff',
                      backgroundImage: 'linear-gradient(to right, #b91c1c, #db2777)',
                      borderRadius: '0.5rem',
                      transition: 'background-image 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundImage = 'linear-gradient(to bottom right, #b91c1c, #db2777)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundImage = 'linear-gradient(to right, #b91c1c, #db2777)';
                    }}
                  >
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagicBanner;
