/* window.addEventListener('load', function () {
    var bigph1 = document.querySelector('.bigph1');
    var bigpic = document.querySelector('.bigpic');
    bigph1.addEventListener('mousemove', function () {
        bigpic.style.display = 'block';
    })
    bigph1.addEventListener('mouseout', function () {
        bigpic.style.display = 'none';
    })
    var mdnav = document.querySelector('.mdnav');
    var mainpart = document.querySelectorAll('.mainpart>ul');
    // console.log(ul.className);

    mdnav.onclick = function (e) {//得到ul的点击事件
        // console.log(e.target);
        for (var i = 0; i < mdnav.children.length; i++) {//得到排他
            mdnav.children[i].className = '';
            mainpart[i].className = '';

        }
        e.target.className = 'cur'//选中
        var index = e.target.getAttribute('data-index')
        // console.log(index);//获取当前点击元素的索引号
        mainpart[index].className = 'cur';
        console.log(mainpart[index]);

    }
    var erweima = document.querySelectorAll('.erweima')
    // console.log(erweima);
     for(var i=0;i<erweima.length;i++){
        //  console.log(erweima.length);
        erweima[i].addEventListener('click', function () {
            alert('请用手机扫描二维码参加！')
            // console.log(erweima[i]);
        })
  }
   
    
}) */
$(function(){
    $('.imgh1').mouseenter(function(){
        $(this).parents('.imgh1parent').siblings('.bigpic').stop().fadeIn(500)
    })
    $('.imgh1').mouseout(function(){
        $(this).parents('.imgh1parent').siblings('.bigpic').stop().fadeOut(500)
    })
    //tab栏切换
    $('.mdnav .an').click(function(){
        $(this).addClass('cur').siblings().removeClass('cur')
        var index=$(this).index();
        // console.log(index);
        $('.lists').eq(index).show().siblings().hide()
    })
   /*  $('.smallcot').mouseover(function(){
        console.log(666);
        $(this).siblings('.inframe').css({
            transform: 'translateY(-278px)'
        })
        // $(this).addclass('inframe').siblings().removeClass('inframe')

        // $(this).siblings('.inframe').slideUp()
        // console.log($(this).siblings('.inframe'));
    }) */
})