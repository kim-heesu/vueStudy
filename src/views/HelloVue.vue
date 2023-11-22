<template>
    <div class="content-wrap">
        <div class="inner">
            <p v-for="test in testList" :key="test">{{test.txt}}</p> <br>
            <div v-for="list,i in listlsit" :key='i'>{{list}}</div> <br>
            
            <ChildTest></ChildTest> <br>
            <!-- 네스티 라우터 nested-routes -->
            <router-link to="/HelloVue/depth">뎁스 nested-routes</router-link>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import ChildTest from '@/components/ChildTest';
import HelloVue02 from '@/components/HelloVue02.vue';

export default {
    name: 'HelloVue',
    components:{
        ChildTest,
        HelloVue02
    },
    data(){
        return{
            testList:[
                {test:1,txt:11111},
                {test:2,txt:2222},
                {test:3,txt:3333},
            ],
            listlsit:{1:'안뇽1',2:'안뇽2',3:'안뇽3',4:'안뇽4'}
        }
    }
}
</script>
