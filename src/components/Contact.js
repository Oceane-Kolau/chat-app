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
            <div className="status-text">Online</div>
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
            <img className="avatar" src={avatar} alt="" />
            <div>
                <div className="name">
                    {firstname} {lastname}
                </div>
                {online(isConnected)}
            </div>
        </div>
    );
}

export default Contact;