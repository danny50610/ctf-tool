import utils from '../utils';

describe('Tool', function () {
    beforeEach(utils.beforeEach);
    afterEach(utils.afterEach);

    it('測試 URL Decode => Base64 Decode', async function () {
        await this.app.client.setValue('#inputTextarea', 'eyJuYW1lIjoiZGFubnkiLCJ2YWx1ZSI6MTIzfQ%3D%3D');
        await this.app.client.click('#urlDecode');
        let output = await this.app.client.getValue('#outputTextarea');
        expect(output).to.equal('eyJuYW1lIjoiZGFubnkiLCJ2YWx1ZSI6MTIzfQ==');

        await this.app.client.click('#copyToInput');
        output = await this.app.client.getValue('#inputTextarea');
        expect(output).to.equal('eyJuYW1lIjoiZGFubnkiLCJ2YWx1ZSI6MTIzfQ==');

        await this.app.client.click('#base64Decode');
        output = await this.app.client.getValue('#outputTextarea');
        expect(output).to.equal('{"name":"danny","value":123}');
    });
});
