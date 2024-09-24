import React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    '& > :not(style) ~ :not(style)': {
      marginTop: theme.spacing(2),
    },
}));


export default function DividerOr() {

    return (
        <Root>
            <Divider>or</Divider>
        </Root>    
    )
}