import CheckoutShipping from "@scandipwa/scandipwa/src/component/CheckoutShipping";
import CheckoutSuccess from "@scandipwa/scandipwa/src/component/CheckoutSuccess";
import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";

import "./Checkout.extension.style.scss";

class Checkout extends SourceCheckout {
  updateHeader() {}

  renderTitle() {
    const { checkoutStep } = this.props;
    console.log(checkoutStep);
    const { title = "" } = this.stepMap[checkoutStep];

    return (
      <>
        <div className="progress">
          <span className="first-bar"></span>
          <div className="shipping">
            {checkoutStep === "SHIPPING_STEP" ? (
              <span className="first">1</span>
            ) : (
              <span className="first">&#10003;</span>
            )}
            <p>Shipping</p>
          </div>
          {checkoutStep === "SHIPPING_STEP" ? (
            <span className="empty-second-bar"></span>
          ) : (
            <span className="second-bar"></span>
          )}

          {checkoutStep === "SHIPPING_STEP" ? (
            <span className="empty-second-span">2</span>
          ) : (
            ""
          )}

          <div className="review">
            {checkoutStep === "DETAILS_STEP" ? (
              <span className="first">&#10003;</span>
            ) : (
              ""
            )}

            {checkoutStep === "BILLING_STEP" ? (
              <span className="second">2</span>
            ) : (
              ""
            )}
          </div>
          <p className="pay">Review & Payments</p>
          {checkoutStep === "DETAILS_STEP" ? (
            <span className="last-bar"></span>
          ) : (
            <span className="empty-last-bar"></span>
          )}
        </div>
        <h2 block="Checkout" elem="Title">
          {title}
        </h2>
      </>
    );
  }
}

export default Checkout;

//   <div className="review">

//   {checkoutStep === "DETAILS_STEP" ? (
//     <span className="first">&#10003;</span>
//   ) : (
//     <span className="second">2</span>
//   )}
// </div>
