import React, {useState} from 'react';
import style from './index.module.scss';

export const ChatBox = () => {
  const [showContent, setShowContent] = useState(false);
  const handleToggleChat = (e) => {
    e.stopPropagation();
    setShowContent((prev) => {
      return !prev;
    });
  };
  return <div className={style.chatbox}>
    {showContent && <div className={style.content}>
      <div className={style.title} onClick={handleToggleChat}>Al Assistant</div>
      <div className={style.chats}>
        <div className={style.chatLeft}>
          <img width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png" alt="circled-user-male-skin-type-6--v1"/>
          <div className={style.text}>{'Hey! How can I help today?'}</div>
        </div>
        <div className={style.chatRight}>
          <div className={style.text}>{'Hi, can you help me understand new features in Product A'}</div>
          <img width="48" height="48" src="https://img.icons8.com/color/48/circled-user-male-skin-type-6--v1.png" alt="circled-user-male-skin-type-6--v1"/>
        </div>
      </div>
      <div className={style.inputBox}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
          <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"></path>
        </svg>
        <input />
      </div>
    </div>}
    <div className={style.button} onClick={handleToggleChat}>
      <img onClick={handleToggleChat} width="16" height="16" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/16/external-arrow-arrows-those-icons-lineal-color-those-icons-1.png" alt="external-arrow-arrows-those-icons-lineal-color-those-icons-1"/>
    </div>
  </div>;
};
