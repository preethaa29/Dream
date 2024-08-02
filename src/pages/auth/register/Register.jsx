import { useState } from "react";
import { useForm } from "react-hook-form";
import { GoInfo } from "react-icons/go";
import { Link, useHref } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [notification, setNotification] = useState(null); // Manage notifications
    const homeUrl = useHref('/');
    const { signUp } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { firstname, lastname, email, password } = data;
        setNotification({ type: 'loading', message: 'User Signing Up...' });
        try {
            await signUp(firstname, lastname, email, password);
            setNotification({ type: 'success', message: 'Sign Up Successfully' });
            window.location.href = homeUrl;
        } catch (error) {
            setNotification({ type: 'error', message: error?.response?.data || 'Something went wrong!' });
        }
    };

    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh'
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '2.5rem',
                        borderRadius: '0.75rem',
                        width: '100%',
                        maxWidth: '24rem',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                                <h1 style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                                    Welcome back
                                </h1>
                                <small style={{ color: '#9CA3AF' }}>
                                    Create an account to start using Dream Craft
                                </small>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.5rem'
                            }}>
                                <div>
                                    <label
                                        htmlFor="firstname"
                                        style={{
                                            display: 'block',
                                            marginBottom: '0.25rem',
                                            color: '#4B5563',
                                            fontSize: '0.875rem',
                                            fontWeight: '500'
                                        }}
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        {...register("firstname", {
                                            required: "Firstname is Required",
                                        })}
                                        style={{
                                            width: '100%',
                                            borderRadius: '0.5rem',
                                            border: `1px solid ${errors.firstname ? '#EF4444' : '#E5E7EB'}`,
                                            backgroundColor: 'transparent',
                                            padding: '0.5rem 0.75rem',
                                            outline: 'none',
                                            color: '#4B5563'
                                        }}
                                        placeholder="FirstName"
                                    />
                                    {errors.firstname && (
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            paddingTop: '0.25rem',
                                            color: '#EF4444'
                                        }}>
                                            <GoInfo />
                                            {errors.firstname.message}
                                        </span>
                                    )}
                                </div>
                                <div>
                                    <label
                                        htmlFor="lastname"
                                        style={{
                                            display: 'block',
                                            marginBottom: '0.25rem',
                                            color: '#4B5563',
                                            fontSize: '0.875rem',
                                            fontWeight: '500'
                                        }}
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        {...register("lastname", {
                                            required: "Lastname is Required",
                                        })}
                                        style={{
                                            width: '100%',
                                            borderRadius: '0.5rem',
                                            border: `1px solid ${errors.lastname ? '#EF4444' : '#E5E7EB'}`,
                                            backgroundColor: 'transparent',
                                            padding: '0.5rem 0.75rem',
                                            outline: 'none',
                                            color: '#4B5563'
                                        }}
                                        placeholder="LastName"
                                    />
                                    {errors.lastname && (
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            paddingTop: '0.25rem',
                                            color: '#EF4444'
                                        }}>
                                            <GoInfo />
                                            {errors.lastname.message}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.25rem',
                                        color: '#4B5563',
                                        fontSize: '0.875rem',
                                        fontWeight: '500'
                                    }}
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    {...register("email", {
                                        required: "Email is Required",
                                    })}
                                    style={{
                                        width: '100%',
                                        borderRadius: '0.5rem',
                                        border: `1px solid ${errors.email ? '#EF4444' : '#E5E7EB'}`,
                                        backgroundColor: 'transparent',
                                        padding: '0.5rem 0.75rem',
                                        outline: 'none',
                                        color: '#4B5563'
                                    }}
                                    placeholder="Enter Email Address"
                                />
                                {errors.email && (
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        paddingTop: '0.25rem',
                                        color: '#EF4444'
                                    }}>
                                        <GoInfo />
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div style={{ position: 'relative' }}>
                                <label
                                    htmlFor="password"
                                    style={{
                                        display: 'block',
                                        marginBottom: '0.25rem',
                                        color: '#4B5563',
                                        fontSize: '0.875rem',
                                        fontWeight: '500'
                                    }}
                                >
                                    Password
                                </label>
                                <input
                                    type={passwordShow ? "text" : "password"}
                                    id="password"
                                    {...register("password", {
                                        required: "Password is Required",
                                    })}
                                    style={{
                                        width: '100%',
                                        borderRadius: '0.5rem',
                                        border: `1px solid ${errors.password ? '#EF4444' : '#E5E7EB'}`,
                                        backgroundColor: 'transparent',
                                        padding: '0.5rem 0.75rem',
                                        outline: 'none',
                                        color: '#4B5563'
                                    }}
                                    placeholder="Enter Password"
                                />
                                <span
                                    onClick={() => setPasswordShow(!passwordShow)}
                                    style={{
                                        position: 'absolute',
                                        top: '2.375rem',
                                        right: '0.75rem',
                                        color: '#6B7280',
                                        cursor: 'pointer',
                                        userSelect: 'none'
                                    }}
                                >
                                    {passwordShow ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                            <line
                                                x1="1"
                                                y1="1"
                                                x2="23"
                                                y2="23"
                                            ></line>
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    )}
                                </span>
                                {errors.password && (
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.25rem',
                                        paddingTop: '0.25rem',
                                        color: '#EF4444'
                                    }}>
                                        <GoInfo />
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>
                            <div style={{
                                marginTop: '1rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div style={{ fontSize: '0.875rem' }}>
                                    <span>Already have an account?</span>{' '}
                                    <Link
                                        to="/login"
                                        style={{ color: '#2563EB', fontWeight: '500' }}
                                    >
                                        Login
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    style={{
                                        backgroundColor: '#2563EB',
                                        color: 'white',
                                        padding: '0.5rem 1rem',
                                        borderRadius: '0.5rem',
                                        fontWeight: '500',
                                        cursor: 'pointer',
                                        outline: 'none'
                                    }}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {notification && (
                <div style={{
                    position: 'fixed',
                    top: '1rem',
                    right: '1rem',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: notification.type === 'success' ? '#10B981' :
                        notification.type === 'error' ? '#EF4444' : '#F59E0B',
                    color: 'white',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 1000
                }}>
                    {notification.message}
                </div>
            )}
        </>
    );
};

export default Register;
