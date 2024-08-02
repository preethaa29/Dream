import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './layout/Main/Main';
import About from './pages/about/About';
import Events from './pages/allEvents/Events';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Booking from './pages/bookings/Booking';
import Contact from './pages/contact/Contact';
import CustomEvent from './pages/customEvent/CustomEvent';
import EventDetails from './pages/eventDetails/EventDetails';
import Home from './pages/home/Home';
import PaymentPage from './pages/payment/PaymentPage';
import AllServices from './pages/bookings/allServices/AllServices';
import PaymentSuccess from './pages/payment/PaymentSuccess';
import Payment from './pages/payment/Payment';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="booking" element={<Booking />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="events" element={<Events />} />
          <Route path="event-details/:_id" element={<EventDetails />} />
          <Route path="services" element={<AllServices />} />
          <Route path="create-your-event" element={<CustomEvent />} />
          <Route path="payment/:_id" element={<PaymentPage />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="payment/success/:tranId" element={<PaymentSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
