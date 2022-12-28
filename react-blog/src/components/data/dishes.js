const DISHES = [
    {
        id: 0,
        name: 'Ginger Burger',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
        category: 'meal',
        label: 'Hot',
        price: '199',
        description: 'This chicken burger gets an Asian-flavor twist with ginger and garlic. It\'s topped off with a fabulous coleslaw. If you like, serve the coleslaw as a side for grilled items, like chicken breasts, fish fillets or chops',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 1,
        name: 'BBQ Chicken Pizza',
        image: 'https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg',
        category: 'meal',
        label: '',
        price: '599',
        description: 'BBQ chicken pizza with tangy BBQ sauce, chicken, and red onion. Gouda cheese gives the homemade pizza the most delicious smoky flavor and cilantro adds a touch of freshness. My pizza dough recipe makes enough for two 12-inch pizzas, so you can freeze half for later. It’s an easy thick-style pizza crust with unbeatable flavor.',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 2,
        name: 'French Fries',
        image: 'https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_960_720.jpg',
        category: 'appetizer',
        label: 'New',
        price: '120',
        description: 'These are deep-fried, very thin, salted slices of potato that are usually served at room temperature. French fries have numerous variants, from thick-cut to shoestring, crinkle, curly and many other names.',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            }
        ]
    },
    {
        id: 3,
        name: 'Cheese Cake',
        image: 'https://cdn.pixabay.com/photo/2017/04/18/12/43/quiche-2238956_960_720.jpg',
        category: 'dessert',
        label: '',
        price: '170',
        description: 'A delectable, semi-sweet New York Style Cheese Cake, with cracker crust and spiced with Indian cardamoms',
        comments: [
            {
                id: 0,
                rating: 5,
                comment: "Imagine all the eatables, living in conFusion!",
                author: "Shanto",
                date: "2018-10-16T17:57:28.556094Z"
            },
            {
                id: 1,
                rating: 4,
                comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                author: "Karim",
                date: "2017-09-05T17:57:28.556094Z"
            },
            {
                id: 2,
                rating: 3,
                comment: "Eat it, just eat it!",
                author: "Moinul",
                date: "2019-02-13T17:57:28.556094Z"
            },
            {
                id: 3,
                rating: 4,
                comment: "Ultimate, Reaching for the stars!",
                author: "Rahat",
                date: "2017-12-02T17:57:28.556094Z"
            },
            {
                id: 4,
                rating: 2,
                comment: "It's your birthday, we're gonna party!",
                author: "Rony",
                date: "2019-12-02T17:57:28.556094Z"
            }
        ]
    }
]

export default DISHES;
