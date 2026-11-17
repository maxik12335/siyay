import classes from "./NavbarBase.module.css"
import { NavLink } from "react-router-dom";
import MobileMenu from "../../MobileMenu/MobileMenu";
import { NAV_LINKS } from "../../../data/links";

// NAV_LINKS - массив с ссылками в src/data/links.js
// стили для статчиного меню bg-color и color в .navbar

const NavbarBase = () => {
  
  return (
   <div className={`${classes.navbar} line-dark`}>
      <div className="container-navbar">

        <div className={classes.desctopMenu}>
          <p className="text-base">сияй</p>

          <div className={classes.menu}>
            {NAV_LINKS.map(link => (
              <a key={link.to} className="text-sm hover" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <MobileMenu />

      </div>
    </div>
  )
}

export default NavbarBase;