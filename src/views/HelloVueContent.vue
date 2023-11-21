<template>
    <div class="content-wrap">
        <div class="inner">
           헬로쀼의 상세페이지
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloVueContent',
    data(){
        return{
            testList:[
                {test:1,txt:11111},
                {test:2,txt:2222},
                {test:3,txt:3333},
            ],
            listlsit:{1:1,2:2,3:3,4:4}
        }
    }
}
</script>
