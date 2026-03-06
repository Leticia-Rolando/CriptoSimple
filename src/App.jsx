import Card from './components/Card'
import bitcoinIcon from './assets/svg/bitcoin-icon.svg';

function App() {

  return (
    <>
      <div className='fundo min-h-screen overflow-hidden'>
        <div className='flex items justify-center'>
          <h1 className="">oiiiii</h1>
        </div>
        <section className='flex flex-col items-center '>
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
          <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} percentage1={-0.39} percentage6={-1.49} percentage12={1.02} percentage24={2.39} />
        </section>
      </div>
    </>

  )
}

export default App
