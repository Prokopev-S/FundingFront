import { PositiveItem } from "../models/IFunding"

const prepareData = (data: any, exchangesArr: any) => {
    const arr = []
    for (let i=0; i<data.length; i++) {
        const item = data[i]
        const symbol = item.symbol

        const exObj: any = createEmptyObj(exchangesArr)
        
        for (let j=0; j<item.elems.length; j++) {
            const exchange = item.elems[j].exchange
            const fundingRate = item.elems[j].fundingRate

            exObj[exchange] = fundingRate+"%"
        }

        const finalObj = {
            symbol: symbol,
            ...exObj
        }

        arr.push(finalObj)
    }  

   return arr
}

const createEmptyObj = (exchangesArr: any) => {
    const exObj: any = {}

    for (let i=0; i<exchangesArr.length; i++) { 
        exObj[exchangesArr[i].name] = "━"
    }
    
    return exObj
}

export default prepareData