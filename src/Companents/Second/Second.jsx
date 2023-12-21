import React from 'react'
import './second.css'
import HELICOPTER from '../../assets/helicopter.svg'

function Second() {
  return (
    <div className="second-obsh">
      <div className="second-katta">
        <div className="second-left">
          <img src={HELICOPTER} alt="" />
        </div>
        <div className="second-right">
          <div className="right-title1">
            <h3>Почему телефон не ловит?</h3>
            <h4>Это базовая станция. Она раздаёт и принимает сигнал. У неё есть разные диапазоны и лимит абонентов</h4>
          </div>
          <div className="right-title2">
            <h3>Как решить проблему?</h3>
            <h4>Чтобы усилить сигнал, нужны специальные антенны и репитер. Это устройство, преобразующее сигнал, мощный усилитель радиоволн.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second