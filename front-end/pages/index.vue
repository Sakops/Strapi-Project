<template>
  <div>
    <div>
      <div class="card" v-for="product in products" :key="product.id">
        <p>{{ product.attributes.Title }}</p>
        <p>{{ product.attributes.Description }}</p>
        <p>{{ product.attributes.Price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      products: []
    }
  },
  async mounted(){
    const {data} = await axios.get("http://127.0.0.1:1337/api/products")
    this.products = data.data;
  },
  methods:{
    add(){
      this.num += 1;
    },
    minus(){
      this.num -= 1;
    }
  }

}
</script>

<style scoped>
  .card{
    display: inline-block;
    width: 400px;
    margin: 2rem;
    align-items: center;
    border-radius: 10px;
    background-color: rgb(50, 27, 155);
  }

  .users{
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 2rem;
    padding: 1.5rem;
    color: white;
  }
  .users img{
    width: 150px;
    padding-left: 1rem;
  }
  .user p{
    display: inline-block;
  }
</style>