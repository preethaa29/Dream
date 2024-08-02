import { useQuery } from '@tanstack/react-query';
import Lottie from 'lottie-react';
import { useState } from 'react';
import { CiLocationOn, CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import loadingAnimation from "../../assets/animation/animation.json";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const PaymentPage = () => {
  const params = useParams();
  const [ticketPrice, setTicketPrice] = useState(89);
  const [addMoreTicket, setAddMoreTicket] = useState(1);
  const taxes = ticketPrice * 0.10;
  const totalPrice = ticketPrice + taxes;
  const axios = useAxiosPublic();
  const { user } = useAuth();

  const ticketPriceHandle = () => {
    if (ticketPrice >= 159) {
      return;
    }
    setTicketPrice(ticketPrice + 70);
  };

  const ticketPriceHandle2 = () => {
    if (ticketPrice === 159) {
      setTicketPrice(ticketPrice - 70);
      return;
    }
  };

  const handleAddMoreTicket = () => {
    if (addMoreTicket < 5) {
      setAddMoreTicket(addMoreTicket + 1);
      if (ticketPrice === 89 || ticketPrice === 178 || ticketPrice === 267 || ticketPrice === 356) {
        setTicketPrice(ticketPrice + 89);
      } else if (ticketPrice === 159 || ticketPrice === 318 || ticketPrice === 477 || ticketPrice === 636) {
        setTicketPrice(ticketPrice + 159);
      }
    }
  };

  if (addMoreTicket >= 5) {
    Swal.fire({
      title: "Oops!",
      text: "You can't purchase more than 5 tickets",
      icon: "error"
    });
  }

  const handleRemoveMoreTicket = () => {
    if (addMoreTicket > 1) {
      setAddMoreTicket(addMoreTicket - 1);
      if (ticketPrice === 89 || ticketPrice === 178 || ticketPrice === 267 || ticketPrice === 356 || ticketPrice === 445) {
        setTicketPrice(ticketPrice - 89);
      } else if (ticketPrice === 159 || ticketPrice === 318 || ticketPrice === 477 || ticketPrice === 636 || ticketPrice === 795) {
        setTicketPrice(ticketPrice - 159);
      }
    }
  };

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
    queryKey: ["event"],
    queryFn: fetchEvents,
  });

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
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000);
  const orderID = `${event._id.slice(0, 6)}-${timestamp}-${randomNumber}`;

  const paymentInfo = {
    name: user?.name,
    email: user?.email,
    eventId: params._id,
    eventTitle: event.title,
    eventImage: event.image,
    eventDate: event.date,
    amount: totalPrice,
    currency: 'USD'
  };

  const handlePayment = () => {
    // Replace with window.location.href for redirection
    window.location.href = `/Payment?name=${encodeURIComponent(paymentInfo.name)}&email=${encodeURIComponent(paymentInfo.email)}&eventId=${encodeURIComponent(paymentInfo.eventId)}&eventTitle=${encodeURIComponent(paymentInfo.eventTitle)}&eventImage=${encodeURIComponent(paymentInfo.eventImage)}&eventDate=${encodeURIComponent(paymentInfo.eventDate)}&amount=${encodeURIComponent(paymentInfo.amount)}&currency=${encodeURIComponent(paymentInfo.currency)}`;
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}> {/* Reduced width */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        padding: '0 1rem',
        '@media (min-width: 768px)': { 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '1rem' 
        }
      }}>
        <div style={{ marginTop: '4rem', gridColumn: 'span 2', '@media (min-width: 768px)': { gridColumn: 'span 1' } }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '600' }}>Payment details</h2>
          <div style={{
            backgroundColor: '#f1f5f9',
            borderRadius: '0.375rem',
            border: '2px solid black',
            marginTop: '1.75rem',
            padding: '1.25rem',
            paddingBottom: '3rem'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Order Summary</h3>
            <h2 style={{ marginTop: '0.25rem' }}>Order id: <span style={{ fontWeight: '600', marginLeft: '0.5rem' }}>{orderID}</span></h2>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'space-between',
              marginTop: '1rem',
              '@media (min-width: 1024px)': {
                flexDirection: 'row',
                gap: '1.25rem'
              }
            }}>
              <img src={event.image} alt={event.title} style={{ width: '6rem' }} />
              <div>
                <h2>{event.title}</h2>
                <span style={{ fontWeight: '600' }}>x {addMoreTicket}</span>
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>${ticketPrice}</h2>
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem'
            }}>
              <h2>Taxes</h2>
              <p style={{ fontWeight: '600' }}>${taxes.toFixed(2)}</p>
            </div>
            <hr style={{ height: '1.6px', marginTop: '0.25rem', backgroundColor: '#6b7280' }} />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem'
            }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Total</h2>
              <p style={{ fontWeight: '600', fontSize: '1.5rem' }}>${totalPrice.toFixed(2)}</p>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
              <h2 style={{ fontSize: '1.125rem', color: '#4b5563', fontWeight: '600' }}>Buy more ticket</h2>
              <div style={{ display: 'flex', gap: '0.25rem' }}>
                <CiSquareMinus onClick={handleRemoveMoreTicket} style={{ fontSize: '1.875rem', cursor: 'pointer' }} />
                <input type="text" style={{ width: '1.75rem', textAlign: 'center' }} value={addMoreTicket} readOnly />
                <CiSquarePlus onClick={handleAddMoreTicket} style={{ fontSize: '1.875rem', cursor: 'pointer' }} />
              </div>
            </div>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {user ?
                <button
                  onClick={handlePayment}
                  style={{
                    backgroundColor: 'rgb(190 18 60)',
                    width: '100%',
                    borderRadius: '0.375rem',
                    padding: '0.5rem',
                    marginTop: '0.5rem',
                    color: 'white',
                    fontWeight: '500',
                    fontSize: '1.25rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Continue to secure payment
                </button>
                :
                <Link to='/login' style={{ width: '100%' }}>
                  <button
                    style={{
                      backgroundColor: 'rgb(190 18 60)',
                      width: '100%',
                      borderRadius: '0.375rem',
                      padding: '0.5rem',
                      marginTop: '0.5rem',
                      color: 'white',
                      fontWeight: '500',
                      fontSize: '1.25rem',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Login to Purchase
                  </button>
                </Link>}
              <Link to={`/event-details/${event._id}`}>
                <h3 style={{
                  marginTop: '0.75rem',
                  borderBottom: '2px solid black',
                  fontWeight: '600',
                  fontSize: '1.25rem'
                }}>Cancel payment</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
