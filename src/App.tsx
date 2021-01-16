import React, { useState } from "react";
import PreviewBox from "./components/PreviewBox";
import RadiusRange from "./components/RadiusRange";
import "./css/App.css";

function App() {
    const [corners, setCorners] = useState(["5px", "5px", "5px", "5px"]);

    function cloneCorners(id: number, value: number) {
        const _corners = [...corners];
        _corners[id] = String(value) + "px";
        setCorners(_corners);
    }

    function handleRangeChange(e: any) {
        if (e.target.value >= 1 && e.target.value <= 50) {
            const id = e.target.getAttribute("id").split("-")[1];
            cloneCorners(id, e.target.value);
        }
    }

    function showRanges() {
        let ranges = [];
        for (let i = 0; i < corners.length; i++) {
            ranges.push(
                <RadiusRange
                    key={i}
                    value={+corners[i].split("px")[0]}
                    name={`item-${i}`}
                    label={`Argument ${i + 1}`}
                    onChange={handleRangeChange}
                />
            );
        }

        return ranges;
    }

    return (
        <>
            <h1>Border radius previewer</h1>
            <PreviewBox corners={corners} />
            {showRanges().map((range) => range)}
        </>
    );
}

export default App;
