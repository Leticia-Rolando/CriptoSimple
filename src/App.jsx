import Card from './components/Card'
import bitcoinIcon from './assets/svg/bitcoin-icon.svg';

function App() {

  return (
    <>
      <div className='fundo'>
        <div>
          <h1 className="p-3">oiiiii</h1>
        </div>
        <Card title={"BTC"} titlecomplete={"Bitcoin"} iconsvg={bitcoinIcon} color={"#FF7700"} price={"R$357.120,99"} />
      </div>
    </>

  )
}

export default App
