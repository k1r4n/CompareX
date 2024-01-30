import React, {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {
  Sidebar,
  Topbar,
  ChatBox,
} from 'widgets';

import style from './index.module.scss';

const Root = () => {
  useEffect(() => {
    const side = document.getElementById('sidebar');
    if (side) {
      side.addEventListener('mouseover', handleReduceSize);
      side.addEventListener('mouseout', handleIncreaseSize);
    }
    return () => {
      if (side) {
        side.removeEventListener('mouseover', handleReduceSize);
        side.removeEventListener('mouseout', handleIncreaseSize);
      }
    };
  });

  const handleReduceSize = () => {
    const main = document.getElementById('main-content');
    const side = document.getElementById('sidebar');
    if (main && side) {
      if (side.clientWidth >= 200) {
        main.style.setProperty('width', 'calc(100% - 200px)');
      }
      main.style.marginLeft = '200px';
    }
  };

  const handleIncreaseSize = () => {
    const main = document.getElementById('main-content');
    const side = document.getElementById('sidebar');
    if (main && side) {
      main.style.setProperty('width', 'calc(100% - 100px)');
      main.style.marginLeft = '100px';
    }
  };
  return <div className={style.root}>
    <Sidebar />
    <div className={style.mainContent} id="main-content">
      <Topbar />
      <Outlet />
    </div>
    <ChatBox />
  </div>;
};

export default Root;

