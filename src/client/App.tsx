import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ArticleList from './ArticleList';
import Article from './Article';

const App = () => {
    return (
        <Router>
            <h2><a href="/">Главная</a></h2>
            <nav>
                <li><Link to="/article">Статьи</Link></li>
            </nav>

                <Switch>
                    <Route path="/article/:name">
                        <Article/>
                    </Route>   
                    <Route path="/article">
                        <ArticleList/>
                    </Route>                
                </Switch>

        </Router>
    );
}

render(<App/>, document.getElementById("app"));