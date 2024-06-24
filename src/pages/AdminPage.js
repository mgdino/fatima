import { getDownloadURL, ref, uploadBytesResumable} from "firebase/storage"
import { useEffect, useState } from "react"
import { storage, db } from "../firebase"
import { addDoc, collection, doc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore"
import { Link, useNavigate, Navigate } from "react-router-dom"
import add1 from '../pages/pics/vectors/add1.png';
import add2 from '../pages/pics/vectors/add2.png';
var file
var progress
var picURL
var popupBG
var popupContent
var popupContent2
var popupContent3
var list
var prodList
var source
var giNumber
var giEmail

var prodId

var genInfoNumber
var genInfoEmail
var genInfoContent

function showPics(e){
    var children = e.target.parentNode.parentNode.children

    if(e.target.classList.contains("fa-plus")){
        e.target.classList.remove("fa-plus")
        e.target.classList.add("fa-minus")
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.classList.add("active")
        // console.log(e.target.parentNode.parentNode.parentNode);
    
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.classList.add("active")
          }
    } else {
        e.target.classList.add("fa-plus")
        e.target.classList.remove("fa-minus")
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.classList.remove("active")


    
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.classList.remove("active")
        }
    }

}

function showPics2(e){
    var children = e.target.parentNode.parentNode.children
    var email = document.getElementById("gi-email")
    var contact = document.getElementById("gi-contact")
    var content = document.getElementById("gi-content")

    if(e.target.classList.contains("fa-plus")){
        e.target.classList.remove("fa-plus")
        e.target.classList.add("fa-minus")
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.classList.add("active")
        // console.log(e.target.parentNode.parentNode.parentNode);
    
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.classList.add("active")
          }

        email.classList.add("active")
        contact.classList.add("active")
        content.classList.add("active")

          


    } else {
        e.target.classList.add("fa-plus")
        e.target.classList.remove("fa-minus")
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.classList.remove("active")


    
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.classList.remove("active")
        }

        email.classList.remove("active")
        contact.classList.remove("active")
        content.classList.remove("active")
    }

}

function openPopUp(e) {
    let b = document.getElementById("product-btn")
    if(picURL){
        b.disabled = false
    }

    source = e.target.id
    list.forEach(d => {
        // console.log(d);
        // console.log(d.content);
        // console.log(d.id);

        if(d.id === source){
            var txtArea
            if(d.id === "genInfo"){
                txtArea = document.getElementById("txtArea2")
                giNumber = document.getElementById("form-gi-number")
                giEmail = document.getElementById("form-gi-email")
                console.log(giEmail);
                console.log(giNumber);
                txtArea.value = d.content
                giNumber.value = d.number
                // giNumber.value = "f"
                
                giEmail.value = d.email
                // giEmail.value = "GG"

                // txtArea.value = d.number
            } else{
                txtArea = document.getElementById("txtArea")

                console.log(d.content);
                txtArea.value = d.content
                giNumber.value = d.number
                giEmail.value = d.email
                // giEmail.value = "GG"
            }
            

        }
    });
    popupBG.classList.add("active")
    if(e.target.id === "genInfo"){
        popupContent2.classList.add("active")
    } else {
    popupContent.classList.add("active")
    }


  }

function openProductsPopUp(e) {
    let txtArea = document.getElementById("txtArea3")
    let n = document.getElementById("form-product-name")
    let p = document.getElementById("form-product-price")
    let b = document.getElementById("product-btn")

    b.disabled = true
    
    if(e.target.id === "add-img" | e.target.id === "add2-img"){
        txtArea.value = ""
        n.value = ""
        p.value = ""
        b.value = "add-product"
    } else {
        b.value = "save"
        source = e.target.id
    prodId = source
    // console.log(source);
    prodList.forEach(d => {
        // console.log(d);
        // console.log(d.content);
        console.log(d.id);

        if(d.id === source){

                txtArea.value = d.description
                n.value = d.name
                // giNumber.value = "f"
                
                p.value = d.price
                // giEmail.value = "GG"

                // txtArea.value = d.number
            
        }
    });
    }

    // e.target.id
    // console.log(e.target.id);


    

    // txtArea.value = "gg"
    popupBG.classList.add("active")
    popupContent3.classList.add("active")
  }


