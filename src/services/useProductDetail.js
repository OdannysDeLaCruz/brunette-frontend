import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useProductDetail() {
    const route = useRoute()
    const router = useRouter()
    const productDetail = ref()

    const setProductDetail = () => {
        if (route.query.productDetail) {
            productDetail.value = Number(route.query.productDetail)
        }
    }

    watch(route, () => {
        setProductDetail()
    })
    
    const closeDetail = () => {
        productDetail.value = null
        router.replace({
            query: undefined
        })
    }

    onMounted(() => {
        setProductDetail()
    })

    return  {
        productDetail,
        closeDetail
    }
}