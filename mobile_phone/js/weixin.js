/**
 * Created by Administrator on 2017/4/25 0025.
 */
//��õ�ǰʱ���
var timestamps=Date.parse(new Date());
console.log(timestamps);
//ͨ��config�ӿ�ע��Ȩ����֤����
wx.config({
    debug: true, // ��������ģʽ,���õ�����api�ķ���ֵ���ڿͻ���alert��������Ҫ�鿴����Ĳ�����������pc�˴򿪣�������Ϣ��ͨ��log���������pc��ʱ�Ż��ӡ��
    appId: 'wx7dbe6a8a6d203d28', // ������ںŵ�Ψһ��ʶ
    timestamp: timestamps, // �������ǩ����ʱ���
    nonceStr: '', // �������ǩ���������
    signature: '',// ���ǩ��������¼1
    jsApiList: [] // �����Ҫʹ�õ�JS�ӿ��б�����JS�ӿ��б����¼2
});