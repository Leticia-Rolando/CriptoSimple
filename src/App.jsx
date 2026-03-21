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
import xmr from './assets/svg/xmr.svg';
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

  if (!coins) return <p className="font-['Geist_Mono'] font-light text-lg text-center text-black">Carregando cotações...</p>;


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
        <section>
          <div className='pt-10 flex flex-col items-center'>
            <div className='flex gap-2 items-center bg-[#061922b0] border-2 border-teal-950 py-2 px-3 rounded-full'>
              <p className="font-['Geist_Mono'] font-light text-xs text-center text-zinc-200 md:text-sm">Atualização dos dados a cada 5 min</p>
              <span class="relative flex size-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
          </div>
          <div className='flex flex-col items-center mt-2 md:mt-4 md:grid md:grid-cols-2 md:mx-4 md:gap-y-3 '>
            {/*BTC*/}
            <Card title={coins.btc.symbol} titlecomplete={coins.btc.title} iconsvg={btc} color={"#FF7700"} price={coins.btc.price} descricaoIMG={"Icone do Bitcoin"} percentage1={coins.btc.percentage1} percentage6={coins.btc.percentage6} percentage12={coins.btc.percentage12} percentage24={coins.btc.percentage24} />
            {/*ETH*/}
            <Card title={coins.eth.symbol} titlecomplete={coins.eth.title} iconsvg={eth} color={"#6D82E4"} price={coins.eth.price} descricaoIMG={"Icone do Ethereum"} percentage1={coins.eth.percentage1} percentage6={coins.eth.percentage6} percentage12={coins.eth.percentage12} percentage24={coins.eth.percentage24} />
            {/*SOL*/}
            <Card title={coins.sol.symbol} titlecomplete={coins.sol.title} iconsvg={sol} color={"#B64CEB"} price={coins.sol.price} descricaoIMG={"Icone da Solana"} percentage1={coins.sol.percentage1} percentage6={coins.sol.percentage6} percentage12={coins.sol.percentage12} percentage24={coins.sol.percentage24} />
            {/*BNB*/}
            <Card title={coins.bnb.symbol} titlecomplete={coins.bnb.title} iconsvg={bnb} color={"#F1B90A"} price={coins.bnb.price} descricaoIMG={"Icone do BNB"} percentage1={coins.bnb.percentage1} percentage6={coins.bnb.percentage6} percentage12={coins.bnb.percentage12} percentage24={coins.bnb.percentage24} />
            {/*PAXG*/}
            <Card title={coins.paxg.symbol} titlecomplete={coins.paxg.title} iconsvg={paxg} color={"#EDE70A"} price={coins.paxg.price} descricaoIMG={"Icone do PAX Gold"} percentage1={coins.paxg.percentage1} percentage6={coins.paxg.percentage6} percentage12={coins.paxg.percentage12} percentage24={coins.paxg.percentage24} />
            {/*HYPE*/}
            <Card title={coins.hype.symbol} titlecomplete={coins.hype.title} iconsvg={hype} color={"#50D2C1"} price={coins.hype.price} descricaoIMG={"Icone da Hype"} percentage1={coins.hype.percentage1} percentage6={coins.hype.percentage6} percentage12={coins.hype.percentage12} percentage24={coins.hype.percentage24} />
            {/*SUI*/}
            <Card title={coins.sui.symbol} titlecomplete={coins.sui.title} iconsvg={sui} color={"#4DA2FF"} price={coins.sui.price} descricaoIMG={"Icone da SUI"} percentage1={coins.sui.percentage1} percentage6={coins.sui.percentage6} percentage12={coins.sui.percentage12} percentage24={coins.sui.percentage24} />
            {/*ZCASH*/}
            <Card title={coins.zcash.symbol} titlecomplete={coins.zcash.title} iconsvg={zcash} color={"#F3B724"} price={coins.zcash.price} descricaoIMG={"Icone do Zcash"} percentage1={coins.zcash.percentage1} percentage6={coins.zcash.percentage6} percentage12={coins.zcash.percentage12} percentage24={coins.zcash.percentage24} />
            {/*XMR*/}
            <Card title={coins.xmr.symbol} titlecomplete={coins.xmr.title} iconsvg={xmr} color={"#FA6800"} price={coins.xmr.price} descricaoIMG={"Icone do XMR"} percentage1={coins.xmr.percentage1} percentage6={coins.xmr.percentage6} percentage12={coins.xmr.percentage12} percentage24={coins.xmr.percentage24} />
            {/*XRP*/}
            <Card title={coins.xrp.symbol} titlecomplete={coins.xrp.title} iconsvg={xrp} color={"#FFFFFF"} price={coins.xrp.price} descricaoIMG={"Icone do XRP"} percentage1={coins.xrp.percentage1} percentage6={coins.xrp.percentage6} percentage12={coins.xrp.percentage12} percentage24={coins.xrp.percentage24} />
            {/*TRON*/}
            <Card title={coins.tron.symbol} titlecomplete={coins.tron.title} iconsvg={tron} color={"#F70112"} price={coins.tron.price} descricaoIMG={"Icone do Tron"} percentage1={coins.tron.percentage1} percentage6={coins.tron.percentage6} percentage12={coins.tron.percentage12} percentage24={coins.tron.percentage24} />
            {/*LINK*/}
            <Card title={coins.link.symbol} titlecomplete={coins.link.title} iconsvg={link} color={"#0746F7"} price={coins.link.price} descricaoIMG={"Icone do Chainlink"} percentage1={coins.link.percentage1} percentage6={coins.link.percentage6} percentage12={coins.link.percentage12} percentage24={coins.link.percentage24} />
          </div>
        </section>
      </div>
    </>

  )
}

export default App
