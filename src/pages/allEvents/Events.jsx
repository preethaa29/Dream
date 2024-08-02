/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TbCategory2 } from "react-icons/tb";
import loadingAnimation from "../../assets/animation/animation.json";
import Container from "../../components/container/Container";
import EventBanner from "./EventBanner";
import EventCard from "./EventCard";

const Events = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await fetch(
            "https://dream-craft-server.vercel.app/events"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    };

    const {
        data: allEvents = [],
        isLoading,
        error,
    } = useQuery({
        queryKey: ["allEvents"],
        queryFn: fetchEvents,
    });

    useEffect(() => {
        setFilteredEvents(allEvents || []);
    }, [allEvents]);

    const technology = allEvents.filter(item => item.category === 'technology');
    const health = allEvents.filter(item => item.category === 'health');
    const business = allEvents.filter(item => item.category === 'business');
    const others = allEvents.filter(item => item.category === 'others');

    const handleSearch = (e) => {
        e.preventDefault();
        const searchResult = allEvents?.filter((event) =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEvents(searchResult);
    };

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

    return (
        <div>
            <EventBanner />
            <Container>
                <h2
                    style={{
                        fontSize: '2rem', // Tailwind text-3xl
                        marginTop: '2.5rem', // Tailwind mt-10
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: '#4B5563', // Tailwind text-secondary
                        textTransform: 'uppercase',
                    }}
                >
                    All Events
                </h2>
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: '1.5rem', // Tailwind gap-6
                        marginTop: '2.5rem', // Tailwind my-10
                    }}
                >
                    <div
                        style={{
                            flex: '1 1 calc(33.333% - 1.5rem)', // Three cards per row with spacing
                            maxWidth: 'calc(33.333% - 1.5rem)', // Adjust for gap
                        }}
                    >
                        <form
                            onSubmit={handleSearch}
                            style={{
                                display: 'flex',
                                backgroundColor: '#f9fafb', // Tailwind bg-gray-50
                                padding: '1.25rem', // Tailwind p-5
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Tailwind shadow-md
                                borderRadius: '0.375rem', // Tailwind rounded-md
                            }}
                        >
                            <input
                                type="text"
                                name="search"
                                placeholder="Search by name"
                                style={{
                                    width: '100%',
                                    padding: '0.75rem', // Tailwind px-4 py-3
                                    border: 'none',
                                    borderRadius: '1.5rem', // Tailwind rounded-3xl
                                    backgroundColor: '#e5e7eb', // Tailwind bg-gray-200
                                    color: 'black',
                                    outline: 'none',
                                }}
                                onInput={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: 'rgb(190 18 60)', // Tailwind bg-primary
                                    color: 'white',
                                    padding: '0.75rem 2rem', // Tailwind py-3 px-8
                                    borderRadius: '1.5rem', // Tailwind rounded-3xl
                                    borderTopLeftRadius: '0', // Tailwind rounded-tl-none
                                    marginLeft: '-2rem', // Tailwind -ml-8
                                    fontSize: '1.5rem', // Tailwind text-2xl
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                }}
                            >
                                <FaSearch />
                            </button>
                        </form>

                        <div
                            style={{
                                backgroundColor: '#f9fafb', // Tailwind bg-gray-50
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Tailwind shadow-md
                                borderRadius: '0.375rem', // Tailwind rounded-md
                                marginTop: '2rem', // Tailwind mt-8
                            }}
                        >
                            <div style={{ paddingTop: '1.5rem' }}>
                                <span
                                    style={{
                                        backgroundColor: 'rgb(190 18 60)', // Tailwind bg-primary
                                        display: 'inline-flex',
                                        gap: '0.5rem', // Tailwind gap-2
                                        alignItems: 'center',
                                        color: 'white',
                                        fontSize: '1.25rem', // Tailwind text-xl
                                        fontWeight: 'bold',
                                        padding: '1.25rem', // Tailwind p-5
                                        borderTopRightRadius: '0.375rem', // Tailwind rounded-r-xl
                                    }}
                                >
                                    <TbCategory2 /> Category
                                </span>
                            </div>
                            <div style={{ marginTop: '0.75rem' }}>
                                <button
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '1.25rem', // Tailwind p-5
                                        fontSize: '1.25rem', // Tailwind text-xl
                                        borderBottom: '1px solid #e5e7eb', // Tailwind border-b
                                        backgroundColor: 'transparent',
                                        color: '#4B5563', // Tailwind text-secondary
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setFilteredEvents(allEvents)}
                                >
                                    All
                                </button>
                                <button
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '1.25rem', // Tailwind p-5
                                        fontSize: '1.25rem', // Tailwind text-xl
                                        borderBottom: '1px solid #e5e7eb', // Tailwind border-b
                                        backgroundColor: 'transparent',
                                        color: '#4B5563', // Tailwind text-secondary
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setFilteredEvents(technology)}
                                >
                                    Technology
                                </button>
                                <button
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '1.25rem', // Tailwind p-5
                                        fontSize: '1.25rem', // Tailwind text-xl
                                        borderBottom: '1px solid #e5e7eb', // Tailwind border-b
                                        backgroundColor: 'transparent',
                                        color: '#4B5563', // Tailwind text-secondary
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setFilteredEvents(health)}
                                >
                                    Health
                                </button>
                                <button
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '1.25rem', // Tailwind p-5
                                        fontSize: '1.25rem', // Tailwind text-xl
                                        borderBottom: '1px solid #e5e7eb', // Tailwind border-b
                                        backgroundColor: 'transparent',
                                        color: '#4B5563', // Tailwind text-secondary
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setFilteredEvents(business)}
                                >
                                    Business
                                </button>
                                <button
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        textAlign: 'left',
                                        padding: '1.25rem', // Tailwind p-5
                                        fontSize: '1.25rem', // Tailwind text-xl
                                        backgroundColor: 'transparent',
                                        color: '#4B5563', // Tailwind text-secondary
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => setFilteredEvents(others)}
                                >
                                    Others
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Event Cards */}
                    <div
                        style={{
                            flex: '1 1 66.666%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            gap: '1.5rem', // Tailwind gap-6
                        }}
                    >
                        {filteredEvents?.slice(0, 9).map((event) => (
                            <div
                                key={event._id}
                                style={{
                                    flex: '1 1 calc(33.333% - 1.5rem)', // Three cards per row
                                    maxWidth: 'calc(33.333% - 1.5rem)', // Adjust for gap
                                }}
                            >
                                <EventCard event={event} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Events;
