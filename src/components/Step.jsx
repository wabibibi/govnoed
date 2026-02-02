import React from 'react' 
import Fen from '../assets/Frame.svg'


const Step = () => {
    return (

        <div>
            <div className='flex'>
            <h1 className='text-[#495E4C] text-[45px] font-semibold mt-40 ml-32 pb-32 '>3 Простых Шага <br>
            </br> К Очищению Воздуха</h1>

            <div className='ml-32'>
                <h2 className='text-[#78C081] text-[26px] font-medium mb-4 mt-40'>Кажется, это знак...</h2>
                <div className='text-[#7CA381] text-[16px] mb-2.5'>
                    <p>Получите скидку 5% на монтаж при заполнении анкеты на сайте</p>
                    <p>Бесплатно сделаем проект и пусконаладку системы при заказе монтажа</p>
                    <p>Кэшбек до 10% дизайнерам при передаче Клиента и заказе у нас проекта с монтажом!</p>
                </div>
            </div>
        </div>

        <div className='bg-[#D9FADD] mt-12'>
            <h3 className='text-[#495E4C] text-[35px] font-semibold ml-32 pt-14 '>Оставьте заявку и мы с вами свяжемся </h3>
            <div className='pb-14'>
            <button className='mt-8 ml-32 mr-7 bg-[#FFFFFF] rounded-[15px] pt-5 pl-5 pb-5 pr-48 drop-shadow-xl'>
                <p className='text-[#7CA381B2] text-[14px]'>Ваше имя</p>
            </button>

            <button className='mt-8 mr-16 bg-[#FFFFFF] rounded-[15px] pt-5 pl-5 pb-5 pr-48 drop-shadow-xl'>
                <p className='text-[#7CA381B2] text-[14px]'>Номер телефона</p>
            </button>

            <button className='mt-8 bg-[#7CA381B2] rounded-[15px] pt-4 pl-12 pb-4 pr-12 drop-shadow-xl'>
                <p className='text-[#FFFFFF] font-bold text-[15px]'>ОТПРАВИТЬ</p>
            </button>
            </div>
        </div>
        </div>
    ) 
}
export default Step;