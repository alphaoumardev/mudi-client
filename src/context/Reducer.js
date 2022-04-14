// import {LoginStart, LoginFailure, LoginSuccess, UpdateFailure, Logout, UpdateStart, UpdateSuccess} from "./Actions";
// const Reducer=(state, action)=>
// {
//     switch (action.type)
//     {
//         case LoginStart:
//             return{
//                 user:null,
//                 isFetching:true,
//                 errors:false
//             }
//         case LoginSuccess:
//             return{
//                 user:action.payload,
//                 isFetching:false,
//                 errors:false
//             }
//         case LoginFailure:
//             return{
//                 user:null,
//                 isFetching:false,
//                 errors:true
//             }
//         case UpdateStart:
//             return{
//                 ...state,
//                 isFetching:true,
//             }
//         case UpdateSuccess:
//             return{
//                 user:action.payload,
//                 isFetching:false,
//                 errors:false
//             }
//         case UpdateFailure:
//             return{
//                 user:state.user,
//                 isFetching:false,
//                 errors:true
//             }
//         case Logout:
//             return{
//                 user:null,
//                 isFetching:false,
//                 errors:false
//             }
//     }
// }
