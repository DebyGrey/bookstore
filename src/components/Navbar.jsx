import { Link, Outlet } from "react-router-dom";
import { HiOutlineUserCircle } from 'react-icons/hi';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <h1>Bookstore CMS</h1>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Books</Link>
              </li>
              <li>
                <Link to={'categories'}>Categories</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="nav-right">
          <HiOutlineUserCircle />
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
