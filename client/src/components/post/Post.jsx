import "./post.css"
import { Link } from "react-router-dom"


export default function Post({post}) {
    const PF = "http://localhost:5000/images/"
    
    return (
        <Link className="link" to={`/post/${post._id}`}>
            <div className="post">
                {post.photo && (
                    <img
                    className="postImg"
                    src={PF+post.photo}
                    alt="" 
                />
                )}
                <div className="postInfo">
                    <span className="postTitle">{post.title}</span>
                    <div className="postCats">{
                        post.categories.map(c=>(
                            <span className="postCat">{c}</span>
                        ))
                    }</div>
                    <hr />
                    <p className="postDesc">
                        {post.desc}
                    </p>
                    <div className="postDetails">
                        <Link className="link" to={`/?user=${post.username}`}>
                            <span className="postAuthor">{post.username}</span>
                        </Link>
                        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                        
                    </div>
                </div>
                
            </div>
        </Link>
    )
}
