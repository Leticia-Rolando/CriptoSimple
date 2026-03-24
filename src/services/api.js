export const fetchCripto = async () => {
    const coinIds = [
        'eth-ethereum', 'btc-bitcoin', 'paxg-pax-gold', 'sol-solana',
        'bnb-binance-coin', 'hype-hyperliquid', 'sui-sui', 'zec-zcash',
        'xmr-monero', 'xrp-xrp', 'trx-tron', 'link-chainlink'
    ];

    try {
        const promises = coinIds.map(id => 
            fetch(`https://api.coinpaprika.com/v1/tickers/${id}?quotes=BRL`).then(res => {
                if (!res.ok) throw new Error(`Erro na moeda ${id}`);
                return res.json();
            })
        );

        const results = await Promise.allSettled(promises);

        const finalData = {};

        results.forEach((result) => {
            if (result.status === 'fulfilled') {
                const data = result.value;
                let key = data.symbol.toLowerCase();

                if (key === 'trx') key = 'tron';
                if (key === 'zec') key = 'zcash';
                
                finalData[key] = {
                    title: data.name,
                    symbol: data.symbol,
                    price: data.quotes.BRL.price,
                    percentage1: data.quotes.BRL.percent_change_1h,
                    percentage6: data.quotes.BRL.percent_change_6h,
                    percentage12: data.quotes.BRL.percent_change_12h,
                    percentage24: data.quotes.BRL.percent_change_24h
                };

                
            } else {
                console.warn("Falha ao carregar uma moeda:", result.reason);
            }
        });

        if (finalData.btc) {
            const btcPrice = finalData.btc.price.toLocaleString('pt-BR', { 
                style: 'currency', 
                currency: 'BRL' 
            });
            
            document.title = `CriptoSimple | BTC: ${btcPrice} `;
            
        } else {
            document.title = `CriptoSimple`;
        }

        return finalData;

        

    } catch (error) {
        console.error("Erro crítico na função fetchCripto: ", error);
        return null;
    }
};