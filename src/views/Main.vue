<template>
    <div class="content-wrap">
        <div class="inner">
            <div class="insta">
                <h1>인스타그램 api 테스트</h1>
                {{ posts }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
        };
    },
    mounted() {
        this.fetchPosts();
    },
    methods: {
        fetchPosts() {
            const accessToken =
                'IGQWRQUktnSHNBSkxCMUp5RnJVUjlkdDhiS0hhSXVYRjZA4VGFuNDdxZA0JiYVlsdkk1ZAEVjVzZAFUzFfQWJmYXppSzA4RklJY3pJWFVDbU5ZAUjA2NFg5SG9nc0xhQ0prc09WTEZATZA1RZAbzVoMEtSUmtGZAUs5Q3hRdlUZD';
            const apiUrl = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`;

            this.$axios
                .get(apiUrl)
                .then((response) => {
                    this.posts = response.data.data;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
};
</script>
<!-- 
var token = ""; $.ajax({ type:'GET', url : 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token='+token, dataType:'json', success:function(data){ token =
data["access_token"]; }, error:function(request, error) { alert("error"); } }); 토큰
IGQWRNc2xYWHVQdXBTSWNHMWx4SkJsajlxWTY2OC1mYkg1OElTaXYtTTlodXYyRTBJLVFEd2NJNDFWWmRnbmlsVjZADNUpIalNSeVcxNDRaQkRvNG05SWgwX2o2ZAGdSNjQ3d3ZAGLXh5dTdnSVZAOcVZAVLVBFYXd6RFkZD -->
