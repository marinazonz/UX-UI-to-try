import "./article.css";

const Article = () => {
    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img src={imgUrl} alt='article' />
            </div>
        </div>
    );
};

export default Article;
