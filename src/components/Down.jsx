import React from 'react'
import foto from '../assets/foto.svg'
import { SplinePointer } from 'lucide-react';
import { AirVent } from 'lucide-react';
import { MonitorCog } from 'lucide-react';
import { Droplets } from 'lucide-react';
import { Fan } from 'lucide-react';
import { Vault } from 'lucide-react';



function Down() {
    return (
        <div className='flex'>
        <div class="flex-col ml-32 w-md">
            <p className='text-[#495E4C] text-[45px] font-semibold mt-40'>Предоставляемые</p>
            <p className='text-[#495E4C] text-[45px] font-semibold mb-6'>Услуги</p>
            <p className='text-[#848484] text-[16px] mb-6'>При разработке проекта предложим техническое решение
                оптимальное по соотношению цены и качества, оно идеально впишется в ваш дизайн, 
                а также будет учитывать все ваши пожелания.</p>
            <p className='text-[#848484] text-[16px] mb-6'>Монтаж выполняется опытными бригадами с соблюдением всех действующих технических норм, 
                правил безопасности и строго по согласованному проекту.</p>
            <p className='text-[#848484] text-[16px] mb-6'>Одинаково эффективно выполняем проектирование и монтаж на объектах любой сложности – 
                от небольшой квартиры, до объектов со сложными технологическими процессами на основе действующей 
                нормативной документации.</p>
                </div>
            <div class="flex ml-40 mt-40 bg-[#D9FADD] w-[600px] h-[555px] rounded-[60px]">
                <div class=" mt-28 ml-9 text-[#495D4C] text-[18px]">
                    <div class="flex mb-5 gap-4">
                        <SplinePointer size={40} color="#78C081" />
                        <p>Проектирование систем вентиляции любой сложности</p>
                    </div>
                    <div class="flex mb-5 gap-4">
                        <AirVent color="#78C081" />
                        <p>Монтаж приточной вентиляции</p>
                    </div>
                    <div class="flex mb-5 gap-4">
                        <MonitorCog color="#78C081" /> 
                        <p>Монтаж вытяжной вентиляции</p>
                    </div>
                    <div class="flex mb-5 gap-4">
                        <Droplets size={34} color="#78C081" />
                        <p>Монтаж вентиляции с увлажнением воздуха</p>
                    </div>
                    <div class="flex mb-5 gap-4">
                        <Fan size={30} color="#78C081" />
                        <p>Монтаж вентиляции с рекуператором</p>
                    </div>
                    <div class="flex mb-5 gap-4">
                        <Vault size={34} color="#78C081" />
                        <p>Монтаж вентиляции с осушением для бассейна</p>
                    </div>
                    
                </div>
                    <img className="" src={foto} alt='' />
            </div>
        
        </div>
    )
}

export default Down