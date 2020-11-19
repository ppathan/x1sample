import React, { PureComponent } from 'react';

import {
    Button,
} from 'react-bootstrap';

import './ProfileRegister.css'

class ProfileRegister extends PureComponent {

    handleRegister = () => {
        this.props.postProfile(this.props.profile);
    }

    render() {
        return (
        <div className="p-register">
            <iframe title="rdwebclient" src="https://mrs-scusr0c001-rdweb-parvez01.azurewebsites.net/api/arm/weblaunch/tenants/9c74b2e7-94ff-4a16-8032-3e1dd9d098a0/resources/0600da4a-d45d-4684-5afc-08d88511babb" />
        </div>
        );
    }
}

export default ProfileRegister;