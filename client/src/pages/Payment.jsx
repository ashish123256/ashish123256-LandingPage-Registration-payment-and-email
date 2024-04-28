import axios from "axios";
import { load } from "@cashfreepayments/cashfree-js";
import { useDispatch, useSelector } from "react-redux";
import {
  setOrderIdStart,
  setOrderIdSuccess,
  setOrderIdFailure,
} from "../redux/order/orderSlice";
import {  toast } from "react-toastify";

const Payment = () => {
  let cashfree;

  const { currentuser } = useSelector((state) => state.user);
  const { orderId } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "sandbox",
    });
  };

  insitialzeSDK();

  const getSessionId = async () => {
    try {
      dispatch(setOrderIdStart());
      let res = await axios.post("http://localhost:8000/api/payment", {
        fullname: currentuser?.fullname,
        email: currentuser?.email,
        mobileNo: currentuser?.mobileNo,
      });

      if (res.data && res.data.payment_session_id) {
        // Dispatch action to update orderId in Redux store
        dispatch(setOrderIdSuccess(res.data.order_id));
        console.log("Payment response:", res.data);
        return res.data.payment_session_id;
      } else {
        throw new Error("Invalid response received from server");
      }
    } catch (error) {
      console.error("Error in getSessionId:", error);
      dispatch(setOrderIdFailure(error.res?.data?.error));
    }
  };

  const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

  const verifyPayment = async (orderId) => {
    try {
      let res = await axios.post("http://localhost:8000/api/verify", {
        fullname: currentuser?.fullname,
        email: currentuser?.email,
        mobileNo: currentuser?.mobileNo,
        orderId: orderId,
      });

      if (res.data) {
        toast.promise(
          resolveAfter3Sec,
          {
            pending: 'Payment verified pending',
            success: "Payment verified successfully",
            error: 'Promise rejected '
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let sessionId = await getSessionId();
      let checkoutOptions = {
        paymentSessionId: sessionId,
        redirectTarget: "_modal",
      };

      cashfree.checkout(checkoutOptions).then(() => {
        console.log("payment initialized");

        verifyPayment(orderId);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="cashfree">
        <h1>Cashfree Payment </h1>
        <div className="card">
          <button onClick={handleClick}>Pay now</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
