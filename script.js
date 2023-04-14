// 背景切り替わり
// ---------------------------------------------

ScrollTrigger.batch("#sec01", {
  onToggle: (batch) => {
    $("body").toggleClass("bg01");
    $(".nav_item").eq(0).toggleClass("current");
  },
  trigger: "#sec01",
  start: "top center",
  end: "bottom center",
  toggleActions: "none none play reset",
});

ScrollTrigger.batch("#sec02", {
  onToggle: (batch) => {
    $("body").toggleClass("bg02");
    $(".nav_item").eq(1).toggleClass("current");
  },
  trigger: "#sec02",
  start: "top center",
  end: "bottom center",
  toggleActions: "play none play reset",
});

ScrollTrigger.batch("#sec03", {
  onToggle: (batch) => {
    $("body").toggleClass("bg03");
    $(".nav_item").eq(2).toggleClass("current");
  },
  trigger: "#sec03",
  start: "top center",
  end: "bottom center",
  toggleActions: "play none play reset",
});

ScrollTrigger.batch("#sec04", {
  onToggle: (batch) => {
    $("body").toggleClass("bg04");
    $(".nav_item").eq(3).toggleClass("current");
  },
  trigger: "#sec04",
  start: "top center",
  end: "bottom center",
  toggleActions: "play none play reset",
});

// スムーススクロール
// ---------------------------------------------

$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top + adjust;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });
});
