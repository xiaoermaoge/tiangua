/**
 * Created by Administrator on 2017/4/17 0017.
 */
$(window).load(function(){
    $('.loader')
    //��̬��ȡ html font-size
    var devicewidth=document.documentElement.clientWidth;
    document.documentElement.style.fontSize=devicewidth / 7.5+'px';
})
//�϶���������ڵ���Ҳ��Ӧ
$(function(){
    autoSizeHeight();
    window.onresize=function(){  //�϶���������ڵ���Ҳ��Ӧ
        autoSizeHeight();
    }
})
//�̶�����
function autoSizeHeight(){
    var footerH=0;
    var winH=$(window).height();
    //footerH=$(".footer").outerHeight(true);
    //��������
    if($(".body").length !=0){
        var headerH=$(".body").position().top;
        $(".body").height(winH-headerH);
    }
}

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
$('.body_three').children().each(function(){
    $(this).attr('class','');
    $(this).attr('style','');
})


