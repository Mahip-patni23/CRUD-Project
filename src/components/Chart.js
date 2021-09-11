import React from 'react'
import './Chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey, grid, dataKeyNext}) {

    return (
        <div className="chart">
            <h3 className="chart_title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={3 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="black"></XAxis>
                    <YAxis stroke="black"></YAxis>
                    <Line type="monotone" dataKey={dataKey} stroke="darkblue"></Line>
                    <Line type="monotone" dataKey={dataKeyNext} stroke="aqua"></Line>
                    {<Tooltip></Tooltip>}
                    {grid && <CartesianGrid stroke="grey" strokeDasharray="1 5"></CartesianGrid>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
