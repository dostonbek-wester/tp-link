import React from 'react'

import phone from '../../assets/iPhone X.svg'
import './sixth.css'

function Sixth() {
  return (
    <div className="sixth-main">
      <div className="divdiv"></div>
      <div className="first-box">
        <div className="main-box">
          <div className="box">
            <div className="text"><h1>Сохраним ремонт</h1><br />
              <p>Не сверлим стены без необходимости, а оборудование прячем в технических помещениях</p></div>
            <div className="text"><h1>Оплата за результат</h1><br />
              <p>Если связь на вашем объекте не заработает — вернем деньги.</p></div>
            <div className="text"><h1>Гарантия 1 год</h1> <br /> <p>Если что-то сломается — обменяем вам на новое устройство взамен нерабочего. Без экспертиз и ремонтов, прямо в день обращения.</p></div>
          </div>

          <div className="box">
            <div className="phone">
              <img className='img1' src={phone} alt="" />
              
            </div>


          </div>
          <div className="box">
            <div className="text"><h1>Более 5 лет опыта</h1><br /> <p>Мы наладили сотовую связь на сотнях объектов — от дачных домов до международных аэропортов.</p></div>
            <div className="text"><h1>От одного дня</h1><br /><p>Если объект до 300 кв. метров, установим оборудование уже сегодня</p></div>
            <div className="text"><h1>Сертифицированное оборудование</h1><br /> <p>Некачественная техника портит вышки сотовой связи и сигнал всем поблизости. Мы гарантируем, что с нашим оборудованием такого не случится.</p></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sixth