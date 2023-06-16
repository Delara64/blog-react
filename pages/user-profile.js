// import React from 'react';
import NavBar from 'components/NavBar';
import Profile from 'components/Profile';

const ProfilePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Profile />
        <NavBar />
      </div>
    </div>
  );
};

export default ProfilePage;
