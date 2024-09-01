import { useState } from "react";
import { Box, InputAdornment, Slider, TextField, Typography } from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';

const MAX = 3;
const MIN = 0.5;

const marks = [
    {
        value: MAX,
        label: '',
    },
    {
        value: MIN,
        label: '',
    },
];

const typographyStyleProps: SxProps<Theme> = {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

export const SliderComponent = () => {
    const [value, setVal] = useState<number>(MAX)

    const handleChange = (_: Event, newValue: number | number[]) => {
        const newValueNum = newValue as number;
        const invertedValue = MAX + MIN - newValueNum;
        setVal(invertedValue);
    };

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                value={MAX - value + MIN}
                marks={marks}
                step={0.5}
                min={MIN}
                max={MAX}
                onChange={handleChange}
                track="inverted"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="body2"
                    onClick={() => setVal(MAX)}
                    sx={typographyStyleProps}
                >
                    <span>3</span>
                    <span>Conservative</span>
                </Typography>
                <Typography
                    variant="body2"
                    onClick={() => setVal(MIN)}
                    sx={typographyStyleProps}
                >
                    <span>1/2</span>
                    <span>Top-Tier</span>
                </Typography>
            </Box>
            <Box sx={{ marginTop: '16px' }}>
                <TextField
                    label="bp"
                    type="number"
                    value={value}
                    focused
                    slotProps={{
                        htmlInput: {
                            min: '0.5', max: '3', step: '0.5'
                        },
                        input: {
                            startAdornment: <InputAdornment position="start">+/-</InputAdornment>
                        }
                    }}
                    onChange={(ev) => setVal(Number(ev.target.value))} />
            </Box>
        </Box>
    )
}

const wrapperStyles: SxProps<Theme> = {
    position: 'relative',
    display: 'inline-block',
};

const bottomRightLabelStyles: SxProps<Theme> = {
    position: 'absolute',
    top: '46px',
    right: '10px',
    color: '#4d9500',
    background: '#242424',
    padding: '0 5px',
    fontSize: '10px'
};

export const NumberInputComponent = () => {
    return (
        <Box sx={wrapperStyles}>
            <TextField
                label="Default Label"
                type="number"
                variant="outlined"
                sx={{ width: 300 }}
            />
            <Typography sx={bottomRightLabelStyles}>
                Bottom Right Label
            </Typography>
        </Box>
    );
};