import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <>
      <header>
        <section>
          <div></div>
        </section>
      </header>
      <main>
        <div class="article">
          <div class="section" id="sec01">
            <div class="section_container"></div>
          </div>
          <div class="section" id="sec02">
            <h2>Section2</h2>
            <p>ここは2番目のコンテンツです。</p>
          </div>
          <div class="section" id="sec03">
            <h2>Section3</h2>
            <p>ここは3番目のコンテンツです。</p>
          </div>
          <div class="section" id="sec04">
            <h2>Section4</h2>
            <p>ここは4番目のコンテンツです。</p>
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
