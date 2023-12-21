import React from 'react'
import YMap from '../Map/YMap'
import './contact.css'

function Contact() {
  return (
    <div className="contact-main" id='Контакты'>
        <div className="main">
            <div className="contact">
                <div className='abc'>
                    <h1>Контакты</h1>
                    <p> Звоните или пишите по любым вопросам. <br />
                        Консультации и подбор оборудования <br />
                        бесплатные.</p>
                </div>
                <div className='abc'>
                    <h1><i>+7 (111) 111-11-11</i></h1>
                    <i>заказать звонок</i>
                </div>
                <div className='abc'>
                    <h1>Адрес офиса и магазина</h1>
                    <p>Москва, ул. Берзарина, дом 36с2, офис 213 <br /> Санкт-Петербург, Невский пр-кт, д. 55</p>
                </div>
                <div className='abc'>
                    <p>e–mail</p>
                    <i>infotplink@gmail.com</i>
                </div>
            </div>
            <div className="location" style={{overflow:"hidden"}}>
                <YMap />
            </div>
        </div>

    </div>
  )
}

export default Contact