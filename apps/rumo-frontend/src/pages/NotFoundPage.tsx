import {routes} from "../constants/routes.ts";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">🚧 Oops! Page Not Found 😢</h1>
                    <p className="py-6">
                        The page you’re looking for doesn’t exist or has been moved.
                    </p>
                    <Link to={routes.home}>
                        <button className="btn btn-primary">Go Home</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}