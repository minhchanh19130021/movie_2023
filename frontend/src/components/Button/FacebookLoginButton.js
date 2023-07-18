import React from 'react';
import FacebookLogin from 'react-facebook-login';
const FacebookLoginButton = ({ onFacebookLogin }) => {
    const responseFacebook = (response) => {
        // Handle the response from Facebook login
        onFacebookLogin(response.accessToken);
    };

    return (
        <FacebookLogin
            appId="" // Replace with your Facebook app ID
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
        />
    );
};

export default FacebookLoginButton;