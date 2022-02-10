import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import { Context } from "../../context/Context"

function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
    useEffect(()=>{
        const getPost = async () =>{
            const res = await axios.get("/posts/" + path);
            // console.log(res);
            setPost(res.data);
            setTitle(res.data.title)
            setDesc(res.data.desc)
        };
        getPost();
    },[path])

    const PF = "http://localhost:5000/images/";

    const handleDelete = async() => {
        try{
            await axios.delete(`/posts/${post._id}`, {
                data: {username: user.username},
            });
            window.location.replace("/");
        } catch(err) {}
    };

    const handleUpdate = async() => {
        try{
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false);
        } catch(err) {}
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="postImg"
                        src={PF+post.photo}
                        alt="" 
                    />
                )}{
                    updateMode ? (
                        <input 
                            type="text" 
                            value={title} 
                            className="singlePostTitleInput"
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus 
                        />
                    ) : (
                        <h1 className="singlePostTitle">
                            {title}
                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )
                }
                
                <div className="singlePostInfo">
                    
                        <span className="singlePostAuthor">
                            Author: 
                                <Link className="link" to={`/?user=${post.username}`}>
                                    <b>{post.username}</b>
                                </Link>
                        </span>
                    
                    
                    <span className="singlePostTime">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {
                    updateMode ? (
                        <textarea 
                            type="text" 
                            value={desc} 
                            className="singlePostDescInput"
                            onChange={(e) => setDesc(e.target.value)}
                        ></textarea>
                    ) : (
                        <p className="singlePostDesc">
                            {desc}
                        </p>
                    )
                }
                {updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>)}
                
                
            </div>
        </div>
    )
}

export default SinglePost
