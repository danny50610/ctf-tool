import Vue from 'vue';
import Conversion from '@/components/Conversion';

describe('Conversion.vue', () => {
    it('should render correct contents', () => {
        const vm = new Vue({
            el: document.createElement('div'),
            render: h => h(Conversion),
        }).$mount();

        expect(vm.$el.querySelector('h2').textContent).to.contain('輸入');
    });
});
