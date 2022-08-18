import { COLORS, images, icons, SIZES, lightFONTS } from '../constants';

export const restaurantData = [
    {
        id: '1',
        RestaurantName: 'Burger House',
        rating: '★★★☆☆',
        distance: '5 km',
        image: images.res1,
        cuisine: 'Italian, Bar',
        addres: 'Tokha',
        phone: '1234 567 89',
        email: 'contact@email.com',
        website: 'www.website.com',
        menu: [
            {
                menuId: 1,
                name: "Crispy Chicken Burger",
                photo: images.crispy_chicken_burger,
                description: "Burger with crispy chicken, cheese and lettuce",
                calories: 200,
                price: 500
            },
            {
                menuId: 2,
                name: "Crispy Chicken Burger with Honey Mustard",
                photo: images.honey_mustard_chicken_burger,
                description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
                calories: 250,
                price: 600
            },
            {
                menuId: 3,
                name: "Crispy Baked French Fries",
                photo: images.baked_fries,
                description: "Crispy Baked French Fries",
                calories: 194,
                price: 800
            }
        ]
      },
    {
        id: 2,
        RestaurantName: 'Pizza House',
        rating: '★★★☆☆',
        distance: '5 km',
        image: images.res2,
        cuisine: 'Italian, Bar',
        addres: 'Tokha',
        phone: '1234 567 89',
        email: 'contact@email.com',
        website: 'www.website.com',
        menu: [
            {
                menuId: 4,
                name: "Hawaiian Pizza",
                photo: images.hawaiian_pizza,
                description: "Canadian bacon, homemade pizza crust, pizza sauce",
                calories: 250,
                price: 15
            },
            {
                menuId: 5,
                name: "Tomato & Basil Pizza",
                photo: images.pizza,
                description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
                calories: 250,
                price: 20
            },
            {
                menuId: 6,
                name: "Tomato Pasta",
                photo: images.tomato_pasta,
                description: "Pasta with fresh tomatoes",
                calories: 100,
                price: 10
            },
            {
                menuId: 7,
                name: "Mediterranean Chopped Salad ",
                photo: images.salad,
                description: "Finely chopped lettuce, tomatoes, cucumbers",
                calories: 100,
                price: 10
            }
        ]
    },
    {
        id: 3,
        photo: images.hot_dog_restaurant,
        RestaurantName: 'Hot Dog House',
        rating: '★★★★☆',
        distance: '5 km',
        image: images.res3,
        cuisine: 'Italian, Bar',
        addres: 'Tokha',
        phone: '1234 567 89',
        email: 'contact@email.com',
        website: 'www.website.com',
        menu: [
            {
                menuId: 8,
                name: "Chicago Style Hot Dog",
                photo: images.chicago_hot_dog,
                description: "Fresh tomatoes, all beef hot dogs",
                calories: 100,
                price: 20
            }
        ]
    },
    {
        id: 4,
        photo: images.japanese_restaurant,
        RestaurantName: 'Sushi House',
        rating: '★★★★☆',
        distance: '5 km',
        image: images.res4,
        cuisine: 'Italian, Bar',
        addres: 'Tokha',
        phone: '1234 567 89',
        email: 'contact@email.com',
        website: 'www.website.com',
        menu: [
            {
                menuId: 9,
                name: "Sushi sets",
                photo: images.sushi,
                description: "Fresh salmon, sushi rice, fresh juicy avocado",
                calories: 100,
                price: 50
            }
        ]
    },
    {
        id: 5,
        photo: images.noodle_shop,
        RestaurantName: ' Thai House',
        rating: '★★★★☆',
        distance: '5 km',
        image: images.res1,
        cuisine: 'Italian, Bar',
        addres: 'Tokha',
        phone: '1234 567 89',
        email: 'contact@email.com',
        website: 'www.website.com',
        menu: [
            {
                menuId: 10,
                name: "Kolo Mee",
                photo: images.kolo_mee,
                description: "Noodles with char siu",
                calories: 200,
                price: 5
            },
            {
                menuId: 11,
                name: "Sarawak Laksa",
                photo: images.sarawak_laksa,
                description: "Vermicelli noodles, cooked prawns",
                calories: 300,
                price: 8
            },
            {
                menuId: 12,
                name: "Nasi Lemak",
                photo: images.nasi_lemak,
                description: "A traditional Malay rice dish",
                calories: 300,
                price: 8
            },
            {
                menuId: 13,
                name: "Nasi Briyani with Mutton",
                photo: images.nasi_briyani_mutton,
                description: "A traditional Indian rice dish with mutton",
                calories: 300,
                price: 8
            },

        ]
    },
    {

        id: 6,
        photo: images.kek_lapis_shop,
        RestaurantName: 'Chinese House',
        rating: '★★★★☆',
        distance: '5 km',
        image: images.res3,
        cuisine: 'Italian, Bar',
        addres: 'Tokha',
        phone: '1234 567 89',
        email: 'contact@email.com',
        website: 'www.website.com',
        menu: [
            {
                menuId: 12,
                name: "Teh C Peng",
                photo: images.teh_c_peng,
                description: "Three Layer Teh C Peng",
                calories: 100,
                price: 2
            },
            {
                menuId: 13,
                name: "ABC Ice Kacang",
                photo: images.ice_kacang,
                description: "Shaved Ice with red beans",
                calories: 100,
                price: 3
            },
            {
                menuId: 14,
                name: "Kek Lapis",
                photo: images.kek_lapis,
                description: "Layer cakes",
                calories: 300,
                price: 20
            }
        ]

    }


]