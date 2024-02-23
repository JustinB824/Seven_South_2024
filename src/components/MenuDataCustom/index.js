import React, { useEffect, useState } from 'react'

function MenuDataCustom(props) {

    const [menuList, setMenuList] = useState([]);
    const [breadList, setBreadList] = useState([]);
  
    useEffect(() => {
      fetch(props.menuData)
        .then(res => res.json())
        .then((result) => {
          const customList = []
          const breadItemList = []
          const meatList = []
          const cheeseList = []
          const toppingsList = []
          const condimentsList = []
          result.values.forEach((item, i) => {
            if (item[0] !== '') {
                let menuObj = {'id': i, 'bread': item[0], 'price': item[1]}
                breadItemList.push(menuObj)
            }
            meatList.push(item[2])
            cheeseList.push(item[3])
            toppingsList.push(item[4])
            condimentsList.push(item[5])
          })
          customList.push(meatList.filter(item => item), cheeseList.filter(item => item), toppingsList.filter(item => item), condimentsList.filter(item => item))
          breadItemList.shift()
          setBreadList(breadItemList)
          setMenuList(customList)
        })
    }, [])

    const breadLayout = breadList.map((items) => 
        <li key={items.id}><p className='custom_item'>{items.bread}</p> <p className='price'>{items.price}</p></li>
    )
    const menuLayout = menuList.map((categories, i) => (
        <div key={i}>
            <h4 className='lato-bold'>{categories[0]}</h4>
            <ul>
                {categories.slice(1).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    ))

    return (
        <div className='custom'>
            <h3>{props.title}</h3>
            <p>Your choice of bread, meat, cheese, and toppings to create your own masterpiece</p>
            <div>
                <h4 className='lato-bold'>Bread</h4>
                <ul>
                    {breadLayout}
                </ul>
            </div>
            <div>
                {menuLayout}
            </div>
        </div>
    )
}

export default MenuDataCustom