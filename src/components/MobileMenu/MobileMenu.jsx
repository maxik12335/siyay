import { NavLink } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Close from '../UI/Close/Close'
import { NAV_LINKS } from '../../data/links'
import classes from './MobileMenu.module.css'
import { useState } from 'react'
import Burger from '../UI/Burger/Burger'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>

      <div className={classes.burgerBox}>
        <p className="text-base">сияй</p>
        <Burger onClick={() => setIsOpen(true)} />
      </div>

      {isOpen && 
        <Modal onClick={() => setIsOpen(null)}>
          <div className={classes.mobyleMenu}>
            <div className={classes.header}>
              <p className="h3">сияй</p>
              <Close onClick={() => setIsOpen(null)} />
            </div>

            <nav className={classes.menu}>
              {NAV_LINKS.map(link => (
                <a key={link.href} className={`${classes.link} text-base`} href={link.href} onClick={() => setIsOpen(null)}>
                  {link.label}
                </a>
              ))}
            </nav>

            <div className={classes.footer}>
              <a className="text-sm hover" href="https://wa.me/79771042821" target="_blank">watsapp</a>
              <a className="text-sm hover" href="https://telegram.me/Shine_nail_studio" target="_blank">telegram</a>
            </div>
          </div>
        </Modal>
      }

    </div>
  )
}

export default MobileMenu
