import classes from './Home.module.css';
// import SliderFeedback from "../../components/SliderFeedback/SliderFeedback";
// import SliderPortfolio from "../../components/SliderPortfolio/SliderPortfolio";
import Price from '../../components/Price/Price';
import Contacts from '../../components/Contacts/Contacts';
import SliderSwFeedback from '../../components/SliderSwFeedback/SliderSwFeedback';
import SliderSwPortfolio from '../../components/SliderSwPortfolio/SliderSwPortfolio';
import Btn from '../../components/UI/Btn/Btn'
import mainImg from '../../assets/main.png'
import Close from '../../components/UI/Close/Close';
import Modal from '../../components/Modal/Modal';
import wp from '../../assets/media/wp.png'
import tg from '../../assets/media/tg.png'
import { useState } from 'react';

  // { href: '/', label: 'главная' },
  // { href: '/feecbacks', label: 'отзывы' },
  // { href: '/портфолио', label: 'портфолио' },
  // { href: '/price', label: 'цены' },
  // { href: '/contacts', label: 'контакты' },
const Home = () => {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <div className="body">
      <section className="section line-dark" id='main'>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.header}>
              <h1 className="h1">Сияй</h1>
              <h2 className="text-base">Ногтевая студия</h2>
              <Btn isColor='dark' size='sm' style={{marginTop: "20px"}} onClick={() => setIsOpen(true)}>записаться</Btn>
            </div>
            <img className={classes.mainImg} src={mainImg} alt="main" />
          </div>
          {isOpen &&
              <Modal>
                <Close onClick={() => setIsOpen(false)}/>
                <div className={classes.links}>
                  <Btn href='tel:+79771042821' target="_self">
                    +7 977 104 28 21
                  </Btn>
                  <Btn href='https://wa.me/79771042821'>
                    <img className={classes.imgMedia} src={wp} alt="watsapp" />
                    WatsApp
                  </Btn>
                  <Btn href='https://telegram.me/Shine_nail_studio'>
                    <img className={classes.imgMedia} src={tg} alt="telegram" />
                    Telegram
                  </Btn>
                </div>
              </Modal>
            }
        </div>
      </section>

      <section className="section line-dark" id='portfolio' style={{position: 'relative'}}>
        <div className="container">
          <SliderSwPortfolio />
        </div>
      </section>

      <section className="section line-dark" id='price'>
        <div className="container">
          <Price />
        </div>
      </section>

      <section className="section line-dark" id='feedbacks' style={{position: 'relative'}}>
        <div className="container">
          <SliderSwFeedback isModal={false}/>
        </div>
      </section>

       <section className="section line-dark" contacts='contacts'>
        <div className="container">
          <Contacts />
        </div>
      </section>
    </div>
  )
}

export default Home;