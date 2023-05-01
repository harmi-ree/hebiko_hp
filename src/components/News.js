import React from "react";
import { useState } from "react";
import hebiko_stacker from "../img/hebiko_stacker.png";

const News = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    if (showModal) {
      closeModal();
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div class="section_news section_flame" id="sec04">
        <h2>お知らせ</h2>
        <a id="newsTitle" onClick={openModal}>
          <div class="section_news_title">
            2023/3/16 | 【へび子オープン２周年】
          </div>
        </a>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>
                やさしいへび子は２周年を迎えました。
                <br />
                ご来店頂きました皆様の支えがあったからこそと、
                深く感謝しております。
                <br />
                今後とも、変わらぬご愛顧を賜りますよう、
                <br />
                お願いいたします。
                <br />
                <br />
                ステッカーを作りました( ・∇・)
              </p>
              <p>
                <img src={hebiko_stacker} />
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default News;
