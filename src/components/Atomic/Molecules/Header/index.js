import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f697.png"
        width="32"
        height="32"
        alt=""
      />
      Car Showroom
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f699.png"
        width="32"
        height="32"
        alt=""
      />
    </header>
  );
}

export default React.memo(Header);