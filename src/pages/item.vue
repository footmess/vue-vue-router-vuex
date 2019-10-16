<template>
    <div>
        <itemcontainer father-component="item"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from '../components/itemcontainer'
export default {
    name:'item',
    components: {
        itemcontainer
    },
    //进入题目页面，开始计时
    created() {
        this.$store.commit('REMBER_TIME')
    }

}
</script>

<style>

</style>