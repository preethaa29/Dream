import { useState } from 'react';
import { CiLocationOn, CiUser, CiPlay1 } from 'react-icons/ci';
import { FaListAlt, FaCalendarAlt, FaUsers, FaCamera } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const CustomEvent = () => {
    const [eventType, setEventType] = useState('');
    const [date, setDate] = useState('');
    const [location, setEventLocation] = useState('');
    const [guestCount, setEventGuestCount] = useState('Select guests count');
    const [photography, setPhotography] = useState('select');
    const [catering, setCatering] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const axios = useAxiosPublic();
    const { user } = useAuth();

    let totalCost = 0;

    if (guestCount === '1-250') {
        totalCost += 450;
    } else if (guestCount === '1-500') {
        totalCost += 850;
    } else if (guestCount === '1-1000') {
        totalCost += 1150;
    }

    if (photography === 'Photography and Videography') {
        totalCost += 200;
    } else if (photography === 'Photography') {
        totalCost += 100;
    } else if (photography === 'Videography') {
        totalCost += 150;
    }

    if (catering === 'yes') {
        totalCost += 300;
    }

    const handleInputDate = (e) => setDate(e.target.value);
    const handleEventType = (e) => setEventType(e.target.value);
    const handleInputLocation = (e) => setEventLocation(e.target.value);
    const handleGuestCount = (e) => setEventGuestCount(e.target.value);
    const handleInputPhotography = (e) => setPhotography(e.target.value);
    const handleCatering = (e) => setCatering(e.target.value);
    const handleSpecialRequest = (e) => setSpecialRequest(e.target.value);

    const handleShowModal = () => {
        const userConfirmed = window.confirm('Press "OK" to Confirm');
    
        if (userConfirmed) {
            navigate('/');
        }
    };

    const handleBooking = async (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const fullName = `${firstName} ${lastName}`;
        const email = e.target.email.value;
        const phone = e.target.phone.value;

       

        // Show confirmation dialog before submission
      
    };

    return (
        <div>
            <div style={{
                backgroundImage: "url('https://i.ibb.co/YbNwSg0/birthday.jpg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "6px",
                backgroundPosition: 'center',
                height: "400px"
            }}>
                <div style={{
                    height: "400px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    position: "relative"
                }}>
                    <div style={{
                        position: "absolute",
                        top: "60px",
                        left: "8px",
                        maxWidth: "calc(100% - 16px)"
                    }}>
                        <h1 style={{ fontSize: "3rem", color: "white", fontWeight: "bold" }}>Create Your Event</h1>
                        <p style={{ fontSize: "1.25rem", marginTop: "0.5rem", display: "flex", alignItems: "center", color: "white" }}>
                            Home
                            <CiPlay1 style={{ color: "#ec4899", margin: "0 0.5rem" }} />
                            <span style={{ color: "#ef4444" }}>Create your event</span>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ maxWidth: "1200px", margin: "1.5rem auto" }}>
                <h2 style={{ fontSize: "1.875rem", fontWeight: "600" }}>Let us know about your event</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "3rem", marginTop: "2rem" }}>
                    <div style={{ gridColumn: "span 3", backgroundColor: "white", borderRadius: "0.5rem", padding: "1rem" }}>
                        <div>
                            <div style={{
                                border: "1px solid #d1d5db",
                                borderRadius: "0.5rem",
                                backgroundColor: "white",
                                padding: "1rem"
                            }}>
                                <h2 style={{ fontSize: "1rem", fontWeight: "600", color: "#1f2937" }}>Fill up this form</h2>
                                <form onSubmit={handleBooking} style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "2rem" }}>
                                    <div style={{ gridColumn: "span 3" }}>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}>Event Type</label>
                                        <div style={{ marginTop: "0.5rem" }}>
                                            <select onChange={handleEventType} style={{
                                                display: "block",
                                                width: "100%",
                                                borderRadius: "0.375rem",
                                                border: "1px solid #d1d5db",
                                                padding: "0.375rem 0.75rem",
                                                color: "#1f2937",
                                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                                outline: "none",
                                                fontSize: "0.875rem",
                                                textAlign: "left"
                                            }} name="type" required>
                                                <option value="" disabled selected>Select event type</option>
                                                <option value="Wedding">Wedding</option>
                                                <option value="Birthday">Birthday</option>
                                                <option value="Anniversary">Anniversary</option>
                                                <option value="Arts and Culture Festival">Arts and Culture Festival</option>
                                                <option value="Corporate Event">Corporate Event</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ gridColumn: "span 3" }}>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}>Date</label>
                                        <div style={{ marginTop: "0.5rem" }}>
                                            <input onChange={handleInputDate} type="date" name="date" style={{
                                                display: "block",
                                                width: "100%",
                                                borderRadius: "0.375rem",
                                                border: "1px solid #d1d5db",
                                                padding: "0.375rem 0.75rem",
                                                color: "#1f2937",
                                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                                outline: "none",
                                                fontSize: "0.875rem"
                                            }} required />
                                        </div>
                                    </div>

                                    <div style={{ gridColumn: "span 3" }}>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}>Location</label>
                                        <div style={{ marginTop: "0.5rem", position: "relative" }}>
                                            <input onChange={handleInputLocation} id="location" placeholder='Type your event location' name="location" type="text" style={{
                                                display: "block",
                                                width: "100%",
                                                borderRadius: "0.375rem",
                                                border: "1px solid #d1d5db",
                                                padding: "0.375rem 0.75rem",
                                                color: "#1f2937",
                                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                                outline: "none",
                                                fontSize: "0.875rem",
                                                paddingLeft: "2rem"
                                            }} required />
                                            <CiLocationOn style={{ position: "absolute", top: "0.5rem", left: "0.5rem" }} />
                                        </div>
                                    </div>

                                    <div style={{ gridColumn: "span 3" }}>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}>Total Guests</label>
                                        <div style={{ marginTop: "0.5rem", position: "relative" }}>
                                            <select onChange={handleGuestCount} name="guests" style={{
                                                display: "block",
                                                width: "100%",
                                                borderRadius: "0.375rem",
                                                border: "1px solid #d1d5db",
                                                padding: "0.375rem 0.75rem",
                                                color: "#1f2937",
                                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                                outline: "none",
                                                fontSize: "0.875rem",
                                                paddingLeft: "2rem"
                                            }} required>
                                                <option value="Select guests count" disabled selected>Select guests count</option>
                                                <option value="1-250">1-250</option>
                                                <option value="1-500">1-500</option>
                                                <option value="1-1000">1-1000</option>
                                            </select>
                                            <CiUser style={{ position: "absolute", top: "0.5rem", left: "0.5rem" }} />
                                        </div>
                                    </div>

                                    <div style={{ gridColumn: "span 3" }}>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}>Photography and Videography</label>
                                        <div style={{ marginTop: "0.5rem" }}>
                                            <select onChange={handleInputPhotography} style={{
                                                display: "block",
                                                width: "100%",
                                                borderRadius: "0.375rem",
                                                border: "1px solid #d1d5db",
                                                padding: "0.375rem 0.75rem",
                                                color: "#1f2937",
                                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                                outline: "none",
                                                fontSize: "0.875rem"
                                            }} name="photography" required>
                                                <option value="select" disabled selected>Select</option>
                                                <option value="Photography and Videography">Photography and Videography</option>
                                                <option value="Photography">Photography</option>
                                                <option value="Videography">Videography</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ gridColumn: "span 3" }}>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}>Catering Services</label>
                                        <div style={{ marginTop: "0.5rem" }}>
                                            <select onChange={handleCatering} style={{
                                                display: "block",
                                                width: "100%",
                                                borderRadius: "0.375rem",
                                                border: "1px solid #d1d5db",
                                                padding: "0.375rem 0.75rem",
                                                color: "#1f2937",
                                                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                                outline: "none",
                                                fontSize: "0.875rem"
                                            }} name="catering" required>
                                                <option value="" disabled selected>Select</option>
                                                <option value="yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ gridColumn: "span 6" }}>
                                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: "500", color: "#1f2937" }}>Any Special Request</label>
                                        <textarea onChange={handleSpecialRequest} id="request" rows={6} placeholder='Write here if you have any special request' name="request" style={{
                                            display: "block",
                                            width: "100%",
                                            borderRadius: "0.375rem",
                                            border: "1px solid #d1d5db",
                                            padding: "0.375rem 0.75rem",
                                            color: "#1f2937",
                                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                            outline: "none",
                                            fontSize: "0.875rem",
                                            paddingLeft: "1rem"
                                        }} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        gridColumn: "span 2",
                        padding: "1rem",
                        backgroundColor: "white",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db"
                    }}>
                        <div style={{ width: "100%", borderRadius: "0.5rem", padding: "3rem" }}>
                            <h5 style={{ marginBottom: "1rem", fontSize: "1.25rem", fontWeight: "500", color: "#6b7280" }}>Estimated Cost</h5>
                            <div style={{ display: "flex", alignItems: "baseline", color: "#1f2937" }}>
                                <span style={{ fontSize: "1.875rem", fontWeight: "600" }}>Rs. </span>
                                <span style={{ fontSize: "3rem", fontWeight: "800", marginLeft: "0.25rem" }}>{totalCost}</span>
                                <span style={{ fontSize: "1.25rem", fontWeight: "400", marginLeft: "0.25rem" }}>/day</span>
                            </div>

                            {user ? (
                                totalCost > 0 ? (
                                    <button onClick={handleShowModal} type="button" style={{
                                        backgroundColor: "#dc2626",
                                        color: "white",
                                        fontWeight: "500",
                                        borderRadius: "0.5rem",
                                        padding: "0.625rem 1.25rem",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        width: "100%",
                                        fontSize: "1.25rem",
                                        textAlign: "center"
                                    }}>Request Now</button>
                                ) : (
                                    <button disabled type="button" style={{
                                        backgroundColor: "#9ca3af",
                                        color: "white",
                                        fontWeight: "500",
                                        borderRadius: "0.5rem",
                                        padding: "0.625rem 1.25rem",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        width: "100%",
                                        fontSize: "1.25rem",
                                        textAlign: "center"
                                    }}>Request Now</button>
                                )
                            ) : (
                                <Link to='/login'>
                                    <button type="button" style={{
                                        backgroundColor: "rgb(185 28 28)",
                                        color: "white",
                                        fontWeight: "500",
                                        borderRadius: "0.5rem",
                                        padding: "0.625rem 1.25rem",
                                        display: "inline-flex",
                                        justifyContent: "center",
                                        width: "100%",
                                        fontSize: "1.25rem",
                                        textAlign: "center"
                                    }}>Login to Request</button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomEvent;
