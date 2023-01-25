import style from './ProtocolMissionGroup.module.css';
import { AddProtocolMission } from "../AddProtocolMission/AddProtocolMission";
import { useEffect, useState } from 'react';
import { useGetProtocolMissionsQuery } from "../../services/pokemon";
import { ProtocolExecutors } from "../ProtocolExecutors/ProtocolExecutors";

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
          <button className='btn btn-primary' onClick={addProtocolMission}>+</button>
          <center className={style.titleMargin}>
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
              <td>
                <ProtocolExecutors missionId={mission.id}></ProtocolExecutors>
              </td>
            </tr>
          ))}
        </>
      ) : null}
      <AddProtocolMission handleClose={handleClose} show={show} groupId={groupId}></AddProtocolMission>
    </>
  );
};
