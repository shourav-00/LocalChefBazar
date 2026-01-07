import React from 'react';
import footerbgImg from '../../public/FooterImg/test-2.jpg';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail, MdLocalPhone } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='w-full relative' style={{
            backgroundImage: `url(${footerbgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
          
            <div className='absolute inset-0 bg-black/80'></div>
            

            <div className='relative z-10 py-16 px-4'>
                <div className='max-w-7xl mx-auto'>
              
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                        {/* Brand Info */}
                        <div className='text-center md:text-left'>
                            <h2 className='text-3xl font-bold text-yellow-400 mb-4'>LocalChef Bazar</h2>
                            <p className='text-gray-300'>
                             Home chefs from all across Bangladesh can offer and sell their homemade meals through this platform.
                            </p>
                        </div>
                        
                        {/* Contact Info */}
                        <div className='text-center'>
                            <h3 className='text-xl font-bold  mb-4 text-yellow-300'>Get In Touch</h3>
                            <div className='space-y-3 text-gray-300'>
                                <p className='flex items-center justify-center gap-2'>
                                    <span><MdLocalPhone /></span> +880 1784535301
                                </p>
                                <p className='flex items-center justify-center gap-2'>
                                    <span><MdEmail /></span> local@chefbazar.com
                                </p>
                                <p className='flex items-center justify-center gap-2'>
                                    <span><FaLocationDot /></span> Dhaka,Bangladesh
                                </p>
                            </div>
                        </div>
                        
                        {/* Quick Links */}
                        <div className='text-center md:text-right'>
                            <h3 className='text-xl font-bold text-yellow-300 mb-4'>Quick Links</h3>
                            <div className='space-y-2'>
                                <a href='/' className='block text-gray-300 hover:text-yellow-400 transition'>Home</a>
                                <a href='/menu' className='block text-gray-300 hover:text-yellow-400 transition'>Menu</a>
                                <a href='/about' className='block text-gray-300 hover:text-yellow-400 transition'>About Us</a>
                                <a href='/contact' className='block text-gray-300 hover:text-yellow-400 transition'>Contact</a>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                    {/* Social Media */}
                    <div className='flex justify-center gap-6 mb-8'>
                        <a href='#' className='text-white hover:text-yellow-400 transition text-lg'>Facebook</a>
                        <a href='#' className='text-white hover:text-yellow-400 transition text-lg'>Instagram</a>
                        <a href='#' className='text-white hover:text-yellow-400 transition text-lg'>WhatsApp</a>
                        <a href='#' className='text-white hover:text-yellow-400 transition text-lg'>Twitter</a>
                    </div>
                    
                    {/* Divider */}
                    <div className='border-t border-yellow-300 my-8'></div>
                    
                    {/* Bottom Section: Copyright */}
                    <div className='text-center text-gray-400'>
                        <p className='mb-2'>© {new Date().getFullYear()} Sugar HomeCook. All rights reserved.</p>
                        <p className='text-sm'>Traditional Bangladeshi Recipes • Made with Love • No MSG • No Artificial Colors</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;