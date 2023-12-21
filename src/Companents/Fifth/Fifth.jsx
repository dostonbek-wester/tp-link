import React from 'react'
import './fifth.css'
import PEOPLE from '../../assets/people.svg'

function Fifth() {
  return (
    <div className="fifth-obsh" >
      <div className="fifth-katta">
        <div className="fifth-left">
          <img src={PEOPLE} alt="" width={"600px"} />
        </div>
        <div className="fifth-right">
          <h3>Кэшбэк 10% для партнеров</h3>
          <h4>Мы сотрудничаем со строительными, отделочными и <br /> монтажными организациями. За каждого приведённого <br /> клиента мы возвращаем вам до 10% кэшбэка от общего <br /> бюджета проекта.</h4>
          <button>Стать партнёром</button>
        </div>
      </div>
    </div>
    

  )
}

export default Fifth