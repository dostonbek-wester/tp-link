import React from 'react'
import './first.css'
import PHONE from '../../assets/phone.svg'

function First() {
  return (
    <div className="first-obsh">
      <div className="divdiv3"></div>
      <div className="first-katta">
        <div className="first-left">
          <div className="first-title">
            <h2>Усилим мобильную связь</h2>
            <h3>всех операторов до 5 делений за 24 часа<br/>или вернем деньги</h3>
          </div>
          <div className="first-input">
            <button className='but1'>Рассчитать стоимость</button>
            <button className='but2'>Заказать консультацию</button>
          </div>
          <div className="first-title-2">
            <h5>Любые объекты площадью <span>от 50 до 100 000 м2</span></h5>
          </div>
        </div>
        <div className="first-right">
          <img src={PHONE} alt="" width={'550px'}/>
        </div>
      </div>
    </div>
  )
}

export default First