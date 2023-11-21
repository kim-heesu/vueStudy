<template>
    <nav>
        <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li>
                <router-link to="/HelloVue">안뇽</router-link>
                <ul class="depth">
                    <router-link to="/HelloVue/content">안뇽의 하위메뉴01</router-link>
                </ul>
            </li>
            <li><router-link to="/ByeVue">빠이</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navigator',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav{
    display: inline-block;
    vertical-align: middle;
}
nav ul{
    display: flex;
    align-content: center;
    gap: 2rem;
    font-size: 1.8rem;
}
nav ul li{
    position:relative;
}
nav .depth{
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    border: 1px solid #ddd;
    padding: 0.5rem;
    width: max-content;
}
nav ul li:hover .depth{
    display: block;
}
</style>
