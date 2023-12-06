<template>
    <div class="content-wrap">
        <div class="inner">
            <div class="insta">
                <h1>인스타그램 api 테스트</h1>
                <div v-for="image in images" :key="image.id">
                    <img :src="image.src" alt="Instagram Image" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// instafeed.js 라이브러리 임포트
import Instafeed from 'instafeed.js';

export default {
    data() {
        return {
            images: [], // 인스타그램 이미지를 저장할 데이터 배열
        };
    },
    mounted() {
        // instafeed.js 초기화
        const feed = new Instafeed({
            accessToken: 'IGQWRQUktnSHNBSkxCMUp5RnJVUjlkdDhiS0hhSXVYRjZA4VGFuNDdxZA0JiYVlsdkk1ZAEVjVzZAFUzFfQWJmYXppSzA4RklJY3pJWFVDbU5ZAUjA2NFg5SG9nc0xhQ0prc09WTEZATZA1RZAbzVoMEtSUmtGZAUs5Q3hRdlUZD', // 인스타그램 액세스 토큰
            get: 'user',
            userId: '654036360087457', // 인스타그램 사용자 ID
            limit: 3, // 표시할 이미지의 개수
            resolution: 'standard_resolution', // 이미지 해상도
            success: (data) => {
                this.images = data.data.map((item) => ({
                    id: item.id,
                    src: item.images.standard_resolution.url,
                }));
            },
        });

        // instafeed.js 실행
        feed.run();
    },
};
</script>
