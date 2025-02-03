import { Link } from "react-router-dom";

export default function SplashScreen() {
    return (
        <div>splashscreen ------------
            <Link to={"/login"}>Ir para login</Link>
        </div>
    )
}
