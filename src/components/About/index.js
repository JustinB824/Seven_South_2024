import React from 'react'
import './about.scss'
import Amy from './img/amy.jpg'

function About() {
    return (
        <section id='about'>
            <h2>About Our Restaurant</h2>
            <h3>Everything you need to know about 7 South Sandwich Company</h3>

            <h4>Our Mission</h4>
            <p>7 South Sandwich Company strives to provide a warm and inviting environment where our customers can enjoy quality foods served by people that love what they do.</p>

            <h4>Our Founder</h4>
            <img src={Amy} className="founder_headshot" alt="Photo of Amy Sweet" />
            <p>Amy Sweet has been in the food service business for over 25 years. She spent most of her career managing her family's business, Green Peppers, in Middlebury VT, 
                where she excelled in all areas of the restaurant's operations and is bringing that expertise to her new endeavor, 7 South Sandwich Company. Amy has always been 
                active in the Middlebury community through her service as a volunteer on the ambulance, to her support of school activities, she is always there for people. 
                She has truly enjoyed this next chapter of her career by serving the area with quality food and service with a smile.</p>

            <h4>Contact Us</h4>
            <a href="https://maps.google.com/?saddr=Current+Location&daddr=1396+US-7,+Middlebury,+VT+05753/" target="_blank">1396 Rt 7 South Unit 4 Middlebury, VT 05753</a>
            <a href="tel:802-388-3354">802-388-3354</a>
            <a href="mailto:7southsandwichcompany@gmail.com">7southsandwichcompany@gmail.com</a>

            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.9949139550426!2d-73.14282122336766!3d43.99075843053262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb55cccea12e517%3A0x3ef6a245738a94e8!2s1396%20US-7%2C%20Middlebury%2C%20VT%2005753!5e1!3m2!1sen!2sus!4v1707317420398!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

        </section>
    )
}

export default About