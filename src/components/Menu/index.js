import React from 'react'
import MenuDataCommon from '../MenuDataCommon'
import MenuDataCustom from '../MenuDataCustom'

// price={blah} for anything other than a string
function Menu() {
    return (
        <>
            <h2>Menu</h2>
            <MenuDataCommon 
                title = 'Sandwiches' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/sandwiches?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
            <MenuDataCommon 
                title = 'Baskets' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/baskets?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
            <MenuDataCustom 
                title = 'Custom Creations' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/custom?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
            <MenuDataCommon 
                title = 'Fried Food' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/fried?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
            <MenuDataCommon 
                title = 'Salads' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/salads?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
            <MenuDataCommon 
                title = 'Breakfast' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/breakfast?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
            <MenuDataCommon 
                title = 'Daily Variations' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/daily?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
            <MenuDataCommon 
                title = 'Thank you to our local vendors' 
                menuData = 'https://sheets.googleapis.com/v4/spreadsheets/1hMAq4IPDvrYAqX3WoruDkgMLr4XxRU_UnsqNKFxtvCQ/values/vendors?alt=json&key=AIzaSyBLtUkCiM_bC0DlF08A2YPVuUfVRfHBjJs' 
            />
        </>
    )
}

export default Menu