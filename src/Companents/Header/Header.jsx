import React from 'react'
import './header.css'
import TPLINK from '../../assets/tplink.svg'

function Header() {
  return (
    <div className="header-obsh">
      <div className="header-katta">
        <div className="header-left">
          <img src={TPLINK} alt="" />
        </div>
        <div className="header-middle">
          <nav>
            <li><a href="#price">Цены</a></li>
            <li><a href="#Seve">Установка</a></li>
            <li><a href="#График">График</a></li>
            <li><a href="#Контакты">Контакты</a></li>
          </nav>
        </div>
        <div className="header-right">
          {/* icon */}
          <h5>+7 (111) 111-11-11</h5>
        </div>
      </div>
    </div>
  )
}

export default Header