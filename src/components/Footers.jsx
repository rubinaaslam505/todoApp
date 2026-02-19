import footerContact from "/footerAPI.json";
import {IoCallSharp} from "react-icons/io5";
import {MdPlace} from "react-icons/md";
import {TbMailPlus} from "react-icons/tb";

import { NavLink } from "react-router-dom";
export const Footers=()=>{
    const footerIcon={
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };
    return(
        <footer className="footer-section bg-violet-100 ">
         <div className="container grid grid-cols-3 mx-28 font-bold">
            {footerContact.map((curData, index)=>{
                const{icon,title,detail}= curData;
            return(
                    <div className="footer-Content" key={index}>
                         
                        
                        <div className="icon">{footerIcon[icon]}</div>
                        <div className="footer-contact-text">
                            <p>{title}</p>
                            <p>{detail}</p>
                        </div>
                    </div>
                )
            })}
        
            
         </div>
        
        </footer>
    )
}