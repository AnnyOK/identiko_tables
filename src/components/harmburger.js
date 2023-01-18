import React, { useState ,createContext} from 'react'
import { Menu } from './menu'
import { HarmMenu } from './styles'
export const Menucontext = createContext(null)
export function Harmburger(props) {
  const [openMenu, setOpenMenu] = useState(true)

return <Menucontext.Provider value={[openMenu, setOpenMenu]}>
   <div>
    {openMenu && <Menu  onClick={()=>setOpenMenu(!openMenu)} /> }
    {!openMenu &&<button onClick={()=>setOpenMenu(!openMenu)}><HarmMenu /></button>}</div>
</Menucontext.Provider>
}
