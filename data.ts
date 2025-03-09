import airplain from './public/asset/images/airplain.png'
import businessCar from './public/asset/images/businessCar.png'
import carDriver from './public/asset/images/car&driver.png'
import driver from './public/asset/images/driver.png'

export const MENU = [
    {
        id: 1,
        name: 'Home',
        slug: '/'
    },
    {
        id: 2,
        name: 'Vhicles',
        slug: '/vehicles'
    },
    {
        id: 3,
        name: 'About',
        slug: '/about'
    },
    {
        id: 4,
        name: 'Contact',
        slug: '/contact'
    },
    {
        id: 5,
        name: 'Blogs',
        slug: '/blog'
    },
    {
        id: 6,
        name: 'Services',
        slug: '/services'
    },

]

// our services card
export const SERVICE_CARD = [
    {
        id: 1,
        name: 'Car Rental With Driver',
        paragraph: 'Enhance your rental experience with additional options.',
        img: carDriver
    },
    {
        id: 2,
        name: 'Business Car Rental',
        paragraph: 'Enhance your rental experience with additional options.',
        img: businessCar
    },
    {
        id: 3,
        name: 'Airport Transfer',
        paragraph: 'Enhance your rental experience with additional options.',
        img: airplain
    },
    {
        id: 4,
        name: 'Chauffeur Services',
        paragraph: 'Enhance your rental experience with additional options.',
        img: driver
    }
]