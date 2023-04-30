import React from "react";
import { useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import hebiko_name from "../img/name.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const style = {
    width: "100%",
    height: "100%",
    position: "fixed",
    top: "0",
    left: isActive ? "0" : "100%",
    zIndex: "90",
    backgroundColor: "#b3d5ed",
    transition: "all 0.5s",
  };

  return (
    <>
      <div class="section_header head">
        <div class="main-menu">
          <div class="sp-menu">
            <a onClick={handleClick}>
              <label for="sp-menu__check" class="sp-menu__box">
                <span></span>
              </label>
            </a>
            <div style={style}>
              <div>
                <ul class="sp-menu__list">
                  <li class="sp-menu__item">
                    <a
                      class="sp-menu__link"
                      href="#sec01"
                      onClick={handleClick}
                    >
                      TOP
                    </a>
                  </li>
                  <li class="sp-menu__item">
                    <a
                      class="sp-menu__link"
                      href="#sec02"
                      onClick={handleClick}
                    >
                      いなり寿司
                    </a>
                  </li>
                  <li class="sp-menu__item">
                    <a
                      class="sp-menu__link"
                      href="#sec02-01"
                      onClick={handleClick}
                    >
                      おにぎり
                    </a>
                  </li>
                  <li class="sp-menu__item">
                    <a
                      class="sp-menu__link"
                      href="#sec03"
                      onClick={handleClick}
                    >
                      Instagram
                    </a>
                  </li>
                  <li class="sp-menu__item">
                    <a
                      class="sp-menu__link"
                      href="#sec04"
                      onClick={handleClick}
                    >
                      お知らせ
                    </a>
                  </li>
                  <li class="sp-menu__item">
                    <a
                      class="sp-menu__link"
                      href="#sec05"
                      onClick={handleClick}
                    >
                      店舗案内
                    </a>
                  </li>
                </ul>
              </div>
              <div class="nav_footer">
                <img src={hebiko_name} />
                <div class="nav_footer_sns">
                  <div>
                    <span>Follow us ...</span>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/yasashiihebiko/"
                      target="_blank"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://twitter.com/yasashiihebiko3"
                      target="_blank"
                    >
                      <TwitterIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
