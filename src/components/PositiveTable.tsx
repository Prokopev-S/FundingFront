import React, { useState } from "react"
import "../css/App.css"
import { Table } from "rsuite"
import { Coin } from "../pictures"

const { Column, HeaderCell, Cell } = Table

const PositiveTable: React.FC<any> = ({positiveArr, exchangesArr}) => {
    return (
        <Table
            autoHeight={true}
            data={positiveArr}
            bordered
            cellBordered
            onSortColumn={(sortColumn, sortType) => {
                console.log(sortColumn, sortType)
            }}
        >
            <Column width={110} align="center" fixed>
                <HeaderCell>
                  <img
                    className="coin__logo"
                    src={String(Coin)}
                  ></img>
                  symbol</HeaderCell>
                <Cell dataKey="symbol" />
            </Column>
            {
                exchangesArr.map((item: any, index: any) => (
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

export default PositiveTable
