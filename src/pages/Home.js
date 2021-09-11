import React from 'react'
import './Home.css'
import { userData } from '../dummyData';
import Chart from '../components/Chart';

function Home() {
    return (
        <div className="home">
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" dataKeyNext="Non-Active User"></Chart>
        </div>
    )
}

export default Home
