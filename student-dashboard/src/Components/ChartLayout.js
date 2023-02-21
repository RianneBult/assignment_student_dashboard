import React from "react";
import { VictoryChart, VictoryAxis, VictoryGroup, VictoryStack, VictoryTheme, VictoryLabel, VictoryBar, VictoryLegend } from "victory";
import data from "../Data/Data";

const ChartLayout = ({ difficultyData, funData }) => {
    const getAssignments = [...new Set(data.map(student => student.assignment))]

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
                    offsetX={35}
                />

                <VictoryGroup offset={12}>

                    <VictoryStack style={{ data: { fill: "#ffa07a" } }}>
                        <VictoryBar
                            data={difficultyData}
                        />
                    </VictoryStack>

                    <VictoryStack style={{ data: { fill: "#191970" } }}>
                        <VictoryBar
                            data={funData}
                            labels={getAssignments}
                            labelComponent={<VictoryLabel
                                y={310}
                                verticalAnchor={"middle"}
                                textAnchor={"end"}
                                angle={-90} />}
                        />
                    </VictoryStack>

                </VictoryGroup>

            </VictoryChart>
        </div>
    )
}

export default ChartLayout;