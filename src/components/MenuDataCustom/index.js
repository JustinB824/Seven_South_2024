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
          const flavoredList = []
          result.values.forEach((item, i) => {
            if (item[0] !== '') {
                let menuObj = {'id': i, 'bread': item[0], 'price': item[1]}
                breadItemList.push(menuObj)
            }
            if (item[2] !== '') { meatList.push(item[2]) }
            if (item[3] !== '') { cheeseList.push(item[3]) }
            if (item[4] !== '') { toppingsList.push(item[4]) }
            if (item[5] !== '') { condimentsList.push(item[5]) }
            if (item[6] !== '') { flavoredList.push(item[6]) }
          })
          customList.push(meatList, cheeseList, toppingsList, condimentsList, flavoredList)
          breadItemList.shift()
          setBreadList(breadItemList)
          setMenuList(customList)
        })
    }, [])

    const breadLayout = breadList.map((items) => 
        <p key={items.id}>{items.bread} <span>{items.price}</span></p>
    )
    const menuLayout = menuList.map((categories, i) => (
        <div key={i}>
            {categories.map((item, i) => (
                (i === 0) ? <h4>{item}</h4> : <p>{item}</p>
            ))}
        </div>
    ))

    return (
        <section>
            <h3>{props.title}</h3>
            <div>
                <h4>Bread</h4>
                {breadLayout}
            </div>
            {menuLayout}
        </section>
    )
}

export default MenuDataCustom