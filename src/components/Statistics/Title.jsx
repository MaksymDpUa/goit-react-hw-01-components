import { StatTitle } from "./Statistics.styled";

export const StatsTitle = ({ title }) => { 
        if (!title) {
            return
        }
        return <StatTitle>{title}</StatTitle>
    };