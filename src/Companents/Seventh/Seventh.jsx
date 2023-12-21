import React from 'react'
import img1 from '../../assets/Rectangle 1179.png'
import img2 from '../../assets/rasm2.png'
import img3 from '../../assets/rasm1.png'
import img4 from '../../assets/rasm3.png'
import './seventh.css'

function Seventh() {
  return (
   <div className="seventh-main" id='Seve'>
     <div className="second-box">
      <div className="second-text">
        <h1>Когда установка не нужна</h1><br />
        <p>В нашем интернет-магазине вы можете купить</p>
        <p> готовый комплект оборудования, чтобы</p>
        <p> установить его самостоятельно</p>
      </div>
    </div>
    <div className="third-box">
    <div className="card">
            <img src={img1} alt="" />
            <p>Комплект TpLink</p>
            <div className="narx"><p>1800-20-В</p><p>13 990 руб./шт</p></div>
          </div>
          <div className="card">
            <img src={img2} alt="" />
            <p>Комплект TpLink 1800-2100-20-</p>
            <div className="narx">
            <p> BlackEdition </p><p>20 990 руб./шт</p></div>
          </div>
          <div className="card">
            <img src={img3} alt="" />
            <p>Комплект TpLink 900-1800-20-</p>
            <div className="narx"><p>SmartEdition</p><p>28 990 руб./шт</p></div>
          </div>
          <div className="card">
            <img src={img4} alt="" />
            <p>Комплект TpLink с 4 антеннами </p>
            <div className="narx"><p>900-1800-23-IG</p><p>66 840 руб./шт</p></div>
          </div>
    </div>
   </div>
    
    
  )
}

export default Seventh