function closePopUp() {
    popupBG.classList.remove("active")
    popupContent.classList.remove("active")
    popupContent2.classList.remove("active")
    popupContent3.classList.remove("active")
  }

async function updateIntro(e) {
    e.preventDefault()
    let txtArea = document.getElementById("txtArea")
    // let s
    try{
        await updateDoc(doc(db, "FatimaResources", source), {
            id: source,
            content: txtArea.value
        }).then(
            closePopUp()
            // s = document.getElementById(source)
            // s.
        )
    } catch (e) {
        console.log(e)
    }
}
function uploadFile(e) {
    file = e.target.files[0]
    const name = new Date().getTime() + file.name
    const storageRef = ref(storage, file.name)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        // setProgress(progress)
    }, (error) => {
        console.log(error)
    }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            picURL = downloadURL

            // handleSubmit()
            if(e.target.id === "wwd1-file-selector"){
                updatePicWWD1()
            } else if(e.target.id === "wwd2-file-selector"){
                updatePicWWD2()
            } else if(e.target.id === "au1-file-selector"){
                updatePicAU1()
            } else if(e.target.id === "au2-file-selector"){
                updatePicAU2()
            } else if(e.target.id === "home1-file-selector"){
                updatePicHome1()
            } else if(e.target.id === "home2-file-selector"){
                updatePicHome2()
            }
            // updatePic()

            let b = document.getElementById("product-btn")

            b.disabled = false
        })
    }
    )
}

async function handleSubmit() {
    await addDoc(collection(db, "FatimaResources"), {
        // page: "WhatWeDo",
        // number: "1",
        // imageURL: picURL
        // id: "whatWeDoImg1",
        imageURL: picURL
    })
}

async function updatePicWWD1(){
    try{
        await updateDoc(doc(db, "FatimaResources", "whatWeDoImg1"), {
            id: "whatWeDoImg1",
            imageUrl: picURL
        })
        let wwd1 = document.getElementById("wwd1")
        wwd1.src = picURL
    } catch (e) {
        console.log(e)
    }
}

async function updatePicWWD2(){
    try{
        await updateDoc(doc(db, "FatimaResources", "whatWeDoImg2"), {
            id: "whatWeDoImg2",
            imageUrl: picURL
        })
        let wwd2 = document.getElementById("wwd2")
        wwd2.src = picURL
    } catch (e) {
        console.log(e)
    }
}
async function updatePicAU1(){
    try{
        await updateDoc(doc(db, "FatimaResources", "aboutUsImg1"), {
            id: "aboutUsImg1",
            imageUrl: picURL
        })
        let au1= document.getElementById("au1")
        au1.src = picURL
    } catch (e) {
        console.log(e)
    }
}

async function updatePicAU2(){
    try{
        await updateDoc(doc(db, "FatimaResources", "aboutUsImg2"), {
            id: "aboutUsImg2",
            imageUrl: picURL
        })
        let au2= document.getElementById("au2")
        au2.src = picURL
    } catch (e) {
        console.log(e)
    }
}
async function updatePicHome1(){
    try{
        await updateDoc(doc(db, "FatimaResources", "homepage1"), {
            id: "homepage1",
            imageUrl: picURL
        })
        let home1= document.getElementById("home1")
        home1.src = picURL
    } catch (e) {
        console.log(e)
    }
}

