import React from 'react'
import { styles } from '../Style';
import { ComputersCanvas } from './canvas';
import BackImage from '../assets/herobg.png'
const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto  " style={{ backgroundImage: `url(${BackImage})`,backgroundSize: 'cover',backgroundPosition: 'center' }} >
      <div className={`absolute inset-0 top-[45px] max-w-7xl mx-auto ${styles.paddingX}  flex flex-row items-start gap-5`} >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF] ' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span className='text-[#915eff]'>Ajay</span></h1>
          <p className={`${styles.HomeText} mt-2 text-white-100`}>I develop a web applications<br className='sm:block hidden' /> A platform that provides notes and resources for Btech students. This project is created to help students improve their academic performance and achieve their goals.</p>
        </div>

      </div>
      <ComputersCanvas />


    </section>
  )
}

export default Home