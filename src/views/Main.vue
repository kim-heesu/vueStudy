<template>
    <div class="content-wrap">
        <div class="inner">
            <div class="insta">
                <h1>인스타그램 api 테스트</h1>

                <div id="instafeed"></div>
            </div>
        </div>
    </div>
</template>

<script>
// instafeed.js 라이브러리 임포트
import Instafeed from '@/assets/js/instafeed.min.js';

export default {
    data() {
        return {
            images: [], // 인스타그램 이미지를 저장할 데이터 배열
        };
    },
    mounted() {
        var feed = new Instafeed({
            accessToken: 'IGQWRPODFnREZAHYm8xenFzU1dmTk9lSFNrOExBVEQzbGRCeTQ2enFKN2djd2lydHdhX1FRbDZAUUTR0dUZAaYXBjVnNac1lhWEFiVXMxLTF4bVFWYVRJYjBpYnNFbmxMLVg0Wld2N3QzUjR2VVVhNTY0cmFGZAWEtVXcZD',
        });
        feed.run();
    },
};
</script>
