import React, { useState } from 'react';
import classes from './Price.module.css';
import { manikurList, pedicurList, spaList } from '../../data/price';
import Modal from '../Modal/Modal';
import Close from '../UI/Close/Close';
import Btn from '../UI/Btn/Btn';
import Tabs from '../../Section/Tabs/Tabs';
import tg from '../../assets/media/tg.png'
import wp from '../../assets/media/wp.png'

const TABS = {
  manikur: { title: 'маникюр', list: manikurList },
  pedicur: { title: 'педикюр', list: pedicurList },
  spa:     { title: 'spa',     list: spaList },
};

const Price = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isOpenEntry, setIsOpenEntry] = useState(null);

  return (
    <>
      <Tabs
        tabs={TABS}
        itemsPerPage={8}
        handler={setIsOpen}
      />

      {isOpen &&
        <Modal>
          <Close onClick={() => setIsOpen(false)}/>
          <div className={classes.modalContent}>
            <img className={classes.img} src={isOpen.img} alt={`Фото full screen`} />

            <div className={classes.texts}>
              <div className={classes.header}>
                <h2 className='h2'>{isOpen.title}</h2>
                <p className='text-sm'>{isOpen.price} р</p>
              </div>
              {isOpen.description != 'null' &&
                <p className='text-sm'>{isOpen.description}</p>
              }

              <Btn isColor='dark' size='sm' onClick={() => setIsOpenEntry(true)}>записаться</Btn>
            </div>
          </div>
        </Modal>
      }
      {isOpenEntry &&
        <Modal>
          <Close onClick={() => setIsOpenEntry(false)}/>
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


    </>
  );
};

export default Price;
