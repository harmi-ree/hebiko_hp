import React from "react";
import paypay from "../img/paypay.png";
import auPay from "../img/auPay.png";
import dBarai from "../img/dBarai.png";
import uber from "../img/uber-eats.svg";
import hebiko1 from "../img/hebiko_1.JPG";
import hebiko2 from "../img/hebiko_2.JPG";
import hebiko3 from "../img/hebiko_3.JPG";
import hebiko4 from "../img/hebiko_4.jpg";
import hebiko_name from "../img/name.png";
import { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Top = () => {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(hebiko4);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const backgroundImages = [hebiko1, hebiko2, hebiko3, hebiko4];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % backgroundImages.length;
      setIsImageLoaded(false);
      setTimeout(() => {
        setBackgroundImageUrl(backgroundImages[currentIndex]);
        setIsImageLoaded(true);
      }, 500);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div class="section_top section_flame" id="sec01">
        <div
          className={`section_top_image ${
            isImageLoaded ? "fade-in" : "fade-out"
          }`}
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        />
        <div class="section_top_logo"></div>
        <div class="section_top_text">
          <img src={hebiko_name} />
          <p>
            春弥生、木も花もつぼみを膨らませてきた頃
            <br />
            2021年3月16日、松原市の閑静な住宅街に
            <br />
            やさしいへび子がオープンしました。
            <br />
            美味しいおにぎりやいなり寿司を
            <br />
            真心込めて、作っています。
          </p>
          <FavoriteBorderIcon />
        </div>
        <div class="section_container_tel">
          <p>お問い合わせ ・ ご注文</p>
          <p>
            <a href="tel:070-8593-1128">070-8593-1128</a>
          </p>
          <p>
            お休みの日もご予約承ります。
            <br />
            お気軽にお問い合わせくださいませ。
          </p>
        </div>
        <div class="section_container_delivery">
          <p>デリバリーサービス</p>
          <div>
            <a
              href="https://www.ubereats.com/jp/store/%E3%82%84%E3%81%95%E3%81%97%E3%81%84%E3%81%B8%E3%81%B2%E5%AD%90-yasashii-hebiko/eSfEegLIWcef10eDYQ48qA?diningMode=DELIVERY"
              target="_blank"
            >
              <img src={uber} width="150px" height="70px"></img>
            </a>
            <OpenInNewIcon sx={{ fontSize: 15 }} />
          </div>
        </div>
        <div class="section_container_payment">
          <p>ご利用可能なお支払い方法</p>
          <div>
            <img src={paypay}></img>
            <img src={auPay}></img>
            <img src={dBarai}></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
