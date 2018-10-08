import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Conversion from '@/components/Conversion';

describe('Conversion.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: h => h(Conversion),
        }).$mount();

        expect(vm.$el.querySelector('h2').textContent)
            .to
            .contain('輸入');
    });

    function testButton(inputData, outputData, buttonId) {
        const wrapper = shallowMount(Conversion);
        wrapper.setData({
            inputData,
        });

        wrapper.find(buttonId)
            .trigger('click');

        expect(wrapper.find('#outputTextarea').element.value)
            .contains(outputData);
    }

    const base64Data = 'Hello, illya';
    const base64edData = 'SGVsbG8sIGlsbHlh';

    it('測試 base64 encode 功能', () => {
        testButton(base64Data, base64edData, '#base64Encode');
    });

    it('測試 base64 decode 功能', () => {
        testButton(base64edData, base64Data, '#base64Decode');
    });

    const urlData = 'ABCD!#$&\'()*+,/:;=?@[]0123 伊利雅好可愛';
    const urledData = 'ABCD!%23%24%26\'()*%2B%2C%2F%3A%3B%3D%3F%40%5B%5D0123%20%E4%BC%8A%E5%88%A9%E9%9B%85%E5%A5%BD%E5%8F%AF%E6%84%9B';

    it('測試 url encode 功能', () => {
        testButton(urlData, urledData, '#urlEncode');
    });

    it('測試 url decode 功能', () => {
        testButton(urledData, urlData, '#urlDecode');
    });

    it('測試 md5 功能', () => {
        testButton('flag{hello world}', '07a6c2cf43aac78ad09f9c57e8f65b71', '#md5');
    });

    it('測試 sha1 功能', () => {
        testButton('flag{hello world}', '6b089ebe5e4b5e3bd7c16cea452bf53ad581038b', '#sha1');
    });

    it('測試 sha256 功能', () => {
        testButton('flag{hello world}', '2b98d603ab9e80b087d5943ffd40424702b7a590929070cd51fd153e7a526ddf', '#sha256');
    });

    it('測試複製到輸入功能', () => {
        const wrapper = shallowMount(Conversion);
        wrapper.setData({
            inputData: urlData,
        });

        wrapper.find('#urlEncode')
            .trigger('click');

        wrapper.find('#copyToInput')
            .trigger('click');

        expect(wrapper.find('#inputTextarea').element.value)
            .contains(urledData);
    });
});
