import {PayPalScriptProvider, PayPalButtons,} from "@paypal/react-paypal-js";
import {useDispatch, useSelector} from "react-redux";
import {createOrderAction} from "../redux/Actions/orderAction";
import {useNavigate} from "react-router-dom";



const Paypal = ()=>
{
    const {order_total} = useSelector((state) =>state.cartReducer)
    const {address} = useSelector(state => state.getShippingAddressReducer)
    const {user, } = useSelector((state) =>state.authReducer)
    const amount = order_total;
    const currency = "USD";
    const style = {layout: "vertical", color:"silver", shape:"pill"};
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div style={{maxWidth: "750px", minHeight: "200px"}}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AZBav3-IKfYRTRjLEy--IkkjE7sIWz1VAWPiqX3OX_nuOFt8M7hQOafdwiZwQpNpzFI4epi7BNVwzmlR",
                    components: "buttons",
                    currency: "USD",
                    // "disable-funding": "credit,card,p24"
                }}>
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    onClick={(data, actions)=>
                    {
                        // return actions.reject()
                        // return actions.resolve()
                    }}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) =>
                            {
                                // Your code here after create the order
                                return orderId;
                            });
                    }}
                    onApprove={async (data, actions)=>
                    {
                        await actions.order.capture().then(()=>
                        {
                            //create the order
                            dispatch(createOrderAction(user, address?.id))
                            //create order detail
                            //delete the cart
                            navigate('/myaccount')
                        });
                    }}
                    onCancel={(data, actions)=>
                    {
                        return actions.redirect('/cart')
                    }}
                    onError={(error)=>
                    {
                        console.log(error)
                    }}/>
            </PayPalScriptProvider>
        </div>
    );
}
export default Paypal
