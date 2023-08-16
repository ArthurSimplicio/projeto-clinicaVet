import React from 'react'

const Prices = () => {
  return (
    <section id='Prices' className='w-full md:max-w-[2120px] pt-36  mx-auto md:pb-36 bg-slate-50'>
        <div className='flex flex-col text-center justify-center items-center'>
            <h2 className='font-semibold text-4xl md:text-5xl pb-16'>Preços</h2>
            <div className='md:flex md:flex-row h-auto rounded  text-center md:px-3  gap-10'>
              <div className=' w-[286px] h-[250px] mb-9 rounded-md border border-purple-500 hover:ease-out duration-300 hover:scale-110'>
                <div className='w-[286px] h-[62px] rounded font-medium text-2xl text-white flex justify-center items-center bg-purple-800'>Consulta</div>
                <h1 className='font-semibold text-3xl pt-5 pb-2'>R$ 200,00</h1>
                <ul className=''>
                  <li>Cães e Gatos</li>
                  <li>Animais Selvagens</li>
                  <li>Insetos</li>
                  <li>Animais Aquáticos</li>
                </ul>

              </div>
              <div className=' w-[286px] h-[250px] mb-9 rounded border border-purple-500 text-center hover:ease-out duration-300 hover:scale-110'>
                <div className='w-[286px] h-[62px] rounded text-white font-medium text-2xl flex justify-center items-center bg-purple-800'>Internação</div>
                <h1 className='font-semibold text-3xl pt-5 pb-2'>R$ 300,00</h1>
                <ul>
                  <li>Diária</li>
                  <li>UTI</li>
                  <li>Urgência</li>
                  <li>Emergência</li>
                </ul>
              </div>
              <div className=' w-[286px] h-[250px] mb-9 rounded border border-purple-500 text-center hover:ease-out duration-300 hover:scale-110'>
                <div className='w-[286px] h-[62px] rounded text-white flex justify-center items-center font-medium text-2xl bg-purple-800'>Cirurgias</div>
                <h1 className='font-semibold text-3xl pt-5 pb-2'>R$ 800,00</h1>
                <ul>
                  <li>Cesariana</li>
                  <li>Hérnias</li>
                  <li>Castração</li>
                  <li>Cistotomia</li>
                </ul>
              </div>
            </div>

        </div>

    </section>
  )
}

export default Prices