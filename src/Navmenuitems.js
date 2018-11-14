import React  from 'react'
import Navmenuitem from './Navmenuitem'
import Submenuitems from './submenuitems'

const navmenuLinks=[
    {
        label:"Home",
        
    },
    {
        label:"Services",
         subnavmenuLinks:[
            {
                label:"For Entreprneurs",
            },
            {
                label:"For Students",
            },
            {
                label:"For Hobbyists",
            },
            ],
        statut:"isShown"
        },
        
    {
        label:"Partners",
    },
    {
        label:"Contact",
    },
    ]

const Navmenuitems=(props)=>

navmenuLinks.map((navitem, i)=>
<div key={i} className={`${navitem.statut} navmenu-items`} >
 <Navmenuitem list_menu={navitem}/>
    
{navitem.subnavmenuLinks && <div className="subnavmenu"><Submenuitems  submenulist={navitem.subnavmenuLinks} /> </div>

}          
</div>

)

  



export default Navmenuitems;