import { useEffect, useState } from "react";
import axios from "axios";
import "./sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {

    const [cats, setCats] = useState([]);

    useEffect(() =>{
        const getCats = async ()=> {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();

    }, [])



    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT US</span>
                <img src="https://www.vizemen.com/wp-content/uploads/2021/05/vizemen.logo_.circle-768x768.png" alt="" />
                <p>We’re a group of passion(less)ate engineers (read: unemployed) on a mission to raise public awareness about everything. <br />
We’re unlike any other blogging website or page because the majority of them are run by highly trained, skilled authors. We’re not sure about the training and proficiency aspect, but we are really high on life (we don’t endorse narcotics). <br />
We expect you to take our writing seriously (not us). We present to you the Vizemen, the first-ever (mandatory to say) multi-niche blog, created with a mix of gravity and gin. <br /> <br />

WE ARE VIZEMEN</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link className="link" to={`/?cat=${c.name}`}>
                            <li className="sidebarListItems">{c.name}</li>
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
