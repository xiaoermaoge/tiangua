/**
 * Created by Administrator on 2017/4/25 0025.
 */
//获得当前时间戳
var timestamps=Date.parse(new Date());
console.log(timestamps);
//通过config接口注入权限验证配置
wx.config({
    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx7dbe6a8a6d203d28', // 必填，公众号的唯一标识
    timestamp: timestamps, // 必填，生成签名的时间戳
    nonceStr: '', // 必填，生成签名的随机串
    signature: '',// 必填，签名，见附录1
    jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});