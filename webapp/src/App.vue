<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
     return {
        'navDatra' : []
      }
  },
  mounted(){
    console.log(111)
    // this.getNavDatra()
  },
  methods:{
   
  }
  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header{
  width: 100%;
  height: 50px;
  color: #FFF;
  font-size: .5rem;
  background-color: #0099cc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    margin: 10px 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFF;
    img{
      width: 2em;
      height: 2em;
      margin-right: 10px;
    }
  }
  .nav{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 75rem;
    a:hover{
      color: #f98a10;
    }
  }
  .operating{
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    div{
      padding: 0 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div:hover{
      background-color: #2c3e50;
    }
  }

}
.page{
  display: flex;
  // align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  .floatDom{
    width: 45px;
    height: auto;
    border-radius: 5px;
    
    div{
      width: 1.5rem;
      padding: .5rem;
      font-size: .5rem;
      color: #9f9f9f;
      background-color: #fff;
    }
  }
}

</style>
