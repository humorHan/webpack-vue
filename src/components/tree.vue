<template id="tree">
    <li v-for="item in model[root]">
        <p @click="toggle">{{ item.f_name }}</p>
        <ul v-if="isFolder" style="display: none">
            <tree  :model="model" :root="item.f_pointid"></tree>
        </ul>
    </li>
</template>
<style type="text/less">

</style>
<script>
    module.exports={
        template:'#tree',
        props:{
            model:Object,
            root:String
        },
        computed:{
            isFolder:function(){
                return Boolean(this.model[this.root]);
            }
        },
        methods:{
            toggle:function(e){
                if (this.isFolder) {
                    var ev=e.currentTarget;
                    var value=ev.nextElementSibling.style.display;
                    if(value == 'none'){
                        ev.nextElementSibling.style.display='block';
                    }else{
                        ev.nextElementSibling.style.display='none';
                    }
                }
            }
        }
    }
</script>
