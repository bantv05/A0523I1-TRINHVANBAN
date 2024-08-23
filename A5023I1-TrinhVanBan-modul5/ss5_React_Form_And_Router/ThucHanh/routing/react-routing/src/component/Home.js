import {Link} from "react-router-dom";

export const Home = () =>{
    return(
        <>
            <main>
                <h2>Welcome to the homepage!</h2>
            </main>
            <nav>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

export const About = () =>{
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    React Router is a lightweight, fully-featured routing library for the React JavaScript library
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}
