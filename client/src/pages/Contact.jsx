import React, { useState } from 'react'
import Hero from '../components/Hero'
import bgBlack from "../assets/bgBlack.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FaEnvelope, FaPen } from 'react-icons/fa'
import ShinyButton from '../components/ShinyButton'
import MapComponent from '../components/MapComponent'
import { useNavigate } from 'react-router-dom'

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("http://localhost:3000/api/message/newMessage",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            }
        )

        const data = await res.json();
        if (data.success === false){
            setError(data.message);
            setLoading(false);
            return;
        }

        if (data.success === true){
            setSuccessful(data.message);
            setLoading(false);
        }

        setTimeout(() => {
            navigate("/");
        }, 2000);
    }

  return (
    <div className='flex flex-col'>
        <Hero image={"https://images.pexels.com/photos/31125216/pexels-photo-31125216.jpeg"} title={"CONTACT US"} subtitle={"Connect with Celeste. Whether for inquiries, reservations, or special requests, we look forward to hearing from you."}/>

        <section className='z-1 bg-center bg-cover py-30' style={{backgroundImage: `url(${bgBlack})`}}>

            <div className='max-w-3xl md:max-w-6xl mx-auto px-4 md:px-8 mb-30'>

                <div className='flex flex-col md:flex-row gap-5'> 
                    
                    <div className='flex flex-col gap-5 min-h-[300px]'>
                        <div className='flex flex-col gap-3 items-center text-center md:text-start md:items-start'>

                            <div className='flex flex-col gap-2 items-center md:items-start'>
                                <img className='w-10 h-10' src={"/public/contact.svg"}/>
                                <h3 className='text-xl'>CONTACT US</h3>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className='text-sm'>Phone: +229 01-4082-0493</h3>
                                <h3 className='text-sm'>Email: celesterestaurant@gmail.com</h3>
                            </div>

                        </div>

                        <div className='flex flex-col gap-3 items-center text-center md:text-start md:items-start'>

                            <div className='flex flex-col gap-2 items-center md:items-start'>
                                <img className='w-10 h-10' src={"/public/location.svg"}/>
                                <h3 className='text-xl'>OUR ADRESS</h3>
                            </div>

                            <div className='flex flex-col gap-2'>
                            Celeste Restaurant 5th Avenue, 8CX8+X7, Cotonou
                            </div>

                        </div>

                        <div className='flex flex-col gap-3 items-center text-center md:text-start md:items-start'>

                            <div className='flex flex-col gap-2 items-center md:items-start'>
                                <img className='w-10 h-10' src={"/public/hourglass.svg"}/>
                                <h3 className='text-xl'>OPEN TIME</h3>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h3 className='text-sm'>Mon - Fri : 9:00 AM - 10:00 PM <br /> Holidays : 10:00 AM - 8:00 PM </h3>
                            </div>

                        </div>
                    </div>
                    
                    <div className='min-h-[300px] flex-1'>
                        <form className='w-full h-full'
                        onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-5 w-full h-full'>
                                
                                <div className='border-1 p-3 border-[#cd9d4b] w-full flex gap-4 items-center'>
                                    <FontAwesomeIcon icon={faUser}/>
                                    <input type="text" id="name" required={true} placeholder='Name' onChange={handleChange} value={formData.name} className='w-full outline-none bg-transparent'/>
                                </div>

                                <div className='border-1 p-3 border-[#cd9d4b] flex gap-4 items-center'>
                                    <FaEnvelope/>
                                    <input type="email" id="email" required={true} placeholder='Email' onChange={handleChange} value={formData.email} className='w-full outline-none '/>
                                </div>

                                <div className='relative border-1 p-3 border-[#cd9d4b] flex gap-4 items-center h-full'>
                                    <div className='absolute left-4 top-4'>
                                        <FaPen/>
                                    </div>
                                    
                                    <textarea id="message" className='w-full h-full pl-8 outline-none' onChange={handleChange} value={formData.message} placeholder='Write your message'>

                                    </textarea>
                                </div>

                                {
                                error 
                                    &&
                                <h4 className='text-sm text-red-400'> {error} </h4>
                                }

                                {
                                successful 
                                    &&
                                <h4 className='text-sm text-green-400'> {successful} </h4>
                                }

                                <button className={`${loading ? "opacity-40" : ""}`} style={{transition: "opacity 0.1s"}}>
                                    <ShinyButton>
                                        Send Message
                                    </ShinyButton>
                                </button>

                            </div>

                        </form>
                    </div>

                </div>

            </div>

        </section>


        <section className='z-1 -mt-40'>
            <MapComponent/>
        </section>


    </div>
  )
}
