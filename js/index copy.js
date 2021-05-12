$(function () {
  var index = 0;
  var ind = 0;
  var w = 312;
  var rotate = document.querySelector(".rotate");
  console.log(rotate);
  setInterval(function () {
    if (index == 3) {
      // console.log(index);
      index = 0;
      translateX = -index * w;
      // rotate.style.transition = "all .4s";
      rotate.style.transform = "translateX(" + translateX + "px)";
    } else {
      // console.log(index);
      index++;
      var translateX = -index * w;
      // console.log(translateX);
      // rotate.style.transition = "all .4s";
      /*  rotate.children[index].style.transform =
        "translateX(" + translateX + "px)"; */
      rotate.style.transform = "translateX(" + translateX + "px)";
    }
  }, 1000);
  $(".rotate_number span").click(function () {
    $(".rotate_number span").removeClass("cur");
    $(".rotate li").hide();
    $(this).addClass("cur");
    ind = $(this).index();
    $(".rotate li").eq(ind).show();
  });
});
