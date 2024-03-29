import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../Style';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const [form, setForm] = useState({
    name: " ",
    email: " ",
    message: " "
  })

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
        const {name, value } = event.target;
        setForm({...form, [name]: value})
  }

  const submitHandler = (event) => {
      event.preventDefault();
      setLoading(true);
      emailjs.send('service_75zt4ny','template_jgo0l8m',
          {
            from_name: form.name,
            to_name: 'Ajay',
            from_email:form.email,
            to_email: 'ajayn1803@gmail.com',
            message: form.message
          },
          'LdxqNKVXKubgGiDem'
      )
      .then(()=>{
        setLoading(false);
        alert('Thank you. I Will get back to you as soon as possible. ');

        setForm({
          name:'',
          email:'',
          message:''
        })
      },
      (error)=>{
        setLoading(false);
        console.log(error);
        alert('Something went wrong. ');
      }
      )
  }
//  template_jgo0l8m
// service_75zt4ny
//LdxqNKVXKubgGiDem
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch </p>
        <h1 className={styles.sectionHeadText}>Contact.</h1>

        <form ref={formRef} onSubmit={submitHandler} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span>Your Name</span>

            <input type="text" name="name" value={form.name} onChange={handleChange} 
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span>Your Email</span>

            <input type="email" name="email" value={form.email} onChange={handleChange} 
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span>Your Message</span>

            <textarea rows="8"  name="message" value={form.message} onChange={handleChange} 
              className='bg-tertiary py-4 px-6 placeholder: text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

            <button type="submit" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>Send</button>
        </form>
      </motion.div>

      <motion.div variants={slideIn('right', 'tween', 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>

        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default Contact