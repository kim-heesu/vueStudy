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
            accessToken: 'IGQWRNcjJ6eXNkRlhXRlp0Qm84enA0V1ZA5RVo0eTdIY2N2OUkzdGdFNHBmTExnbEdZAQWZAsNmVoMXpKc2tpVVJIdFlCVktPbFlUWl9ZAc3k1S1hMem1xTjE4WEtEWW9PY3NybmNydl9ndEFELV9VeUlVbENUVi1vY0kZD',
        });
        feed.run();
    },
};
</script>
