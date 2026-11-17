import classes from './Btn.module.css'
import { NavLink } from 'react-router-dom';

const Btn = ({children, isColor='', size='md', to, href, active, ...props}) => {

  const STYLES = {
    dark: classes.dark,
    light: classes.light,
  }

  const SIZES = {
    sm: classes.sm,
    md: classes.md,
    lg: classes.lg,
  }

  const cls = [
    classes.btn,
    STYLES[isColor],
    SIZES[size],
    active ? classes.active : '',
    'text-sm'
  ].filter(Boolean).join(' ');

  if(href) {
    return (
      <a className={cls} href={href} target='_blank' {...props}>
        {children}
      </a>
    )
  }

  if(to) {
    return (
      <NavLink className={cls} to={to} {...props}>
        {children}
      </NavLink>
    )
  }
  
  return (
    <button className={cls} type="button" {...props}>
      {children}
    </button>
  )
    

  
  
}

export default Btn;