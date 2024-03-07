import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
    return (
        <header>
            <Link to="/">Hungry Eat Pizza</Link>


            <SearchOrder />

            <p>momo.</p>
        </header>
    )
}

export default Header
