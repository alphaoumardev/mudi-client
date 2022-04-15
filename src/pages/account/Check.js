import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../../redux/Actions/auth';

const Check = ({ checkAuthenticated, load_user, children }) =>
{
    useEffect(() =>
    {
        checkAuthenticated();
        load_user();
    }, []);

    return (
        <div>
            {/*<Navbar />*/}
            {children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Check);
