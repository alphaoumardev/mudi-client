import '../css/login.css'
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {signup} from "../redux/Actions/auth";
import {connect} from "react-redux";
const Register =({signup, isAuthenticated})=>
{
    const navigate = useNavigate()
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        re_password:""
    });
    const {first_name, last_name, email, password, re_password} = formData
    const onChange = e =>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit = e =>
    {
        e.preventDefault()
        if(password === re_password)
        {
            signup(first_name, last_name, email, password, re_password)
            setAccountCreated(true)
        }
    }
    useEffect(() =>
    {
        console.log(isAuthenticated)
        if(isAuthenticated)
        {
            // console.log(isAuthenticated)
            return navigate('/')
        }
        console.log(accountCreated)
        if(accountCreated)
        {
            return navigate('/login')
        }
    }, );

    const continueWithGoogle = async () =>
    {
        try
        {
            const res = await axios.get(`/auth/o/google-oauth2/?redirect_uri=/google`)
            window.location.replace(res.data.authorization_url);
        } catch (err) {}
    };
    const continueWithFacebook = async () =>
    {
        try
        {
            const res = await axios.get(`/auth/o/facebook/?redirect_uri=/facebook`)
            window.location.replace(res.data.authorization_url);
        } catch (err){}
    };
    return(
        <div className="container">
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-xl-4 lea ">
                    <img src="https://res.cloudinary.com/diallo/image/upload/v1649320496/s_cyptzh.png" alt="akn do" className=""/>
                </div>
                <div className="col-xl-4 login-wrap">
                    <div className="register-form">
                        <div className="sign ">
                            <h2  className="d-flex  mb-2 text-center">Sign In</h2>
                        <form onSubmit={onSubmit}>
                            <div className="group">
                                <label htmlFor="first_name" className="label">First Name</label>
                                <input
                                    type="text"
                                    value={first_name}
                                    onChange={e=>onChange(e)}
                                    id="first_name"
                                    name="first_name"
                                    className="input"
                                    placeholder="First Name"/>
                            </div>
                            <div className="group">
                                <label htmlFor="last_name" className="label">Last Name</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    value={last_name}
                                    name="last_name"
                                    onChange={e=>onChange(e)}
                                    className="input"
                                    placeholder="Last Name"/>
                            </div>
                            <div className="group">
                                <label htmlFor="password" className="label">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    className="input"
                                    onChange={e=>onChange(e)}
                                    placeholder="Password"/>
                            </div>
                            <div className="group">
                                <label htmlFor="re_password" className="label">Repeat Password</label>
                                <input
                                    id="re_password"
                                    type="password"
                                    name="re_password"
                                    value={re_password}
                                    onChange={e=>onChange(e)}
                                    className="input"
                                    placeholder="confirm"/>
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">Email Address</label>
                                <input
                                    id="pass"
                                    type="email"
                                    name="email"
                                    value={email}
                                    className="input"
                                    onChange={e=>onChange(e)}
                                    placeholder="Email address"/>
                            </div>
                            <div className="group mt-2">
                                <input type="submit" className="button" value="Sign Up"/>
                            </div>
                        </form>
                            <div className="group">
                                <button className='btn btn-danger mt-3 w-50' onClick={continueWithGoogle}>Google</button>
                                <button className='btn btn-primary mt-3 w-50' onClick={continueWithFacebook}>Facebook</button>
                            </div>
                            <div className="hr"> </div>
                            <div className="foot-lnk">
                                <Link to="/login" className="already">Or Already a Member?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({isAuthenticated: state.auth.isAuthenticated})
export default connect(mapStateToProps, {signup}) (Register)