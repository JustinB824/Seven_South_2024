import React, { useEffect, useState } from 'react'
import './intro.scss'
import Logo from './img/logo-side.png'

function Intro() {

    const [hoursList, setHoursList] = useState([]);

    useEffect(() => {
        fetch('https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/hours?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs')
            .then(res => res.json())
            .then((result) => {
                setHoursList(result.values)
            })
        }, [])
  
    const hoursLayout = hoursList.map((hours, i) => 
        (i === 0) ? <h4 key={i}>{hours}</h4> : <p key={i}>{hours}</p>
    )

    return (
        <section id="intro">
            <div className="hero_image"></div>
            <h1>7 South Sandwich Company</h1>
            <h2>Making great breakfast and lunch for the residents and visitors of Middlebury, VT.</h2>
            <img src={Logo} alt="7 South Sandwich Company logo" />
            <h3>Follow our <a href="https://www.facebook.com/7south/" target="_blank">Facebook</a> 
            <span> and </span><a href="https://www.instagram.com/7southsandwichcompany/" target="_blank">Instagram</a> for Daily Specials!</h3>
            <p>- and/or -</p>
            <h3>Call ahead to place your order.<a href="tel:802-388-3354">802-388-3354</a></h3>
            {hoursLayout}
        </section>
    )
}

export default Intro