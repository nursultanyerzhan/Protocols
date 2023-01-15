import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AddDocument } from './AddDocument/AddDocument';

export const ProtocolDocuments = () => {
    const [documents, setDocuments] = useState([]);
    const [show, setShow] = useState(false);
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

    const addDocument = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <button className='btn btn-primary' onClick={addDocument}>Add</button>
            <table className='table table-hover table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>StartDate</th>
                        <th>EndDate</th>
                    </tr>

                </thead>
                <tbody>
                    {documents.map((document) => (
                        <tr key={document.id }>
                            <td>
                                <Link to="/testForm" state={{ documentId: document.id }}>{document.id}</Link>
                            </td>
                            <td>
                                {document.startDate}
                            </td>
                            <td>
                                {document.endDate}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddDocument handleClose={handleClose} show={show} >
            </AddDocument>
        </>
    );
}