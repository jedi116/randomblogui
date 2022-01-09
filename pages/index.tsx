import type { NextPage } from 'next'
import Head from 'next/head'
import { CardComponent } from '../components/cards/card'
import { Footer } from '../components/footer/footer'
import { HeroSection } from '../components/herosection/herosection'
import { MainNavbar } from '../components/navbar/mainnavbar'
import logo from '../public/mainheader.svg'

const HomePage : NextPage = () => {
    return (
    <div className='homepage-main'>
        
        <MainNavbar linkList = {
          [
            {
              linkName: 'Home',
              href: '/'
            },
            {
              linkName: 'Blog',
              href: '/'
            },
            {
              linkName: 'About',
              href: '/about'
            },
            {
              linkName: 'Contact',
              href: '/'
            }
          ]
        }
        Logo = {logo}
        userAvatar ={true}
         />
        <HeroSection title='Random Blog' phrase='Post random shit' />
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <Footer/>
    </div>)
}

export default HomePage