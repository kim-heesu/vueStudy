# vuestudy

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 기본구조 (App.vue)
```
<div class="wrap">
    <Header />
    <router-view>
        <template>
            <div class="content-wrap">
                <div class="inner"></div> // inner는 필요에 따라 선택하여 사용
            </div>
        </template>
    </router-view>
    <Footer />
</div>
```

### 작업방식
페이지가 될 vue파일은 views폴더 안에 생성
컴포넌트는 components폴더 안에 생성
공통으로 쓸 css = src/assets/css/common.css
공통으로 쓸 js = src/assets/js/common.js
API 통신 axios 사용

### 라우터 등록방법
```
src/router/index.js 안에 import 후 path지정
필요한 vue파일 안에서 router-link 태그를 사용하여 이동되게 작업
gnb는 src/components/Navigator.vue 파일 수정
```