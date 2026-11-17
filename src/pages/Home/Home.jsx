import classes from './Home.module.css';
// import SliderFeedback from "../../components/SliderFeedback/SliderFeedback";
// import SliderPortfolio from "../../components/SliderPortfolio/SliderPortfolio";
import Price from '../../components/Price/Price';
import Contacts from '../../components/Contacts/Contacts';
import SliderSwFeedback from '../../components/SliderSwFeedback/SliderSwFeedback';
import SliderSwPortfolio from '../../components/SliderSwPortfolio/SliderSwPortfolio';
import Btn from '../../components/UI/Btn/Btn'
import mainImg from '../../assets/main.png'

  // { href: '/', label: 'главная' },
  // { href: '/feecbacks', label: 'отзывы' },
  // { href: '/портфолио', label: 'портфолио' },
  // { href: '/price', label: 'цены' },
  // { href: '/contacts', label: 'контакты' },
const Home = () => {
  return (
    <div className="body">
      <section className="section line-dark" id='main'>
        <div className="container">
          <div className={classes.content}>
            <div className={classes.header}>
              <h1 className="h1">Сияй</h1>
              <h2 className="text-base">Ногтевая студия</h2>
              <Btn isColor='dark' size='sm' style={{marginTop: "20px"}}>записаться</Btn>
            </div>
            <img className={classes.mainImg} src={mainImg} alt="main" />
          </div>
          {/* <div className="content-down">
            <a className="text-base hover" href="tel:+79771042821">+7 977 104 28 21</a>
            
          </div> */}
        </div>
      </section>

      <section className="section line-dark" id='feedbacks' style={{position: 'relative'}}>
        <div className="container">
          <SliderSwFeedback isModal={false}/>
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

       <section className="section line-dark" contacts='contacts'>
        <div className="container">
          <Contacts />
        </div>
      </section>
    </div>
  )
}

export default Home;