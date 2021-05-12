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


/* <!-- 【4.guide门派指引】 --> */
//循环精灵图
var gu_log = document.querySelectorAll('.gu_log li');
 for (var i = 0; i < gu_log.length; i++){
    var ling = i *60;
    gu_log[i].style.backgroundPosition = `0 ${-ling}px`
    // gu_log[i].style.backgroundPosition = '0 -' + ling + 'px';
 }
 
//  var gu_log2 = document.querySelectorAll('.gu_log li');
//  for (var i = 0; i < gu_log2.length; i++){
//     var ling = i *60
//     gu_log2[i].style.backgroundPosition = `-63px ${-ling}px`
//     // gu_log[i].style.backgroundPosition = '0 -' + ling + 'px';
//  }
 /* <!-- 【4.guide门派指引】 --> */
// 人物介绍
var guCont =document.querySelector('.gu_cont');
// console.log(guCont);
var gudivs = document.querySelectorAll('.gu_cont >div');
// console.log(gudivs);
for (var j = 0; j < gu_log.length; j++){
    // gu_log[j].style.backgroundPosition = '0' + 'px'+' 0' + 'px';
    gu_log[0].style.backgroundPosition = '-63' + 'px'+' -0' + 'px';
    
}

guCont.onmouseover = function(e){
    if(e.target.tagName == 'LI'){
        for (var j = 0; j < gu_log.length; j++){
            gu_log[j].style.backgroundPosition = '0' + 'px'+' 0' + 'px';
            gudivs[j].style.display = 'none';
        }
            var index = e.target.getAttribute('data-index');
            gudivs[index].style.display = 'block';
            e.target.style.backgroundPosition = `-63px ${-60* index}px`;
    }
}


      


//  <!-- 【5.sidebar 侧边栏】 -->
var sidbotm = document.querySelector('.sid_botm');
var sias = document.querySelectorAll('.sid_botm a');
for (var i = 0; i < sias.length; i++){
    sias[i].addEventListener('mouseover', function(){
        for (var i = 0; i < sias.length; i++){
            sias[i].className = '';
        }
        this.className = 'sid_li';
    })
    sias[i].addEventListener('mouseout', function(){
        this.className = '';
    })
}



/* <!-- 【6.play 身份玩法】 --> */
var play1 = document.querySelectorAll('.play1One > a');
// console.log(play1[7]);
for (var q = 0; q < play1.length; q++){
    var pa  = q *59;
   play1[q].style.backgroundPosition = `${-pa}px 0px`
    if(q == 8 || q ==9){
        
        play1[q].style.backgroundPosition = `-413px 0px`
        // console.log(q);
    }
}

// 牛逼
var pone = document.querySelector('.play1One');
var pbox = document.querySelector('.playbox');
var pla = document.querySelectorAll('.play1One > a');
// console.log(pla);
var play1 = document.querySelectorAll('.playbox >.play1');
// console.log(play1);

// pbox.onmouseover = (function(e){
//     if(e.target.tagName == 'A'){
//         // for(var w = 0; w < pla.length; w++){
//         //     console.log( pla[w]);
//         //     pla[w].style.display = 'none';
//         // }
//         e.target.style.display = 'none';
//         for(var r = 0; r < play1.length; r++){
//             play1[0].className = 'pla1';
//         }
//     }

// });

var ci = 0;
for(var w = 0; w < pla.length; w++){
    pla[0].style.display = 'none';

    pla[w].addEventListener('mouseenter', function(){
        // console.log(this);
        for(var w = 0; w < pla.length; w++){
            pla[w].style.display = 'block';
        }
           this.style.display = 'none';
    });
    }

    for(var r = 0; r < play1.length; r++){
        play1[0].className = 'play1 pla1';

        play1[r].addEventListener('mouseenter', function(){
            for(var r = 0; r < play1.length; r++){
                 play1[r].className = 'play1 pla2';
            }
            
  
                this.className = 'play1 pla1';
         
            
        });
    }


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

// <!-- 【2.banner】 tab 切换 -->
$('.new .maxnews').click(function(){
    $('.newcontent2').show(300);
    $('.newcontent1').hide(300);
})
$('.new .news').click(function(){
    console.log($('.newcontent1'));
    $('.newcontent1').show(300);
    $('.newcontent2').hide(300);
})


// video
// var video = document.querySelector('video');
// video.addEventListener('click', function(){
//     this.play();
// })


// <!-- 【7.Elevator 电梯导航】 -->
// $()