import React from 'react';
import '../../App.css';
import './About.css'
import {Grid} from "@material-ui/core"

function About () {
    return (
        <div className="about-container">
            <div className="owners"> 
                <p>
                    <br></br>
                    <b>Freya Bansal</b>:<br></br>Co-Founder, business strategy and marketing, outreach, 3D modeling <br></br>
                    <br></br> 
                    <b>Raul Higareda</b>:<br></br> Co-Founder, web development
                </p>
            </div>
            <br></br>
            <br></br>
            <div className="about-text">
                <p>
                    The visual <span class='tab'></span>arts are diverse and require varying approaches to learning them. 
                    For someone looking to learn drawing or a new medium, they’d have to scour the internet 
                    for likely expensive classes with long commutes. There are various tutorials online that 
                    teach all mediums of art but there are just too many with no definitive way and the videos 
                    lack the personalization that interaction with teachers brings.
                </p>
                <br></br>
                <p>
                    Artsi alleviates the stress and uncertainty of becoming an artist through a monthly subscription 
                    model that divides our services into three tiers: free, Tier 1, Tier 2. We provide lessons that fit 
                    the users' preferences based on what abilities they aim to achieve.
                </p>
                <br></br>
                <p>
                    Additionally, the lesson videos and individualized feedback are provided by professional artists on 
                    social media that earn commission and have the opportunity to increase their following, teach private lessons, 
                    and gain gallery connections in the art community. This way we create symbiotic relationships between diverse artists 
                    that have the opportunity to learn from each other. 
                </p>
                <br></br>
                <p>
                    Our initial niche target audience is teenagers in schools near liberal arts colleges. However, Artsi 
                    is designed for people of all ages that have an interest in art. Artsi is divided into 
                    affordable tiers. The free tier provides limited yet captivating lesson videos at one skill level, 
                    access to the digital art platform and one free consultation and written feedback from a professional artist in any genre. 
                    The multitude of services available with the tier two subscription include: unlimited lesson videos at any desired skill level, 
                    unlimited feedback, access to the public feed, gallery networks, and credentials to request private tutoring. 
                </p>
                <br></br>
                <p>
                    Given the increase in dependence on online services and consistent audience interest in art and art tutoring, our market is stable. 
                    There are websites like Coursera and other educational websites but none are focused on the visual arts. Artsi provides an 
                    efficient and personalized experience with the benefit of infinite organized resources and human interaction on one platform. 
                </p>
            </div>
        </div>
    )
}

export default About;