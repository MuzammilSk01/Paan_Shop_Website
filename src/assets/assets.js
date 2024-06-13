import Logo from './logo.png'
import Rating from './rating.png'
import cross_icon from './cross_icon.png'
import basket_icon from './basket_icon.png'
import add_green_icon from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import add_icon_white from './add_icon_white.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import linkedin_icon from './linkedin_icon.png'

import About_1 from './fazal.png'
import About_2 from './habib.png'
import About_3 from './Muzammil.png'


import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'

import Photo_1 from './paan_2.png'
import Photo_2 from './Calcutta-Sada-Paan.png'
import Photo_4 from './Special-Paan.jpg'
import Photo_5 from './Laing-fair-paan.jpg'
import Photo_6 from './paan_4.png'
import Photo_7 from './Choclet-bait.jpg'
import Photo_8 from './Janta_Dry_fruit.jpg'
import Photo_9 from './Janta_Anjur.jpg'
import Photo_10 from './jantapaanspecial.jpg'
import Photo_11 from './paan_1.png'
import Photo_12 from './panicecream.jpg'
import Photo_13 from './jantapaanoreo.jpg'
import Photo_14 from './paan_5.png'
import Photo_15 from './paan_3.png'

export const assets = {
    Logo,
    Rating,
    cross_icon,
    basket_icon,
    add_green_icon,
    remove_icon_red,
    add_icon_white,
    facebook_icon,
    twitter_icon,
    linkedin_icon

}

export const review = [
    {
        Image : About_1,
        Name : "Fazal Manyar",
        Reviews : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae aliquam sunt quam eveniet a error ea, facilis hic laboriosam dolorem fugit! Vel, autem quam quibusdam,"
    },
    {
        Image : About_2,
        Name : "Habib Manyar",
        Reviews : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae aliquam sunt quam eveniet a error ea, facilis hic laboriosam dolorem fugit! Vel, autem quam quibusdam,"
    },
    {
        Image : About_3,
        Name : "Muzammil Sk",
        Reviews : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae aliquam sunt quam eveniet a error ea, facilis hic laboriosam dolorem fugit! Vel, autem quam quibusdam,"
    },
    {
        Image : About_1,
        Name : "Fazal Manyar",
        Reviews : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae aliquam sunt quam eveniet a error ea, facilis hic laboriosam dolorem fugit! Vel, autem quam quibusdam,"
    },
    {
        Image : About_2,
        Name : "Habib Manyar",
        Reviews : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae aliquam sunt quam eveniet a error ea, facilis hic laboriosam dolorem fugit! Vel, autem quam quibusdam,"
    },
    {
        Image : About_3,
        Name : "Muzammil Sk",
        Reviews : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae aliquam sunt quam eveniet a error ea, facilis hic laboriosam dolorem fugit! Vel, autem quam quibusdam,"
    }
]

export const menu_list = [
    {
        menu_name: "Regular paan",
        menu_image: menu_5
    },
    {
        menu_name: "Chocolate Paan",
        menu_image: menu_4
    },
    {
        menu_name: "Flavour paan",
        menu_image: menu_3
    },
    {
        menu_name: "Dry-Fruit-Bar",
        menu_image: menu_2
    },
    {
        menu_name: "Couple Paan",
        menu_image: menu_1
    }
]

export const food_list = [
    {
        id: "1",
        Name: "Sada Paan",
        Price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Regular paan",
        Photo: Photo_1
    },
    {
        id: "2",
        Name: "Calcutta-Paan",
        Price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Regular paan",
        Photo: Photo_2
    },
    {
        id: "3",
        Name: "Masala Paan",
        Price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Regular paan",
        Photo: "https://2.imimg.com/data2/IT/WW/IMFCP-4395759/full-images-meetha-paan-792761.jpg"
    },
    {
        id: "4",
        Name: "Special-Paan",
        Price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Regular paan",
        Photo: Photo_4
    },
    {
        id: "5",
        Name: "Lovang Fair Paan",
        Price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Regular paan",
        Photo: Photo_5
    },
    {
        id: "6",
        Name: "Chocolairs Paan",
        Price: 25,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Chocolate Paan",
        Photo: Photo_6
    },
    {
        id: "7",
        Name: "Chocolate Bait",
        Price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Chocolate Paan",
        Photo: Photo_7
    },
    {
        id: "8",
        Name: "Dry-Fruit-Bar",
        Price: 25,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dry-Fruit-Bar",
        Photo: Photo_8
    },
    {
        id: "9",
        Name: "Anjeer Fruit Bar",
        Price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Dry-Fruit-Bar",
        Photo: Photo_9
    },
    {
        id: "10",
        Name: "Special Flavour Paan",
        Price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Flavour paan",
        Photo: Photo_10
    },
    {
        id: "11",
        Name: "Couple Paan",
        Price: 500,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Couple Paan",
        Photo: Photo_11
    },
    {
        id: "12",
        Name: "Paan Ice Cream",
        Price: 25,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Flavour paan",
        Photo: Photo_12
    },
    {
        id: "13",
        Name: "Oreo Paan",
        Price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Chocolate Paan",
        Photo: Photo_13
    },
    {
        id: "14",
        Name: "Mango Paan",
        Price: 25,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Flavour paan",
        Photo: Photo_14
    },
    {
        id: "15",
        Name: "Strawberry paan",
        Price: 25,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Flavour paan",
        Photo: Photo_15
    }
]
