import axios from "axios"
import { IFunding, IResponseFunding } from "../models/IFunding"


export const getFundingData = async () => {
    let response
    try {
        response = await axios.get<IFunding>(
            `http://localhost:8080/funding`
    );
    } catch (e) {
        console.log(e)
    }

    const tepmRes: IFunding = {
        "positive": [
            {
                "symbol": "GLMUSDT",
                "elems": [
                  {
                    "exchange": "Bybit",
                    "symbol": "GLMUSDT",
                    "bidPrice": "0.21041",
                    "askPrice": "0.21074",
                    "fundingRate": 1.5,
                    "nextFundingTime": "1706313600000"
                  },
                  {
                    "exchange": "GateIo",
                    "symbol": "GLMUSDT",
                    "bidPrice": "0.2083",
                    "askPrice": "0.2109",
                    "fundingRate": 0.9385,
                    "nextFundingTime": ""
                  }
                ]
              }
        ],
        "negative": [
          {
            "symbol": "GLMUSDT",
            "elems": [
              {
                "exchange": "Bybit",
                "symbol": "GLMUSDT",
                "bidPrice": "0.21041",
                "askPrice": "0.21074",
                "fundingRate": -1.5,
                "nextFundingTime": "1706313600000"
              },
              {
                "exchange": "GateIo",
                "symbol": "GLMUSDT",
                "bidPrice": "0.2083",
                "askPrice": "0.2109",
                "fundingRate": -0.9385,
                "nextFundingTime": ""
              }
            ]
          },
          {
            "symbol": "PROMUSDT",
            "elems": [
              {
                "exchange": "Bybit",
                "symbol": "PROMUSDT",
                "bidPrice": "7.2610",
                "askPrice": "7.2640",
                "fundingRate": -0.3777,
                "nextFundingTime": "1706313600000"
              },
              {
                "exchange": "Mexc",
                "symbol": "PROMUSDT",
                "bidPrice": "7.261",
                "askPrice": "7.264",
                "fundingRate": -0.3675,
                "nextFundingTime": ""
              }
            ]
          },
          {
            "symbol": "SCRTUSDT",
            "elems": [
              {
                "exchange": "Bybit",
                "symbol": "SCRTUSDT",
                "bidPrice": "0.3911",
                "askPrice": "0.3914",
                "fundingRate": -0.2972,
                "nextFundingTime": "1706313600000"
              },
              {
                "exchange": "Mexc",
                "symbol": "SCRTUSDT",
                "bidPrice": "0.3911",
                "askPrice": "0.3914",
                "fundingRate": -0.2972,
                "nextFundingTime": ""
              }
            ]
          }
        ]
      }

      return response?.data

};