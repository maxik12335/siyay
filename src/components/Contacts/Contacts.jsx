import classes from './Contacts.module.css'

import wp from '../../assets/media/wp.png'
import tg from '../../assets/media/tg.png'

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <iframe className={classes.map} src="https://yandex.ru/map-widget/v1/?ll=37.661671%2C55.596203&mode=whatshere&whatshere%5Bpoint%5D=37.661671%2C55.596203&whatshere%5Bzoom%5D=17&z=16"></iframe>
      <p className={'text-base'} style={{textAlign: 'center'}}>Москва, Бирюлёвская улица, 24, корп. 1</p>
      {/* {classes.address} */}
      <a className={`text-base hover`} href='tel:+79771042821'>+7 977 104 28 21</a>
      {/* ${classes.tel} */}
      <div className={classes.icons}>
        <a className={`${classes.icon__link} hover`} href="#">
          <img className={classes.icon__img} src={wp} alt="watsapp" />
        </a>
        <a className={`${classes.icon__link} hover`} href="#">
          <img className={classes.icon__img} src={tg} alt="telegram" />
        </a>
      </div>
    </div>
  )
}

export default Contacts;