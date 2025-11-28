import React from 'react'
import leaf from '../assets/листики.svg'
import flat from '../assets/flat.svg'


const Complex = () => {
    return (
    <div className=''>
        <p className='text-[#495E4C] text-[45px] font-semibold mt-40 ml-32'>Комплексное Решение По Монтажу <br>
        </br>И Вентиляции Под Ключ
        </p>
        <div className='leaf'>
            <img src={leaf} alt=''/>
        </div>
        <div className='bg-[#456] rounded-[25px] w-[257px] h-[135px]'>
            <div className='relative'>
            <img src={flat} alt="" />
            </div>
            <div class="absolute bottom-2 left-3 bg-[#D9FADD]">
                <p>от 100 000 ₽</p>
            </div>
            <div className=''>
            <p className='text-[#78C081]'>Квартиры и офисы</p>
            </div>
            </div>
            
    </div>
    )
}

export default Complex
