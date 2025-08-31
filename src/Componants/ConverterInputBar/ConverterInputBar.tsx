import { InputAdornment, TextField } from "@mui/material";
import React, { memo, useMemo } from "react";

import "./ConverterInputBar.scss";

interface PropsModel {
    longLable?: string;
    label: string;
    variant?: "outlined" | "filled" | "standard";
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const ConverterInputBar = ({
    label,
    variant = "outlined",
    longLable,
    handleChange,
    value,
    startIcon,
    endIcon,
}: PropsModel) => {

    const startAdornmentMemo = useMemo(() => {
        if (!startIcon) return null;
        return (
            <InputAdornment position="start">
                <span className="clickable-icon">{startIcon}</span>
            </InputAdornment>
        );
    }, [startIcon]);

    const endAdornmentMemo = useMemo(() => {
        if (!endIcon) return null;
        return (
            <InputAdornment position="end">
                <span className="clickable-icon">{endIcon}</span>
            </InputAdornment>
        );
    }, [endIcon]);

    return (
        <div className="converter-input-bar-container">
            <div className="converter-input-bar-and-label-container">
                {longLable && <div className="converter-input-bar-text-label">{longLable}</div>}

                <TextField
                    id="converter-input"
                    label={label}
                    variant={variant}
                    className="converter-textfield"
                    onChange={handleChange}
                    value={value}
                    slotProps={{
                        input: {
                            startAdornment: startAdornmentMemo,
                            endAdornment: endAdornmentMemo,
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default memo(ConverterInputBar);
