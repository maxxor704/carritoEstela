 <template>

    <b-card
        :title="product.name"
        :img-src="product.picture"
        :img-alt="product.name"
        img-top
        style="max-width: 30 rem;"
        class="mb-2"
    >
    <b-button
        block
        variant="warning"
        @click="$emit('addToCart', product)"
    >
        Agregar al Carrito
    </b-button>
    </b-card>

</template>
<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        }
    }   
}
</script>