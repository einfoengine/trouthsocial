"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
    {name: "Feed", href: "/", count: 3},
    {name: "Message", href: "/messages", count: 23},
    {name: "Friends", href: "/friends", count: 400},
    {name: "Pages", href: "/pages", count: 2},
    {name: "Groups", href: "/group", count: 1}
]

const SideMenu = () => {
    const pathName = usePathname();
    return(
        <div className="ntcom nt-side-menu">
            <ul>
                {menuItems.map((menu, index)=>{
                    {console.log("Menu name: ",menu.name)}
                    return (
                        <li key={menu.name+index} className="ntmlst">
                            <Link className={menu.href===pathName?"ntmitm ntact":"ntmitm"} href={"/"}><span className="ntmtxt"><i className="fa-solid fa-house"></i>{menu.name}</span><span className="ntpl">{menu.count}</span></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default SideMenu;