async function updatePicHome2(){
    try{
        await updateDoc(doc(db, "FatimaResources", "homepage2"), {
            id: "homepage2",
            imageUrl: picURL
        })
        let home2= document.getElementById("home2")
        home2.src = picURL
    } catch (e) {
        console.log(e)
    }
}
async function deleteProduct(e){
    console.log("GG");
    try{
        // let img 
        // console.log(picURL)
        // console.log(prodId);
        await deleteDoc(doc(db, "FatimaProducts", e.target.id)).then(d => {

    })
    } catch (e) {
        console.log(e)
    }
}
async function updateProduct(e){
    let txtArea = document.getElementById("txtArea3")
    let n = document.getElementById("form-product-name")
    let p = document.getElementById("form-product-price")

    if(e.target.value === "add-product"){
        try{
            let prods = document.getElementById("admin-products-container")
            var prodImg = document.createElement("img")
            var h5 = document.createElement("h5")
            var p1 = document.createElement("p")
            var p2 = document.createElement("p")
            // var div = document.createElement("div")
            var div2 = document.createElement("div")
            var div3 = document.createElement("div")
            var div4 = document.createElement("div")
            var btn1 = document.createElement("button")
            var btn2 = document.createElement("button")

            let img 
            // console.log(picURL)
            // console.log(prodId);
            await addDoc(collection(db, "FatimaProducts"), {
                // page: "WhatWeDo",
                // number: "1",
                // imageURL: picURL
                name: n.value,
                price: p.value,
                description: txtArea.value,
                imageUrl: picURL
            }).then(d => {
                console.log(d);
                console.log(d.data);
            
            // var div = document.createElement("div")

            // var h5_title = document.createElement("h5")
            // var h5_title_span = document.createElement("span")
            // var h5_title_i = document.createElement("i")
                
            //     h5_title_span.innerHTML = d.name
            //     h5_title_i.classList.add("fa")
            //     h5_title_i.classList.add("fa-plus")
            //     h5_title_i.addEventListener("click", showPics)
            //     h5_title.appendChild(h5_title_span)
            //     h5_title.appendChild(h5_title_i)
            //     h5_title.classList.add("product-header")
            //     div.appendChild(h5_title)


            // div.classList.add("admin-products")
            // // console.log(d);
            // h5.innerHTML = n.value
            // p1.innerHTML = "Php " + p.value + ".00"
            // p2.innerHTML = txtArea.value
            // btn1.innerHTML = "Edit"
            // btn2.innerHTML = "Delete"
            // prodImg.src = picURL
            // prodImg.id = n.value
            // prodImg.classList.add("admin-prod-image")
            // btn1.classList.add("edit-btn")
            // btn2.classList.add("delete-btn")
            // btn1.id = d.id
            // btn2.id = d.id
            // btn1.addEventListener("click", openProductsPopUp)
            // btn2.addEventListener("click", deleteProduct)
            // div4.appendChild(prodImg)   
            // div2.appendChild(h5);
            // div2.appendChild(p1);
            // div2.appendChild(p2);

            // div4.appendChild(div2);
            // div4.id = "prods1"
            // div.appendChild(div4);
            // div3.appendChild(btn1);
            // div3.appendChild(btn2);
            // div.appendChild(div3);

            
            

            // prods.appendChild(div)
            closePopUp()
            })



        } catch (e) {
            console.log(e)
        }
    } else {

        try{
            let img 
            console.log(picURL)
            console.log(prodId);
            await updateDoc(doc(db, "FatimaProducts", prodId), {
                name: n.value,
                price: p.value,
                description: txtArea.value,
                imageUrl: picURL
            }).then(d => {
                img = document.getElementById(n.value)
                img.src = picURL
            
            // au2.src = picURL
            closePopUp()
})
        } catch (e) {
            console.log(e)
        }
    }
    
}


async function updateGenInfo(){
    let txtArea = document.getElementById("txtArea2")
    giNumber = document.getElementById("form-gi-number")
    giEmail = document.getElementById("form-gi-email")


    try{
        await updateDoc(doc(db, "FatimaResources", "genInfo"), {
            id: "genInfo",
            email: giEmail.value,
            number: giNumber.value,
            content: txtArea.value,
        }).then((d) =>{
            let gie= document.getElementById("gi-email")
            let gic= document.getElementById("gi-contact")
            let gicontent= document.getElementById("gi-content")
    
            gie.innerHTML = giEmail.value
            gic.innerHTML = giNumber.value
            gicontent.innerHTML = txtArea.value
            
        })


        // au2.src = picURL
    } catch (e) {
        console.log(e)
    }

    closePopUp()
}

