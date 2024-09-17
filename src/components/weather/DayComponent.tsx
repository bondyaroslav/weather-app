import {Paper, styled, Typography} from "@mui/material"

interface DayComponentProps {
    date: string,
    temperature: any
}

const StyledDayComponent = styled(Paper)({
    width: 100,
    height: 100,
    padding: 10,
    margin: 5
});

const DayComponent = ({date, temperature}: DayComponentProps) => {
    return (
        <StyledDayComponent>
            <Typography>{date}</Typography>
            <Typography>{temperature} °C</Typography>
        </StyledDayComponent>
    )
}

export default DayComponent