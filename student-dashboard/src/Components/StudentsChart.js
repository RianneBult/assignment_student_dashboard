import React from "react";
import { useParams } from "react-router-dom";
import BarChartLayout from "./BarChartLayout";

const StudentsChart = ({ allData }) => {
    const { name } = useParams();

    const filterNames = allData.filter(item => item.name === name).map(student => student)

    const getDifficultys = filterNames.map(student => student.difficulty)

    const getFuns = filterNames.map(student => student.fun)

    return (
        <div>
            <h1 className="chart-title">Student Chart</h1>
            <div className="all-charts student-chart">
                <h2 className="students-title">Student {name}</h2>

                <BarChartLayout
                    difficultyData={getDifficultys}
                    funData={getFuns}
                />

            </div>
        </div>
    )
}

export default StudentsChart;