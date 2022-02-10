import { Link, NavLink } from "react-router-dom";
import "./topbar.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
    
    const {user, dispatch} = useContext(Context)
    const [showMediaIcons, setShowMediaIcons] = useState(false);

    const handleLogout = () => {
        dispatch({type: "LOGOUT"});
    }

    const PF = "http://localhost:5000/images/";
    
    return (

        <div className="top">
            <div className="topLeft">
                <a href="https://www.vizemen.com/"><img src="https://cdn-cjgag.nitrocdn.com/zgAnfiYahaKcKmycARpsSAoefyUzDAng/assets/static/optimized/rev-5cb67b2/wp-content/uploads/2021/05/cropped-admin-ajax-1-1-1-1-e1620120225718.png" className="topIconVizemen" alt="" /></a>
                <ul className="topLeftDesktop">
                    <li><a href="https://www.facebook.com/vizemen" target="_blank" rel="noreferrer"><i className="topIcon fab fa-facebook-square"></i></a></li>
                    <li><a href="https://www.instagram.com/vizemenofficial/" target="_blank" rel="noreferrer"><i className="topIcon fab fa-instagram-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/vizemen/" target="_blank" rel="noreferrer"><i className="topIcon fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div className={showMediaIcons?"topCenter mobileTopCenter":"topCenter"}>
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/"><a className="link" onClick={() => setShowMediaIcons(!showMediaIcons)} href="#">HOME</a></Link></li>
                    <li className="topListItem"><Link className="link" to="/about"><a className="link" onClick={() => setShowMediaIcons(!showMediaIcons)} href="#">ABOUT</a></Link></li>
                    <li className="topListItem"><Link className="link" to="/contact"><a className="link" onClick={() => setShowMediaIcons(!showMediaIcons)} href="#">CONTACT</a></Link></li>
                    <li className="topListItem"><Link className="link" to="/write"><a className="link" onClick={() => setShowMediaIcons(!showMediaIcons)} href="#">WRITE</a></Link></li>
                    <li className="topListItem" onClick={handleLogout}><a className="link" onClick={() => setShowMediaIcons(!showMediaIcons)} href="#">{user && "LOGOUT"}</a></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                            
                        <Link to="/settings" className="link">{user.profilePic ? (<img 
                            className="topImg link"
                            src={PF+user.profilePic} 
                            alt=""
                        />) : (<i class="topSearchIcon fas fa-user-alt"></i>)}</Link>
                        
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">
                                    LOGIN
                                </Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">
                                    REGISTER
                                </Link>
                            </li>
                        </ul>
                        
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
                <div className="hamburger-menu">
                    <a className="link" href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        </div>
        // <header className="header_middle">
        //     <div className="container">
        //         <div className="row">

        //             <div className="header_middle_logo">
        //                 <NavLink exact activeClassName="is-active" to='/'>
        //                     <img src="https://cdn-cjgag.nitrocdn.com/zgAnfiYahaKcKmycARpsSAoefyUzDAng/assets/static/optimized/rev-5cb67b2/wp-content/uploads/2021/05/cropped-admin-ajax-1-1-1-1-e1620120225718.png" alt="logo" />
        //                 </NavLink>
        //             </div>

        //             <div className="header_middle_menus">

        //             </div>
        //         </div>
        //     </div>
        // </header>
    ) 
}
