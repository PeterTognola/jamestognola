import "./footer.scss";
import {useState} from "react";

export const Footer = () => {
    const [date,] = useState<Date>(new Date());

    return <footer>
        <p>&copy; {date.getFullYear()} James Tognola. All rights reserved.</p>
    </footer>;
}