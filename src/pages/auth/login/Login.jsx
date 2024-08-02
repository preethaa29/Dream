import { useState } from "react";
import { useForm } from "react-hook-form";
import { GoInfo } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false);
    const [notification, setNotification] = useState(null); // Manage notifications
    const { login } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const onSubmit = async (data) => {
        const { email, password } = data;
        setNotification({ type: 'loading', message: 'Logging in...' });
        try {
            await login(email, password);
            setNotification({ type: 'success', message: 'Login Successfully' });
            window.location.href = from;
        } catch (error) {
            setNotification({ type: 'error', message: `Error: ${error?.response?.data}` });
        }
    };

    return (
        <>
            <div style={{
                
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
            }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div style={{
                        background: 'white',
                        padding: '20px 40px',
                        borderRadius: '10px',
                        width: '100%',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        maxWidth: '400px',
                        backgroundColor: 'white'
                    }}>
                        <div style={{ marginBottom: '16px' }}>
                            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                                <h1 style={{ fontSize: '20px', fontWeight: '600', color: 'black' }}>
                                    Welcome back
                                </h1>
                                <small style={{ color: 'black' }}>
                                    Sign in to your account to start using Dream Craft
                                </small>
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label
                                    htmlFor="email"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#94a3b8',
                                        fontSize: '14px',
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
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb',
                                        backgroundColor: 'transparent',
                                        padding: '8px 12px',
                                        outline: 'none',
                                        color: '#1f2937',
                                        ...(errors.email ? { borderColor: '#f87171' } : { borderColor: '#2563eb' })
                                    }}
                                    placeholder="Enter Email Address"
                                />
                                {errors.email && (
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        paddingTop: '8px',
                                        color: '#f87171',
                                    }}>
                                        <GoInfo className="inline" />
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>
                            <div style={{ position: 'relative', marginBottom: '16px' }}>
                                <label
                                    htmlFor="password"
                                    style={{
                                        display: 'block',
                                        marginBottom: '8px',
                                        color: '#94a3b8',
                                        fontSize: '14px',
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
                                        borderRadius: '8px',
                                        border: '1px solid #e5e7eb',
                                        backgroundColor: 'transparent',
                                        padding: '8px 12px',
                                        outline: 'none',
                                        color: '#1f2937',
                                        ...(errors.password ? { borderColor: '#f87171' } : { borderColor: '#2563eb' })
                                    }}
                                    placeholder="Enter Password"
                                />
                                <span
                                    onClick={() => setPasswordShow(!passwordShow)}
                                    style={{
                                        position: 'absolute',
                                        top: '38px',
                                        right: '12px',
                                        color: '#6b7280',
                                        cursor: 'pointer',
                                        userSelect: 'none',
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
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="3"
                                            ></circle>
                                        </svg>
                                    )}
                                </span>
                                {errors.password && (
                                    <span style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px',
                                        paddingTop: '8px',
                                        color: '#f87171',
                                    }}>
                                        <GoInfo className="inline" />
                                        {errors.password.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <button style={{
                            marginTop: '16px',
                            width: '100%',
                            backgroundColor: 'rgb(190 18 60)',
                            color: '#ffffff',
                            padding: '8px 0',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '500',
                            cursor: 'pointer',
                            border: 'none'
                        }}>
                            Sign In
                        </button>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                margin: '16px 0'
                            }}>
                                <span
                                    aria-hidden="true"
                                    style={{
                                        flexGrow: '1',
                                        backgroundColor: 'rgb(190 18 60)',
                                        height: '1px',
                                    }}
                                />
                                <span style={{
                                    fontSize: '12px',
                                    fontWeight: '500',
                                    color: '#1f2937',
                                    padding: '4px 12px',
                                    backgroundColor: 'rgb(190 18 60)',
                                    borderRadius: '9999px',
                                }}>
                                    or sign in with
                                </span>
                                <span
                                    aria-hidden="true"
                                    style={{
                                        flexGrow: '1',
                                        backgroundColor: 'rgb(190 18 60)',
                                        height: '1px',
                                    }}
                                />
                            </div>
                            <div style={{
                                padding: '20px 0',
                                textAlign: 'center',
                                fontSize: '14px',
                                color: '#1f2937'
                            }}>
                                Don’t have an account yet?
                                <Link
                                    to="/register"
                                    style={{
                                        fontWeight: '500',
                                        color: '#2563eb',
                                        marginLeft: '8px',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <span style={{ fontWeight: '700' }}>
                                        Sign Up
                                    </span>
                                </Link>
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

export default Login;
