import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

// import AuthO to use Login
import { useAuth0 } from '@auth0/auth0-react';

const { primary_accent_color } = colors;

function HeaderContent() {

const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      {/* LOGO SECTION */}
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>

      {/* NAVIGATION LINKS SECTION */}
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px', fontWeight: 'bold' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px', fontWeight: 'bold' }}>
          Graphs
        </Link>

        {/* Profile Link SECTION */}
        {isAuthenticated && (
          <Link to="/profile" style={{ color: '#E2F0F7', paddingRight: '25px' , fontWeight: 'bold'}}>
            Profile
          </Link>
        )}

        {/* Login/Logout SECTION */}
        {!isAuthenticated ? (
           <button
           onClick={() => loginWithRedirect()}
           style={{
             backgroundColor: 'transparent',
             border: 'none',
             color: '#E2F0F7',
             cursor: 'pointer',
             fontSize: '18px',
             fontWeight: 'bold',
           }}
         >
           Log In
         </button>
        ) : (
          <button
          onClick={() => logout({ returnTo: window.location.origin })}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            color: '#E2F0F7',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
          }}
        >
          Log Out
        </button>
        )}


      </div>
    </div>
  );
}

export { HeaderContent };
