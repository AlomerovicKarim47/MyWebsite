import React from 'react';
import "./AboutPage.css"

const AboutPage = () => {
    return (
        <div className = "container">
            <div className = "about">
                <span className = "about-title">
                    <span>W</span>
                    <span>e</span>
                    <span>l</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>e</span>
                </span>
                <section className = "about-text">
                    Hey, I'm Karim. 
                    A web developer from Bosnia and Herzegovina. 
                    I'm here to provide you with
                    a cool, clean cut website that will
                    compliment you, your idea or your business.
                </section>
                <div class="tools-wrapper">
                    <span className = "powered-by">Powered by:</span>
                    <section className = "tools">
                        <div className = "tool"></div>
                        <div className = "tool"></div>
                        <div className = "tool"></div>
                        <div className = "tool"></div>
                        <div className = "tool"></div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
