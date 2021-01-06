<template>
    <div>
        <a href="" @click.prevent="totop"></a>
    </div>
</template>

<script>
export default{
    data(){
        return {}
    },
    methods:{
        totop(){
            window.scroll(0,0);
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
a{
    display: block;
    width: 50px;
    height: 50px;
    border: 2px solid #404040;
    border-radius: 50%;
    margin:60px auto 30px;
    position: relative;
    transition: .2s;
}
a:hover {
    transform: translateY(-10px);
    filter: brightness(150%);
}

a::after{
    content: '';
    width: 15px;
    height: 15px;
    border-top: 2px solid #404040;
    border-left: 2px solid #404040;
    position: absolute;
    top: 10px;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;transform: rotate(45deg);
}
</style>