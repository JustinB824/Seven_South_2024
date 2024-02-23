import React from 'react'
import './footer.scss'
import { ReactComponent as FbIcon } from './img/facebook_icon.svg'
import { ReactComponent as IgIcon } from './img/instagram_icon.svg'

function Footer() {
    return (
        <footer>
            <div className='site_container'>
                <a href="https://www.facebook.com/7south/" target="_blank" className="social_icon"><FbIcon /></a>
                <a href="https://www.instagram.com/7southsandwichcompany/" target="_blank" className="social_icon"><IgIcon /></a>
                <div>
                    <a href="https://maps.google.com/?saddr=Current+Location&daddr=1396+US-7,+Middlebury,+VT+05753/" className='address' target="_blank">1396 Rt 7 South Unit 4 Middlebury, VT 05753</a>
                    <a href="tel:802-388-3354">802-388-3354</a><span className='pipe'> | </span>
                    <a href="mailto:7southsandwichcompany@gmail.com">7southsandwichcompany@gmail.com</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer