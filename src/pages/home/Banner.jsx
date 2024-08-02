import { Link } from "react-router-dom";
import banner from '../../assets/banner/hero-figure1.png';
import Container from "../../components/container/Container";

const Banner = () => {
    const scrollToPrice = () => {
        const priceSection = document.getElementById('price');
        priceSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section style={{ padding: '1.25rem' }}>
            <Container>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingTop: '3rem',
                    paddingBottom: '3rem',
                    '@media (min-width: 640px)': { paddingTop: '3rem', paddingBottom: '3rem' },
                    '@media (min-width: 1024px)': { paddingTop: '6rem', paddingBottom: '6rem', flexDirection: 'row', justifyContent: 'space-between' }
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        borderRadius: '0.125rem',
                        '@media (min-width: 1024px)': { textAlign: 'left', maxWidth: '28rem' },
                        '@media (min-width: 1280px)': { maxWidth: '32rem' }
                    }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '700', '@media (min-width: 640px)': { fontSize: '3rem' } }}>
                            Unleash the Power of{" "}
                            <span style={{ color: '#1D4ED8' }}>Perfectly</span> Executed Events
                        </h1>
                        <p style={{
                            marginTop: '1.5rem',
                            marginBottom: '2rem',
                            fontSize: '1.125rem',
                            '@media (min-width: 640px)': { marginBottom: '3rem' },
                            '@media (min-width: 768px)': { display: 'none' }
                        }}>
                            Simplify event planning and booking with our seamless solutions.
                            <br style={{ display: 'none', '@media (min-width: 768px)': { display: 'inline' } }} />
                            From corporate gatherings to personal celebrations, we transform
                            your vision into memorable experiences.
                        </p>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            '@media (min-width: 1024px)': { justifyContent: 'flex-start' }
                        }}>
                            <button
                                onClick={scrollToPrice}
                                style={{
                                    padding: '0.75rem 1.25rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    borderRadius: '0.375rem',
                                    backgroundColor: '#1D4ED8',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                Get Started
                            </button>
                            <Link
                                to="/contact"
                                style={{
                                    padding: '0.75rem 1.25rem',
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    borderRadius: '0.375rem',
                                    border: '2px solid #1D4ED8',
                                    color: '#1D4ED8',
                                    textDecoration: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem',
                        marginTop: '2rem',
                        height: '18rem',
                        '@media (min-width: 640px)': { height: '20rem' },
                        '@media (min-width: 1024px)': { height: '24rem' },
                        '@media (min-width: 1280px)': { height: '28rem' },
                        '@media (min-width: 1536px)': { height: '32rem' }
                    }}>
                        <img
                            src={banner}
                            alt=""
                            style={{ objectFit: 'contain', height: '18rem', '@media (min-width: 768px)': { width: '31.25rem', height: '31.25rem' } }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
