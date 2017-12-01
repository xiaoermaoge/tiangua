/**
 * Created by Administrator on 2017/4/13.
 */


//页面加载完成取消模态框
$(window).load(function(){
    $('.loader').hide();
    //动态获取 html font-size
    var devicewidth=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=devicewidth / 7.5+'px';
})





//初始化 swiper
var mySwiper = new Swiper ('.swiper-container', {
    //分页器容器的css选择器或HTML标签
    pagination : '.swiper-pagination',
    //点击分页器的指示点分页器会控制Swiper切换
    paginationClickable :true,
    //滑动方向 垂直
    direction: 'vertical',
    //设置鼠标滚动
    mousewheelControl:true,
    //设置slide 的滑动速度
    speed:600,
    //设置最小拖动距离比列
    longSwipesRatio:0.5,
    //允许触发拖动的角度值
    touchAngle : 50,
    //设置自动高度
     autoHeight:true,
    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
    },
    onSlideChangeEnd: function(swiper){
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    }
})


//点击切换slide
$('.footer_jiantou').click(function(){
    mySwiper.slideNext();
})

//优势 模态框
window.onload=function(){
    //one
    $('#box4_body_container_one').click(function(){
        $('#box4_body_model_one').show();
        setTimeout(function(){
            $('.box4_body_model_two').show();
            $('.box4_body_model_three').show();
        },1000)
    })
//two
    $('#box4_body_container_two').click(function(){
        $('#box4_body_model_two').show();
        setTimeout(function(){
            $('.box4_body_model_two').show();
            $('.box4_body_model_three').show();
        },1000)
    })
//three
    $('#box4_body_container_three').click(function(){
        $('#box4_body_model_three').show();
        setTimeout(function(){
            $('.box4_body_model_two').show();
            $('.box4_body_model_three').show();
        },1000)
    })


    $('.box4_body_model_close').click(function(){
        $('.box4_body_model').attr(
            'style','display:none'
        )
    })
}


//点击头部 弹出跳转
$('.head_right').click(function(){
    $('.head_medium_model').show();
    $('.head_medium').show();
})

$('.head_medium_model').click(function(){
    $('.head_medium_model').hide();
    $('.head_medium').hide();
})
$('.head_medium').click(function(event){
    event.stopPropagation();
})

//头部链接 点击背景变色
$('.head_medium ul li a').click(function(){
    $(this).css(
        'background-color','#30394b'
    )
})


//懒加载图片
$(function () {
    $("img.lazy").lazyload({
        event: "sporty"
    });
});
$(window).bind("load", function () {
    var timeout = setTimeout(function () {
        $("img.lazy").trigger("sporty");
    }, 3000);
});
