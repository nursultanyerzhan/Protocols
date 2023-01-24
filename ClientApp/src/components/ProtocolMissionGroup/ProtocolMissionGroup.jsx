import style from './ProtocolMissionGroup.module.css';
import { AddProtocolMission } from "../AddProtocolMission/AddProtocolMission";
import { useEffect, useState } from 'react';
import { useGetProtocolMissionsQuery } from "../../services/pokemon";

export const ProtocolMissionGroup = (props) => {
  const { groupId, title } = props;
  const { data, error, isLoading } = useGetProtocolMissionsQuery(groupId, { pollingInterval: 10000 });
  const [show, setShow] = useState(false);

  const addProtocolMission = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <tr key={groupId}>
        <td colSpan={4} className={style.titleGroup}>
            <button className='btn btn-primary' onClick={addProtocolMission}>Добавить</button>
            <center>
              <strong>
                {title}
              </strong>
            </center>
        </td>
      </tr>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.eventName}</td>
              <td>{mission.deadline}</td>
              <td></td>
              {/* <ProtocolMissionGroup groupId={group.id} title={group.title}></ProtocolMissionGroup> */}
            </tr>
          ))}
        </>
      ) : null}
      <AddProtocolMission handleClose={handleClose} show={show} groupId={groupId}></AddProtocolMission>
    </>
  );
};
