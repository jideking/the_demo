<template>
  <div>
    <ul>
      <li v-for="(item, index) in msg " v-bind:key="index" class="">
        {{item.productName}}{{item.salePrice}}
        <button @click="addSomething(item.productId)"> 加入购物车 </button>
        </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: []
    }
  },
  created() {
   
  },
  mounted () {
    axios.get('/goods').then(res => {
      this.msg = res.data.result.list
      // for (var item in data1) {
      //   console.log(item)
      //   this.msg[item] = data1[item].productName
      // }
    }).catch(err => {
      console.log(`${err.message}`)
    })
  },
  methods: {
    addSomething(productId) {
      axios.post('/goods/addCart', {
        productId: productId
      }).then((res) => {
        console.log(res.status)
          alert('yes you do it')
      }).catch(err => alert('wrongw'))
    }
  },
  components: {
    
  }
}
</script>
