import React from 'react'
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import logo from '../assets/Logo.svg';
import picture from '../assets/Group 20473.svg';


function HeaderComponent() {
    return (
        <div className='picture'>
            <div className='flex items-center ml-10'>
                <img src={logo} alt='' />
                <div className='flex gap-14 items-center ml-20 mr-20'>
                    <p class="text-[#495E4C] text-[14px]">Услуги</p>
                    <p class="text-[#495E4C] text-[14px]">О нас</p>
                    <p class="text-[#495E4C] text-[14px]">Польза продукта</p>
                    <p class="text-[#495E4C] text-[14px]">Оборудование</p>
                    <p class="text-[#495E4C] text-[14px]">Этапы работы</p>
                    <p class="text-[#495E4C] text-[14px]">Отзывы</p>
                </div>
                <button class="text-[#ffffff] rounded-[13px] bg-[#5CCD6A] text-[20px] pl-8 pr-8 pt-2 pb-2">Связаться</button>
            </div>
            
            <div class="flex-col text-[64px] font-semibold ml-32 mt-20">
                <p>Чистый Воздух</p>
                <p>Вместе C</p>
                <p class="text-[#78C081]">PASCAL VENT</p>
                <p class="font-normal text-[#7CA381] text-[21px]">Проектирование, поставка и монтаж систем <br>
                </br>вентиляции и кондиционирования</p>
            </div>
            <div class="flex ml-32 mt-12">
                <MapPin color="#78C081" />
                <p class="text-[#7B897D] ml-5 mr-16">Московский регион, <br>
                </br>Москва</p>
                <Phone color="#78C081" />
                <p class="text-[#7B897D] ml-5">+ 7 492 373 63 31 <br>
                </br> + 7 424 367 89 29</p>
            </div>
            <button class="ml-32 mt-16 text-[#ffffff] rounded-[20px] bg-[#5CCD6A] text-[20px] pl-26 pr-26 pt-4 pb-4">Оставить заявку</button>
        </div>
    );
}

export default HeaderComponent
