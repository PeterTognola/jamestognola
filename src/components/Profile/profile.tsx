import "./profile.scss";
import {useState} from "react";
import ProfilePicture from "../../assets/james-tognola.webp";
import HomeIcon from "../../assets/icons/home-icon.tsx";
import WorkIcon from "../../assets/icons/work-icon.tsx";

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#222" stroke-miterlimit="10" stroke-width="0" d="M254.307 69.55a9.8 9.8 0 0 0-2.88-6.956c-3.84-3.84-10.069-3.84-13.907 0l-109.663 109.66-109.66-109.66c-3.842-3.84-10.069-3.84-13.91 0-3.839 3.842-3.839 10.069 0 13.91l116.615 116.615c3.838 3.841 10.068 3.841 13.907 0L251.424 76.504a9.8 9.8 0 0 0 2.883-6.955"/></svg>;

export const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <>
        <h2 className={`profile ${isOpen && "is-open"}`} onClick={() => setIsOpen(o => !o)}>Profile <Icon/></h2>

        {isOpen && <div className="profile">
            <img src={ProfilePicture.src} alt="Picture of James Tognola"/>

            <h3>James Tognola</h3>
            <p>Full Stack Developer | Head of Technology, Development & Ecommerce @ WJFG</p>

            <p className={"meta-icons"}>
                <span className={"icon"}><a href={"https://maps.app.goo.gl/3Pjt6CCads3ohr4Y8"} target={"_blank"}><HomeIcon /> Based in York, UK</a></span>

                <span className={"icon"}><a href={"https://wjfg.co.uk/"} target={"_blank"}><WorkIcon /> WJFG Limited</a></span>

                <span className={"icon"}><a href={"https://qdeveloping.co.uk"} target={"_blank"}><WorkIcon /> QDeveloping Limited</a></span>
            </p>
        </div>}
    </>;
}