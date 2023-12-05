<template>
    <div class="content-wrap">
        <div class="inner">
            바이쀼<br />
            <AxiosTest />
        </div>
    </div>
</template>

<script>
// axios 예제
import AxiosTest from "@/components/AxiosTest.vue";

export default {
    name: "ByeVue",
    components: {
        AxiosTest,
    },
};
</script>
