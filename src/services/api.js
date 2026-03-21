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

export const fetchCripto = async () => {

    try {
        const ETHpromise = fetch('https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=BRL');
        const BTCpromise = fetch('https://api.coinpaprika.com/v1/tickers/btc-bitcoin?quotes=BRL');
        const PAXGpromise = fetch('https://api.coinpaprika.com/v1/tickers/paxg-pax-gold?quotes=BRL');
        const SOLpromise = fetch('https://api.coinpaprika.com/v1/tickers/sol-solana?quotes=BRL');
        const BNBpromise = fetch('https://api.coinpaprika.com/v1/tickers/bnb-binance-coin?quotes=BRL');
        const HYPEpromise = fetch('https://api.coinpaprika.com/v1/tickers/hype-hyperliquid?quotes=BRL');
        const SUIpromise = fetch('https://api.coinpaprika.com/v1/tickers/sui-sui?quotes=BRL');
        const ZCASHpromise = fetch('https://api.coinpaprika.com/v1/tickers/zec-zcash?quotes=BRL');
        const MONEROpromise = fetch('https://api.coinpaprika.com/v1/tickers/xmr-monero?quotes=BRL');
        const XRPpromise = fetch('https://api.coinpaprika.com/v1/tickers/xrp-xrp?quotes=BRL');
        const TRONpromise = fetch('https://api.coinpaprika.com/v1/tickers/trx-tron?quotes=BRL');
        const LINKpromise = fetch('https://api.coinpaprika.com/v1/tickers/link-chainlink?quotes=BRL');

        const [ETHresponse, BTCresponse, PAXGresponse, SOLresponse, BNBresponse, HYPEresponse, SUIresponse, ZCASHresponse, MONEROresponse, XRPresponse, TRONresponse, LINKresponse] 
        = await Promise.all([ETHpromise, BTCpromise, PAXGpromise, SOLpromise, BNBpromise, HYPEpromise, SUIpromise, ZCASHpromise, MONEROpromise, XRPpromise, TRONpromise, LINKpromise]);

        const ETHdata = await ETHresponse.json();
        const BTCdata = await BTCresponse.json();
        const PAXGdata = await PAXGresponse.json();
        const SOLdata = await SOLresponse.json();
        const BNBdata = await BNBresponse.json();
        const HYPEdata = await HYPEresponse.json();
        const SUIdata = await SUIresponse.json();
        const ZCASHdata = await ZCASHresponse.json();
        const MONEROdata = await MONEROresponse.json();
        const XRPdata = await XRPresponse.json();
        const TRONdata = await TRONresponse.json();
        const LINKdata = await LINKresponse.json();

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
            },
            paxg: {
                title: PAXGdata.name,
                symbol: PAXGdata.symbol,
                price: PAXGdata.quotes.BRL.price,
                percentage1: PAXGdata.quotes.BRL.percent_change_1h,
                percentage6: PAXGdata.quotes.BRL.percent_change_6h,
                percentage12: PAXGdata.quotes.BRL.percent_change_12h,
                percentage24: PAXGdata.quotes.BRL.percent_change_24h
            },
            sol: {
                title: SOLdata.name,
                symbol: SOLdata.symbol,
                price: SOLdata.quotes.BRL.price,
                percentage1: SOLdata.quotes.BRL.percent_change_1h,
                percentage6: SOLdata.quotes.BRL.percent_change_6h,
                percentage12: SOLdata.quotes.BRL.percent_change_12h,
                percentage24: SOLdata.quotes.BRL.percent_change_24h
            },
            bnb: {
                title: BNBdata.name,
                symbol: BNBdata.symbol,
                price: BNBdata.quotes.BRL.price,
                percentage1: BNBdata.quotes.BRL.percent_change_1h,
                percentage6: BNBdata.quotes.BRL.percent_change_6h,
                percentage12: BNBdata.quotes.BRL.percent_change_12h,
                percentage24: BNBdata.quotes.BRL.percent_change_24h
            },
            hype: {
                title: HYPEdata.name,
                symbol: HYPEdata.symbol,
                price: HYPEdata.quotes.BRL.price,
                percentage1: HYPEdata.quotes.BRL.percent_change_1h,
                percentage6: HYPEdata.quotes.BRL.percent_change_6h,
                percentage12: HYPEdata.quotes.BRL.percent_change_12h,
                percentage24: HYPEdata.quotes.BRL.percent_change_24h
            },
            sui: {
                title: SUIdata.name,
                symbol: SUIdata.symbol,
                price: SUIdata.quotes.BRL.price,
                percentage1: SUIdata.quotes.BRL.percent_change_1h,
                percentage6: SUIdata.quotes.BRL.percent_change_6h,
                percentage12: SUIdata.quotes.BRL.percent_change_12h,
                percentage24: SUIdata.quotes.BRL.percent_change_24h
            },
            zcash: {
                title: ZCASHdata.name,
                symbol: ZCASHdata.symbol,
                price: ZCASHdata.quotes.BRL.price,
                percentage1: ZCASHdata.quotes.BRL.percent_change_1h,
                percentage6: ZCASHdata.quotes.BRL.percent_change_6h,
                percentage12: ZCASHdata.quotes.BRL.percent_change_12h,
                percentage24: ZCASHdata.quotes.BRL.percent_change_24h
            },
            monero: {
                title: MONEROdata.name,
                symbol: MONEROdata.symbol,
                price: MONEROdata.quotes.BRL.price,
                percentage1: MONEROdata.quotes.BRL.percent_change_1h,
                percentage6: MONEROdata.quotes.BRL.percent_change_6h,
                percentage12: MONEROdata.quotes.BRL.percent_change_12h,
                percentage24: MONEROdata.quotes.BRL.percent_change_24h
            },
            xrp: {
                title: XRPdata.name,
                symbol: XRPdata.symbol,
                price: XRPdata.quotes.BRL.price,
                percentage1: XRPdata.quotes.BRL.percent_change_1h,
                percentage6: XRPdata.quotes.BRL.percent_change_6h,
                percentage12: XRPdata.quotes.BRL.percent_change_12h,
                percentage24: XRPdata.quotes.BRL.percent_change_24h
            },
            tron: {
                title: TRONdata.name,
                symbol: TRONdata.symbol,
                price: TRONdata.quotes.BRL.price,
                percentage1: TRONdata.quotes.BRL.percent_change_1h,
                percentage6: TRONdata.quotes.BRL.percent_change_6h,
                percentage12: TRONdata.quotes.BRL.percent_change_12h,
                percentage24: TRONdata.quotes.BRL.percent_change_24h
            },
            link: {
                title: LINKdata.name,
                symbol: LINKdata.symbol,
                price: LINKdata.quotes.BRL.price,
                percentage1: LINKdata.quotes.BRL.percent_change_1h,
                percentage6: LINKdata.quotes.BRL.percent_change_6h,
                percentage12: LINKdata.quotes.BRL.percent_change_12h,
                percentage24: LINKdata.quotes.BRL.percent_change_24h
            }
        };


    } catch (error) {
        console.log("Deu b.o aqui: ", error);
        return null;
    }
}