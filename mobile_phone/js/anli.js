/**
 * Created by Administrator on 2017/4/17 0017.
 */


//页面加载完成取消模态框
$(window).load(function(){
    $('.loader').hide();
    //动态获取 html font-size
    var devicewidth=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=devicewidth / 7.5+'px';
})





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

//设置最后一个 body_two_box
$('.body_two_box:last').css(
    'margin-bottom','0'
)

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

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F6f78563c84d8cf1a727be5b1bfc0291c' type='text/javascript'%3E%3C/script%3E"));