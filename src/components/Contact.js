import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        }
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt="" />
                <div>
                    <div className="name">
                        {this.props.name}
                    </div>
                    <div className="status"
                        onClick={event => {
                            const newOnline = !this.state.online;
                            this.setState({ online: newOnline });
                        }}>
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;