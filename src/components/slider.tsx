import { useState } from "react";
import { Box, InputAdornment, Slider, TextField, TextFieldProps, Typography } from "@mui/material";
import { styled, SxProps, Theme } from '@mui/material/styles';


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

const CustomSlider = styled(Slider)({
    '& .MuiSlider-thumb': {
        borderRadius: 'unset',
        height: '36px',
        opacity: '0.85'
    },
    '& .MuiSlider-rail': {
        height: '1px'
    }
})

export const SliderComponent = () => {
    const [value, setVal] = useState<number>(MAX)

    const handleChange = (_: Event, newValue: number | number[]) => {
        const newValueNum = newValue as number;
        const invertedValue = MAX + MIN - newValueNum;
        setVal(invertedValue);
    };

    return (
        <Box sx={{ width: 300 }}>
            <CustomSlider
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
                <NumberInputComponent
                    secondaryLabel="bp"
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
                    onChange={(ev) => setVal(Number(ev.target.value))} size="small" />
            </Box>
        </Box>
    )
}

const wrapperStyles: SxProps<Theme> = {
    position: 'relative',
    display: 'inline-flex',
};

const bottomRightLabelStyles: SxProps<Theme> = {
    position: 'absolute',
    bottom: '-6px',
    right: '10px',
    color: '#4d9500',
    background: '#242424',
    padding: '0 5px',
    fontSize: '10px'
};

type ICustomInputProps = TextFieldProps & {
    width?: string;
    secondaryLabel?: string;
}

export const NumberInputComponent = (props: ICustomInputProps) => {
    const { label, secondaryLabel, width, ...rest } = props;

    return (
        <Box sx={wrapperStyles} width={width}>
            <TextField
                label={label}
                type="number"
                variant="outlined"
                {...rest}
            />
            <Typography sx={bottomRightLabelStyles}>
                {secondaryLabel}
            </Typography>
        </Box>
    );
};