import "./footer.scss";
import {useState} from "react";
import {SITE_TITLE} from "../../consts.ts";

export const Footer = () => {
    const [date,] = useState<Date>(new Date());

    return <footer>
        <p>Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my employer's view in any way.</p>
        <p>&copy; {date.getFullYear()} {SITE_TITLE}. All rights reserved.</p>
    </footer>;
}