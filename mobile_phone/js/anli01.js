/**
 * Created by Administrator on 2017/4/17 0017.
 */
$(window).load(function(){
    $('.loader').hide();
})

//动态获取 html font-size
var devicewidth=document.documentElement.clientWidth;
document.documentElement.style.fontSize=devicewidth / 7.5+'px';
//拖动浏览器窗口导航也适应
$(function(){
    autoSizeHeight();
    window.onresize=function(){  //拖动浏览器窗口导航也适应
        autoSizeHeight();
    }
})
//固定导航
function autoSizeHeight(){
    var footerH=0;
    var winH=$(window).height();
    //footerH=$(".footer").outerHeight(true);
    //滚动区域
    if($(".body").length !=0){
        var headerH=$(".body").position().top;
        $(".body").height(winH-headerH);
    }
}

//swiper 滑动图片
var mySwiper = new Swiper('.swiper-container',{
    //slidesOffsetBefore : 100,
    slidesOffsetAfter : 100,
    direction:'horizontal',
    spaceBetween:0,
    slidesPerView:2,
})

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

//点击放大
$(function(){
    $('#thumbs a').touchTouch();
});