import React from 'react';
import './Contact.css';

const firstname = "Anita";
const lastname = "Sutton";
const isConnected = true;
const avatar = "https://emdisn.com/wp-content/uploads/2019/01/avatar-373-456325.png";

function online(isConnected) {
    if (isConnected) {
        return <div className="status">
            <div className="status-online"></div>
            <p className="status-text">Online</p>
        </div>;
    } else {
        return <div className="status">
            <div className="status-offline"></div>
            <p className="status-text">Offline</p>
        </div>;
    }
}

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} />
            <div>
                <div className="name">
                    <p>{firstname} {lastname}</p>
                </div>
                {online(isConnected)}
            </div>
        </div>
    );
}

export default Contact;