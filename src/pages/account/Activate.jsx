import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../../redux/Actions/auth';

const Activate = ({ verify,}) =>
{
    const [verified, setVerified] = useState(false);
    const navigate = useNavigate()
    const verify_account = e =>
    {
        const uid = useParams();
        const token = useParams()

        verify(uid, token);
        setVerified(true);
    };

    useEffect(() =>
    {
        if(verified)
        {
            return navigate('/')
        }
    }, );


    return (
        <div className="container">
            <div className="row w-100 login-form">
                <div className="col-xl-4 lea ">
                    <img src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png" alt="akn do" className=""/>
                </div>
                <div className="col-xl-4 login-wrap ">
                    <div className="d-flex justify-content-center align-items-center text-center" style={{marginTop:'50%'}}>
                        <div className="sign-in-htm ">
                            <h2  className="d-flex  mb-3 text-center">Activate your Account</h2>
                            <div className="group">
                                <button className='btn btn-primary mt-3 w-50' onClick={verify_account}>Verify</button>
                            </div>
                        </div>
                        {/*Sign up*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
