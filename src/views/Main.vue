<template>
    <div class="content-wrap">
        <div class="inner">
            <div class="insta">
                <h1>인스타그램 api 테스트</h1>
                <ul>
                    <li v-for="post in posts" :key="post.id">{{ post.caption }}</li>
                </ul>
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
            const script = document.createElement('script');
            script.src = `https://api.instagram.com/v1/users/self/media/recent/?access_token=IGQWRQUktnSHNBSkxCMUp5RnJVUjlkdDhiS0hhSXVYRjZA4VGFuNDdxZA0JiYVlsdkk1ZAEVjVzZAFUzFfQWJmYXppSzA4RklJY3pJWFVDbU5ZAUjA2NFg5SG9nc0xhQ0prc09WTEZATZA1RZAbzVoMEtSUmtGZAUs5Q3hRdlUZD&callback=processPosts`;
            document.body.appendChild(script);
        },
        processPosts(response) {
            this.posts = response.data;
        },
    },
};
</script>
<!-- 
var token = ""; $.ajax({ type:'GET', url : 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token='+token, dataType:'json', success:function(data){ token =
data["access_token"]; }, error:function(request, error) { alert("error"); } }); 토큰
IGQWRNc2xYWHVQdXBTSWNHMWx4SkJsajlxWTY2OC1mYkg1OElTaXYtTTlodXYyRTBJLVFEd2NJNDFWWmRnbmlsVjZADNUpIalNSeVcxNDRaQkRvNG05SWgwX2o2ZAGdSNjQ3d3ZAGLXh5dTdnSVZAOcVZAVLVBFYXd6RFkZD -->
