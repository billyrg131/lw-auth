import React, {useState} from "react";
import{createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth"
import {auth} from "../fb-config"
import cloud from "../assets/cloud.jpeg";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";



function Form(){
    const[regEmail, setRegEmail]= useState("");
    const[regPass, setRegPass]= useState("");
    const[logInEmail, setLogInEmail]= useState("");
    const[logInPass, setLogInPass]= useState("");

    const[user, setUser] = useState({});
    const[message, setMessage]= useState("");

    let navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })

    const register = async () => {
        try{
            const regUser = await createUserWithEmailAndPassword(auth, regEmail,regPass);
            console.log(regUser)
            setMessage("Registered Successfully!")
        }
        catch(error){
            alert(error.message);
        }
    }
    const logIn = async () => {
        try{
            const logInUser = await signInWithEmailAndPassword(auth, logInEmail,logInPass);
            console.log(logInUser)
            setMessage("Signed Up Successfully!")
            navigate("/");
        }
        catch(error){
            setMessage(error.message);
        }
    }
    const logOut = async () => {
        await signOut(auth)
    }

    return(
        <div>
            <div className="message">
                <h1 style={{fontFamily:"Merriweather, sans-serif", fontSize:"22px"}}>{message}</h1>
            </div>
            <div className="authForm">
                <div>
                    <img src={cloud} height="110" width="110" className="formImg"/><br/>
                    <br/>
                    <h3 style={{fontFamily: "Ubuntu, sans-serif", fontWeight:"900"}}>Sign Up</h3><br/>
                    <input className="formInput" placeholder="Email" 
                    onChange={(e)=>{setRegEmail(e.target.value)}}/><br/><br/>
                    <input className="formInput" placeholder="Password" 
                    onChange={(e)=>{setRegPass(e.target.value)}} />
                    <button onClick={register} className="formBtn">Create User</button>
                </div>
                <br/>
                <br/>
                <div>
                    <h3 style={{fontFamily: "Ubuntu, sans-serif", fontWeight:"900"}}>Log In</h3><br/>
                    <input className="formInput" placeholder="Email" 
                    onChange={(e)=>{setLogInEmail(e.target.value)}}/><br/><br/>
                    <input className="formInput" placeholder="Password" 
                    onChange={(e)=>{setLogInPass(e.target.value)}}/>
                    <button onClick={logIn} className="formBtn">Log In</button>
                </div>
            </div>
            <div>
                <h3>User Logged In:</h3>
                {user?.email}<br/>
                <button onClick={logOut} className="formBtn">Sign Out</button>
            </div>
        </div>
        
    );
}
export default Form;