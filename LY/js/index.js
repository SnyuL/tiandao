window.addEventListener("load", function() {
    function animate(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            obj.style.left = obj.offsetLeft + step + "px";
        }, 15);
    }

    // 页头部分
    // var bigph1 = document.querySelector(".big-ph1");
    // var bigph = document.querySelector(".header #big-ph");
    // console.log(bigph1);

    // bigph1.addEventListener("mouseover", function() {
    //     bigph.style.display = "block";
    // });
    // bigph1.addEventListener("mouseout", function() {
    //     bigph.style.display = "none";
    // });
    /* <!-- 【1.header】 --> */
    var hd_1 = document.querySelector(".hd_1");
    var hd = document.querySelector(".hd");
    var hd_3 = document.querySelector(".hd_3");
    hd_1.addEventListener("mouseover", function() {
        hd.style.display = "none";
        hd_3.style.display = "block";
    });
    hd_3.addEventListener("mouseout", function() {
        hd.style.display = "block";
        hd_3.style.display = "none";
    });

    // <!-- 【1.2腾讯游戏】 -->
    var liss = document.querySelectorAll(".gamul li");
    // console.log(liss);
    var gamulP = document.querySelectorAll(".gamul p");
    var gamad = document.querySelectorAll(".gamad");
    // console.log(gamad);
    var gamulimg = document.querySelectorAll(".gamul img");
    var youpai = document.querySelector(".hd_2 .youpai");
    var games = document.querySelector(".games");
    var tt = 0;
    for (var t = 0; t < liss.length; t++) {
        liss[0].children[1].style.display = "block";
        liss[0].style.height = "90px";
        liss[t].addEventListener("mouseenter", function() {
            for (var t = 0; t < liss.length; t++) {
                liss[t].style.height = "";
                liss[t].children[1].style.display = "none";
            }
            this.style.height = "90px";
            this.children[1].style.display = "block";
        });
    }
    games.style.display = "none";
    youpai.addEventListener("mouseover", function() {
        games.style.display = "block";
    });
    // youpai.addEventListener('mouseover', function(){
    //     games.style.display = 'none';
    // })
    games.addEventListener("mouseleave", function() {
        this.style.display = "none";
    });

    // <!-- 【2.banner】 tab 切换 -->
    $(".new .maxnews").click(function() {
        $(".newcontent2").show(300);
        $(".newcontent1").hide(300);
    });
    $(".new .news").click(function() {
        console.log($(".newcontent1"));
        $(".newcontent1").show(300);
        $(".newcontent2").hide(300);
    });

    // 页头部分结束

    // 微信部分代码
    var dianji1 = document.querySelector(".dianji1");
    var weixin = document.querySelector(".wexin");
    var dianji = document.querySelector(".dianji");
    var dianji2 = document.querySelector(".dianji2");
    var dt = document.querySelector(".dll").querySelectorAll("dt");
    var dd = document.querySelectorAll(".dll dd");

    for (var i = 0; i < dt.length; i++) {
        dt[i].setAttribute("index", i);
        dt[i].addEventListener("click", function() {
            for (var j = 0; j < dt.length; j++) {
                dt[j].style.color = "#676767";
            }
            this.style.color = "#f8f8f8";
            var index = this.getAttribute("index");
            for (var i = 0; i < dd.length; i++) {
                dd[i].style.display = "none";
                console.log(111);
            }
            dd[index].style.display = "block";
            dd[index].children[0].style.display = "block";
            console.log(222);
        });
    }

    // tab栏的滚动效果// tab栏
    var tab = document.querySelector(".tab");
    var tab1 = document.querySelector(".tab1");
    var ol_li = document.querySelectorAll("#qimingzi .tab li");
    var tab1_li = document.querySelectorAll("#qimingzi1 li");
    // console.log(tab1_li);

    for (var i = 0; i < ol_li.length; i++) {
        ol_li[i].setAttribute("index", i);
        ol_li[i].addEventListener("click", function() {
            for (var i = 0; i < ol_li.length; i++) {
                ol_li[i].className = "";
            }
            this.className = "current";
            var index = this.getAttribute("index");
            for (var i = 0; i < tab1_li.length; i++) {
                tab1_li[i].style.display = "none";
            }

            tab1_li[index].style.display = "block";
        });
        ol_li[0].className = "current";
    }

    var tab = document.querySelector(".tab");
    var tab1 = document.querySelector(".tab1");
    var ol_lii = document.querySelectorAll("#end .tab li");
    var tab1_lii = document.querySelectorAll("#end1 li");
    console.log(tab1_lii);

    for (var i = 0; i < ol_li.length; i++) {
        ol_lii[i].setAttribute("index", i);
        ol_lii[i].addEventListener("click", function() {
            for (var i = 0; i < ol_lii.length; i++) {
                ol_lii[i].className = "";
            }
            this.className = "current";
            var index = this.getAttribute("index");
            for (var i = 0; i < tab1_lii.length; i++) {
                tab1_lii[i].style.display = "none";
            }

            tab1_lii[index].style.display = "block";
        });
        ol_lii[0].className = "current";
    }

    // 手风琴样式
    //语音通知手风琴效果
    $(".voice_2 ul li").each(function() {
        var fold = $(this).find(".fold");
        var unfold = $(this).find(".unfold");
        if (fold.is(":hidden")) {
            $(this).width(391);
        } else {
            $(this).width(68);
        }
    });

    $(".voice_2 ul li").click(function() {
        var li_index = $(this).index();
        $(this).animate({ width: 391 }, 200);
        $(this).find(".unfold").show();
        $(this).find(".fold").hide();
        $(this).siblings().animate({ width: 68 }, 200);
        $(this).siblings().find(".unfold").hide();
        $(this).siblings().find(".fold").show();
    });

    // 最前面的tab栏
    $(function() {
        // 1.点击上部的li，当前li 添加current类，其余兄弟移除类
        $(".abover .newsbox .newtab li").click(function() {
            // 链式编程操作
            $(this).addClass("first_tab").siblings().removeClass("first_tab");
            // 2.点击的同时，得到当前li 的索引号
            var index = $(this).index();
            console.log(index);
            // 3.让下部里面相应索引号的item显示，其余的item隐藏
            $(".abover .player .listpart").eq(index).show().siblings().hide();
            console.log($(".abover .player .listpart"));
        });
    });

    $(".shuangji a").click(function() {
        $(this).addClass("cates").siblings().removeClass("cates");
        var index = $(this).index();
        $(".lunbo .gameover").eq(index).show().siblings().hide();
    });

    function animate(obj, target, callback) {
        // console.log(callback);  callback = function() {}  调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                // if (callback) {
                //     // 调用函数
                //     callback();
                // }
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            obj.style.left = obj.offsetLeft + step + "px";
        }, 15);
    }

    function lunbo() {
        // 1. 获取元素
        var arrow_l = document.querySelector(".lunbo2  .arrow-l");
        var arrow_r = document.querySelector(".lunbo2  .arrow-r");
        var focus = document.querySelector(".lunbo2  .focus");
        var focusWidth = focus.offsetWidth;

        // 3. 动态生成小圆圈  有几张图片，我就生成几个小圆圈
        var ul = focus.querySelector("ul");
        var ol = focus.querySelector(".circle");
        for (var i = 0; i < ul.children.length; i++) {
            // 创建一个小li
            var li = document.createElement("li");
            // 记录当前小圆圈的索引号 通过自定义属性来做
            li.setAttribute("index", i);
            // 把小li插入到ol 里面
            ol.appendChild(li);
            // 4. 小圆圈的排他思想 我们可以直接在生成小圆圈的同时直接绑定点击事件
            li.addEventListener("click", function() {
                // 干掉所有人 把所有的小li 清除 current 类名
                for (var i = 0; i < ol.children.length; i++) {
                    ol.children[i].className = "";
                }
                // 留下我自己  当前的小li 设置current 类名
                this.className = "current";
                // 5. 点击小圆圈，移动图片 当然移动的是 ul
                // ul 的移动距离 小圆圈的索引号 乘以 图片的宽度 注意是负值
                // 当我们点击了某个小li 就拿到当前小li 的索引号
                var index = this.getAttribute("index");
                // 当我们点击了某个小li 就要把这个li 的索引号给 num
                num = index;
                // 当我们点击了某个小li 就要把这个li 的索引号给 circle
                circle = index;
                // num = circle = index;
                console.log(focusWidth);
                console.log(index);

                animate(ul, -index * focusWidth);
            });
        }
        // 把ol里面的第一个小li设置类名为 current
        ol.children[0].className = "current";
        // 6. 克隆第一张图片(li)放到ul 最后面
        var first = ul.children[0].cloneNode(true);
        ul.appendChild(first);
        // 7. 点击右侧按钮， 图片滚动一张
        var num = 0;
        // circle 控制小圆圈的播放
        var circle = 0;
        // flag 节流阀
        var flag = true;
        arrow_r.addEventListener("click", function() {
            console.log(6666);
            if (flag) {
                flag = false; // 关闭节流阀
                // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
                if (num == ul.children.length - 1) {
                    ul.style.left = 0;
                    num = 0;
                }
                num++;
                animate(ul, -num * focusWidth, function() {
                    console.log(777);
                    flag = true; // 打开节流阀
                });
                // 8. 点击右侧按钮，小圆圈跟随一起变化 可以再声明一个变量控制小圆圈的播放
                circle++;
                // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
                if (circle == ol.children.length) {
                    circle = 0;
                }
                // 调用函数
                circleChange();
            }
        });

        function circleChange() {
            // 先清除其余小圆圈的current类名
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = "";
            }
            // 留下当前的小圆圈的current类名
            ol.children[circle].className = "current";
        }
        // 10. 自动播放轮播图
        var timer = setInterval(function() {
            //手动调用点击事件
            arrow_r.click();
        }, 2000);
    }
    lunbo();
});