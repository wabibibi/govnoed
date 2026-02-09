import React from 'react'
import leaf from '../assets/leaf.svg'
import flat from '../assets/flat.svg'
import mall from '../assets/тц.svg'
import sport from '../assets/спор.svg'
import swimm from '../assets/басик.svg'
import house from '../assets/дом.svg'
import rest from '../assets/рестик.svg'
import spa from '../assets/спа.svg'
import doc from '../assets/док.svg'

const Complex = () => {
    return (
        <div className=''>
            <p className='text-[#495E4C] text-[45px] font-semibold mt-40 ml-32 pb-32'>Комплексное Решение По Монтажу <br>
            </br>И Вентиляции Под Ключ
            </p>


            <div className='leaf pb-40'>
                <div className='flex gap-12 pl-32 '>
                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={flat} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Квартиры и офисы</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 100 000 ₽</p>
                        </div>
                    </div>

                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={mall} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Магазины и ТЦ</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 100 000 ₽</p>
                        </div>
                    </div>


                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={sport} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Фитнес центры</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 150 000 ₽</p>
                        </div>
                    </div>

                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={swimm} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Бассейны</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 150 000 ₽</p>
                        </div>
                    </div>

                </div>


                <div className='flex gap-12 pl-32 pt-9'>
                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={house} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Загородные дома и тд</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 200 000 ₽</p>
                        </div>
                    </div>

                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={rest} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Рестораны, кафе, бары</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 200 000 ₽</p>
                        </div>
                    </div>


                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={doc} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Стоматологии, клиники</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 200 000 ₽</p>
                        </div>
                    </div>

                    <div className='flex-col shadow-2xl flex bg-[#fffff] rounded-[25px] w-[257px] h-[135px]'>

                        <div className='relative'>
                            <img src={spa} alt="" />
                        </div>

                        <div className=''>
                            <p className='text-[#78C081] text-[18px] font-medium ml-3.5'>Салоны красоты, СПА</p>
                        </div>

                        <div class="absolute flex rounded-tr-[10px] rounded-br-[10px] bg-[#D9FADD] mt-6">
                            <p>от 100 000 ₽</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Complex
