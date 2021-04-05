import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online
        };
    }

    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
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

Contact.propTypes = {

    avatar: PropTypes.string.isRequired,

    name: PropTypes.string.isRequired,

    online: PropTypes.bool.isRequired,

};

export default Contact;