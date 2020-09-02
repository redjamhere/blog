import * as React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import * as ReactMarkdown from 'react-markdown';

const Article = (props) => {
    const { name } = useParams();
    const [article, setArticle] = useState<string>('');
    React.useEffect(() => {
        fetch(`/api/article/${name}`)
        .then( result => result.text() )
        .then( article => setArticle(article));
    }, [])

    return(
        <div>
            <ReactMarkdown source={article}/>
        </div>
    );
}

export default Article;