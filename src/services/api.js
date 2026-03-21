/*const ETH = fetch('https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=BRL');
const BTC = fetch('https://api.coinpaprika.com/v1/tickers/btc-bitcoin?quotes=BRL');
const PAXG = fetch('https://api.coinpaprika.com/v1/tickers/paxg-pax-gold?quotes=BRL');
const SOL = fetch('https://api.coinpaprika.com/v1/tickers/sol-solana?quotes=BRL');
const BNB = fetch('https://api.coinpaprika.com/v1/tickers/bnb-binance-coin?quotes=BRL');
const HYPE = fetch('https://api.coinpaprika.com/v1/tickers/hype-hyperliquid?quotes=BRL');
const SUI = fetch('https://api.coinpaprika.com/v1/tickers/sui-sui?quotes=BRL');
const ZCASH = fetch('https://api.coinpaprika.com/v1/tickers/zec-zcash?quotes=BRL');
const MONERO = fetch('https://api.coinpaprika.com/v1/tickers/xmr-monero?quotes=BRL');
const XRP = fetch('https://api.coinpaprika.com/v1/tickers/xrp-xrp?quotes=BRL');
const TRON = fetch('https://api.coinpaprika.com/v1/tickers/trx-tron?quotes=BRL');
const LINK = fetch('https://api.coinpaprika.com/v1/tickers/link-chainlink?quotes=BRL');*/

export const fetchMoedas = async (coinID) => {

    try{
        const resposta = await fetch(`https://api.coinpaprika.com/v1/tickers/${coinID}?quotes=BRL`);
        if (!resposta.ok) throw new Error(`Erro ao buscar ${coinID}`);

        const data = await resposta.json();
        return data;

    } catch (error){
        console.log("Deu b.o aqui: ", error);
        return[];
    }
}