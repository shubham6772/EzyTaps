import React, { memo } from "react";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material"
import "./Dropdown.scss";

interface DropdownProps {
    longLabel ?: string
    label: string;
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    fullWidth?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ longLabel, label, options, value, onChange, fullWidth = true }) => {
    const handleChange = (event: SelectChangeEvent) => {
        onChange(event.target.value);
    };

    return (
        <>
            <div className="dropdown-label-text">{longLabel}</div>
            <FormControl className="dropdown-container" fullWidth={fullWidth} size="small">
                <InputLabel>{label}</InputLabel>
                <Select
                    className="dropdown-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    );
};

export default memo(Dropdown);
