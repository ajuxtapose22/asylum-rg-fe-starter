import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    // Console logs to debug
    // console.log("isLoading:", isLoading);
    // console.log("isAuthenticated:", isAuthenticated);
    // console.log("user:", user);
    if (isLoading) {
        // console.log("Profile is loading...");
        return <div>Loading...</div>;
    }
    if (!isAuthenticated) {
        // console.log("User is not authenticated");
        return <div>User is not authenticated</div>;
    }
    // if (user) {
    //     console.log("User details:", user);
    // }
    return (
        isAuthenticated && (
            <div style={{ padding: '20px', color: '#333' }}>
                <h2>Profile</h2>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
            </div>
        )
    );
};

export default Profile;