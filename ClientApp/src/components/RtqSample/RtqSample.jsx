import style from './RtqSample.module.css';
import { useGetPokemonByNameQuery } from '../../services/pokemon';
import { Link } from 'react-router-dom';

export const RtqSample = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery();

  console.log(data);
  return (
    <div>
      <h3>Rtq query data</h3>
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
        </>
      ) : null}
    </div>
  );
};
