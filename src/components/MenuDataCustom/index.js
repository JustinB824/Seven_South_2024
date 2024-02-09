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
        <li key={items.id}>{items.bread} <span>{items.price}</span></li>
    )
    const menuLayout = menuList.map((categories, i) => (
        <div key={i}>
            <h4>{categories[0]}</h4>
            <ul>
                {categories.slice(1).map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    ))

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <h4>Bread</h4>
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