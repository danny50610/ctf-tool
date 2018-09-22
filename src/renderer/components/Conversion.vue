<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>輸入</h2>
                <textarea class="form-control" rows="5" v-model="inputData"></textarea>
                <hr/>
                <h2>輸出</h2>
                <textarea class="form-control mb-2" rows="5" v-model="outputData" readonly></textarea>
                <div class="float-right">
                    <button type="button" class="btn btn-outline-dark">
                        <font-awesome-icon icon="copy"/>
                        複製到輸入
                    </button>
                </div>
            </div>
            <div class="col-4">
                <h2>方法</h2>
                <div class="card">
                    <div class="card-body">
                        <button type="button" class="btn btn-success btn-block"
                                @click="base64Encode()">
                            Base64 Encode
                        </button>
                        <button type="button" class="btn btn-danger btn-block"
                                @click="base64Decode()">
                            Base64 Decode
                        </button>
                        <button type="button" class="btn btn-success btn-block"
                                @click="urlEncode()">
                            URL Encode
                        </button>
                        <button type="button" class="btn btn-danger btn-block"
                                @click="urlDecode()">
                            URL Decode
                        </button>
                        <button type="button" class="btn btn-info btn-block"
                                @click="md5()">
                            MD5
                        </button>
                        <button type="button" class="btn btn-info btn-block"
                                @click="sha1()">
                            SHA1
                        </button>
                        <button type="button" class="btn btn-info btn-block"
                                @click="sha256()">
                            SHA256
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Conversion',
        data() {
            return {
                inputData: '',
                outputData: '',
            };
        },
        methods: {
            base64Encode() {
                // TODO:
                this.outputData = this.inputData;
            },
            base64Decode() {
                // TODO:
                this.outputData = this.inputData;
            },
            urlEncode() {
                // TODO:
                this.outputData = this.inputData;
            },
            urlDecode() {
                // TODO:
                this.outputData = this.inputData;
            },
            md5() {
                // TODO:
                this.outputData = this.inputData;
            },
            sha1() {
                // TODO:
                this.outputData = this.inputData;
            },
            sha256() {
                // TODO:
                this.outputData = this.inputData;
            },
        },
    };
</script>

<style scoped>
    textarea {
        min-height: 100px;
        font-family: monospace;
    }
</style>
