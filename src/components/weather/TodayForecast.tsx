import {Box, styled, Typography} from "@mui/material"

const StyledTodayForecast = styled(Box)({
    margin: 5,
});

const TodayForecast = ({current}: any) => {
    return (
        <StyledTodayForecast>
            {current && (
                <>
                    <Typography>{current.location.country}</Typography>
                    <Typography>{current.location.name}</Typography>
                    <Typography>{current.location.region}</Typography>
                    <Typography>{current.current.feelslike_c}°C</Typography>
                </>
            )}
        </StyledTodayForecast>
    );
};

export default TodayForecast;