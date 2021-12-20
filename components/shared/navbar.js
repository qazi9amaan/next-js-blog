import Link from "next/link"
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter()
    const isEqual = (route) =>{
        if(route == router.pathname) return true
        return false
    }

    return (
      <div>
        <h3 className="h3 mt-3">India</h3>
        <ul className="navbar-nav mt-5  ">
          <li className={isEqual("/") ? "nav-item nav-active" : "nav-item"}>
            <Link href="/">Home</Link>
          </li>
          <li className={isEqual("/meet") ? "nav-item nav-active" : "nav-item"}>
            <Link href="/meet">Places</Link>
          </li>

          <li className={isEqual("/meet/add") ? "nav-item nav-active" : "nav-item"}>
            <Link href="/meet/add">Add a place</Link>
          </li>
        </ul>
      </div>
    );
}

export default Navbar