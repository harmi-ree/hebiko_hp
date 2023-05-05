import React, { useState, useEffect } from "react";
//import axios from "axios";

const Instagram = () => {
  // const [posted, setPosted] = useState([]);
  // const [clickUpdate, setClickUpdate] = useState(false);

  // const onClickUpdate = () => {
  //   setClickUpdate(!clickUpdate);
  // };

  // useEffect(() => {
  //   const user_name = "yasashiihebiko"; //ビジネスorクリエイターアカウントの必要あり
  //   const access_token =
  //     "XXXXXXXXXXXX";
  //   const user_id = "XXXXXX";
  //   const get_count = 5; //取得したい投稿数
  //   axios
  //     /* .get(
  //       `https://graph.facebook.com/v16.0/${user_id}?fields=business_discovery.username(${user_name})
  //       {id,followers_count,media_count,media_url,ig_id,media.limit(${get_count})
  //       }
  //       &access_token=${access_token}`
  //     ) */
  //     .get(
  //       // `https://graph.instagram.com/${user_id}/media?fields=caption,media_url,like_count&limit=${get_count}&access_token=${access_token}`
  //       `https://graph.facebook.com/v16.0/${user_id}/media
  //       ?image_url={image-url}
  //       &is_carousel_item={is-carousel-item}
  //       &caption={caption}
  //       &location_id={location-id}
  //       &user_tags={user-tags}
  //       &product_tags={product-tags}
  //       &access_token=${access_token}`
  //     )
  //     /*  `https://graph.instagram.com/${user_id}/media?fields=caption,media_url,like_count&limit=${get_count}&access_token=${access_token}
  //       ` */

  //     .then((res) => {
  //       setPosted(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     });
  // }, [clickUpdate]);

  return (
    <>
      {/* {posted.map((post) => (
        <img src={post.media_url} alt="instagramImage" key={post.id} />
      ))} */}
      <div class="section_instagram section_flame" id="sec03">
        <h2>Instagram</h2>
        <iframe
          src="https://snapwidget.com/embed/1032488"
          class="snapwidget-widget snapwidget-widget_style"
          allowtransparency="true"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default Instagram;
