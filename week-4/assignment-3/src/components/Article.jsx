function Article(props) {
    const { data } = props;
    return (
       <>
            {data.map((data) => (
                <a href="#" className="col" key={data.id}>
                    <article>
                    <h3 className="article-title">{data.title}</h3>
                    <p>{data.description}</p>
                    </article>
                </a>))}
       </>
    )   
   }
   
   export default Article;