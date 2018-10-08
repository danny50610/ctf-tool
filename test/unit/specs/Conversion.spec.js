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

    it('測試 base64 encode 功能', () => {
        const wrapper = shallowMount(Conversion);
        wrapper.setData({
            inputData: 'Hello, illya',
        });

        wrapper.find('#base64Encode')
            .trigger('click');

        expect(wrapper.find('#outputTextarea').element.value)
            .contains('SGVsbG8sIGlsbHlh');
    });

    it('測試 base64 decode 功能', () => {
        const wrapper = shallowMount(Conversion);
        wrapper.setData({
            inputData: 'SGVsbG8sIGlsbHlh',
        });

        wrapper.find('#base64Decode')
            .trigger('click');

        expect(wrapper.find('#outputTextarea').element.value)
            .contains('Hello, illya');
    });

    it('測試 url encode 功能', () => {
        const wrapper = shallowMount(Conversion);
        wrapper.setData({
            inputData: 'ABCD!#$&\'()*+,/:;=?@[]0123 伊利雅好可愛',
        });

        wrapper.find('#urlEncode')
            .trigger('click');

        expect(wrapper.find('#outputTextarea').element.value)
            .contains('ABCD!%23%24%26\'()*%2B%2C%2F%3A%3B%3D%3F%40%5B%5D0123%20%E4%BC%8A%E5%88%A9%E9%9B%85%E5%A5%BD%E5%8F%AF%E6%84%9B');
    });
});
