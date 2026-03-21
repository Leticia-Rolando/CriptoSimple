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

const fetchCripto = async () => {

    try{
        const ETHpromise = fetch('https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=BRL');
        const BTCpromise = fetch('https://api.coinpaprika.com/v1/tickers/btc-bitcoin?quotes=BRL');

        const [ETHresponse, BTCresponse] = await Promise.all([ETHpromise, BTCpromise]);

        const ETHdata = await ETHresponse.json();
        const BTCdata = await BTCresponse.json();

        return {
            eth: {
                title: ETHdata.name,
                symbol: ETHdata.symbol,
                price: ETHdata.quotes.BRL.price,
                percentage1: ETHdata.quotes.BRL.percent_change_1h,
                percentage6: ETHdata.quotes.BRL.percent_change_6h,
                percentage12: ETHdata.quotes.BRL.percent_change_12h,
                percentage24: ETHdata.quotes.BRL.percent_change_24h
            },
            btc: {
                title: BTCdata.name,
                symbol: BTCdata.symbol,
                price: BTCdata.quotes.BRL.price,
                percentage1: BTCdata.quotes.BRL.percent_change_1h,
                percentage6: BTCdata.quotes.BRL.percent_change_6h,
                percentage12: BTCdata.quotes.BRL.percent_change_12h,
                percentage24: BTCdata.quotes.BRL.percent_change_24h
            }
        };


    } catch (error){
        console.log("Deu b.o aqui: ", error);
        return[];
    }
}