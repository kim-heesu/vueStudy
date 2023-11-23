<template>
  <div class="content-wrap member">
        <div class="inner">
            <h2>로그인</h2>
            <form class="form-style01">
                <div class="form-box">
                    <label class="form-tit" for="loginId">아이디</label>
                    <input type="text" id="loginId" placeholder="아이디를 입력하세요">
                </div>
                <div class="form-box">
                    <label class="form-tit" for="loginPw">비밀번호</label>
                    <input type="password" id="loginPw" placeholder="비밀번호를 입력하세요">
                </div>
                <div class="btn-wrap">
                    <button type="submit" class="btn btn-green-bg">로그인</button>
                    <router-link to="/join" class="btn btn-green-bg">계정이 없나요?</router-link>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
// axios 예제
export default {
    name: 'Login',
    components:{
    }
}
</script>

