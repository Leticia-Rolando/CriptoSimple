<div align="center">
  
# CriptoSimple

<img alt="Static Badge" src="https://img.shields.io/badge/mar%C3%A7o%2F2026-mar%C3%A7o_2026?style=for-the-badge&label=criado%20em&color=%23153535"> <img alt="Status do Projeto" src="https://img.shields.io/badge/Status-Finalizado-green?style=for-the-badge"> </div>

## :white_check_mark: Tópicos
- [Descrição do Projeto](#file_folder-descrição-do-projeto);
- [Estrutura do Projeto](#card_index_dividers-estrutura-do-projeto);
- [Aplicação da API](#gear-aplicação-da-api);
- [Demonstração e Protótipo](#computer-demonstração-e-protótipo);
- [Tecnologias Utilizadas](#hammer-tecnologias-utilizadas);
- [Acessar o Projeto](#link-acessar-o-projeto).

## :file_folder: Descrição do Projeto
O **CriptoSimple** é um dashboard minimalista focado na **Experiência do Usuário (UX)**, desenvolvido para resolver a sobrecarga de informações comum no mercado de criptomoedas. A aplicação filtra o ruído visual de exchanges complexas e entrega apenas os dados essenciais para uma consulta rápida: **Nome, Símbolo, Preço (em BRL) e Variações Percentuais.**

O projeto foi realizado usando `React v19.2.0` e `Tailwind CSS v4.2.1` como frameworks principais, ambos instalados por meio do `Vite v7.3.1`. Além de ter sido utilizado `Figma MCP` para acelerar o fluxo de desenvolvimento (Design-to-Code), garantindo que o componente de Card seguisse rigorosamente as especificações visuais do protótipo.

Para a requisição das informações de cada criptomoeda foi utilizada a **:hot_pepper:CoinPaprika API** - voltada para disponibilizar em tempo real **preços, volume, market cap** e muito mais de milhares de criptomoedas.

## :card_index_dividers: Estrutura do Projeto
- `src/components`: Componentes reutilizáveis (Card, Header, etc).
- `src/services`: Lógica de consumo de APIs.
- `src/services/api.js`: Consumo da CoinPaprika API.
- `src/services/mock.js`: Consumo de um mock provisório caso a API não funcione.
- `src/assets`: Imagens e estilos globais.
- `.gitignore`: Arquivos e pastas a não serem enviados/rastreados ao repositário remoto, evitando de vazar arquivos sensíveis (`.vscode`) ou de carregar dependências pesadas (`node_modules`).
- `SKILL.md`: Usado pela IA na conversão de designs complexos em componentes funcionais utilizando `React` e `Tailwind CSS`, com foco em fidelidade visual absoluta (espaçamentos, tipografia e cores).


## :gear: Aplicação da API
A requisição da API foi feita usando `fetch()` com o método `GET`, buscando apenas **nome, símbolo, preço e mudança de porcentagem em 1h/6h/12h/24h**; onde cada criptomoeda possui um `id`.

<div align="center">

| Id Correspondente
| :--- | 
| btc-bitcoin |
| eth-ethereum |
| sol-solana |
| bnb-binance-coin |
| paxg-pax-gold |
| hype-hyperliquid |
| sui-sui |
| zec-zcash |
| xmr-monero |
| xrp-xrp |
| trx-tron |
| link-chainlink |

</div>

A estruta padrão `JSON` é descrita assim na [documentação](https://docs.coinpaprika.com/api-reference/rest-api/introduction) (em caso de status HTTP 200) usando como exemplo o `id` do bitcoin: 

```json
{
  "id": "btc-bitcoin",
  "name": "Bitcoin",
  "symbol": "BTC",
  "rank": 1,
  "circulating_supply": 17007062,
  "total_supply": 17007062,
  "max_supply": 21000000,
  "beta_value": 0.735327,
  "first_data_at": "2010-11-14T07:20:41Z",
  "last_updated": "2018-11-14T07:20:41Z",
  "quotes": {
    "BTC": {
      "price": 1,
      "volume_24h": 1414951.9739396,
      "volume_24h_change_24h": -4.03,
      "market_cap": 17646575,
      "market_cap_change_24h": 0.01,
      "percent_change_15m": 0,
      "percent_change_30m": 0,
      "percent_change_1h": 0,
      "percent_change_6h": 0,
      "percent_change_12h": 0,
      "percent_change_24h": 0,
      "percent_change_7d": 0,
      "percent_change_30d": 0,
      "percent_change_1y": 0,
      "ath_price": null,
      "ath_date": null,
      "percent_from_price_ath": null
    },
    "USD": {
      "price": 5162.15941296,
      "volume_24h": 7304207651.1585,
      "volume_24h_change_24h": -2.5,
      "market_cap": 91094433242,
      "market_cap_change_24h": 1.6,
      "percent_change_15m": 0,
      "percent_change_30m": 0,
      "percent_change_1h": 0,
      "percent_change_6h": 0,
      "percent_change_12h": -0.09,
      "percent_change_24h": 1.59,
      "percent_change_7d": 0.28,
      "percent_change_30d": 27.39,
      "percent_change_1y": -37.99,
      "ath_price": 20089,
      "ath_date": "2017-12-17T12:19:00Z",
      "percent_from_price_ath": -74.3
    }
  }
}
```

Devido ao uso gratuito da API, na [documentação](https://docs.coinpaprika.com/api-reference/rest-api/introduction) é dito que só pode ser realizada **uma** requisição a cada **5 minutos** e no **máximo 20.000** requisições totais por mês; além de que não é possível no plano free usar apenas um link para chamar todos os `ids` de uma só vez, sendo necessário um `fetch` para cada moeda.

```javascript
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
        const XMRpromise = fetch('https://api.coinpaprika.com/v1/tickers/xmr-monero?quotes=BRL');
        const XRPpromise = fetch('https://api.coinpaprika.com/v1/tickers/xrp-xrp?quotes=BRL');
        const TRONpromise = fetch('https://api.coinpaprika.com/v1/tickers/trx-tron?quotes=BRL');
        const LINKpromise = fetch('https://api.coinpaprika.com/v1/tickers/link-chainlink?quotes=BRL');

        const [ETHresponse, BTCresponse, PAXGresponse, SOLresponse, BNBresponse, HYPEresponse, SUIresponse, ZCASHresponse, XMRresponse, XRPresponse, TRONresponse, LINKresponse] 
        = await Promise.all([ETHpromise, BTCpromise, PAXGpromise, SOLpromise, BNBpromise, HYPEpromise, SUIpromise, ZCASHpromise, XMRpromise, XRPpromise, TRONpromise, LINKpromise]);

        const ETHdata = await ETHresponse.json();
        const BTCdata = await BTCresponse.json();
        const PAXGdata = await PAXGresponse.json();
        const SOLdata = await SOLresponse.json();
        const BNBdata = await BNBresponse.json();
        const HYPEdata = await HYPEresponse.json();
        const SUIdata = await SUIresponse.json();
        const ZCASHdata = await ZCASHresponse.json();
        const XMRdata = await XMRresponse.json();
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
            xmr: {
                title: XMRdata.name,
                symbol: XMRdata.symbol,
                price: XMRdata.quotes.BRL.price,
                percentage1: XMRdata.quotes.BRL.percent_change_1h,
                percentage6: XMRdata.quotes.BRL.percent_change_6h,
                percentage12: XMRdata.quotes.BRL.percent_change_12h,
                percentage24: XMRdata.quotes.BRL.percent_change_24h
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
        console.log("Erro na requisição da API: ", error);
        return null;
    }
}
```


## :computer: Demonstração e Protótipo

<img alt="Mockup" src="./src/assets/images/card prototipo.jpg">

## :hammer: Tecnologias Utilizadas

<div align="left">
  <img src="https://skillicons.dev/icons?i=html" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=css" height="40" alt="css logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=js" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=git" height="40" alt="git logo"  />
  <img width="12" />
  <img src="https://cdn.simpleicons.org/npm/CB3837" height="40" alt="npm logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=react" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=tailwind" height="40" alt="tailwindcss logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=nodejs" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=figma" height="40" alt="figma logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=vite" height="40" alt="vite logo"  />
</div>

### Figma MCP

#### Definição
O `Figma MCP` é um padrão de código aberto criado para conectar o Figma a modelos de IA, permitindo que agentes de inteligência artificial "leiam" e entendam arquivos de design, componentes e variáveis em tempo real. Ele traduz designs visuais em código estruturado, facilitando a geração automática de componentes, layouts e estilos consistentes com o design original.

#### Como foi utilizado
Com o `.gitignore` não foi enviado ao repositório a pasta `.vscode` nem o arquivo `mcp.json` - responsável por configuar o `MCP Server` - para evitar vazamentos de dados sensíveis. De acordo com a documentação do [Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP.git), a configuração padrão do `mcp.json` deve ser assim para Windows - caso utlilize o **Cursor** como IDE de desenvolvimento:

```json
{
  "mcpServers": {
    "Framelink MCP for Figma": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"]
    }
  }
}
```

Como utilizei o **VsCode**, o código sofre uma leve mudança: ao invés de `"mcpServers"`, é colocado apenas `"servers"`.
```json
{
  "servers": {
    "Framelink MCP for Figma": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"]
    }
  }
}
```

Para que meu Figma fosse acessado pelo `MCP Server`, foi necessário colocar meu **Figma Token** no `"--figma-api-key=YOUR-KEY"`. Como dito anteriormente, o `.gitignore` foi utilizado exatamente para proteger dados sensíveis, um deles sendo o `mcp.json` que **contém** o token privado.

## :link: Acessar o Projeto

Acesse aqui a :point_right: [página](https://petceline.netlify.app/) :point_left: 



