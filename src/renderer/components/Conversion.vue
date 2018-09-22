<template>
    <div>
        <div class="row">
            <div class="col-8">
                <h2>輸入</h2>
                <textarea class="form-control" rows="5"></textarea>
                <hr/>
                <h2>輸出</h2>
                <textarea class="form-control mb-2" rows="5" readonly></textarea>
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
                        <button type="button" class="btn btn-success btn-block">
                            Base64 Encode
                        </button>
                        <button type="button" class="btn btn-danger btn-block">
                            Base64 Decode
                        </button>
                        <button type="button" class="btn btn-success btn-block">
                            URL Encode
                        </button>
                        <button type="button" class="btn btn-danger btn-block">
                            URL Decode
                        </button>
                        <button type="button" class="btn btn-info btn-block">
                            MD5
                        </button>
                        <button type="button" class="btn btn-info btn-block">
                            SHA1
                        </button>
                        <button type="button" class="btn btn-info btn-block">
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
  };
</script>

<style scoped>
    textarea {
        min-height: 100px;
        font-family: monospace;
    }
</style>
