import {Link} from 'react-router-dom'
import { CTABtn } from './Homepage/CTABtn'
import { PageHeader } from './RoutedPages/PageHeader'
import { SectionHeader } from './Homepage/SectionHeader'

export const BookPaymentPage = () => {
  return (
    <div className="BookPaymentPage-Wrapper w-full flex justify-center items-start flex-grow bg-white">
        <div className="BookPaymentPage-Inner w-5/6">
            <div className="mainCTA w-full flex place-items-center gap-x-5 mt-12 mb-5">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <h3 className="bg-purple-900 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">PAYMENT PROCEDURE</h3>
                <div className="line h-px w-full bg-purple-950 "></div>
            </div>
            <div className="main w-full flex items-center justify-between gap-x-5 mt-10">
                <div className="line Option h-0.5 w-full bg-purple-950 flex-grow"></div>
                <h3 className="SectionHeader Method lg:text-2xl text-3xl font-bold w-fit text-nowrap text-center text-purple-950">CHOOSE A PAYMENT METHOD</h3>
                <div className="line Option h-0.5 w-full bg-purple-950 "></div>
            </div>
            <div className="line partition h-0.5 w-full bg-purple-950 hidden mt-3"></div>
            <div className="PageHeadermain w-full flex items-center justify-between gap-x-5 mt-10">
                 <div className="line Option KKK h-0.5 w-full bg-purple-950 hidden"></div>
                <h3 className="text-xl font-semibold Option2 w-fit text-nowrap text-center text-purple-950">OPTION 1 - DIRECT BANK TRANSFER</h3>
                <div className="line Option h-0.5 w-full bg-purple-950"></div>
             </div>
             <div className="line partition h-0.5 w-full bg-purple-950 hidden mt-3"></div>
            <p className='Instruction '>Make payment to the account details below and click the button below to send a SCREENSHOT of the receipt to the Admin on WhatsApp and get the book ASAP.
            <span className=' text-red-500 italic'> Put the name of the book as the Narration/Remark</span>
            </p>
            <div className="BankDetails mb-5 ">
                <p className=' pt-2 pb-1 font-medium'>BANK NAME: FIRST BANK OF NIGERIA PLC</p>
                <p className='  pt-2 pb-1 font-medium'>ACCOUNT NAME: OMOEFE BAZUNU</p>
                <p className='  pt-2 pb-1 font-medium'>ACCOUNT NUMBER: 3098523897</p>
            </div>
            <div className="WhtasAppLink w-full flex place-items-center gap-x-5 mb-16">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <h3 className="bg-green-700 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">CLICK TO WHATSAPP</h3>
                <div className="line h-px w-full bg-purple-950 "></div>
            </div>
            <div className="PageHeadermain w-full flex items-center justify-between gap-x-5">
                <div className="line Option KKK h-0.5 w-full bg-purple-950 hidden"></div>
                <h3 className="text-xl font-semibold Option2 w-fit text-nowrap text-center text-purple-950">OPTION 2 - PAY WITH SELAR LINK</h3>
                <div className="line Option h-0.5 w-full bg-purple-950"></div>
             </div>
             <div className="line partition h-0.5 w-full bg-purple-950 hidden mt-3"></div>
             <p className=' mb-5 Instruction'>Click the link to get to the Selar Page, pay with your bank card or transfer and you will get the book instantly. DONT WORRY SELAR IS VERY SAFE FOR MAKING ONLINE PAYMENTS. WE ASSURE YOU THAT.</p>
             <div className="SelarLink w-full flex place-items-center gap-x-5 mb-12">
                <div className="line h-px w-full bg-purple-950 flex-grow"></div>
                <h3 className=" bg-fuchsia-800 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">CLICK TO SELAR</h3>
                <div className="line h-px w-full bg-purple-950 "></div>
            </div>

        </div>
    </div>
  )
}