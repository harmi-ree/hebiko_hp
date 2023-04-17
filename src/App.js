import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <>
      <main>
        <header class="article">
          <div class="section_header">
            <div class="section_header_container">
              <div id="hamburger">
                <span></span>
              </div>
            </div>
          </div>
        </header>
        <div class="article">
          <div class="section" id="sec01">
            <div class="section_container">
              <p>やさしいへび子</p>
              <p>おいしいおにぎりやいなり寿司を作っています。</p>
            </div>
          </div>
          <div class="section" id="sec02">
            <h2>Section2</h2>
            <p>ここは2番目のコンテンツです。</p>
          </div>
          <div class="section" id="sec03">
            <h2>Section3</h2>
            <p>ここは3番目のコンテンツです。</p>
          </div>
          <div class="section_shop_info" id="sec04">
            <div class="section_container">
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
                  <span class="shop_info_child">instagram</span>
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
                  <a href="#sec01">へび子</a>
                </li>
                <li class="nav_item">
                  <a href="#sec02">いなり寿司</a>
                </li>
                <li class="nav_item">
                  <a href="#sec03">おにぎり</a>
                </li>
                <li class="nav_item">
                  <a href="#sec04">お問い合わせ</a>
                </li>
                <li class="nav_item">
                  <a href="#sec04">店舗案内</a>
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
