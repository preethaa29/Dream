import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Lottie from 'lottie-react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import loadingAnimation from "../../assets/animation/animation.json";
import Container from '../../components/container/Container';
import EventCard from '../allEvents/EventCard';

const PopularEvents = () => {
  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://dream-craft-server.vercel.app/events");
      return response.data; 
    } catch (error) {
      return error.message;
    }
  };

  const {
    data: events = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
        <Lottie
          animationData={loadingAnimation}
          width={500}
          height={350}
        />
      </div>
    );
  }

  if (error) {
    return <p>Error loading events: {error.message}</p>;
  }

  return (
    <div style={{ backgroundColor: '#E9F8F3B2', padding: '4rem 0' }}>
      <Container style={{ padding: '0 1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <div style={{ width: '25%' }}>
            <h1 style={{
              fontSize: '2.5rem', 
              color: '#050C26', 
              fontWeight: 'bold', 
              margin: '1.5rem 0', 
              textAlign: 'center'
            }}>
              Most <span style={{ color: '#007bff' }}><br />Popular<br />Events</span>
            </h1>
          </div>
          <div style={{ width: '75%' }}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {events?.slice(0, 5).map(event => (
                <SwiperSlide key={event._id}>
                  <EventCard event={event} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PopularEvents;
