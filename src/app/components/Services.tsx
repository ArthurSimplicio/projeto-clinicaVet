import Image from 'next/image'
import React from 'react'


const Services = () => {
  
  return (
    <>
      <section id='Services' className='w-full md:max-w-[2120px]  mx-auto bg-slate-50'>
        <div className='flex flex-col text-center pb-9 '>
          <h2 className='font-bold text-4xl md:text-5xl md:pb-16'>Nossos Serviços</h2>
          <div className='w-full h-auto  flex flex-col md:justify-center md:flex-row gap-5'>
            <div
            className=' flex flex-col items-center justify-center'>
              <div className='w-48 h-48 hover:ease-out duration-300 hover:scale-75    hover:bg-purple-900 p-12 rounded-full shadow-2xl bg-gray-100'>
                <Image className=' h-auto ' src={`/emergency.svg`} width={130} height={1} alt='a' />
              </div>
              <h2 className='font-semibold text-3xl mb-2'>Emergência</h2>
              <p className='w-[295.5px] h-[90px] text-sm font-medium mb-4'>Bastante comum no mundo dos bichinhos de estimação caninos e felinos, a emergência veterinária consiste no tipo de situação que exige medidas rápidas e precisas para salvar a vida dos animais.</p>
              <button className='bg-yellow-400 py-[4px] px-[12px] rounded font-medium hover:bg-yellow-300'>Detalhes</button>

            </div>

            <div className='  flex flex-col items-center justify-center'>
            <div className='w-48 h-48 hover:ease-out hover:bg-purple-900 duration-300 hover:scale-75  p-12 rounded-full shadow-2xl bg-gray-100'>
                <Image className=' h-auto ' src={`/vacination.svg`} width={130} height={1} alt='a' />
              </div>
              <h2 className='font-semibold text-3xl mb-2'>Vacinação</h2>
              <p className='w-[295.5px] h-[90px] text-sm font-medium mb-4'>O “efeito rebanho” causado pela vacinação faz com que quanto mais animais forem vacinados, menor seja a chance de doenças comuns tomarem grandes proporções.</p>
              <button className='bg-yellow-400 py-[4px] px-[12px] rounded font-medium hover:bg-yellow-300'>Detalhes</button>

            </div>
            <div className=' flex flex-col items-center justify-center'>
            <div className='w-48 h-48 hover:ease-out duration-300 hover:scale-75 hover:bg-purple-900  p-12 rounded-full shadow-2xl bg-gray-100'>
                <Image className=' h-auto ' src={`/x-ray.svg`} width={130} height={1} alt='a' />
              </div>
              <h2 className='font-semibold text-3xl mb-2'>Raio-X</h2>
              <p className='w-[295.5px] h-[90px] text-sm font-medium mb-4'>O objetivo do exame de raio-x é auxiliar o veterinário na avaliação das estruturas presentes na cavidade torácica, abdominal e também dos ossos e as articulações.</p>
              <button className='bg-yellow-400 py-[4px] px-[12px] rounded font-medium hover:bg-yellow-300'>Detalhes</button>

            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Services