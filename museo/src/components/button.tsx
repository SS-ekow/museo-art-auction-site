"use client";

import React from "react";
import styled from "styled-components";

interface ButtonProps {
    name: string;
    icon?: React.ReactNode;
    background?: string;
    color?: string;
    border? : string;

}


function Button({name, icon, background="var(--bg-color)", color, border}: ButtonProps){
    return (
        <ButtonStyled style={{
            background: background,
            color: color,
            border: border

        }}>
            {icon && icon}
            {name}
        </ButtonStyled>
    )
}


const ButtonStyled = styled.button`
    padding: 0.5rem 1.5rem;
    border: 1px solid gray;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.2rem;

    &:hover {
        background: #161616;
        color: white;
    }

`;

export default Button;