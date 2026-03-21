import React, { useState, useEffect } from 'react';
import { fetchCripto } from './services/api'
import Card from './components/Card'
import btc from './assets/svg/bitcoin-icon.svg';
import eth from './assets/svg/eth.svg';
import sol from './assets/svg/sol.svg';
import paxg from './assets/svg/paxg.svg';
import bnb from './assets/svg/bnb.svg';
import hype from './assets/svg/hype.svg';
import sui from './assets/svg/sui.svg';
import zcash from './assets/svg/zcash.svg';
import monero from './assets/svg/xmr.svg';
import xrp from './assets/svg/xrp.svg';
import tron from './assets/svg/tron.svg';
import link from './assets/svg/link.svg';

function App() {
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resultado = await fetchCripto();
      setCoins(resultado);
    };
    getData();
  }, []);

  if (!coins) return <p className="font-['Geist_Mono'] font-light text-xs text-center text-zinc-200">Carregando cotações...</p>;


  return (
    <>
      <div className='fundo min-h-screen overflow-hidden'>
        <header className='flex flex-col items-center justify-center text-zinc-100 px-2'>
          <h1 className="pt-50 font-['Manufacturing_Consent'] text-[65px]">CriptoSimple</h1>
          <p className="pt-8 pb-7 font-['Geist_Mono'] font-light text-lg text-center">Para você acompanhar o mercado cripto de forma simples</p>
          <figure className='w-8 h-8'>
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
          {/*BTC*/}
          <Card title={coins.btc.symbol} titlecomplete={coins.btc.title} iconsvg={btc} color={"#FF7700"} price={coins.btc.price} descricaoIMG={"Icone do Bitcoin"} percentage1={coins.btc.percentage1} percentage6={coins.btc.percentage6} percentage12={coins.btc.percentage12} percentage24={coins.btc.percentage24}/>
          {/*ETH*/}
          <Card title={coins.eth.symbol} titlecomplete={coins.eth.title} iconsvg={eth} color={"#6D82E4"} price={coins.eth.price} descricaoIMG={"Icone do Bitcoin"} percentage1={coins.eth.percentage1} percentage6={coins.eth.percentage6} percentage12={coins.eth.percentage12} percentage24={coins.eth.percentage24}/>
          {/*SOL*/}
          <Card title={coins.sol.symbol} titlecomplete={coins.sol.title} iconsvg={sol} color={"#B64CEB"} price={coins.sol.price} descricaoIMG={"Icone do Bitcoin"} percentage1={coins.sol.percentage1} percentage6={coins.sol.percentage6} percentage12={coins.sol.percentage12} percentage24={coins.sol.percentage24}/>
          {/*BNB*/}
          <Card title={coins.bnb.symbol} titlecomplete={coins.bnb.title} iconsvg={bnb} color={"#F1B90A"} price={coins.bnb.price} descricaoIMG={"Icone do Bitcoin"} percentage1={coins.bnb.percentage1} percentage6={coins.bnb.percentage6} percentage12={coins.bnb.percentage12} percentage24={coins.bnb.percentage24}/>
          {/*PAXG*/}
          <Card title={coins.paxg.symbol} titlecomplete={coins.paxg.title} iconsvg={paxg} color={"#EDE70A"} price={coins.paxg.price} descricaoIMG={"Icone do Bitcoin"} percentage1={coins.paxg.percentage1} percentage6={coins.paxg.percentage6} percentage12={coins.paxg.percentage12} percentage24={coins.paxg.percentage24}/>
          {/*HYPE*/}
          <Card title={coins.hype.symbol} titlecomplete={coins.hype.title} iconsvg={hype} color={"#EDE70A"} price={coins.hype.price} descricaoIMG={"Icone do Bitcoin"} percentage1={coins.hype.percentage1} percentage6={coins.hype.percentage6} percentage12={coins.hype.percentage12} percentage24={coins.hype.percentage24}/>
          {/**/}
        </section>
      </div>
    </>

  )
}

export default App
