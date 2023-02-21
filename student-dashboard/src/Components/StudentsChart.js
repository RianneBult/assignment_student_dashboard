import React from "react";
import { useParams } from "react-router-dom";
import ChartLayout from "./ChartLayout";

const StudentsChart = ({ allData }) => {
    const { name } = useParams();

    const filterNames = allData.filter(item => item.name === name).map(student => student)
    console.log("filterNames", filterNames)

    const getDifficultys = filterNames.map(student => student.difficulty)
    console.log(getDifficultys)

    const getFuns = filterNames.map(student => student.fun)
    console.log(getFuns)

    return (
        <div>
            <h1 className="chart-title">Student Chart</h1>
            <div className="all-charts student-chart">
                <h2 className="students-title">Student {name}</h2>

                <ChartLayout
                    difficultyData={getDifficultys}
                    funData={getFuns}
                />

            </div>
        </div>
    )
}

export default StudentsChart;