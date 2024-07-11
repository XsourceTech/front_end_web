import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import  * as FcIcons from "react-icons/fc";
import './connection.scss';
import TextField from '@mui/material/TextField';

const BootstrapButton = styled(Button)({
    borderRadius: '10px',
    textTransform: 'none',
    width: '25rem'
})

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#E0E3E7',
        },
        borderRadius: '10px',
        width: '25rem',
    },
});

export default function Login() {
    return (
        <div className='middle_horizontal linear_bg'>
            <div className='middle_vertical'>
                <div className='connection_title'>
                    <img src={logo} alt="logo" className="middle_logo" />
                    <h3>Welcome to Xsource !</h3>
                </div>

                <BootstrapButton variant="outlined" startIcon={<FcIcons.FcGoogle />}>
                    Sign up with Google
                </BootstrapButton>

                <CssTextField id="outlined-basic" size="small" label="Email" variant="outlined" />

                <BootstrapButton variant="outlined">Already have account. Log in here</BootstrapButton>
            </div>
        </div>
    );
}
