import React, {useState} from "react"
import "./ContactIn.css";
const ContactIn = () => {
    const [user, setUser] = useState({
        name:"",
        email:"",
        phone:"",
        address:"",
        message:"",
    });
    let name, value;
    const getUserData =(event) =>{
        name = event.target.name;
        value = event.target.value;

        setUser({...user, [name]:value})
    };
    const postData = async(e) =>{
        e.preventDefault();

        const {name, email, phone, address, message} = user;
        
        if(name && email && message){

            const res = await fetch(
                "https://reactform-e4970-default-rtdb.firebaseio.com/reactform.json",
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        address,
                        message,
    
                    })
                }
            );
            if(res){
                setUser({
                    name:"",
                    email:"",
                    phone:"",
                    address:"",
                    message:"",
                });
                alert("Thanks For Messaging")
             }

        }else{
            alert("Please Fill The All Data")

        }

        
    }
    return(
    <>
    <div className="container-contact100">
    <div className="wrap-cintact100">
    <form className="contact100-form " method="POST">
    <p>Inbox Me</p>
        {/* <div className="name"> */}
         <input 
         type="text"
         name="name"
         value={user.name}
         onChange={getUserData}
         placeholder="Enter Name*" 
         required
         /> 
          <input 
         type="text"
         name="email"
         value={user.email}
         onChange={getUserData}
         placeholder="Enter Email*" 
         required
         /> 
         <input 
         type="text"
         name="phone"
         value={user.phone}
         onChange={getUserData}
         placeholder="Phone Number" 
         /> 
         <input 
         type="text"
         name="address"
         value={user.address}
         onChange={getUserData}
         placeholder="Address" 
         /> 
        <textarea 
         type="text"
         name="message"
         value={user.message}
         onChange={getUserData}
         placeholder="Write Message here*..." 
         cols="46"
         rows="10"
         required
         /> 
         <button 
        //  type="submit"
         onClick={postData} 
         >Submit</button>
    {/* </div> */}
    </form>
    </div>
    </div>
    
    </>
    )
}
export default ContactIn;