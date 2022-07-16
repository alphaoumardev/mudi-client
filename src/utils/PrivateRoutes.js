import {useSelector} from "react-redux";
import {Outlet, Navigate} from 'react-router-dom'
const PrivateRoutes =  ()=>
{
    const {user} = useSelector(state => state.authReducer)

    return( user ? <Outlet/> : <Navigate to='/login'/>)
}
export default PrivateRoutes
