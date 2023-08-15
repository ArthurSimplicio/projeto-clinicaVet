import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
import Services from './components/Services'
import Prices from './components/Prices'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'


const page = () => {
  return (
    <>
      <main className='absolute max-w-[2120px] h-screen bg-slate-50 '>
        <Header />
        <section id='Home' className='max-w-[2120px] sm:max-w-[2120px] flex flex-col md:flex-row-reverse   items-center bg-slate-50
        justify-center pt-20 pb-36 md:pt-0 '>
        <div className='md:w-[80%] h-[80%] flex  justify-center items-center  md:pt-32'><Image className='md:w-[500px] md:pr-12' src={`/med.svg`} width={300} height={300} alt={'Image'} /> </div>
        <div className='md:mt-32 md:pl-20 text-center md:text-start'>
            <h2 className='font-semibold mb-3 px-1'>Onde o seu amigo é tratado com carinho!</h2>
            <h1 className='mb-7 font-bold text-4xl md:text-6xl'>Clinica <br /> Veterinária</h1>
            <h3 className='font-medium md:mr-36 pb-11 px-7'>A Clínica Veterinária UnsKilate tem por objetivo prestar um serviço médigo veterinário de excelência aos animais e suas famílias, ao longo de todo o ciclo de vida do pet.</h3>
            <button className='bg-purple-900 hover:bg-purple-600  font-bold text-white p-5 w-64 rounded-md' type="button">Agendar Consulta &#8680;</button>
          </div> 
        </section>
        {/* SERVICES */}
        <Services /> 
        <Prices />
        <FAQ />
        <Contact />
        <Footer />

      </main>
    </>
  )
}

export default page