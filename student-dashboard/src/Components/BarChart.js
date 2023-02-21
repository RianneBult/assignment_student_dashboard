import React, { useState } from "react";
import BarChartLayout from "./BarChartLayout";
import LineChart from "./LineChart";

const BarChart = ({ allData, averageDifficulty, averageFun }) => {
    const [checked, setChecked] = useState(false)

    return (
        <div className="all-charts">
            <h1 className="chart-title">{checked ? "Averages Line Chart" : "Averages Bar Chart"}</h1>
            <input
                className="checkbox"
                type="checkbox"
                value={checked}
                checked={checked}
                onChange={() => setChecked(!checked)}
            />
            <h4 className="text-checkbox">{checked ? "Click the checkbox to go to the Bar Chart" : "Click the checkbox to go to the Line Chart"}</h4>

            <div className="averages-chart">
                {checked ?
                    <LineChart
                        allData={allData}
                        difficultyData={averageDifficulty}
                        funData={averageFun}
                    /> :
                    <BarChartLayout
                        difficultyData={averageDifficulty}
                        funData={averageFun}
                    />}
            </div>
        </div>
    )
}

export default BarChart; 