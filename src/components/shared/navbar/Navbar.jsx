import { useRef, useState } from "react";
import { FiAlignJustify, FiLogOut } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/dream-craft.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropDown] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const imgRef = useRef();
  const dropdownRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== dropdownRef.current && e.target !== imgRef.current) {
      setDropDown(false);
    }
  });

  const handleDropDown = () => {
    setDropDown(!dropdownOpen);
  };

  const logOutHandler = () => {
    logout();
    navigate('/');
   
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '14px 0',
      boxShadow: '0 1px 5px rgba(0, 0, 0, 0.05)',
      backgroundColor: 'transparent',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1120px',
        padding: '0 20px',
        margin: '0 auto',
      }}>
        <button
          onClick={() => setCollapse(!collapse)}
          style={{
            background: 'transparent',
            border: 'none',
            padding: '0 8px',
            color: '#6B7280',
          
            cursor: 'pointer',
            display: 'none',  // Hide the button on larger screens
            '@media (max-width: 768px)': {  // Show button on smaller screens
              display: 'block',
            },
          }}
        >
          <FiAlignJustify size={25} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            color: '#1F2937',
            textDecoration: 'none',
          }}>
            <img src={logo} style={{ width: '144px' }} alt="DreamCraft Logo" />
          </Link>
        </div>
        <div style={{
          display: collapse ? 'block' : 'flex',
          flexDirection: collapse ? 'column' : 'row',
          position: collapse ? 'absolute' : 'static',
          top: collapse ? '56px' : 'auto',
          backgroundColor: collapse ? '#fff' : 'transparent',
          width: collapse ? '100%' : 'auto',
          border: collapse ? '1px solid #e5e7eb' : 'none',
          boxShadow: collapse ? '0 1px 5px rgba(0, 0, 0, 0.1)' : 'none',
          zIndex: 50,
          padding: collapse ? '10px' : '0',
          gap: collapse ? '20px' : '30px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <ul style={{
            display: 'flex',
            flexDirection: collapse ? 'column' : 'row',
            alignItems: 'center',
            gap: collapse ? '20px' : '30px',
            padding: '0',
            margin: 0,
            listStyle: 'none',
          }}>
            <li>
              <NavLink to="/" style={{
                padding: '5px',
                border: '1px solid transparent',
                textDecoration: 'none',
                color: '#1F2937',
              }} activeStyle={{ color: '#3B82F6' }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" style={{
                padding: '5px',
                border: '1px solid transparent',
                textDecoration: 'none',
                color: '#1F2937',
              }} activeStyle={{ color: '#3B82F6' }}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" style={{
                padding: '5px',
                border: '1px solid transparent',
                textDecoration: 'none',
                color: '#1F2937',
              }} activeStyle={{ color: '#3B82F6' }}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={{
                padding: '5px',
                border: '1px solid transparent',
                textDecoration: 'none',
                color: '#1F2937',
              }} activeStyle={{ color: '#3B82F6' }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={{
                padding: '5px',
                border: '1px solid transparent',
                textDecoration: 'none',
                color: '#1F2937',
              }} activeStyle={{ color: '#3B82F6' }}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <img
                ref={imgRef}
                onClick={handleDropDown}
                src={user?.image}
                style={{ borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}
                alt="User Avatar"
              />
              <ul ref={dropdownRef} style={{
                display: dropdownOpen ? 'block' : 'none',
                position: 'absolute',
                top: '100%',
                right: 0,
                backgroundColor: '#fff',
                boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '10px 5px',
                margin: 0,
                listStyle: 'none',
                zIndex: 1000,
                width: '160px',
              }}>
                <li>
                  <button
                    onClick={logOutHandler}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '5px 10px',
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      color: '#374151',
                    }}
                  >
                    <FiLogOut />
                    LogOut
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/login" style={{
              display: 'inline-block',
              backgroundColor: 'rgba(59, 113, 202, 0.1)',
              padding: '8px 12px',
              fontSize: '12px',
              textTransform: 'uppercase',
              color: 'rgba(59, 113, 202, 0.9)',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background-color 0.15s ease-in-out',
            }}>
              Login
            </Link>
            <Link to="/register" style={{
              display: 'inline-block',
              backgroundColor: '#3B82F6',
              padding: '8px 12px',
              fontSize: '12px',
              textTransform: 'uppercase',
              color: '#fff',
              borderRadius: '4px',
              boxShadow: '0 4px 9px -4px rgba(59, 113, 202, 0.3)',
              textDecoration: 'none',
              transition: 'background-color 0.15s ease-in-out',
            }}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
