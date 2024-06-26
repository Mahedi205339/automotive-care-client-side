import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './navbar.css'
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                result.user
            })
            .catch(error => console.error(error))
    }

    // const [menuOpen, setMenuOpen] = useState(false)
    // console.log(menuOpen);.
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    const navLink = <>
        <li> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 px-3 py-2 rounded-lg" : ""
            }
        >
            Home
        </NavLink>
        </li>
        <li> <NavLink
            to="/cars"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 px-3 py-2 rounded-lg" : ""
            }
        >
            Cars
        </NavLink>
        </li>
        <li> <NavLink
            to="/my-bookings"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 px-3 py-2 rounded-lg" : ""
            }
        >
           My Bookings
        </NavLink>
        </li>
        <li> <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-red-600 px-3 py-2 rounded-lg" : ""
            }
        >
            Dashboard
        </NavLink>
        </li>
        <li>
            {

                user ? <button onClick={handleLogOut} className=" font-semibold px-2 py-1 lg:px-4 lg:py-2 rounded bg-red-800 border-collapse text-white">Log out</button> :
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-red-600" : ""
                        }

                    >
                        Login
                    </NavLink>
            }

        </li>
    </>

    return (
        <div className="mb-4 w-full fixed z-20 backdrop-blur-sm bg-neutral-800 bg-opacity-10 ">
            <nav className="nav  max-w-[1500px] mx-auto px-5 lg:px-8 md:px-7">
                <div>
                    <h3 className="text-red-600 font-Corinthia font-bold text-xl md:text-3xl">AutomotiveCare</h3>
                </div>
                <ul className={active}>
                    {navLink}
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;