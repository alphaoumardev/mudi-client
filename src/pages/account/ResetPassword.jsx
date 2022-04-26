import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../redux/Actions/authActions';

const ResetPassword = ({ reset_password }) =>
{
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({ email: ''});
    const navigate = useNavigate()
    const { email } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>
    {
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    };
    useEffect(() =>
    {
        console.log(requestSent)
        if (requestSent)
        {
            return navigate('/')
        }
    },);

    return (
        <div className="container">
            <div className="row w-100 login-form">
                <div className="col-xl-4 lea ">
                    <img src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png" alt="akn do" className=""/>
                </div>
                <div className="col-xl-4 login-wrap ">
                    <div className="reset">
                        <div className="sign-in-htm">
                            <h2  className="d-flex  mb-3 text-center">Reset Password</h2>
                            <form onSubmit={onSubmit}>
                                <div className="group">
                                    <label htmlFor="user" className="label" >Email</label>
                                    <input
                                        onChange={e => onChange(e)}
                                        value={email}
                                        required={true}
                                        name="email"
                                        id="user" type="email"
                                        className="input"
                                        placeholder="Email"/>
                                </div>
                                <div className="group">
                                    <input type="submit" className="button" value="Reset Password"/>
                                </div>
                            </form>
                        </div>
                        {/*Sign up*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);
