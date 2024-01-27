import React, { useState } from "react"
import PositiveTable from "../components/PositiveTable"
import { getFundingData } from "../http/getFundingData";
import prepareData from "../helpers/prepareData";
import NegativeTable from "../components/NegativeTable";
import { Binance, Fund } from "../pictures"
import { Gateio } from "../pictures"
import { Mexc } from "../pictures"
import { Bybit } from "../pictures"
import { Bingx } from "../pictures"
import { Bitget } from "../pictures"
import { Kucoin } from "../pictures"
import { Bitmart } from "../pictures"
import { Coinex } from "../pictures"
import { Huobi } from "../pictures"

const Home = () => {
    const exchangesArr = [{name: "Binance", logo: Binance}, {name: "Bybit", logo: Bybit}, {name: "Mexc", logo: Mexc}, {name: "Gateio", logo: Gateio}, {name: "Bitget", logo: Bitget}, {name: "Bingx", logo: Bingx}, {name: "Kucoin", logo: Kucoin}, {name: "Bitmart", logo: Bitmart}, {name: "Htx", logo: Huobi}, {name: "Coinex", logo: Coinex}]
    const [positiveArr, setPositiveArr]: any = useState();
    const [negativeArr, setNegativeArr]: any = useState();

    React.useEffect(() => {
      const dataFetch = async () => {
          const data2 = await getFundingData()

          const pArr = prepareData(data2.positive, exchangesArr)
          setPositiveArr(pArr)
          const nArr = prepareData(data2.negative, exchangesArr)
          setNegativeArr(nArr)
      }
      dataFetch()
    }, [])

    return (
        <div  className="Home_centert">
            {(positiveArr && negativeArr) ? (
                <div className="Home_center">
                    <div className="Home_center_top">
                        <img className="Home_center_logo" src={String(Fund)}></img>
                        <p className="Home_text">Funding Detector</p>
                    </div>
                    <p className="Home_funding">Positive Funding</p>
                    <PositiveTable positiveArr={positiveArr} exchangesArr={exchangesArr}/>
                    <p className="Home_funding_N">Negative Funding</p>
                    <NegativeTable negativeArr={negativeArr} exchangesArr={exchangesArr}/>
                </div>
            ) : (
                <div className="Home_center">
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
            )}
        </div>
    )
}

export default Home
