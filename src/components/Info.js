import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Info = () => {
  return (
    <>
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
                <a href="https://twitter.com/yasashiihebiko3" target="_blank">
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
    </>
  );
};

export default Info;
