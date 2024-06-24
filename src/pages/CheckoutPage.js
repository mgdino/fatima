import { Link, useNavigate, Navigate } from "react-router-dom"
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function CheckoutPage(props){
    const form = useRef();
    useEffect(()=>{
      var mess = ""
      let m = document.getElementById("message-content")
      props.cart.forEach(e => {
        mess += e.name + " x" + e.quantity
        mess += "\n"
      });
      mess += "\n"
      mess += "Total: Php" + props.total + ".00" 
      m.value = mess
    }, [])

    const navigate = useNavigate();
    const handleCheckout = () => navigate('/offers');

    if(props.cart.length === 0){
      return <Navigate to="/offers" />
    }



    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kvmiqle', 'template_cgqn3n7', form.current, 'TC7u0--65-QZ5_vCI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      props.setSuccessCheckout(true)
      props.setCart([])
        handleCheckout()
        
    };


    return <div id="checkout-main">


    <div class="card">
    <div class="leftside">
      {/* <img
        src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
        class="product"
        alt="Shoes"
      /> */}
    </div>
    <div class="rightside">
      <form ref={form}  onSubmit={sendEmail}>
        <h1>CheckOut</h1>
        <h2>Customer Information</h2>
        <p>Full Name</p>
        <input type="text" class="inputbox" name="name" required />
        <p>Contact Number</p>
        <input type="tel" class="inputbox" name="number" id="card_number" required />
        <p>Email</p>
        <input type="email" class="inputbox" name="email" id="card_number" required />
        <hr />
        {/* <p>Card Type</p>
        <select class="inputbox" name="card_type" id="card_type" required>
          <option value="">--Select a Card Type--</option>
          <option value="Visa">Visa</option>
          <option value="RuPay">RuPay</option>
          <option value="MasterCard">MasterCard</option>
        </select> */}
{/* <div class="expcvv">

        <p class="expcvv_text">Expiry</p>
        <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

        <p class="expcvv_text2">CVV</p>
        <input type="password" class="inputbox" name="cvv" id="cvv" required />
    </div>
        <p></p> */}
        <h2>Total:  Php {props.total}.00</h2>
        <textarea id="message-content" name="list_of_items" style={{display: "none"}}/>
        <button type="submit" class="button">CheckOut</button>
      </form>
    </div>
  </div>

  </div> 
}

export default CheckoutPage