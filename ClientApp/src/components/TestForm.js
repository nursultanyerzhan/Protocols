import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Western } from './Western/Western';

export const TestForm = (props) => {

    const location = useLocation();
    const { documentId } = location.state;

    console.log(documentId);
    return (
        <Western />
    );
}

// `<form action='weatherforecast' method='post'>
// <input type='text' name='email'/>
// <button type='submit'>save</button>
// </form>`