import React from 'react';
import style from './index.module.scss';

export const Topbar = () => <div className={style.topbar}>
  <div className={style.container}>
    <h1>Marketplace Comparison</h1>
    <button>Download report</button>
  </div>
  <img width="32" height="32" src="https://img.icons8.com/ios-filled/32/menu-2.png" alt="menu-2"/>
</div>;
