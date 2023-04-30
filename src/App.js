import logo from "./logo.svg";
import "./App.scss";
import Instagram from "./components/Instagram";
import paypay from "./img/paypay.png";
import auPay from "./img/auPay.png";
import dBarai from "./img/dBarai.png";
import uber from "./img/uber-eats.svg";
import hebiko1 from "./img/hebiko_1.JPG";
import hebiko2 from "./img/hebiko_2.JPG";
import hebiko3 from "./img/hebiko_3.JPG";
import hebiko_name from "./img/name.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState, useEffect } from "react";

function App() {
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(hebiko1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const backgroundImages = [hebiko1, hebiko2, hebiko3];
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
      <main>
        <div class="article">
          <div class="article_header">
            <div class="section_header">
              <div class="section_header_container">
                <div id="hamburger">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
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
            </div>
          </div>
          <div class="section_flame" id="sec01">
            <div class="section_container">
              <p>お問い合わせ ・ ご注文</p>
              <p>070-8593-1128</p>
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
          <div class="section_menu section_flame" id="sec02">
            <h2>メニュー</h2>
            <div class="menu_box">
              <div class="menu_box1">
                <div class="menu_title">
                  <h3>いなり寿司</h3>
                </div>
                <div class="menu_child">
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>プレーン</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>桜えび</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>ひじき</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>わさび</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>三色いなり</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>とりゴボウ</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>セロリ</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>季節のいなり</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                </div>
              </div>
              <div class="menu_box1" id="sec02-01">
                <div class="menu_title">
                  <h3>おにぎり</h3>
                </div>
                <div class="menu_child">
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>梅</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>たらこ</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>こんぶ</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>しゃけまみれ</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>かわりしゃけ</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>しば漬け</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                  <div class="menu_img"></div>
                  <div class="menu_name">
                    <p>悪魔ちゃん</p>
                  </div>
                  <div class="menu_price">
                    <p>¥110</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section_instagram section_flame" id="sec03">
            <h2>Instagram</h2>
            <Instagram />
          </div>
          <div class="section_news section_flame" id="sec04">
            <h2>お知らせ</h2>
          </div>
          <div class="section_shop_info section_flame" id="sec05">
            <div>
              <h2>店舗情報</h2>
              <ul class="shop_info_detail">
                <li>
                  <span class="shop_info_title">営業時間</span>
                  <span class="shop_info_child">
                    AM 10:00 ~ PM 18:00
                    <br />
                    定休日　月・火・木・日・他(不定休)
                  </span>
                </li>
                <li>
                  <span class="shop_info_title">TEL</span>
                  <span class="shop_info_child">070-8593-1128</span>
                </li>
                <li>
                  <span class="shop_info_title">住所</span>
                  <span class="shop_info_child">
                    〒580-0043 大阪府松原市阿保6-1-20
                  </span>
                </li>
                <li>
                  <span class="shop_info_title">駐車場</span>
                  <span class="shop_info_child">
                    軽1台（お店のすぐ横です。難易度中級）
                  </span>
                </li>
                <li>
                  <span class="shop_info_title">Mail</span>
                  <span class="shop_info_child">yasashiihebiko@gmail.com</span>
                </li>
                <li>
                  <span class="shop_info_title">アクセス</span>
                  <span class="shop_info_child">
                    近鉄南大阪線　河内松原駅より徒歩10分
                  </span>
                </li>
                <li>
                  <span class="shop_info_title">SNS</span>
                  <div class="shop_info_child">
                    <a
                      href="https://www.instagram.com/yasashiihebiko/"
                      target="_blank"
                    >
                      <InstagramIcon />
                      &nbsp;Instagram（ 更新中 ! ）
                    </a>
                    <br />
                    <a
                      href="https://twitter.com/yasashiihebiko3"
                      target="_blank"
                    >
                      <TwitterIcon />
                      &nbsp;twitter （ 更新サボってます... ）
                    </a>
                  </div>
                </li>
              </ul>

              <div class="iframe_wrap">
                <iframe
                  src="https://snazzymaps.com/embed/481752"
                  width="400px"
                  height="400px"
                  class="googleMap"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="section_footer" id="sec05">
            <p>©︎ 2023 やさしいへび子</p>
          </div>
        </div>

        <div class="wrapper">
          <div class="nav_wrapper_left">
            <div class="nav_wrapper_left_content">
              <div class="nav_shop_name">
                <div class="nav_logo"></div>
                <p>
                  YASASHII <br></br>HEBIKO
                </p>
              </div>
            </div>
          </div>
          <div class="nav_wrapper_right">
            <div class="nav_wrapper_right_content">
              <ul class="nav_list">
                <li class="nav_item">
                  <a href="#sec01">TOP</a>
                </li>
                <li class="nav_item">
                  <a href="#sec02">いなり寿司</a>
                </li>
                <li class="nav_item">
                  <a href="#sec02-01">おにぎり</a>
                </li>
                <li class="nav_item">
                  <a href="#sec03">Instagram</a>
                </li>
                <li class="nav_item">
                  <a href="#sec04">お知らせ</a>
                </li>
                <li class="nav_item">
                  <a href="#sec05">店舗案内</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
