import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
    return (
        <header>
            <Link  to='/'>Pizza</Link>
            <SearchOrder />
            <p>Angel</p>
        </header>
    );

}

export default Header;