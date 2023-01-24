import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Bounties Home</Link>
                </li>

                <li>
                    <Link to='/new-bounty'>New Bounty</Link>
                </li>
            </ul>
        </nav>
    )
}