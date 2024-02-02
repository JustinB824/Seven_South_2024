import React, { useEffect, useState } from 'react'

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
        <section>
            <h1>7 South Sandwich Company</h1>
            <h2>Making great breakfast and lunch for the residents and visitors of Middlebury, VT.</h2>
            {hoursLayout}
        </section>
    )
}

export default Intro