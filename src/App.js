import "./App.scss";
import Instagram from "./components/Instagram";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Info from "./components/Info";
import News from "./components/News";
import Top from "./components/Top";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main>
        <div class="article">
          <Header />
          <Top />
          <Menu />
          <div class="section_instagram section_flame" id="sec03">
            <h2>Instagram</h2>
            <p>改装中...</p>
            <Instagram />
          </div>
          <News />
          <Info />
          <Footer />
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
