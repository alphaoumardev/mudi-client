import React, {useEffect, useState} from 'react';
import {useNavigate, useLocation, matchPath, useParams, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../../redux/Actions/authActions';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const ResetPasswordConfirm = ({reset_password_confirm }) =>
{
    const navigate = useNavigate()
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>
    {
        e.preventDefault();
        // const { pathname } = useLocation();
        // const uid = matchPath("/resetpassword/confirm/*", pathname);
        // const token = matchPath("/resetpassword/confirm/*", pathname);

        const uid = useParams();
        const token = useParams();

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    useEffect(() =>
    {
        if(requestSent)
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
                    <div className="login-form">
                        <div className="sign-in-htm" style={{marginTop:60}}>
                            <h2  className="d-flex  mb-3 text-center">New Password</h2>
                            <form onSubmit={onSubmit}>
                                <div className="group">
                                    <label htmlFor="pass" className="label" >New Password</label>
                                    <input
                                        onChange={e => onChange(e)}
                                        value={new_password}
                                        minLength={6}
                                        required={true}
                                        id="pass" type="password"
                                        className="input"
                                        name="new_password"
                                        placeholder="Password"/>
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label" >Confirm Password</label>
                                    <input
                                        onChange={e => onChange(e)}
                                        value={re_new_password}
                                        minLength={6}
                                        required={true}
                                        id="pass" type="password"
                                        className="input"
                                        name="re_new_password"
                                        placeholder="Password"/>
                                </div>

                                <div className="group">
                                    <input type="submit" className="button" value="Change Password"/>
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
