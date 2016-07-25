<template id="tpl">
    <div id="2346" @click="news">
        点我点我点我
    </div>
</template>
<script>
  module.exports={
        template:'#tpl',
        methods:{
            news:function(){
                this.$dispatch('child-msg', '13445')
            }
        }
  }
</script>
