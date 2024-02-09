import React, { useEffect, useState } from 'react'

// Can also do this to avoid props. - function MenuDataCommon({name, price, desc, addT1, addP1, addT2, addT3}) {
// {`../images/${props.img}`}

function MenuDataCommon(props) {

    const [menuList, setMenuList] = useState([]);
  
    useEffect(() => {
      fetch(props.menuData)
        .then(res => res.json())
        .then((result) => {
          const menuObjList = []
          result.values.forEach((item, i) => {
            let menuObj = {'id': i, 'name': item[0], 'price': item[1], 'description': item[2]}
            if (item[3]) {
                menuObj.addText1 = item[3]
                menuObj.addPrice1 = item[4]
            }
            if (item[5]) {
                menuObj.addText2 = item[5]
                menuObj.addPrice2 = item[6]
            }
            if (item[7]) {
                menuObj.addText3 = item[7]
                menuObj.addPrice3 = item[8]
            }
            menuObjList.push(menuObj)
          })
          menuObjList.shift()
          setMenuList(menuObjList)
        })
    }, [])

    const menuLayout = menuList.map((items) => 
        <li key={items.id}>
            {items.name && <h4>{items.name}</h4>}
            {items.price && <p>{items.price}</p>}
            {items.description && <p>{items.description}</p>}
            {items.addText1 && <p><span>{items.addText1}</span> <span>{items.addPrice1}</span></p>}
            {items.addText2 && <p><span>{items.addText2}</span> <span>{items.addPrice2}</span></p>}
            {items.addText3 && <p><span>{items.addText3}</span> <span>{items.addPrice3}</span></p>}
        </li>
    )

    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                {menuLayout}
            </ul>
        </div>
    )
}

export default MenuDataCommon