import React from 'react';
import RenderLandingPage from './RenderLandingPage.jsx';
import LoginButton from '../../common/LoginButton.js';

function LandingContainer({ LoadingComponent }) {
  return (
    <>
      <LoginButton />  
      <RenderLandingPage />
    </>
  );
}

export default LandingContainer;
