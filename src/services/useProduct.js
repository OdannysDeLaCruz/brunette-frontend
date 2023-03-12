import { ref } from 'vue';
import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.API_PRODUCTS,
});

api.interceptors.request.use(config => {
    // const token = store.getters["auth/getToken"];

    // config.headers.common["token"] = token;
    // config.params = { ...config.params }
    return config;
});

export function useProduct() {
    const loading = ref(false)
    const products =  ref([])

    const getProductById = async (id) => {
        loading.value = true
        if ( process.env.NODE_ENV === "production" ) {
            try {
                const response = await api.get(`/${id}`)
                loading.value = false

                if ( response.status === 200 ) {
                    products.value = response.results.products
                }
            } catch ( error ) {
                throw Error(error)
            }
        } else {
            setTimeout(() => {
                products.value = [
                    {
                        id: id,
                        name: "Kanekalon californiano - test",
                        price: 10000,
                        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam consequuntur, mollitia culpa blanditiis doloremque veritatis tenetur dolor quasi officiis laborum nobis? Animi ratione provident explicabo velit accusantium. Cumque, animi!"
                    }
                ]

                loading.value = false
            }, 0)
        }
    }

    return {
        loading,
        products,
        getProductById
    }
}