<template>
<div class="container">
   <div id="app">
  <shop-Layout>
    <template slot="product-list">
 
    <p>Miguel Agustin Hernandez Reyes</p>
    <ProductList></ProductList>
    </template>
    <template slot="cart">
      Carrito 
      <cart></cart>
    </template>
  </shop-Layout>  
  </div>
</div>
</template>


<script>
import ShopLayout from '@/components/ShopLayout'
import ProductList from '@/components/ProductList.vue'
import Cart from '@/components/Cart'

export default {
  name: 'App',
  components: {
    ProductList, ShopLayout, Cart
  }
  

}
</script>

