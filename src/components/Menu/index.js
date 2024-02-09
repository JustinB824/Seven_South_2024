import React from 'react'
import MenuDataCommon from '../MenuDataCommon'
import MenuDataCustom from '../MenuDataCustom'
import sections from './sections'

// price={blah} for anything other than a string
function Menu() {

    const menuSections = sections.map((section, i) => (
        section.id !== 'custom' ? (
            <MenuDataCommon 
                key = {i}
                title = {section.title} 
                menuData = {`https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/${section.id}?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs`}
            />
        ) : (
            <MenuDataCustom 
                key = {i}
                title = {section.title} 
                menuData = {`https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/${section.id}?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs`}
            />
        )
    )

    )
    return (
        <section id='menu'>
            <h2>Our Menu</h2>
            {menuSections}
        </section>
    )
}

export default Menu