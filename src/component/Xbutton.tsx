import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';


const BootstrapButton = styled(Button)({
    borderRadius: '10px',
    textTransform: 'none',
    borderColor: '#A3A3A3',
    color: '#434343',
    fontFamily: "dong-qing"
})

export default function Xbutton({
    onClick,
    width,
    text,
    startIcon,
    outlined
}: {
    onClick: () => void;
    width: string,
    text: string,
    startIcon: any,
    outlined: boolean
}) {
    console.log(text, width)

    return (
        <>
            {
                outlined ?
                    <BootstrapButton variant="outlined" startIcon={startIcon} style={{width: width}} onClick={onClick} >
                        {text}
                    </BootstrapButton> 
                :
                    <BootstrapButton variant="contained" startIcon={startIcon} style={{backgroundColor: '#3A3A3A', color: 'white', width: width}} onClick={onClick}>
                        {text}
                    </BootstrapButton> 

            }
        </>
    )
}