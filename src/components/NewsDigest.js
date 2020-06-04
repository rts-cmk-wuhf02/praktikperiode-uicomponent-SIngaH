import React from "react"
import "../css/news-digest.css"

function NewsDigest({ title, color, number, content, border }){
    return(
        <div className="news-item" style={{borderBottom: border}}>
            <div className="news-number" style={{backgroundColor: color}}>
                <p>{number}</p>
            </div>
            <h2 className="news-item-h2">{title}</h2>
            <p>{content.content}</p>
        </div>               
    )
}
export default NewsDigest