var abc = document.querySelectorAll(".tusi li a");
for (var i = 0; i < abc.length; i++) {
  var index = i * 70;
  abc[i].style.backgroundPosition = `0 ${-index + -117}px`;
}

var ass = document.querySelectorAll(".nva li a ");
var xian = document.querySelectorAll(".xian ");
// var lis = document.querySelector('.nva > li')
for (var i = 0; i < ass.length; i++) {
  ass[0].style.color = "snow";
  ass[0].style.backgroundColor = "#40c7aa";
  ass[i].addEventListener("click", function (e) {
    for (var j = 0; j < ass.length; j++) {
      ass[j].style.backgroundColor = "";
      ass[j].style.color = "";
    }
    this.style.backgroundColor = "#40c7aa";
    this.style.color = "snow";

    var index = this.getAttribute("index");
    console.log(index);
    for (k = 0; k < xian.length; k++) {
      xian[k].style.display = "none";
    }
    // xian[index].style.display = 'block'
    xian[index].style.display = "block";
  });
}

var ul = document.querySelector(".lunbos");
var lis = document.querySelectorAll(".lunbos li");
var zanniu = document.querySelector(".anniu1");
var yanniu = document.querySelector(".anniu2");
// var sWidth = lis.offsetWidth
var num = 0;
yanniu.addEventListener("click", function () {
  
  num++;
  ul.style.left = 400 * -num + "px"; 
  if (ul.style.left == -4800 + 'px'){
    ul.style.left = -400 + 'px'
    num = 1
  }
});
zanniu.addEventListener("click", function () {
    num--;
    ul.style.left = 400 * -num + "px";
    if (ul.style.left == 400 + 'px'){
      ul.style.left = -4800 + 'px'
      num = 13
    }
  });


  /* <!-- 【1.header】 --> */
var hd_1 = document.querySelector('.hd_1');
var hd = document.querySelector('.hd');
var hd_3 = document.querySelector('.hd_3');
hd_1.addEventListener('mouseover', function(){
    hd.style.display = 'none';
    hd_3.style.display = 'block';
});
hd_3.addEventListener('mouseout', function(){
    hd.style.display = 'block';
    hd_3.style.display = 'none' ;
});

// <!-- 【1.2腾讯游戏】 -->
var liss = document.querySelectorAll('.gamul li');
// console.log(liss);
var gamulP = document.querySelectorAll('.gamul p');
var gamad = document.querySelectorAll('.gamad');
// console.log(gamad);
var gamulimg = document.querySelectorAll('.gamul img');
var youpai = document.querySelector('.hd_2 .youpai')
var games = document.querySelector('.games');
var tt = 0;
for (var t = 0; t < liss.length; t++){
    liss[0].children[1].style.display = 'block';
    liss[0].style.height = '90px';
    liss[t].addEventListener('mouseenter', function(){
        for (var t = 0; t < liss.length; t++){
            liss[t].style.height = '';
            liss[t].children[1].style.display = 'none';
        }
        this.style.height = '90px';
        this.children[1].style.display = 'block';
    })  
} 
games.style.display = 'none';
youpai.addEventListener('mouseover', function(){
    games.style.display = 'block';
})
// youpai.addEventListener('mouseover', function(){
//     games.style.display = 'none';
// })
games.addEventListener('mouseleave', function(){
    this.style.display = 'none';
});

