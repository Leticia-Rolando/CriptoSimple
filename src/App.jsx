import Card from './components/Card'
import bitcoinIcon from './assets/svg/bitcoin-icon.svg';

function App() {

  return (
    <>
      <div className='fundo min-h-screen overflow-hidden'>
        <header className='flex flex-col items-center justify-center text-zinc-100 px-2'>
          <h1 className="pt-50 font-['Geist_Mono'] font-medium text-[42px]">CriptoSimple</h1>
          <p className="pt-12 pb-7 font-['Geist_Mono'] font-light text-lg text-center">Para você acompanhar o mercado cripto de forma simples</p>
          <figure className='w-8 h-8 animate-bounce'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="56 144 128 216 200 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>
          </figure>
        </header>
         <section className='pt-10 flex flex-col items-center'>
          <p className="font-['Geist_Mono'] font-light text-sm text-center">Atualização dos dados a cada 5 min</p>
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
        </section>
      </div>
    </>

  )
}

export default App
