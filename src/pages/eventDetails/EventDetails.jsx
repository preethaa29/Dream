import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { CiPlay1 } from "react-icons/ci";
import { IoTicketOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import loadingAnimation from "../../assets/animation/animation.json";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const params = useParams();
  const [filteredEvent, setFilteredEvent] = useState([]);

  const fetchEvents = async () => {
    const response = await fetch(
      `https://dream-craft-server.vercel.app/event/${params._id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data: event = [], isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const recentEvents = async () => {
    const response = await fetch(
      "https://dream-craft-server.vercel.app/events"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const { data: allEvents = [] } = useQuery({
    queryKey: ["allEvents"],
    queryFn: recentEvents,
  });

  useEffect(() => {
    const filteredRecentEvent = allEvents?.filter(event => event._id !== params._id);
    setFilteredEvent(filteredRecentEvent);
  }, [allEvents, params._id]);

  if (isLoading) {
    return (
      <Lottie
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '70%',
        }}
        animationData={loadingAnimation}
        width={500}
        height={350}
      />
    );
  }

  if (error) {
    return <p>Error loading events: {error.message}</p>;
  }

  const dateFormat = new Date(event.date);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = dateFormat.toLocaleDateString('en-US', options);

  return (
    <div>
      <div
        style={{
          backgroundImage: "url('https://i.ibb.co/VxZZKMK/banner-top.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: '6px',
          backgroundPosition: 'center',
          height: '500px',
        }}
      >
        <div style={{
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '8px',
            color: 'white',
            fontSize: '1.25rem',
            '@media (min-width: 768px)': {
              left: '36px',
            },
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: 'bold',
            }}>Event Details</h1>
            <p style={{
              fontSize: '1.25rem',
              marginTop: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <Link to='/events' style={{ textDecoration: 'underline', color: 'white' }}>
                Events
              </Link>
              <CiPlay1 style={{ color: '#ec4899' }} />
              <span style={{ color: '#ef4444' }}>Event Details</span>
            </p>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1.5rem',
        marginTop: '4rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        '@media (min-width: 1024px)': {
          gridTemplateColumns: 'repeat(7, 1fr)',
        },
      }}>
        <div style={{
          gridColumn: 'span 5',
          marginTop: '2rem', // Added space between the background image and the event image container
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img
              src={event.image}
              alt={event.title}
              style={{
                width: '80%', // Reduced width to 80%
                height: '18rem', // Reduced height from 24rem to 18rem
                objectFit: 'cover',
                borderRadius: '0.375rem',
                marginBottom: '1.5rem',
              }}
            />
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              backgroundColor: 'rgb(190 18 60)',
              color: 'white',
              padding: '0.5rem 1.25rem',
              borderRadius: '0.375rem',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: '1.25rem', fontWeight: '600' }}>Rs. </span>
              <span style={{ fontSize: '2rem', fontWeight: '600', letterSpacing: '-0.015em' }}>89</span>
              <span style={{ marginLeft: '0.25rem', fontWeight: '400' }}>/seat</span>
            </div>
            <Link to={`/payment/${params._id}`}>
              <button style={{
                backgroundColor: 'rgb(190 18 60)',
                padding: '0.5rem 1rem',
                fontSize: '1.5rem',
                width: '15rem',
                textAlign: 'center',
                color: 'white',
                borderRadius: '0.375rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none' // Ensure no underline on text
              }}>
                <IoTicketOutline style={{ fontSize: '1.875rem' }} />
                Get The Ticket
              </button>
            </Link>
          </div>

          <div style={{
            marginTop: '1.25rem',
          }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              maxWidth: '850px',
            }}>
              {event.title}
            </h2>
            <p style={{
              marginTop: '1.25rem',
              color: '#4B5563',
              lineHeight: '1.75rem',
              maxWidth: '850px',
            }}>
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
