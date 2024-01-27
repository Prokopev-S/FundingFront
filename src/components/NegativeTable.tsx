import React, { useState } from "react"
import "../css/App.css"
import { Table } from "rsuite"
import { Coin } from "../pictures"


const { Column, HeaderCell, Cell } = Table

const NegativeTable: React.FC<any> = ({negativeArr, exchangesArr}) => {

    return (
        <Table
            autoHeight={true}
            data={negativeArr}
            bordered
            cellBordered
            onSortColumn={(sortColumn, sortType) => {
                console.log(sortColumn, sortType)
            }}
        >
            <Column width={110} align="center" fixed>
                <HeaderCell><img
                    className="coin__logo"
                    src={String(Coin)}
                  ></img>
                  symbol</HeaderCell>
                <Cell dataKey="symbol" />
            </Column>
            {
                exchangesArr.map((item: any, index: number) => (
                  <Column width={120} align="center" key={`${item.name}_${index}`}>
                    <HeaderCell><img
                    className="coin__logo"
                    src={String(item.logo)}
                  ></img>
                  {item.name}</HeaderCell>
                    <Cell dataKey={item.name} />
                  </Column>
                ))
            }
        </Table>
    )
}

export default NegativeTable
