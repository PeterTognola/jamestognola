import "./profile.scss";
import {useState} from "react";

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#222" stroke-miterlimit="10" stroke-width="0" d="M254.307 69.55a9.8 9.8 0 0 0-2.88-6.956c-3.84-3.84-10.069-3.84-13.907 0l-109.663 109.66-109.66-109.66c-3.842-3.84-10.069-3.84-13.91 0-3.839 3.842-3.839 10.069 0 13.91l116.615 116.615c3.838 3.841 10.068 3.841 13.907 0L251.424 76.504a9.8 9.8 0 0 0 2.883-6.955"/></svg>;

export const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return <div className={"profile"}>
        <h2 className={isOpen ? "is-open" : ""} onClick={() => setIsOpen(o => !o)}>Profile <Icon /></h2>

        {isOpen && <div className="info">
            <p>test</p>
        </div>}
    </div>;
}