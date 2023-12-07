<template>
    <header>
        <div class="inner">
            <h1 class="logo"><router-link to="/">Vue</router-link></h1>
            <Nav />
        </div>
    </header>
</template>

<script>
import Nav from '@/components/common/Navigator.vue';
export default {
    name: 'Header',
    components: {
        Nav,
    },
};
</script>

<style scoped>
header {
    border-bottom: 1px solid #ddd;
}
header .inner {
    display: flex;
    gap: 5rem;
    padding: 1rem;
}
.logo {
    display: inline-block;
    vertical-align: middle;
    font-size: 3rem;
    font-weight: 800;
    color: #006900;
}
</style>
