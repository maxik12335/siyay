import { useState } from 'react'
import Btn from '../UI/Btn/Btn'
import { Swiper, SwiperSlide } from 'swiper/react'
import {feedbacksList} from '../../data/feedbacks'
import 'swiper/css'
import 'swiper/css/navigation'

import classes from './SliderSwFeedback.module.css'

// УСТАНОВИТЬ: npm install swiper@14.4.0
const feedbacks = feedbacksList

const feedbacksLink = "https://yandex.ru/maps/org/siyay/242683496668/reviews/?filter=manicure_bin%3A1%3Balternate_vertical%3ARequestWindow&ll=37.660057%2C55.595616&mode=search&sctx=ZAAAAAgBEAAaKAoSCfpjWpvGskVAEd2ZCYZzUUxAEhIJ%2BFJ40Oy6lz8R%2BPpalxqhfz8iBgABAgMEBSgKOABA960HSAFqAnJ1ggEObWFuaWN1cmVfYmluOjGdAc3MzD2gAQCoAQC9AVnWonPCAZQBt%2BetzvwGktadqJQB2MntwMYFmtL8wYoHvKWImgTcqLrx78Cpsb4B3JHBiIgH7pbPxZcFp%2Bq%2F84MBtcih96AF14yozbkBx%2BrlzfEB7s31%2B%2FEE6Yaf2wT%2B%2FPqYOb6c7LajBJ%2FLkMHWAuCjlIUSv9314SfOmp67swXm%2BpeG4wWGyJHBbJrgw%2B%2F9BJDP0vfNBszjqPHnBYICDtC80LDQvdC40LrRjtGAigL5ATIwNDc2Mjg0NTcyJDE4NDEwNTgxNCQxODQxMDU4MTIkNzQwNzc2OTI5MSQxODQxMDU4MDYkODkyNTA4OTY0JDExMTEwNTQ3NDE1OSQxODQxMDU4MTgkMjM5NjI4ODUxODM1JDE4NDEwNTgxNiQyNDA0NDEzNDI3NDkkMTg0MTA2MDc0JDMwOTgxNjgxMjA4JDE4NDEwNTgyMCQxODQxMDU4MDgkMTAwMzAxMTAwMDE5JDE4NDEwNjExMiQ3MzU2MzQxNjk0OSQ4MjE4OTc5NTc4MCQxMjIyNzU4ODgxNjIkMTYxNTMyNjIxMzY3JDI0Mzc2NzYyNDYxM5ICAJoCDGRlc2t0b3AtbWFwc6oCpAQxNTA5NTk4OTE1OCwyMDc4NzQzOTI2OTAsMTEyOTI0NDU3OTEwLDY5Mjc0MzcwNTU5LDE5NzY3NDY0MTEsMzc3MTM1NjA0MzEsMjQwOTUwMTQ0Nzc4LDc2NDU0MTMxODMwLDM3NjY2MTcyNTEyLDM5NjUyNjUzMDYwLDk2NjIxODEwMzYsODA1NTUwOTAzLDI0MDc2NzMwNjY5NSwyMDQ0MjAwMjI0MjEsNjAwMjY1NSwxNjIwNTA0NDYxNzMsMjI0MDI2NzcyODAxLDIzMTU2ODU2OTI5NywyNjAzNDgzODg0LDYwODgzMTk1NjE4LDI4NDE3NzA0NSwyMDA1NDEwMzEwMDcsMzk2ODAxMTg1OCwxNjIzOTg4Mzk2MSwxMzk5NjE3MDUxNTUsNTU1ODM3MjU0MzEsNjA3NjA4NTg4ODAsMjE3NzgwNjEzMzU0LDg5MDUwMDk1Mzg5LDE0Mjg5MTUyMzg2NiwxOTcwODQ0MDUwMTIsMjM1NjIxMTEzMzY2LDE3MTYwODQzMDYzMSwxMTIxODI2OTY0OTUsMjIwNDc4NzUzOTM1LDEzOTUyNjI3Mjc0LDUyMzg5NjQ5MTUwLDE5ODU0Mzg1MDQzNSwzNTkyMzU2ODQ1LDgxNzgzNDU0MjU1LDIyNjM3NzYzMzAxMiwyMzA0MDgwODk4NDYsMjA4MjA5ODczOTg1LDIyNjEwMDgxMjMxNiw1NDMzMDExMTI2MsICA%2BKCvdoCKAoSCSmSrwRS1EJAEb2lneOjy0tAEhIJAOiEl%2BDUlz8RAKCobFhTiT%2FgAgE%3D&sll=37.660057%2C55.595616&sspn=0.023273%2C0.012366&tab=reviews&text=%D0%BC%D0%B0%D0%BD%D0%B8%D0%BA%D1%8E%D1%80&z=15.36"

const SliderSwFeedback = ({ list = feedbacks }) => {
  const [isOpen, setIsOpen] = useState(null)
  const [swiper, setSwiper] = useState(null)
  const [active, setActive] = useState(0)

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <p className='text-base'>Яндекс 5.0 </p>
        <Btn isColor='dark' size='sm' href={feedbacksLink}>все отзывы</Btn>
      </div>    
      <Swiper 
        navigation
        rewind={true}
        slidesPerView={1}
        spaceBetween={160}
        className={classes.swiper}
        onSwiper={setSwiper}
        onSlideChange={(sw) => setActive(sw.activeIndex)}
      >
        {list.map((feedback, i) => (
          <SwiperSlide key={i}>
            <p className={`${classes.slide} line-dark text-base`}>{feedback.feedback}</p>
            <div className={classes.texts}>
              <p className='text-sm'>{feedback.name}</p>
              <p className='text-sm'>{feedback.date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
       {/* Блок со стрелками внизу экрана */}
        <div className={classes.buttons_box}>
          <button
            className={classes.button}
            onClick={() => swiper?.slidePrev()}
            aria-label="Предыдущий слайд"
          >
            <svg className={classes.button_arrow_l} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" >
              <path d="M 375.5 175 Q 382.9 174.1 386.5 177 L 510 249.5 Q 512.8 252.2 512 258.5 L 507.5 265 L 386.5 335 Q 383.2 338.2 375.5 337 L 370 332.5 L 369 323.5 L 374.5 317 L 461 267.5 L 10.5 267 L 6.5 266 L 2 262.5 Q -0.8 259.8 0 253.5 L 3.5 248 L 11.5 245 L 461 244.5 L 377.5 197 L 370 190.5 L 369 181.5 L 373.5 176 L 375.5 175 Z " />
            </svg>
          </button>

          <button
          className={classes.button}
            onClick={() => swiper?.slideNext()}
            aria-label="Следующий слайд"
          >
            <svg className={classes.button_arrow_r} viewBox="0 0 512 512" version="1.1"  xmlns="http://www.w3.org/2000/svg" >
              <path d="M 375.5 175 Q 382.9 174.1 386.5 177 L 510 249.5 Q 512.8 252.2 512 258.5 L 507.5 265 L 386.5 335 Q 383.2 338.2 375.5 337 L 370 332.5 L 369 323.5 L 374.5 317 L 461 267.5 L 10.5 267 L 6.5 266 L 2 262.5 Q -0.8 259.8 0 253.5 L 3.5 248 L 11.5 245 L 461 244.5 L 377.5 197 L 370 190.5 L 369 181.5 L 373.5 176 L 375.5 175 Z " />
            </svg>
          </button>
        </div>
    </div>
    
  )
}

export default SliderSwFeedback
