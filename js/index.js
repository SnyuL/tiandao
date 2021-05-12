window.addEventListener("load", function () {
  // ===========轮播图效果=============
  var num = 0;
  var w = 312;
  var flag = true;
  var rotate = document.querySelector(".rotate");
  var numbox = document.querySelector(".numbox");
  var first = rotate.children[0].cloneNode(true);
  rotate.appendChild(first);
  // console.log(rotate);
  setInterval(function () {
    if (flag) {
      flag = false;
      if (num == 4) {
        // console.log(num);
        num = 0;
        rotate.style.left = 0;
        flag = true;
      }
      num++;
      $(".numbox span").eq(num).addClass("cur");
      $(".numbox span").eq(num).siblings().removeClass("cur");
      animate(rotate, -num * w, function () {
        flag = true;
      });
    }
  }, 1500);
  // ============手风琴效果===============
  $(".units li .unit-info").hide();
  $(".units li .unit-info:eq(0)").show();
  $(".units li").mouseenter(function () {
    /*  console.log($(this));
    console.log($(this).siblings().children(".unit-info")); */
    $(this).addClass("active").siblings(".unit").removeClass("active");
    $(this).children(".unit-info").show();
    $(this).siblings().children(".unit-info").hide();
  });
  // ===========腾讯游戏排行榜=============
  // jquery调用1.html文件
  /* $.get("../1.html", function (data) {
    console.log(666);
    $(this).siblings(".ost_pop").children().html(data);
  }); */
  $(".ost_title").hover(
    function () {
      $(this).siblings(".ost_pop").show();
    },
    function () {
      $(this).siblings(".ost_pop").hide();
    }
  );
  $(".ost_pop").hover(
    function () {
      $(".ost_pop").show();
    },
    function () {
      $(".ost_pop").hide();
    }
  );
  // =======================
  /*  $(".view").addEventListener("click", function () {
    zymedia("video", {
      autoplay: true,
    });
  }); */
  // <script src="dist/js/ckin.js"></script>;
});
