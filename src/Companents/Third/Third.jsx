import React from 'react'
import './third.css'
import WIFI from '../../assets/third-picture.svg'

function Third() {
  return (
    <div className="thirt-obsh">
      <div className="third-katta">
        <div className="third-left">
          <h3>Главное — точная настройка</h3>
          <h4>Мы подбираем подходящее устройство, <br />исходя из расстояния до базовой <br /> станции, площади покрытия и диапазона <br /> частот, которые вам нужны.</h4>
        </div>
        <div className="third-right">
          <img src={WIFI} alt="" width={'500px'}/>
        </div>
      </div>
    </div>
  )
}

export default Third