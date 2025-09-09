import { InputAdornment, TextField } from "@mui/material";
import React, { memo, useMemo } from "react";

import "./ConverterInputBar.scss";

interface PropsModel {
    longLable?: string;
    label?: string;
    variant?: "outlined" | "filled" | "standard";
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    bold: "high" | "medium" | "small";
    fontSize: "large" | "small" | "medium";
    borderRadius?: number;
    isEditable ?: boolean;
    isError ?: boolean
}

const ConverterInputBar = ({
    label,
    variant = "outlined",
    longLable,
    handleChange,
    value,
    startIcon,
    endIcon,
    fontSize,
    bold,
    borderRadius,
    isEditable = true,
    isError = false
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
                {longLable && <div className={`converter-input-bar-text-label ${fontSize} ${`${bold}-bold`}`}>{longLable}</div>}

                <TextField
                    id="converter-input"
                    label={label}
                    variant={variant}
                    className={isError?  "error-converter-textfield" : "converter-textfield"}
                    onChange={handleChange}
                    value={value}
                    disabled={isEditable === false}
                    slotProps={{
                        input: {
                            startAdornment: startAdornmentMemo,
                            endAdornment: endAdornmentMemo,
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: borderRadius, // dynamic value
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default memo(ConverterInputBar);
