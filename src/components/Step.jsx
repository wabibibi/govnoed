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

<div className='bg-[#D9FADD] Fen '>
                <p className='text-[#495E4C] text-[35px] font-semibold ml-32 pt-14 mb-8'>Оставьте заявку и мы с вами свяжемся </p>
                <div className='pb-15'>
                    <button className='ml-32 pt-5 pl-5 pb-5 pr-52 bg-[#FFFFFF] rounded-2xl drop-shadow-xl'>
                        <p className='text-[#7CA381B2] opacity-70 text-[14px]'>Ваше Имя</p>
                        </button>
                    <button className='ml-7 pt-5 pl-5 pb-5 pr-40 bg-[#FFFFFF] rounded-2xl drop-shadow-xl'>
                        <p className='text-[#7CA381B2] opacity-70 text-[14px]'>Номер телефона</p>
                    </button>
                    <button className='ml-7 pt-5 pl-13 pb-4.5 pr-13 bg-[#9CD3A3] rounded-2xl drop-shadow-xl'>
                        <p className='text-[#FFFFFF] font-bold text-[15px]'>ОТПРАВИТЬ</p>
                    </button>
                </div>
            </div>
        </div>
    ) 
}
export default Step;