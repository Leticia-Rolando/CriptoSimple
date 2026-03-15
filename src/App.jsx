import Card from './components/Card'
import bitcoinIcon from './assets/svg/bitcoin-icon.svg';
import sol from './assets/svg/sol.svg';

function App() {

  return (
    <>
      <div className='fundo min-h-screen overflow-hidden'>
        <header className='flex flex-col items-center justify-center text-zinc-100 px-2'>
          <h1 className="pt-50 font-['Geist_Mono'] font-medium text-[42px]">CriptoSimple</h1>
          <p className="pt-12 pb-7 font-['Geist_Mono'] font-light text-lg text-center">Para você acompanhar o mercado cripto de forma simples</p>
          <figure className='w-8 h-8 animate-bounce'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><polyline points="56 144 128 216 200 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /></svg>
          </figure>
        </header>
        <section className='pt-10 flex flex-col items-center'>
          <div className='flex gap-2 items-center bg-[#061922b0] border-2 border-teal-950 py-2 px-3 rounded-full'>
            <p className="font-['Geist_Mono'] font-light text-xs text-center text-zinc-200">Atualização dos dados a cada 5 min</p>
            <span class="relative flex size-3">
              <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
            </span>
          </div>
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"SOL"} titlecomplete={"Solana"} iconsvg={sol} color={"#B64CEB"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
        </section>
      </div>
    </>

  )
}

export default App
