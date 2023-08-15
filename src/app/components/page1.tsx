import Image from 'next/image'
import Header from './components/Header'
import CardDropdown from './components/CardDropdown'
import {ImPhone} from 'react-icons/im'
import {MdEmail} from 'react-icons/md'

export default function Home() {
  return (
    <>

      <main className='w-full h-screen bg-slate-50 flex flex-col items-center '>
        <Header />
        <section className='flex flex-col-reverse md:flex md:flex-row justify-center items-center bg-slate-50'>
          <div className='mt-32 pl-20'>
            <h2 className='font-semibold mb-3'>Onde o seu amigo é tratado com carinho!</h2>
            <h1 className='mb-7 font-bold text-6xl'>Clinica <br /> Veterinária</h1>
            <h3 className='font-medium mr-36 mb-11'>A Clínica Veterinária UnsKilate tem por objetivo prestar um serviço médigo veterinário de excelência aos animais e suas famílias, ao longo de todo o ciclo de vida do pet.</h3>
            <button className='bg-purple-900 hover:bg-purple-600  font-bold text-white p-5 w-64 rounded-md' type="button">Agendar Consulta &#8680;</button>
          </div>
          <div className='w-full flex  justify-center items-center h-auto pt-32'><Image src={`/med.svg`} width={500} height={600} alt={'Image'} /> </div>
        </section>
        <div className='   h-screen pt-48 flex flex-col  items-center justify-center bg-gray-50'>
          <div className='font-bold text-5xl mb-32'>Nossos Serviços</div>
          <div className='flex flex-row gap-10'>
            <div className='flex flex-col mx-10 items-center justify-center'>
              <div className='w-48 h-48 flex items-center justify-center rounded-full shadow-2xl bg-gray-100'>
                <Image className=' h-auto ' src={`/emergency.svg`} width={130} height={1} alt='a' />
              </div>
              <h2 className='font-semibold text-3xl mb-2'>Emergência</h2>
              <p className='w-[295.5px] h-[90px] text-sm font-medium mb-4'>Bastante comum no mundo dos bichinhos de estimação caninos e felinos, a emergência veterinária consiste no tipo de situação que exige medidas rápidas e precisas para salvar a vida dos animais.</p>
              <button className='bg-yellow-400 py-[4px] px-[12px] rounded font-medium hover:bg-yellow-300'>Detalhes</button>
            </div>
            <div className='mr-12 flex flex-col  items-center justify-center'>
              <div className='w-48 h-48 p-12 rounded-full shadow-2xl bg-gray-100'>
                a
              </div>
              <h2 className='font-semibold text-3xl mb-2'>Vacinação</h2>
              <p className='w-[295.5px] h-[90px] text-sm font-medium mb-4 '>O “efeito rebanho” causado pela vacinação faz com que quanto mais animais forem vacinados, menor seja a chance de doenças comuns tomarem grandes proporções.</p>
              <button className='bg-yellow-400 py-[4px] px-[12px] rounded font-medium hover:bg-yellow-300'>Detalhes</button>
            </div>
            <div className='flex flex-col  items-center justify-center'>
              <div className='w-48 h-48 p-12 rounded-full shadow-2xl bg-gray-100'>

              </div>
              <h2 className='font-semibold text-3xl  mb-2'>Raio-X</h2>
              <p className='w-[295.5px] h-[90px] text-sm font-medium mb-4 '>O objetivo do exame de raio-x é auxiliar o veterinário na avaliação das estruturas presentes na cavidade torácica, abdominal e também dos ossos e as articulações.</p>
              <button className='bg-yellow-400 py-[4px] px-[12px] rounded font-medium hover:bg-yellow-300'>Detalhes</button>
            </div>
          </div>
        </div>
        <section className='flex flex-col justify-center items-center bg-gray-50'>
          <h1 className='text-5xl font-semibold mt-40 mb-7'>Preços</h1>
          <div className='flex flex-row gap-7'>
            <div className='w-[311px] h-[290px] border  border-t-0 rounded-md border-purple-950'>
              <header className=' w-full h-[61.5px]  text-white rounded-md bg-purple-950 flex justify-center items-center text-2xl font-medium'>Consulta</header>
              <div className='w-full h-auto p-4'>
                <h1 className='flex justify-center  font-medium text-4xl'>R$ 800,00</h1>
                <ul className='flex flex-col justify-center items-center pt-4 font-semibold text-lg'>
                  <li>Cães e Gatos</li>
                  <li>Animais Selvagens</li>
                  <li> Insetos</li>
                  <li> Animais Aquáticos</li>
                </ul>
              </div>

            </div>
            <div className='w-[311px] h-[290px] border  border-t-0 rounded-md border-purple-950'>
              <header className=' w-full h-[61.5px]  text-white rounded-md bg-purple-950 flex justify-center items-center text-2xl font-medium'> Internação</header>
              <div className='w-full h-auto p-4'>
                <h1 className='flex justify-center  font-medium text-4xl'>R$ 800,00</h1>
                <ul className='flex flex-col justify-center items-center pt-4 font-semibold text-lg'>
                  <li>Diária</li>
                  <li>UTI</li>
                  <li>Urgência</li>
                  <li>Emergência</li>
                </ul>
              </div>
            </div>
            <div className='w-[311px] h-[290px] border  border-t-0 rounded-md border-purple-950'>
              <header className=' w-full h-[61.5px]  text-white rounded-md bg-purple-950 flex justify-center items-center text-2xl font-medium'>Cirurgias</header>
              <div className='w-full h-auto p-4'>
                <h1 className='flex justify-center  font-medium text-4xl'>R$ 800,00</h1>
                <ul className='flex flex-col justify-center items-center pt-4 font-semibold text-lg'>
                  <li>Cesariana</li>
                  <li>Hérnias</li>
                  <li>Castração</li>
                  <li>Cistotomia </li>
                </ul>
              </div>

            </div>
          </div>

        </section>

        <section className=' pt-32 flex flex-col items-center bg-slate-50 '>
        <h1 className='font-semibold text-5xl'>Perguntas Frequentes</h1>
        <CardDropdown title='Quais doenças de pele são transmitidas do cão ou gato ao homem?' content='As principais dermatites zoonóticas, ou seja, transmissíveis destes animais ao homem são a ecabiose canina e felina (sarna), as dermatofitoses (micoses superficiais), a esporotricose (micose profunda) e a leishmaniose (esta anão é transmitida pelo contato direto, mas sim através do mosquito palha, que pode picar um animal infectado e depois picar o homem).'/>
    </section>
    <div className='w-full h-screen bg-slate-50'>
                <h1 className="text-center font-semibold text-5xl">Contato</h1>
                <div className=' flex justify-center items-center pt-16'>
                    <div className='w-[400px] h-[562px] border mr-16 flex flex-col justify-evenly items-center'>
                        <h1 className='font-medium text-3xl'>Fale Conosco</h1>
                        <p className=' w-[218px] items-center'>Tire suas dúvidas sobre a Clínica Veterinária Pet, deixe sugestões e depoimentos ou qualquer mensagem para a gente através do telefone de contato, whatsapp ou e-mail abaixo:</p>
                        <p className='flex'><ImPhone className='mt-1 mr-1'/> (00) 00000-9999 </p>
                        <p className='flex'><MdEmail className='mt-1 mr-1'/> <i>petunskilate@gmail.com</i> </p>
                        <button className='bg-green-600 text-white p-4 hover:bg-green-700 rounded-md'>Chamar WhatsApp</button>
                    </div>
                    <div className='w-[400px] h-[562px] border flex items-center justify-center'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d288899.4963426682!2d-46.76474850225127!3d-23.633030814495946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1692061935956!5m2!1spt-BR!2sbr" width="300" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
      </main>
    </>
  )
}
