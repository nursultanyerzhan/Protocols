import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AddDocument } from './AddDocument/AddDocument';
import { useGetPokemonByNameQuery } from '../services/pokemon';

export const ProtocolDocuments = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery();
    const [show, setShow] = useState(false);

    const addDocument = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <button className='btn btn-primary' onClick={addDocument}>Add</button>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <table className='table table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>StartDate</th>
                                <th>EndDate</th>
                            </tr>

                        </thead>
                        <tbody>
                            {data.map((document) => (
                                <tr key={document.id}>
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
                </>
            ) : null}
            <AddDocument handleClose={handleClose} show={show} >
            </AddDocument>
        </>
    );
}