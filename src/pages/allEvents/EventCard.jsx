import { FaCalendarAlt, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BsDiagram3, BsTwitterX } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const { _id, title, image, date, location, seat } = event;

    const dateFormat = new Date(date);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = dateFormat.toLocaleDateString('en-US', options);

    return (
        <div
            style={{
                borderRadius: '0.375rem', // Tailwind rounded-md
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Tailwind shadow-lg
                transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
                backgroundColor: 'white',
                cursor: 'pointer',
                overflow: 'hidden',
                transform: 'scale(1)',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-0.125rem) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.backgroundColor = '#f3f4f6'; // Tailwind bg-gray-100
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.backgroundColor = 'white';
            }}
        >
            <div
                style={{
                    borderRadius: '0.375rem 0.375rem 0 0', // Tailwind rounded-t-md
                    height: '15rem', // Tailwind h-60
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <img
                    src={image}
                    alt={title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease-in-out',
                        borderRadius: '0.375rem 0.375rem 0 0', // Tailwind rounded-t-md
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.10)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div
                    style={{
                        backgroundColor: 'rgb(190 18 60)', // Dark pink color similar to a darker shade of bg-pink-700
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        padding: '0.75rem 1.5rem', // Tailwind px-6 py-3
                        color: 'white',
                        fontWeight: '600', // Tailwind font-semibold
                        borderTopRightRadius: '0.375rem', // Tailwind rounded-tr-md
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                    }}
                >
                    <BsDiagram3 /> {seat} Seat
                </div>
            </div>
            <div
                style={{
                    padding: '1.5rem', // Tailwind px-4 py-6
                }}
            >
                <h2
                    style={{
                        fontSize: '1.5rem', // Tailwind text-2xl
                        marginTop: '0.5rem', // Tailwind mt-2
                        fontWeight: '600', // Tailwind font-semibold
                        color: '#4B5563', // Tailwind text-secondary
                    }}
                >
                    {title}
                </h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '1rem', // Tailwind mt-4
                    }}
                >
                    <Link
                        to={`/event-details/${_id}`}
                        style={{
                            color: 'rgb(190 18 60)', // Tailwind text-primary
                            fontWeight: '600', // Tailwind font-semibold
                            textDecoration: 'none',
                            
                        
                        }}
                    >
                        Event Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
