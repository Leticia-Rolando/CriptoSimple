import Card from './components/Card'
import bitcoinIcon from './assets/svg/bitcoin-icon.svg';

function App() {

  return (
    <>
      <div className='fundo min-h-screen overflow-hidden'>
        <header className='flex flex-col items-center justify-center'>
          <h1 className="pt-50 font-['Geist_Mono'] font-medium text-4xl">CriptoSimple</h1>
          <p className="pt-15 font-['Geist_Mono'] font-medium text-lg text-center">Para você acompanhar o mercado cripto de forma simples</p>
          <img src="./assets/svg/arrow-down.svg" alt="Seta para baixo" />
        </header>
        {/* <section className='flex flex-col items-center'>
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
        </section> */}
      </div>
    </>

  )
}

export default App
