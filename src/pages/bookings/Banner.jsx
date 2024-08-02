import organizer from "../../assets/Organizer/organizer.jpg";

const Banner = () => {
    return (
        <section
            style={{
                backgroundImage: `url('${organizer}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                height: '100vh',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    <h2
                        style={{
                            fontSize: '5rem',
                            textAlign: 'center',
                            maxWidth: '64rem',
                            margin: '0 auto',
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: '1.2',
                        }}
                        className="md:text-7xl"
                    >
                        Make any Occasion Unforgettable with us!!!
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Banner;
