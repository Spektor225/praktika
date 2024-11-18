import { useState } from "react";

import { IoChevronBack } from "react-icons/io5";
import { MdModeNight } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { color_theme } from "./Global_enum";





export const Bar = (props) =>
{
    const [ActivMode, set_ActivMode] = useState(color_theme.light)



    const FunSetMode = (mode) =>
    {
        mode === color_theme.light ? document.body.className = 'light_theme' : document.body.className = 'dark_theme'

        set_ActivMode(mode)
    }

    

    return(
        <div className='bar'>
            <div onClick={ props.onClick_ButtonBack }>
                {
                    props.visibleButtonBack && <IoChevronBack size={30} className="icon"/>
                }
            </div>
            <div>
                {
                    ActivMode === color_theme.light ?
                    <MdModeNight size={30} className="icon" onClick={ () => FunSetMode(color_theme.dark) }/>
                    :
                    <MdOutlineLightMode size={30} className="icon" onClick={ () => FunSetMode(color_theme.light) }/>
                }
            </div>
        </div>
    )
}


