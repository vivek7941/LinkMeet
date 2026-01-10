import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>Link Meet</h2>
                    <h7>By Vivek !</h7>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
                        router("/guest")
                    }}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/login")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>

                    <p style={{fontWeight: "bold"}}>Experience seamless video calls and instant messaging with Link Meet. Stay connected, anytime, anywhere.</p>

                    <div role='button'>
                        <Link to={"/auth"} style={{fontWeight: "bold"}}>Get Started</Link>
                    </div>
                </div>
                

                   

                
            </div>



        </div>
    )
}