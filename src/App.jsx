import React, { useState, useEffect } from 'react';
import { fetchCripto } from './services/api';
import { mockData } from './services/mock';
import Card from './components/Card';
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

const configAdicional = [
  { id: 'btc', icon: btc, color: "#FF7700", desc: "Icone do Bitcoin" },
  { id: 'eth', icon: eth, color: "#6D82E4", desc: "Icone do Ethereum" },
  { id: 'sol', icon: sol, color: "#B64CEB", desc: "Icone da Solana" },
  { id: 'bnb', icon: bnb, color: "#F1B90A", desc: "Icone do BNB" },
  { id: 'paxg', icon: paxg, color: "#EDE70A", desc: "Icone do PAX Gold" },
  { id: 'hype', icon: hype, color: "#50D2C1", desc: "Icone da Hype" },
  { id: 'sui', icon: sui, color: "#4DA2FF", desc: "Icone da SUI" },
  { id: 'zcash', icon: zcash, color: "#F3B724", desc: "Icone do Zcash" },
  { id: 'xmr', icon: xmr, color: "#FA6800", desc: "Icone do XMR" },
  { id: 'xrp', icon: xrp, color: "#FFFFFF", desc: "Icone do XRP" },
  { id: 'tron', icon: tron, color: "#F70112", desc: "Icone do Tron" },
  { id: 'link', icon: link, color: "#0746F7", desc: "Icone do Chainlink" },
];

function App() {
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resultado = await fetchCripto();
      setCoins(resultado);
    };
    getData();

    const intervalo = setInterval(getData, 300000);
    return () => clearInterval(intervalo);

    /*setCoins(mockData);*/
  }, []);

  if (!coins) return <p className="font-['Geist_Mono'] font-light text-lg text-center text-black flex justify-center items-center">Carregando cotações...</p>;


  return (
    <>
      <div className='fundo min-h-screen overflow-hidden'>
        <header className='flex flex-col items-center justify-center text-zinc-100 px-2'>
          <h1 className="pt-50 font-['Manufacturing_Consent'] text-[65px] 2xl:text-[85px]">CriptoSimple</h1>
          <p className="pt-8 pb-7 font-['Geist_Mono'] font-light text-lg text-center 2xl:text-xl">Para você acompanhar o mercado cripto de forma simples</p>
          <figure className='w-8 h-8 2xl:w-9 2xl:h-9'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><polyline points="56 144 128 216 200 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /></svg>
          </figure>
        </header>
        <section>
          <div className='pt-10 flex flex-col items-center'>
            <div className='flex gap-2 items-center bg-[#061922b0] border-2 border-teal-950 py-2 px-3 rounded-full'>
              <p className="font-['Geist_Mono'] font-light text-xs text-center text-zinc-200 md:text-sm 2xl:text-md">Atualização dos dados a cada 5 min</p>
              <span class="relative flex size-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
              </span>
            </div>
          </div>
          <div className='flex flex-col items-center mt-2 mb-2 md:mt-4 md:grid md:grid-cols-2 md:mx-4 md:gap-y-3  lg:grid-cols-3 xl:grid-cols-4 2xl:gap-y-10 2xl:mt-10 2xl:mb-6'>

            {configAdicional.map((coin) => {
              const data = coins[coin.id];
              if (!data) return null; // Proteção caso a API falhe para esta moeda específica

              return (
                <Card
                  key={coin.id}
                  title={data.symbol}
                  titlecomplete={data.title}
                  iconsvg={coin.icon}
                  color={coin.color}
                  price={data.price}
                  descricaoIMG={coin.desc}
                  percentage1={data.percentage1}
                  percentage6={data.percentage6}
                  percentage12={data.percentage12}
                  percentage24={data.percentage24}
                />
              );
            })}

          </div>
        </section>
      </div>
    </>

  )
}

export default App
