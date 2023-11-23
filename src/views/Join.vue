<template>
    <div class="content-wrap member">
        <div class="inner">
            <h2>회원가입</h2>
            <form class="form-style01">
                <div class="form-box">
                    <label class="form-tit" for="joinId">아이디</label>
                    <input type="text" id="joinId" placeholder="아이디를 입력하세요">
                </div>
                <div class="form-box">
                    <label class="form-tit" for="joinPw">비밀번호</label>
                    <input type="password" id="joinPw" placeholder="비밀번호를 입력하세요">
                </div>
                <div class="form-box">
                    <label class="form-tit" for="joinEmail">이메일</label>
                    <input type="text" id="joinEmail" placeholder="이메일을 입력하세요">
                </div>
                <div class="btn-wrap">
                    <button type="submit" class="btn btn-green-bg">회원가입</button>
                    <router-link to="/login" class="btn btn-green-bg">계정이 있나요?</router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Join',
    components:{
    }
}
</script>