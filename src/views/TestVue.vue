<template>
    <div class="content-wrap">
        <ul class="content">
            <template v-if="getList01.total_pages >= getList01.page">
                <li v-for="data in getList01.data" :key="data.id">
                    <div class="color-box" :style="`background-color:${data.color};`">
                        <p>
                            <span class="pantone-value">{{ data.pantone_value }}</span>
                            <span class="color-code">{{ data.color }}</span>
                            <span class="color-name">{{ data.name }}</span>
                        </p>
                    </div>
                </li>
            </template>
            <template v-else>
                <li class="empty">결과가 없습니다</li>
            </template>
        </ul>
        <ul class="pagenation">
            <li v-for="num in getList01.total_pages" :key="num">
                <button :value="num" @click="[changePage($event), getList()]">{{ num }}</button>
            </li>
            <li>
                <button type="button" value="3" @click="[changePage($event), getList()]">없는 페이지번호</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
ul {
    padding: 1rem 3rem;
}
ul.content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
}
ul.content li {
    width: 100%;
    text-align: center;
}
ul.content li .color-box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
}
ul.content li .color-box p {
    width: fit-content;
    height: fit-content;
    margin: 0 auto;
    text-align: center;
}
ul.content li .color-box p > span {
    display: block;
    text-transform: capitalize;
    font-size: 1.5rem;
}
ul.content li .color-box p > span.color-code {
    font-weight: 800;
}
</style>

<script>
export default {
    name: "TestVue",
    components: {},
    data() {
        return {
            page: 1,
            getList01: {},
            testTxt: "테스트",
        };
    },
    mounted() {
        this.getList();
    },
    methods: {
        getList() {
            this.$axios
                .get(`https://reqres.in/api/color?page=` + this.page)
                .then((res) => {
                    this.getList01 = res.data;
                })
                .catch((res) => {
                    console.error(res);
                });
        },

        // page변경
        changePage(event) {
            this.page = event.target.value;
        },
    },
};
</script>
