import React from "react";

interface Props {
    value: number;
    name: string;
    label: string;
    onChange: (e: any) => void;
}

const RadiusRange = (props: Props) => {
    const { value, name, label, onChange } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type="range"
                id={name}
                min="1"
                max="50"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default RadiusRange;
