import React, { PureComponent } from 'react';

import './ProfileRegister.css'

class ProfileRegister extends PureComponent {

    handleRegister = () => {
        this.props.postProfile(this.props.profile);
    }

    render() {
        return (
        <div className="p-register">
            <iframe style={ {width: "2600px", height: "100vh"}} title="rdwebclient" src="https://mrs-scusr0c001-rdweb-parvez01.azurewebsites.net/arm/webclient/index.html?rdpfile=https://mrs-scusr0c001-rdweb-parvez01.azurewebsites.net/api/arm/feeddiscovery/tenants/9c74b2e7-94ff-4a16-8032-3e1dd9d098a0/rdps/0600da4a-d45d-4684-5afc-08d88511babb.rdp&tenantId=9c74b2e7-94ff-4a16-8032-3e1dd9d098a0" />
        </div>
        );
    }
}

export default ProfileRegister;