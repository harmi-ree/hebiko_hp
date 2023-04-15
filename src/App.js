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
              <h4>住所</h4>
              <p>大阪府松原市阿保6-1-20</p>
              <div class="iframe_wrap">
                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.3063085705473!2d135.5572390692526!3d34.5813730670089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000d971710d4213%3A0xfb8c7e6a334fe0df!2z44KE44GV44GX44GE44G444Gz5a2Q!5e0!3m2!1sja!2sjp!4v1681570345240!5m2!1sja!2sjp"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="googleMap"
                ></iframe> */}
                <iframe
                  src="https://snazzymaps.com/embed/481681"
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
