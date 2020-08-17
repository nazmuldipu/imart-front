export const SideNavigation = {
    title: 'i-mart',
    category: [
        {
            name: 'Baby Care',
            slug: 'baby-care',
            image_urls: ['assets/dummy/banners/baby-care.jpg'],
            sub_category: [
                { name: 'Newborn Essentials', slug: 'newborn-essentials', image_urls: ['assets/dummy/baby-care/newborn-essentials.jpg'], sub_sub_category: [] },
                {
                    name: 'Diapers & Wipes', slug: 'diapers-&-wipes', image_urls: ['assets/dummy/baby-care/diapers-&-wipes.jpg'], sub_sub_category: [
                        { name: 'Wipes', slug: 'wipes', image_urls: ['assets/dummy/photos/fashion/4.jpg'] },
                        { name: 'Diapers', slug: 'diapers', image_urls: ['assets/dummy/photos/fashion/5.jpg'] },
                    ]
                },
                { name: 'Feeders', slug: 'feeders', image_urls: ['assets/dummy/baby-care/feeders.jpg'], sub_sub_category: [] },
                {
                    name: 'Fooding', slug: 'fooding', image_urls: ['assets/dummy/baby-care/fooding.jpg'], sub_sub_category: [
                        { name: 'Formula', slug: 'formula', image_urls: ['assets/dummy/photos/fashion/9.jpg'] },
                        { name: 'Baby & Toddler Food', slug: 'baby-&-toddler-food', image_urls: ['assets/dummy/photos/fashion/10.jpg'] },
                        { name: 'Milk, Juice & Drinks', slug: 'milk-juice-&-drinks', image_urls: ['assets/dummy/photos/fashion/11.jpg'] },
                    ]
                },
                { name: 'Bath & Skincare', slug: 'bath-&-skincare', image_urls: ['assets/dummy/baby-care/bath-&-skincare.jpg'], sub_sub_category: [] },
                { name: 'Baby Accessories', slug: 'baby-accessories', image_urls: ['assets/dummy/baby-care/baby-accessories.jpg'], sub_sub_category: [] },
                { name: 'Baby Oral Care', slug: 'baby-oral-care', image_urls: ['assets/dummy/baby-care/baby-oral-care.jpg'], sub_sub_category: [] },
            ],
        },
        {
            name: 'Food',
            slug: 'food',
            image_urls: ['assets/dummy/banners/food.jpg'],
            sub_category: [
                {
                    name: 'Fruits & Vegetables', slug: 'fruits-&-vegetables', image_urls: ['assets/dummy/photos/electronics/7.jpg'], sub_sub_category: [
                        { name: 'Fresh Fruits', slug: 'fresh-fruits', image_urls: ['assets/dummy/photos/electronics/8.jpg'] },
                        { name: 'Fresh Vegetables', slug: 'fresh-vegetables', image_urls: ['assets/dummy/photos/electronics/10.jpg'] },
                    ]
                },
                {
                    name: 'Breakfast', slug: 'breakfast', image_urls: ['assets/dummy/photos/homeware/1.jpg'], sub_sub_category: [
                        { name: 'Local Breakfast', slug: 'local-breakfast', image_urls: ['assets/dummy/photos/homeware/2.jpg'] },
                        { name: 'Energy Boosters', slug: 'energy-boosters', image_urls: ['assets/dummy/photos/homeware/3.jpg'] },
                        { name: 'Cereals', slug: 'cereals', image_urls: ['assets/dummy/photos/homeware/4.jpg'] },
                        { name: 'Jam & Spreads', slug: 'jam-&-spreads', image_urls: ['assets/dummy/food/jam-&-spreads.jpg'] },
                    ]
                },
                {
                    name: 'Beverages', slug: 'beverages', image_urls: ['assets/dummy/food/beverages.jpg'], sub_sub_category: [
                        { name: 'Tea', slug: 'tea', image_urls: ['assets/dummy/food/tea.jpg'] },
                        { name: 'Coffee', slug: 'coffee', image_urls: ['assets/dummy/food/coffee.jpg'] },
                        { name: 'Juice', slug: 'juice', image_urls: ['assets/dummy/food/juice.jpg'] },
                        { name: 'Soft Drinks', slug: 'soft-drinks', image_urls: ['assets/dummy/food/soft-drinks.jpg'] },
                        { name: 'Water', slug: 'water', image_urls: ['assets/dummy/food/water.jpg'] },
                        { name: 'Syrups & Powder Drinks', slug: 'syrups-&-powder-drinks', image_urls: ['assets/dummy/food/syrups-&-powder-drinks.jpg'] },
                    ]
                },
                {
                    name: 'Meat & Fish', slug: 'meat-&-fish', image_urls: ['assets/dummy/food/meat-&-fish.jpg'], sub_sub_category: [
                        { name: 'Frozen Fish', slug: 'frozen-fish', image_urls: ['assets/dummy/food/frozen-fish.jpg'] },                        
                        { name: 'Dried Fish', slug: 'dried-fish', image_urls: ['assets/dummy/food/dried-fish.jpg'] },                        
                    ]
                },
                {
                    name: 'Diabetic Food', slug: 'diabetic-food', image_urls: ['assets/dummy/food/diabetic-food.jpg'], sub_sub_category: []
                },

            ],
        },

    ],
};