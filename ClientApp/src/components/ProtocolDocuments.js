import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ProtocolDocuments = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch('getProtocolDocuments');
            const data = await response.json();
            console.log(data);
            setDocuments(data);
        };

        getUsers();

        return () => {
            // this now gets called when the component unmounts
        };
    }, []);

    if (!documents) return <div>Loading...</div>;

    return (
        <ul>
            {documents.map((document) => (
                <li key={document.id}>
                    {/* <Link to="/testForm" state={{ documentId: document.id }}>{document.id}</Link> */}
                    <Link to="/testModal" state={{ documentId: document.id }}>{document.id}</Link>
                </li>
            ))}
        </ul>
    );
}

// `<form action='weatherforecast' method='post'>
// <input type='text' name='email'/>
// <button type='submit'>save</button>
// </form>`