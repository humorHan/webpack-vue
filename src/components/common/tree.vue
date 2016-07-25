<template id="tree">
    <li v-for="item in model[root]">
        <div @click="toggle">
            <i class="fr-left"></i>
            <p class="fr-left" id="{{item.f_pointid}}">{{ item.f_name }}</p>
        </div>
        <ul v-if="isFolder" style="display: none">
            <tree  :model="model" :root="item.f_pointid"></tree>
        </ul>
    </li>
</template>
<script>
    module.exports={
        template:'#tree',
        name:'tree',
        data:function(){
          return {
              self:''
          }
        },
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
                e.stopPropagation();
                if (this.isFolder) {
                    var ev=e.currentTarget;
                    var value=ev.nextElementSibling.style.display;
                    if(value == 'none'){
                        ev.nextElementSibling.style.display='block';
                    }else{
                        ev.nextElementSibling.style.display='none';
                    }
                    this.$dispatch('treeMessage',{
                        'parent':this.root,
                        'self':this.f_pointid}
                    );
                }

                if(!this.isFolder){
                    this.$dispatch('treeMessage',{
                        'parent':this.f_parent,
                        'self':this.f_pointid}
                    );
                    console.log(111);
                }
            }
        }
    }
</script>
