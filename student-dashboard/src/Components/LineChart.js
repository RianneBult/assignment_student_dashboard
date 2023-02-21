import React from "react";
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryLabel, VictoryLine, VictoryScatter, VictoryLegend } from "victory";

const LineChart = ({ allData, difficultyData, funData }) => {
    const getAssignments = [...new Set(allData.map(student => student.assignment))];

    return (
        <div className="all-charts">

            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={10}
                width={1800}
            >

                <VictoryLegend
                    x={825} y={-90}
                    title="Legend"
                    centerTitle
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: "black" }, title: { fontSize: 25 }, labels: { fontSize: 15 } }}
                    data={[
                        { name: "Difficulty", symbol: { fill: "#ffa07a" } },
                        { name: "Fun", symbol: { fill: "#191970" } },
                    ]}
                />

                <VictoryAxis
                    tickFormat={x => ``}
                    tickCount={getAssignments.length}
                />

                <VictoryAxis
                    dependentAxis
                    tickFormat={["1", "2", "3", "4", "5"]}
                    offsetX={45}
                />

                <VictoryLine
                    data={difficultyData}
                    style={{ data: { stroke: "#ffa07a" } }}
                />
                <VictoryScatter
                    data={difficultyData}
                    style={{ data: { fill: "#ffa07a" } }}
                />

                <VictoryLine
                    data={funData}
                    style={{ data: { stroke: "#191970" } }}
                />
                <VictoryScatter
                    data={funData}
                    labels={getAssignments}
                    labelComponent={
                        <VictoryLabel
                            y={310}
                            verticalAnchor={"start"}
                            textAnchor={"end"}
                            angle={-90} />}
                    style={{ data: { fill: "#191970" } }}
                />

            </VictoryChart>

        </div>
    )
}

export default LineChart;