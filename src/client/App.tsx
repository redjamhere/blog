import * as React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { TestResponse } from 'src/common/TestResponse';

const App = () => {
    const [text, setText] = useState('');
    useEffect(() => {
        fetch('/api/hello')
            .then<TestResponse>(res => res.json())
            .then(res => setText(res.text));
    }, [])
    return <h1>{text}</h1>;
}

render(<App/>, document.getElementById("app"));