import style from './ProtocolDocument.module.css';
import { useGetProtocolGroupsQuery, useHasRoleQuery } from '../../services/pokemon';
import { AddProtocolMissionGroup } from '../AddProtocolMissionGroup/AddProtocolMissionGroup';
import { useLocation } from 'react-router-dom';
import { ProtocolMissionGroup } from '../ProtocolMissionGroup/ProtocolMissionGroup';
import { useEffect, useState } from 'react';

export const ProtocolDocument = () => {
  const location = useLocation();
  const { documentId } = location.state;
  const { data, error, isLoading } = useGetProtocolGroupsQuery(documentId, { pollingInterval: 3000 });
  const [show, setShow] = useState(false);

  const addMissionGroup = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <button className='btn btn-primary' onClick={addMissionGroup}>Add mission group</button>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <table className='table table-hover table-bordered'>
            <thead>
              <tr>
                <th>EventName</th>
                <th>DeadLine</th>
                <th>Executers</th>
              </tr>
            </thead>
            <tbody>
              {data.map((group) => (
                <>
                  <ProtocolMissionGroup groupId={group.id} title={group.title}></ProtocolMissionGroup>
                </>
              ))}
            </tbody>
          </table>
        </>
      ) : null}
      <AddProtocolMissionGroup handleClose={handleClose} show={show} >
      </AddProtocolMissionGroup>
    </>
  );
};
