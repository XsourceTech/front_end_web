import React from 'react';
import '../../main.scss';
import Card from '../../component/Card'
import Grid from '@mui/material/Grid';
import AboutList from '../../assets/json/about.json';

export default function About() {

    return (
        <div id="about" className='middle_horizontal'>
            <div className='middle_vertical' style={{height: '100vh'}}>
                <h1>为什么选择信源AI ?</h1>
                <Grid item xs={8}>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid key={0} item>
                            <Card title="Accuracy" description='X-Source AI provides unparalleled accuracy in data analysis.'/>
                        </Grid>
                        <Grid key={1} item>
                            <Card title="Reliability" description='Count on X-Source AI for consistent and dependable results.'/>
                        </Grid>
                        <Grid key={2} item>
                            <Card title="Customization" description='Our solutions are tailored to meet your unique business needs and challenges.'/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}