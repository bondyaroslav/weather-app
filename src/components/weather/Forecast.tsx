import DayComponent from "./DayComponent.tsx"
import {Box, styled} from "@mui/material";

const StyledForecast = styled(Box)({
    display: 'flex',
    flexWrap: 'wrap',
    padding: 2,
});

const Forecast = ({forecast}: any) => {
    return (
        <StyledForecast>
            {forecast && forecast.forecast && Array.isArray(forecast.forecast.forecastday) && forecast.forecast.forecastday.map((day, index) => (
                <DayComponent
                    key={index}
                    date={day.date}
                    temperature={day.day.avgtemp_c}
                />
            ))}
        </StyledForecast>
    )
}

export default Forecast