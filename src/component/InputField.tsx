import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#A0AAB4',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#A3A3A3',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#A3A3A3',
        },
        borderRadius: '10px',
    },
});

export default function InputField({
    onChange,
    width,
    type,
    label
}: {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    width: string,
    type: string,
    label: string
}) {

    return (
        <CssTextField id="outlined-basic" size="small" label={label} variant="outlined" type={type} onChange={onChange} style={{width: width}}/>
    )
}