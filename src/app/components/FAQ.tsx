import React from 'react'
import CardDropdown from './CardDropdown'

const FAQ = () => {
  return (
    <>
    <section id='FAQ' className='md:max-w-[2120px] h-auto pt-32 flex flex-col items-center bg-slate-50 '>
        <h1 className='font-semibold text-3xl md:text-5xl pb-9'>Perguntas Frequentes</h1>
        <div className=" md:w-[80%] w-auto rounded-lg shadow-md p-9">
        <CardDropdown title='Quais doenças de pele são transmitidas do cão ou gato ao homem?' content='As principais dermatites zoonóticas, ou seja, transmissíveis destes animais ao homem são a ecabiose canina e felina (sarna), as dermatofitoses (micoses superficiais), a esporotricose (micose profunda) e a leishmaniose (esta anão é transmitida pelo contato direto, mas sim através do mosquito palha, que pode picar um animal infectado e depois picar o homem).'/>
        <CardDropdown title='É verdade que certas raças não podem ser tosadas pois existe o risco de não nascer novamente o pelo?' content='Sim, estranhamente certas raças de pelame muito denso como o Chow Chow e o Husky Siberiano podem apresentar o que é chamada “alopecia pós tosa”, ou seja, a ausência da repilação em determinadas áreas que foram tosadas. Isto é uma condição temporária e de causa desconhecida, havendo normalização da pelagem dentro de 6 meses.'/>
        <CardDropdown title='O cachorro precisa fazer exame de sangue em todo checkup?' content='Não necessariamente. Os exames de sangue são apenas pedidos quando é preciso acessar ou investigar uma variedade de fatores, que incluem a idade do animal e se ele possui alguma condição pré-existente, conhecida ou não. No entanto, exames de sangue podem ser pedidos anualmente para observar se houve alguma mudança no metabolismo do animal.
'/>
        
        </div>
    </section>
    </>
  )
}

export default FAQ