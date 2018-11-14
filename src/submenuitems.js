import React  from 'react'
import Submenuitem from './submenuitem'


const Submenuitems = (props) => {
    return props.submenulist.map((subnavitem, i) =>
        <div key={i} className="subnavmenu-items"> 
            <Submenuitem list_sub_menu={subnavitem}/>                
        </div>

    )
}


export default Submenuitems;