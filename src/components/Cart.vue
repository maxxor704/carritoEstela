<template>
<div v-if="cart.length">
<b-table striped hover :items="cart" :fields="fields">

</b-table>
<b-alert show variant="success" class="text-center">
    Costo Total: {{totalCost}}
</b-alert>
</div>
<b-alert v-else show variant="info">No hay productos en elcarrito</b-alert>
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex'
export default {
    data(){
        return{
            fields: ['name', 'qty', 'price', 'actions' ]
        }
    },
    computed:{
        ...mapState('cart', ['cart'] ),
        ...mapGetters('cart', ['totalCost']),
    },
    methods: {
        ...mapMutations('cart', ['removeProductFromCart'])
    }
}
</script>