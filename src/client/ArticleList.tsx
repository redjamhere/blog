import * as React from 'react';
import { Link } from 'react-router-dom';
import {ArticleListResponse} from '../common/ArticleListResponse';

const ArticleList = () => {
    const [articles, setArticles] = React.useState<string[]>([]);
    React.useEffect(() => {
        fetch('/api/article/list')
        .then<ArticleListResponse>( result => result.json() )
        .then( articles => setArticles(articles) );
    }, [])

    return(
        <nav>
            <ul>
                { articles.map( (item, index) => 
                    <li key={index.toString()}>
                        <Link to={`/article/${item}`}>{item}</Link> 
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default ArticleList;