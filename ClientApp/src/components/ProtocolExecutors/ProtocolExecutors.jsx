import style from './ProtocolExecutors.module.css';
import { useEffect, useState } from 'react';
import { useGetProtocolExecutorsQuery } from "../../services/pokemon";
import { AddProtocolExecutors } from "../AddProtocolExecutors/AddProtocolExecutors";

export const ProtocolExecutors = ({ missionId }) => {
  const { data, error, isLoading } = useGetProtocolExecutorsQuery(missionId, { pollingInterval: 10000 });
  const [show, setShow] = useState(false);

  const addProtocolExecutors = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <center>
          <button className='btn btn-info' onClick={addProtocolExecutors}>+</button>
          <ul>
            {data.map((executor) => (
              <li key={executor.id}>
                {executor.freeUserName}
              </li>
            ))}
          </ul>
        </center>
      ) : null}
      <AddProtocolExecutors handleClose={handleClose} show={show} missionId={missionId}></AddProtocolExecutors>
    </>
  );
};
