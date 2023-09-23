import Article from "./Article";
import articleData2 from "../assets/articleData2";
import { useState } from "react";


function ReadMore() {
    const [btnReadMore, setBtnReadMore] = useState("閱讀更多");
    const [style, setStyle] = useState({display: "none"});
    const handleClickReadMore = (e) => {
        if (e.target.innerHTML === "閱讀更多") {
            setBtnReadMore("收起文章");
            setStyle({display: "flex"});
        } else {
            setBtnReadMore("閱讀更多");
            setStyle({display: "none"});
        }
    };

    return (
        <>
        <div className="readmore">
          <button id="readMoreBtn" onClick={handleClickReadMore}>{btnReadMore}</button>
        </div>
        <div className="col-box article-more" id="articleMore" style={style}>
          <Article data={articleData2}/>
        </div>
        </>
    )
}

export default ReadMore;