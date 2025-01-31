// import navigate from reace-router-dom

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <h1>teste home</h1>
            <Link to="/login">Login</Link>
        </div>

    )
}