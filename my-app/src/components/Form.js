import { useRef } from "react";
import Card from "../components/Card";
import classes from '../components/Form.module.css';

function Form() {
    const numberInputRef = useRef();
    const dateInputRef = useRef();
    const codeInputRef = useRef();
    const couponInputRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredNumber = numberInputRef.current.value;
        const enteredDate = dateInputRef.current.value;
        const enteredCode = codeInputRef.current.value;
        const enteredCoupon = couponInputRef.current.value;

        const formData = {
            number: enteredNumber,
            date: enteredDate,
            code: enteredCode,
            coupon: enteredCoupon,
        };

        console.log(formData)
    }
    return( 
          <form className={classes.form} onSubmit={submitHandler}>
             <Card className={classes.wrapper}>
                 <h3 className={classes.pay}>Payment Details</h3>
                 <div className={classes.num}>
                     <label htmlFor="number">CARD NUMBER</label>
                     <br></br>
                     <input type="number" required id='number' ref={numberInputRef} />
                 </div>
                 <div className={classes.two}>
                     <div className={classes.date}>
                         <label htmlFor="date">EXPIRATION DATE</label>
                         <br></br>
                         <input type="date" required id='date' ref={dateInputRef} />
                     </div>
                     <div className={classes.cv}>
                         <label htmlFor="code">CV CODE</label>
                         <br></br>
                         <input type="number" required id='code' ref={codeInputRef} />
                     </div>
                 </div>
                 <div className={classes.coupon}>
                     <label htmlFor="coupon">COUPON CODE</label>
                     <br></br>
                     <input type="number" required id='coupon' ref={couponInputRef} />
                 </div>
                 <div className={classes.but}>
                     <button className={classes.but2}>Start Subscription</button>
                 </div>
              </Card>
         </form>
    );
}

export default Form;