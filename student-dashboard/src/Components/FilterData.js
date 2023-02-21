import React from "react";
import data from "../Data/Data";
import Routing from "./Routing";

const FilterData = () => {

    const filterAssignments = item => data.filter(student => student.assignment.includes(item))
    const sortedAssignments = [...new Set(data.map(student => student.assignment))]
        .map(item => filterAssignments(item))

    const averageDifficulty = sortedAssignments.map(student => student.map(item => item.difficulty).reduce((a, b) => (a + Number(b)), 0) / student.length)
    const averageFun = sortedAssignments.map(student => student.map(item => item.fun).reduce((a, b) => (a + Number(b)), 0) / student.length)

    return (
        <div>
            <Routing
                allData={data}
                averageDifficulty={averageDifficulty}
                averageFun={averageFun}
            />
        </div>
    )
}

export default FilterData;