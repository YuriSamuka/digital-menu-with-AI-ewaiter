import { getCategories, getProducts } from "./fake-db"

export function configureFakeBackend() {
    const products = getProducts()
    const categories = getCategories()
    const restaurant = {
        restaurant: {
            image_logo_url: "https://files.menudino.com/cardapios/2305/logo.png",
            cover_bg_url: "https://files.menudino.com/cardapios/2305/capa.jpg",
            website: "www.example.com",
            email: "info@example.com",
            social_media_handles: {
                twitter: "@example",
                instagram: "@example",
                facebook: "/example"
            },
            description: "A fantastic restaurant serving delicious food.",
            rating: 4.5,
            seating_capacity: 100,
            payment_methods: ["cash", "credit_card"],
            is_active: true,
            created_at: "2023-07-11T12:00:00Z",
            updated_at: "2023-07-11T14:30:00Z",
            restaurant_id: "123456789",
            restaurant_name: "JUST BURGER",
            restaurant_address: "R. 1035, 212 - St. Pedro Ludovico, Goiânia - GO, 74823-200",
            cuisine_type: "Italian",
            contact_number: "+1 (123) 456-7890",
            opening_time: "08:00",
            closing_time: "22:00"
        }
    }
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {
                // get products
                if (url.endsWith('/products') && opts.method === 'GET') {
                    resolve({ status: 200, ok: true, json: () => products })
                    return
                }
                if (url.endsWith('/restaurant') && opts.method === 'GET') {
                    resolve({ status: 200, ok: true, json: () => restaurant })
                    return
                }
                if (url.endsWith('/category') && opts.method === 'GET') {
                    resolve({ status: 200, ok: true, json: () => categories })
                    return
                }
                // pass through any requests not handled above
                realFetch(url, opts)
                    .then(response => resolve(response))
                    .catch(e => reject(e))
            }, 500);
        });
    };
}