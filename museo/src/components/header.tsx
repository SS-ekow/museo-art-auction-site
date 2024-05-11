"use client";

import Image from "next/image";
import React, { useRef } from "react";

import logo from "../../public/images/logo.png"
import painting from "../../public/images/painting.jpg"
import styled from "styled-components";
import Button from "./button";
import { MdOutlinePersonAdd } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { Jacquard_24 } from "next/font/google";
import hover3d from "../utils/hover";


const jacquard = Jacquard_24({
    subsets: ["latin"],
    weight: "400",
})




function Header(){

    const hero = useRef<HTMLDivElement>(null);
    
    const hoverHero = hover3d(hero, {
        x: 30,
        y: -40,
        z: 30,
    })
   

    return(
        <HeaderStyled ref={hero}>
            <nav>
                <div className="logo">
                    <Image src={logo} alt="logo" width={36} />
                    <h3>Muséo</h3>
                </div>
                <div className="input">
                    <input type="text" placeholder="Search"/>
                </div>
                <ul className="nav-items">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Auctions</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <Button name="Sign Up" icon={<MdOutlinePersonAdd />}/>
                </ul>
            </nav>
            <div className="header-content">
                <div className="text-content">
                    <h1 className={jacquard.className}>Discover, collect and sell masterpieces.</h1>
                    <p>Browse a collection of thousands of brilliant masterpieces from legendary artists all over the world.
                        Acquire expertise in navigating our digital hallways of boundless imagination transcribed into epic artworks from all over the world </p>

                    <div className="buttons">
                        <Button 
                        name = "Get Gtarted"
                        background = "#f2994a"
                        color = "white"
                        border = "1px solid #f2994a"
                        icon = {<FaRocket />}
                        />
                        <Button name="Learn More" background="transparent" color="white" border="1px solid white"/>
                    </div>
                    
                </div>
                <div className="image-content">
                    <Image
                        className="image"
                        src={painting}
                        alt="painting of the day"
                        width={400}
                        height={400}
                        style={{
                            transform: hoverHero.transform,
                        }}
                        />
                </div>
            </div>
        </HeaderStyled>
        
    )
}


const HeaderStyled = styled.header`
nav{
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid gray;
    display: flex;  
    justify-content: space-between;
    align-items: center;

    .logo{
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
    }

    .input{
        flex: 2;
        display: flex;
        justify-content: center;

        input{
            width: 55%;
            padding: 0.6rem 0.8rem;
            border-radius: 8px;
            background-color: #161616;
            border: 1px solid gray;
        }
    }

    .nav-items{
        display: flex;
        gap: 2rem;
        align-items: center;
    }
    li{
        transition: all 0.2s ease-in-out;
    }
    .nav-items li:hover{
        color: white;
        transform: scale(1.1);
    }
}

.header-content{
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: 90vh;

    .text-content{
        h1{
            font-size: clamp(2rem, 5vw, 3.5rem);
            transition: all 0.03s linear;
            padding-bottom: 1.5rem; 
        }

        .buttons{
            display: flex;
            gap: 1rem;
            margin-top: 2.5rem; 
        }

    }
    .image-content .image{
        padding: 1rem;
        border-radius: 10px;
        background-color: #161616;
        border: 1px solid gray;

        img{
            border-radius: 10px;
        }
    }
}
`;

export default Header;