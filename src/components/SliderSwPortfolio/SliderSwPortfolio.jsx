import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Grid } from 'swiper/modules'
import Modal from '../../components/Modal/Modal'
import Close from '../../components/UI/Close/Close'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'

import classes from './SliderSwPortfolio.module.css'

// grid
// rewind={true} - вместо loop={true}
// *** loop - прокрутка бесконечная
// *** rewind - прокрутка из конца в начало
// как подключить ?
// import { Autoplay, Grid } from 'swiper/modules' + import 'swiper/css/grid'
// modules={[Autoplay, Grid]}
// 
// rows - кол-во строк
// grid: {
//   rows: 2,          
//   fill: 'row', 
// }
// slidesPerGroup: 3 - кол-во прокруток за раз

import { manikurList } from '../../data/price'

const list = manikurList

// УСТАНОВИТЬ: npm install swiper@14.4.0

const SliderSwPortfolio = ({ images = list, thumbs = false, isModal = true }) => {
  const [isOpen, setIsOpen] = useState(null)
  const [swiper, setSwiper] = useState(null)
  const [active, setActive] = useState(0)

  return (
    <div className={classes.wrapper}>
      <Swiper
        modules={[Autoplay, Grid]}
        navigation
        rewind={true}
        // autoplay={{
        //   delay: 4000, // интервал в мс (3 сек)
        //   disableOnInteraction: false, // автопрокрутка возобновляется после ручного переключения
        // }}
        slidesPerView={1}
        spaceBetween={16}
        className={classes.swiper}
        onSwiper={setSwiper}
        onSlideChange={(sw) => setActive(sw.activeIndex)}
        breakpoints={{
            // < 576px — 1 слайд, отступы те же
            0: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 10,
              grid: {
                rows: 3,          // сколько рядов
                fill: 'row',      // заполняем по строкам (слева направо)
              }
            },
            576: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 15,
              grid: {
                rows: 2,          // сколько рядов
                fill: 'row',      // заполняем по строкам (слева направо)
              }
            },
            // 768px — 2 слайда
            768: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 15,
              grid: {
                rows: 2,          // сколько рядов
                fill: 'row',      // заполняем по строкам (слева направо)
              }
            },
            // 992px — 3 слайда (можно оставить как дефолт)
            992: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 15,
              grid: {
                rows: 2,          // сколько рядов
                fill: 'row',      // заполняем по строкам (слева направо)
              }
            },
          }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src.img} alt={`Фото ${i + 1}`} onClick={() => setIsOpen(src)}/>
          </SwiperSlide>
        ))}
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src.img} alt={`Фото ${i + 1}`} onClick={() => setIsOpen(src)}/>
          </SwiperSlide>
        ))}
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src.img} alt={`Фото ${i + 1}`} onClick={() => setIsOpen(src)}/>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Блок со стрелками внизу экрана */}
      {/* <div className={classes.buttons_box}>
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
      </div> */}

      {thumbs && 
        <div className={classes.thumbs}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Миниатюра ${i + 1}`}
              className={active === i ? classes.thumbActive : classes.thumb}
              onClick={() => swiper && swiper.slideTo(i)}
            />
          ))}
        </div>
      }

      {isModal && isOpen &&
        <Modal>
          <Close onClick={() => setIsOpen(null)} />
          <img className={classes.img} src={isOpen.img} alt={`Фото full screen`} />
        </Modal>
      }
    </div>
  )
}

export default SliderSwPortfolio
