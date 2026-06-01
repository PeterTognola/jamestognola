import "./footer.scss";
import {useState} from "react";

export const Footer = () => {
    const [date,] = useState<Date>(new Date());

    return <footer>
        <p>Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my employer's view in any way.</p>
        <p>&copy; {date.getFullYear()} James Tognola. All rights reserved.</p>
    </footer>;
}