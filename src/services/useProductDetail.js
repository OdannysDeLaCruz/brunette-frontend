import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useProductDetail() {
    const route = useRoute()
    const router = useRouter()
    const productId = ref(false)

    const setProductId = async () => {
        try {
            if (route.query.productId) {
                productId.value = Number(route.query.productId)
            }
        } catch ( error ) {
            throw Error(error)
        }
    }

    watch(route, () => {
        setProductId()
    })
    
    const closeDetail = () => {
        productId.value = false
        router.replace({
            query: undefined
        })
    }

    onMounted(() => {
        setProductId()
    })

    return  {
        productId,
        closeDetail
    }
}