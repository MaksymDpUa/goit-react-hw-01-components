import { StatTitle } from "./Statistics.styled";

  export const statsTitle = (title) => { 
        if (!title) {
            return
        }
        return <StatTitle className="title">{title}</StatTitle>
    };