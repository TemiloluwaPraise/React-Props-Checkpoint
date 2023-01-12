import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, handleName, children }) => {
    return (
        <div style={{ border: '1px solid black', padding: '10px' }}>
            <img src={children} alt={fullName} style={{ width: '100px', height: '100px' }} />
            <h1 onClick={() => handleName(fullName)}>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
        </div>
    );
};

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string.isRequired,
    handleName: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}

Profile.defaultProps = {
    bio: 'No bio provided'
};

export default Profile;
