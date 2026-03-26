import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='main-container'>
            <div className='about-container'>
                <h1 className='home-title'>About BuyerForeSight</h1>

                <div className='about-content'>
                    <div className='about-section'>
                        <h2 className='section-title'>Our Mission</h2>
                        <p className='section-text'>
                            At BuyerForeSight, we empower businesses with data-driven insights to make informed purchasing decisions.
                            Our platform leverages advanced analytics and user data to provide comprehensive buyer intelligence.
                        </p>
                    </div>

                    <div className='about-section'>
                        <h2 className='section-title'>What We Do</h2>
                        <p className='section-text'>
                            We analyze user patterns, preferences, and behaviors to deliver actionable insights that help businesses
                            understand their customers better. Our real-time analytics dashboard provides a comprehensive view of
                            buyer behavior and market trends.
                        </p>
                    </div>

                    <div className='about-section'>
                        <h2 className='section-title'>Why Choose Us</h2>
                        <div className='features-grid'>
                            <div className='feature-card'>
                                <h3>Real-time Analytics</h3>
                                <p>Get instant insights into buyer behavior and market trends</p>
                            </div>
                            <div className='feature-card'>
                                <h3>Data-driven Decisions</h3>
                                <p>Make informed choices backed by comprehensive user data</p>
                            </div>
                            <div className='feature-card'>
                                <h3>User-friendly Interface</h3>
                                <p>Intuitive dashboard designed for seamless user experience</p>
                            </div>
                            <div className='feature-card'>
                                <h3>Advanced Insights</h3>
                                <p>Deep dive into analytics with our powerful reporting tools</p>
                            </div>
                        </div>
                    </div>

                    <div className='about-section'>
                        <h2 className='section-title'>Get Started</h2>
                        <p className='section-text'>
                            Ready to transform your business with buyer intelligence? Explore our platform and discover
                            the power of data-driven decision making.
                        </p>
                        <button className='cta-button'>Explore Features</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About