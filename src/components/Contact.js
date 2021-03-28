import React from 'react';
import './Contact.css';


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

function Contact(props) {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt="" />
            <div>
                <div className="name">
                    {props.firstname} {props.lastname}
                </div>
                {online(props.isConnected)}
            </div>
        </div>
    );
}

export default Contact;