// imageURL: "https://firebasestorage.googleapis.com/v0/b/fatimacenterwebsite.appspot.com/o/IMG_0003.JPG?alt=media&token=23634179-ce98-4f94-8ea7-377ba75b9ca8",

function AdminPage(props){

    

    // const [file, setFile] = useState(null)
    // const [progress, setProgress] = useState(null)

    // useEffect(()=>{
    //         uploadFile()
    //     }, [file])

    useEffect(()=>{
        popupBG = document.getElementById("admin-edit-popup")
        popupContent = document.getElementById("edit-popup-content")
        popupContent2 = document.getElementById("edit-popup-content2")
        popupContent3 = document.getElementById("edit-popup-content3")
        giNumber = document.getElementById("form-gi-number")
        giEmail = document.getElementById("form-gi-email")

            const unsub = onSnapshot(collection(db, "FatimaResources"), (snapshot) => {
                list = []
                snapshot.docs.forEach(docs =>{
                    // console.log(docs.id);
                    list.push(docs.data())
                    // console.log(docs.data())
                })

                list.forEach(d => {
                    if(d.id === "whatWeDoImg1"){
                        let wwd1 = document.getElementById("wwd1")
                        wwd1.src = d.imageUrl
                    }
                    if(d.id === "whatWeDoImg2"){
                        let wwd2 = document.getElementById("wwd2")
                        wwd2.src = d.imageUrl
                    }
                    if(d.id === "aboutUsImg1"){
                        let au1 = document.getElementById("au1")
                        au1.src = d.imageUrl
                    }
                    if(d.id === "aboutUsImg2"){
                        let au2 = document.getElementById("au2")
                        au2.src = d.imageUrl
                    }
                    if(d.id === "homepage1"){
                        let home1 = document.getElementById("home1")
                        home1.src = d.imageUrl
                    }

                    if(d.id === "homepage2"){
                        let home2 = document.getElementById("home2")
                        home2.src = d.imageUrl
                    }

                    if(d.id === "whatWeDoIntro"){
                        let wwdi = document.getElementById("whatWeDoIntro")
                        wwdi.innerHTML = d.content
                    }

                    if(d.id === "aboutUsIntro"){
                        let aui = document.getElementById("aboutUsIntro")
                        aui.innerHTML = d.content
                    }

                    if(d.id === "offersIntro"){
                        let oi = document.getElementById("offersIntro")
                        oi.innerHTML = d.content
                    }

                    if(d.id === "genInfo"){
                        let email = document.getElementById("gi-email")
                        let contact = document.getElementById("gi-contact")
                        let content = document.getElementById("gi-content")
                        email.innerHTML = d.email
                        contact.innerHTML = d.number
                        content.innerHTML = d.content
                    }

                });
            }, (error) => {
                console.log(error);
            })

            const unsub2 = onSnapshot(collection(db, "FatimaProducts"), (snapshot) => {
                prodList = []
                let prods = document.getElementById("admin-products-container")
                while(prods.firstChild){
                    prods.removeChild(prods.firstChild)
                  }
                snapshot.docs.forEach(docs =>{
                    // console.log(docs.id);
                    let data = docs.data()
                    prodList.push({id: docs.id, ...data, })

                    // console.log(docs.data())
                })

                prodList.forEach(d => {
                    var div = document.createElement("div")

                    var h5_title = document.createElement("h5")
                    var h5_title_span = document.createElement("span")
                    var h5_title_i = document.createElement("i")
                    
                    h5_title_span.innerHTML = d.name
                    h5_title_i.classList.add("fa")
                    h5_title_i.classList.add("fa-plus")
                    h5_title_i.addEventListener("click", showPics)
                    h5_title.appendChild(h5_title_span)
                    h5_title.appendChild(h5_title_i)
                    h5_title.classList.add("product-header")
                    div.appendChild(h5_title)


                    var prodImg = document.createElement("img")
                    var h5 = document.createElement("h5")
                    var p1 = document.createElement("p")
                    var p2 = document.createElement("p")

                    var div2 = document.createElement("div")
                    var div3 = document.createElement("div")
                    var div4 = document.createElement("div")
                    var btn1 = document.createElement("button")
                    var btn2 = document.createElement("button")
                    div.classList.add("admin-products")
                    // console.log(d);
                    h5.innerHTML = d.name
                    p1.innerHTML = "Php " + d.price + ".00"
                    p2.innerHTML = d.description
                    btn1.innerHTML = "Edit"
                    btn2.innerHTML = "Delete"
                    prodImg.src = d.imageUrl
                    prodImg.id = d.name
                    prodImg.classList.add("admin-prod-image")
                    btn1.classList.add("edit-btn")
                    btn2.classList.add("delete-btn")
                    btn1.id = d.id
                    btn2.id = d.id
                    btn1.addEventListener("click", openProductsPopUp)
                    btn2.addEventListener("click", deleteProduct)
                    div4.appendChild(prodImg)   
                    div2.appendChild(h5);
                    div2.appendChild(p1);
                    div2.appendChild(p2);

                    div4.appendChild(div2);
                    div4.id = "prods1"
                    div.appendChild(div4);
                    div3.appendChild(btn1);
                    div3.appendChild(btn2);
                    div.appendChild(div3);

                    
                    

                    prods.appendChild(div)

                });
            }, (error) => {
                console.log(error);
            })
            var pup1 = document.getElementById('edit-popup-content')
            pup1.addEventListener('click', function(e){   
                if (document.getElementById('admin-edit-popup-content').contains(e.target)){
                  // Clicked in box
                  console.log("click1");
                } else{
                  closePopUp()  
                }
              });
              var pup2 = document.getElementById('edit-popup-content2')
              pup2.addEventListener('click', function(e){   
                  if (document.getElementById('admin-edit-popup-content2').contains(e.target)){
                    // Clicked in box
                    console.log("click2");
                  } else{
                    closePopUp()  
                  }
                });
                var pup3 = document.getElementById('edit-popup-content3')
                pup3.addEventListener('click', function(e){   
                    if (document.getElementById('admin-edit-popup-content3').contains(e.target)){
                      // Clicked in box
                      console.log("click3");
                    } else{
                      closePopUp()  
                    }
                  });

            return () => {
                unsub()
                unsub2()
            }
        }, [])

        if (props.authenticated === false){
            return <Navigate to="/admin-login" />
          }

    return <>
    <div id='admin-edit-popup' ></div>
    <div id='edit-popup-content'>
        <div id='admin-edit-popup-content' > 
            <button id='close-popup-btn' onClick={closePopUp}>
                <i className='fas fa-times'> </i>
            </button>

            <form>
            <h5>
                    Introduction
            </h5>
                <textarea id="txtArea" rows="7" cols="70" style={{resize: "none", borderRadius: "7px"}}></textarea>
                <input className="submit-btn" type="submit" value={"Save"} onClick={updateIntro}></input>
            </form>

    </div>
    

    </div>

    <div id='edit-popup-content2' >
        <div id='admin-edit-popup-content2' > 
            <button id='close-popup-btn2' onClick={closePopUp}>
                <i className='fas fa-times'> </i>
            </button>

            <form>
            <div id="form-geninfo-container">


            <div>

            <h5>
                    Email
            </h5>
            <input id="form-gi-email" type="email"></input>
            </div>
            <div>
            <h5>
                    Contact Number
            </h5>
            <input id="form-gi-number" type="text"></input>
            </div>
            </div>
            <h5>
                    Brief Description
            </h5>
                <textarea id="txtArea2" rows="7" cols="70" style={{resize: "none", borderRadius: "7px"}}></textarea>
                <input className="submit-btn" type="submit" value={"Save"} onClick={updateGenInfo}></input>
            </form>

    </div>
    </div>

    
    <div id='edit-popup-content3' >
        <div id='admin-edit-popup-content3' > 
            <button id='close-popup-btn3' onClick={closePopUp}>
                <i className='fas fa-times'> </i>
            </button>

            <form>
            <div id="form-geninfo-container">


            <div>

            <h5>
                    Product Name
            </h5>
            <input id="form-product-name" type="text"></input>
            </div>
            <div>
            <h5>
                    Price
            </h5>
            <input id="form-product-price" type="number"></input>
            </div>
            </div>
            <h5>
                    Description
            </h5>
                <textarea id="txtArea3" rows="7" cols="70" style={{resize: "none", borderRadius: "7px"}}></textarea>
                <input id="image-form" type="file" accept="image/*" onChange={uploadFile} ></input>
                <input id="product-btn" className="submit-btn" type="submit" value={"Save"} onClick={updateProduct}></input>
            </form>

    </div>
    </div>

    <div id="admin-content">
    <div id="admin-header">
        <h1>Hello, Fatima!</h1>
        <p>Welcome to the editing and customization hub of your website! This particular page is designed to empower you with the ability to effortlessly modify and update the various specific parts of your website, tailoring it to your precise preferences and requirements.
        </p><p style={{display: "block"}}>
This page serves as your centralized control panel. Its purpose is to facilitate seamless editing by providing you with a clear roadmap of distinct sections, each representing a unique page or component. In case you have problems with navigating through your website, you may view the program documentation&nbsp;
<a href="https://drive.google.com/file/d/1gIa8dN5iSFv7bwzr9Q4Wy6jRIGd2drDA/view?usp=share_link" target="_blank" style={{padding: 0, margin: 0, textDecoration: "underlined"}}>here</a>.

</p>
    </div>
    <div id="admin-edit-content">
        <h1>Edit Content</h1>
        <div id="gen-info" className="editable-content">
            <div className="editable-content-title">
                <h3>
                General Information
                </h3>
            </div>
            <div className="admin-introduction">
                <h5 style={{display: "none"}}>
                    <span>Details</span>
                    <i className="fa fa-plus" style={{width: "auto", height: 50, position: "relative", textAlign: "center", alignItems: "center", display: "none", justifyContent: "right"}} onClick={showPics2}></i>
                    </h5>
                <div id="geninfo-container" style={{display: "flex"}}>
                <div id="geninfo-wrapper">
                <h5 style={{borderBottom: "none"}}>
                    Email
                    </h5>
                    <h5 style={{borderBottom: "none"}}>
                    Contact Number
                    </h5>
                    <h5 style={{borderBottom: "none"}}>
                    Brief Description
                    </h5>
                </div>
                <div id="gen-info-wrapper" >
                <p id="gi-email" style={{marginBottom: "30px", textOverflow: "ellipsis", maxWidth: "40vw", whiteSpace: "nowrap", overflow: "hidden"}}>center_fatima@yahoo.com</p>
                <p id="gi-contact" style={{marginBottom: "30px", textOverflow: "ellipsis", maxWidth: "40vw", whiteSpace: "nowrap", overflow: "hidden"}}> +63 (938) 083 0733</p>
                <p> </p>
                <p id="gi-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </p>
                </div>
                </div>
               

                    <button id="genInfo" className="edit-btn active" onClick={openPopUp}>Edit</button>
                </div>
            {/* <div className="admin-pictures-container">
                    <h5>
                    Pictures
                    </h5>
                    <div className="admin-pictures-wrapper">
                    <img id="wwd1"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('wwd1-file-selector').click()}}></i>
                        <input id="wwd1-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>
                    <div className="admin-pictures-wrapper">
                    <img id="wwd2"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('wwd2-file-selector').click()}}></i>
                        <input id="wwd2-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>
            </div> */}

        </div>
        <div id="homepage" className="editable-content">
            <div className="editable-content-title">
                <h3>
                Homepage
                </h3>
            </div>
            <div className="admin-pictures-container">
                    <h5>
                    <span>Pictures</span>
                    <i className="fa fa-plus" style={{width: "auto", height: 50, position: "relative", textAlign: "center", alignItems: "center", display: "none", justifyContent: "right"}} onClick={showPics}></i>
                    </h5>
                    <div className="admin-pictures-wrapper">
                    <img id="home1"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('home1-file-selector').click()}}></i>
                        <input id="home1-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>
                    <div className="admin-pictures-wrapper">
                    <img id="home2"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('home2-file-selector').click()}}></i>
                        <input id="home2-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>
            </div>
        </div>
        <div id="what-we-do" className="editable-content">
            <div className="editable-content-title">
                <h3>
                What We Do Page
                </h3>
            </div>
            <div className="admin-introduction">
                    <h5>
                    <span>Introduction</span>
                    <i className="fa fa-plus" style={{width: "auto", height: 50, position: "relative", textAlign: "center", alignItems: "center", display: "none", justifyContent: "right"}} onClick={showPics}></i>
                    </h5>
                    <p id="whatWeDoIntro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </p>
                    <button id="whatWeDoIntro" className="edit-btn" onClick={openPopUp}>Edit</button>
                </div>
            <div className="admin-pictures-container">
                    <h5>
                    <span>Pictures</span>
                    <i className="fa fa-plus" style={{width: "auto", height: 50, position: "relative", textAlign: "center", alignItems: "center", display: "none", justifyContent: "right"}} onClick={showPics}></i>

                    </h5>
                    <div className="admin-pictures-wrapper">
                    <img id="wwd1"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('wwd1-file-selector').click()}}></i>
                        <input id="wwd1-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>
                    <div className="admin-pictures-wrapper">
                    <img id="wwd2"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('wwd2-file-selector').click()}}></i>
                        <input id="wwd2-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>
            </div>

        </div>
        <div id="offers" className="editable-content">
            <div className="editable-content-title">
                <h3>
                Offers Page
                </h3>
            </div>
            <div className="admin-introduction">
                    <h5>
                    <span>Introduction</span>
                    <i className="fa fa-plus" style={{width: "auto", height: 50, position: "relative", textAlign: "center", alignItems: "center", display: "none", justifyContent: "right"}} onClick={showPics}></i>
                    </h5>
                    <p id="offersIntro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </p>
                    <button id="offersIntro" className="edit-btn" onClick={openPopUp}>Edit</button>
            </div>
            
            <div id="admin-products-container">
            <div className="admin-products">
                <img></img>
                <div>
                    <h5>
                    Name of Product
                    </h5>
                    <p>
                    Php ###.##
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>
                <div>
                <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
                </div>
            </div>
            </div>

            <div id="add-container">
                <img src={add1} id="add-img" style={{height: 100, width: 100, aspectRatio: "1/1"}} onClick={openProductsPopUp}></img>
                <img src={add2} id="add2-img" onClick={openProductsPopUp} style={{aspectRatio: "1/1", width: 40}}></img>
            </div>
        </div>
        <div id="about-us" className="editable-content">
            <div className="editable-content-title">
                <h3>
                About Us Page
                </h3>
            </div>
            <div className="admin-introduction">
                    <h5>
                    <span>Introduction</span>
                    <i className="fa fa-plus" style={{width: "auto", height: 50, position: "relative", textAlign: "center", alignItems: "center", display: "none", justifyContent: "right"}} onClick={showPics}></i>
                    </h5>
                    <p id="aboutUsIntro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </p>
                    <button id="aboutUsIntro" className="edit-btn" onClick={openPopUp}>Edit</button>
                </div>
            <div className="admin-pictures-container">
                    <h5>
                    <span>Pictures</span>
                    <i className="fa fa-plus" style={{width: "auto", height: 50, position: "relative", textAlign: "center", alignItems: "center", display: "none", justifyContent: "right"}} onClick={showPics}></i>

                    </h5>
                    <div className="admin-pictures-wrapper">
                    <img id="au1"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('au1-file-selector').click()}}></i>
                        <input id="au1-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>
                    <div className="admin-pictures-wrapper">
                    <img id="au2"></img>
                    <i className="far fa-edit" onClick={ () => {document.getElementById('au2-file-selector').click()}}></i>
                        <input id="au2-file-selector" type="file" accept="image/*" onChange={uploadFile} style={{display: "none"}}></input>
                    </div>

            </div>

        </div>
    </div>
    </div>
    </>
}

export default AdminPage