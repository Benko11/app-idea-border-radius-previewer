import React from "react";

interface Props {
    corners: string[];
}

const PreviewBox = (props: Props) => {
    const { corners } = props;
    return (
        <div className="box" style={{ borderRadius: corners.join(" ") }}>
            Hello
        </div>
    );
};

export default PreviewBox;
