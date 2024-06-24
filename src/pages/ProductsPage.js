import v30 from '../pages/pics/vectors/vector30.svg';
import v31 from '../pages/pics/vectors/vector31.svg';
import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { storage, db } from "../firebase"
import { addDoc, collection, doc, onSnapshot, updateDoc } from "firebase/firestore"

var toasts
var cart = []
class Product{
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity
  }
}


function createNotification(message = null, type = null) {
  const notif = document.createElement("div")
  notif.classList.add("toast")
  // notif.classList.add(type ? type : getRandomType())

  notif.innerText = message ? (message + "added to your cart!") : "Item added to your cart!"
  toasts.appendChild(notif)

  setTimeout(() => notif.remove(), 3000)
}


function ProductsPage(props){
    window.scrollTo(0, 0);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_kvmiqle', 'template_cgqn3n7', form.current, 'TC7u0--65-QZ5_vCI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    function addToCart(name, price){
      cart = props.cart

      console.log(props.cart);
      console.log(cart);

      var onCart = false
      cart.forEach(e => {
        if(e.name === name){
          e.quantity = e.quantity + 1
          onCart = true
        }
      });
      if(!onCart){
        let p = new Product(name,price,1)
        cart.push(p)
      }
      // props.setCart([])
      console.log(cart);
      props.setCart([...cart])
      console.log(cart);
    }

    useEffect(()=>{
      // cart = props.cart
      if(props.successCheckout){
        createNotification("You have successfully placed an Order!")
        setTimeout(() => props.setSuccessCheckout(false), 4000)
      }

      toasts = document.getElementById("toasts")

      const unsub = onSnapshot(collection(db, "FatimaResources"), (snapshot) => {
        let list = []
        snapshot.docs.forEach(docs =>{
            // console.log(docs.id);
            list.push(docs.data())
            // console.log(docs.data())
        })

        list.forEach(d => {
            if(d.id === "offersIntro"){
                let a = document.getElementById("offersIntro")
                a.innerHTML = d.content
            } 
        });
    }, (error) => {
        console.log(error);
    })

      const unsub2 = onSnapshot(collection(db, "FatimaProducts"), (snapshot) => {
        var list = []
        let prods = document.querySelector(".all-products")
        
        while(prods.firstChild){
            prods.removeChild(prods.firstChild)
          }
        snapshot.docs.forEach(docs =>{
            // console.log(docs.id);
            let data = docs.data()
            list.push({id: docs.id, ...data, })

            // console.log(docs.data())
        })

        list.forEach(d => {
            var h4 = document.createElement("h4")
            var h5 = document.createElement("h5")
            var p = document.createElement("p")
            var prodImg = document.createElement("img")
            // var div = document.createElement("div")
            // div.classList.add("all-products")
            var div2 = document.createElement("div")
            div2.classList.add("product-card")
            var div3 = document.createElement("div")
            div3.classList.add("product-content")
            var div4 = document.createElement("div")
            var btn1 = document.createElement("button")
            var btn2 = document.createElement("button")
            var i = document.createElement("i")
            i.classList.add("fas")
            i.classList.add("fa-cart-plus")
            i.id = d.name
            i.value = d.price
            i.addEventListener("click", (e) => {
              // console.log(e.target.id);
              // console.log(e.target.value);
              createNotification()
              addToCart(e.target.id, e.target.value)
            })

            // div.classList.add("admin-products")
            // console.log(d);
            h4.innerHTML = d.name
            h5.innerHTML = "Php " + d.price + ".00"
            p.innerHTML = d.description
            btn1.innerHTML = "Edit"
            btn2.innerHTML = "Delete"
            prodImg.src = d.imageUrl

            div3.appendChild(h4)
            div3.appendChild(h5)
            div3.appendChild(p)
            div2.appendChild(prodImg)
            div2.appendChild(div3)
            div2.appendChild(i)

            prods.appendChild(div2)

        });
    }, (error) => {
        console.log(error);
    })

    return () => {
        unsub2()

      }

  })



    return <>
    
    <div id="toasts"></div>
    <div id='products-hero'>

    <img src={v30} id='v30' />
    <img src={v31} id='v31' />
    <div id='products-hero-heading'>
    <h1>
    Our Products
    </h1>
    <p id='offersIntro'>
    Due to poverty and lack of education, many families in the rural surroundings suffer from malnourishment and lack of income. Fatima makes use of the available resources to find ways of improving the livelihood of the community while making sure to preserve and protect the environment.    </p>
    </div>



    <div className='all-products'>
      <div className='product-card'>
      <i className="fas fa-cart-plus"></i>
        <img></img>
        <div className='product-content'>
        
          <h4>Title</h4>
          <h5>Php 0.00</h5>
          <p>description</p>
        </div>
      </div>
      <div className='product-card'>
        <img></img>
        <div className='product-content'>
          <h4>Title</h4>
          <h5>Php 0.00</h5>
          <p>description</p>
        </div>
      </div>
      <div className='product-card'>
        <img></img>
        <div className='product-content'>
          <h4>Title</h4>
          <h5>Php 0.00</h5>
          <p>description</p>
        </div>
      </div>
      <div className='product-card'>
        <img></img>
        <div className='product-content'>
          <h4>Title</h4>
          <h5>Php 0.00</h5>
          <p>description</p>
        </div>
      </div>
      <div className='product-card'>
        <img></img>
        <div className='product-content'>
          <h4>Title</h4>
          <h5>Php 0.00</h5>
          <p>description</p>
        </div>
      </div>
    </div>


    {/* <form ref={form} onSubmit={sendEmail} id='sample'>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="list_of_items" />
      <input type="submit" value="Send" />
    </form> */}
    </div>
    </>
}

export default ProductsPage