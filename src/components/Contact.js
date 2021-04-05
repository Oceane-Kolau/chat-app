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

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            connexion: true,
        }
    }

    render(){
        return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt="" />
            <div>
                <div className="name">
                    {this.props.firstname} {this.props.lastname}
                </div>
                {online(this.props.isConnected)}
            </div>
        </div>
    );
    }
}

export default Contact;