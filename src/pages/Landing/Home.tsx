import React from 'react';
import NavBar from '../../component/NavBar/NavBar';
import About from './About';
import Plan from './Plan';
import '../../main.scss';
import './Home.scss';
import illustration from '../../assets/home_illustration.svg'

export default function Home() {
    return (
        <>
            <NavBar />
            <section>
                <div id="home" className="home linear_bg">
                    <div className='name_slogan'>
                        <h1>XSource</h1>
                        <h4>
                            精准为先，智能助力
                        </h4>
                    </div>
                    <img src={illustration} alt="home-main-img" className='illustration_img' />
                </div>
                <About />
                <Plan />
            </section>
            {/* <Footer /> */}
        </>
    );
}
