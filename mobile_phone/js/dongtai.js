/**
 * Created by Administrator on 2017/4/18 0018.
 */
/**
 * Created by Administrator on 2017/4/17 0017.
 */
//ҳ��������ȡ��ģ̬��
$(window).load(function(){
    $('.loader').hide();
    //��̬��ȡ html font-size
    var devicewidth=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=devicewidth / 7.5+'px';
})


//�ֲ�
var mySwiper = new Swiper ('.swiper-container', {
    autoplay:3000,
    pagination : '.swiper-pagination',
    paginationClickable :true,
})
//���body_box_one_news no margin
$('.body_box_one_news:last').css(
    'margin-bottom','0'
)

//���ͷ�� ������ת
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

//ͷ������ ���������ɫ
$('.head_medium ul li a').click(function(){
    $(this).css(
        'background-color','#30394b'
    )
})

//������ͼƬ
$(function () {
    $("img.lazy").lazyload({
        event: "sporty"
    });
});
$(window).bind("load", function () {
    var timeout = setTimeout(function () {
        $("img.lazy").trigger("sporty");
    }, 1000);
});

var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F6f78563c84d8cf1a727be5b1bfc0291c' type='text/javascript'%3E%3C/script%3E"));