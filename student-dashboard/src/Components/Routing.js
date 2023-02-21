import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BarChart from "./BarChart";
import StudentsChart from "./StudentsChart";

const Routing = ({ allData, averageDifficulty, averageFun }) => {
    const names = [...new Set(allData.map(student => student.name))]

    return (
        <div>
            <Router>
                <ul className="router-list">

                    <li className="routing-li chart-li">
                        <Link to="/" className="links">Bar Chart</Link>
                    </li>

                    {names.map((student, index) => {
                        return <li key={index} className="routing-li students-li">
                            <Link to={`/StudentsChart/${student}`} className="links">{student}</Link>
                        </li >
                    })}

                </ul>

                <Routes>
                    <Route path="/" element={<BarChart allData={allData} averageDifficulty={averageDifficulty} averageFun={averageFun} />} />
                    <Route path="/StudentsChart/:name" element={<StudentsChart allData={allData} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routing;