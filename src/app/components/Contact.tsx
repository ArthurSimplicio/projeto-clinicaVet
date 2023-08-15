import React from 'react'
import {ImPhone} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
    return (
        <>
            <div id='Contact'  className=' w-full flex flex-col justify-center items-center bg-gray-50'>
                <h1 className="text-center font-semibold text-5xl pt-32">Contato</h1>
                <div className=' md:flex md:flex-row flex flex-col-reverse  justify-center items-center pt-12'>
                    <div className='w-full md:w-[400px] h-auto md:h-[562px] border mr-16 flex flex-col md:justify-evenly items-center justify-center mb-6 ml-9'>
                        <h1 className='font-medium text-3xl md:text-3xl pb-5'>Fale Conosco</h1>
                        <p className=' w-[218px] items-center pb-4'>Tire suas dúvidas sobre a Clínica Veterinária Pet, deixe sugestões e depoimentos ou qualquer mensagem para a gente através do telefone de contato, whatsapp ou e-mail abaixo:</p>
                        <p className='flex pb-4'><ImPhone className='mt-1 mr-1'/> (00) 00000-9999 </p>
                        <p className='flex pb-4'><MdEmail className='mt-1 mr-1'/> <i>petunskilate@gmail.com</i> </p>
                        <button className='bg-green-600 text-white p-4 hover:bg-green-700 rounded-md'>Chamar WhatsApp</button>
                    </div>
                    <div className='w-[400px] h-[562px] border flex items-center justify-center mb-6'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288899.4963426682!2d-46.76474850225127!3d-23.633030814495946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1692061935956!5m2!1spt-BR!2sbr" width="300" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact