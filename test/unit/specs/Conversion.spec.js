import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Conversion from '@/components/Conversion';

describe('Conversion.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: h => h(Conversion),
        }).$mount();

        expect(vm.$el.querySelector('h2').textContent).to.contain('輸入');
    });

    it('測試 base64 encode 功能', () => {
        const wrapper = shallowMount(Conversion);
        wrapper.setData({
            inputData: 'Hello, illya',
        });

        wrapper.find('#base64Encode').trigger('click');

        expect(wrapper.find('#outputTextarea').element.value).contains('SGVsbG8sIGlsbHlh');
    });

    it('測試 base64 decode 功能', () => {
        const wrapper = shallowMount(Conversion);
        wrapper.setData({
            inputData: 'SGVsbG8sIGlsbHlh',
        });

        wrapper.find('#base64Decode').trigger('click');

        expect(wrapper.find('#outputTextarea').element.value).contains('Hello, illya');
    });
});
