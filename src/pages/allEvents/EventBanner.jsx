import { Link } from "react-router-dom";
import { IoPlayOutline } from "react-icons/io5";

const EventBanner = () => {
    return (
        <section
            style={{
                backgroundImage: `url('https://www.gqrgm.com/wp-content/uploads/2019/03/6-Ways-Your-Business-Can-Benefit-From-Hosting-Corporate-Events.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center' // Center content horizontally
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '0 1rem' // Ensure some horizontal padding
                }}
            >
                <div
                    style={{
                        marginLeft: '0', // Removed negative margin
                        paddingLeft: '1rem' // Padding for spacing
                    }}
                >
                    <h2
                        style={{
                            fontSize: '3rem', // Tailwind text-5xl
                            color: 'white',
                            fontWeight: 'bold',
                            marginBottom: '0.75rem' // Margin bottom for spacing
                        }}
                    >
                        Events
                    </h2>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '1.25rem', // Tailwind text-xl
                            fontWeight: '500', // Tailwind font-medium
                            color: '#3B82F6' // Tailwind text-primary (blue-500)
                        }}
                    >
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
                        <IoPlayOutline style={{ color: 'white' }} />
                        <Link to="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventBanner;
