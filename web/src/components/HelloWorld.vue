<template>
<!--    <div class="wrapper" id="wrapper" ref="containerFef">-->
<!--        <ul class="content">-->
<!--            <li v-for="item in state.list" :key="item.name">{{item.name}}</li>-->
<!--        </ul>-->
<!--        -->
<!--    </div>-->
    <div>
        <virtual-list style="height: 360px; overflow-y: auto;"
        :data-key="'uid'"
        :data-sources="state.list"
        :data-component="itemComponent"
        />
    </div>
</template>

<script>
  import {
    defineComponent,
    reactive,
    nextTick,
    ref,
    computed,
    watchEffect,
    onMounted,
    onUnmounted,
  } from "vue";
  // import axios from 'axios';
  import BScroll from 'better-scroll'
  import VirtualList from 'vue-virtual-scroll-list'
  import Item from "./Item";
  export default {
    name: 'HelloWorld',
    components: {
      'virtual-list': VirtualList
    },
    setup() {
      const containerFef = ref(null);
      const state = reactive({
        list: [],
        itemComponent: Item,
      });
      fetch('http://localhost:3000')
        .then(response => response.json())
        .then(body => {
          state.list = body;

          nextTick(() => {
            let wrapper = document.getElementById("wrapper")
            new BScroll(wrapper, {
              pullUpLoad: true,
              scrollbar: true,
              pullDownRefresh: true,
            })
          })
          console.log('state.list ', state.list)
        })

      return {state, containerFef};
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .content {
        height: 100px;
        overflow: auto;
    }
</style>
