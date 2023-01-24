import style from './AddProtocolMission.module.css';
import Modal from 'react-bootstrap/Modal';
import { useForm, Controller } from "react-hook-form";
import { useAddProtocolMissionMutation } from "../../services/pokemon";

export const AddProtocolMission = ({ handleClose, show, groupId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const [addProtocolMission, { isError }] = useAddProtocolMissionMutation();

  const onformSubmit = async (data) => {
    const formData = new FormData();

    for (var key in data) {
      formData.append(key, data[key]);
    }

    formData.append('ProtocolMissionGroupId', groupId);

    await addProtocolMission(formData);
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить поручение</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onformSubmit)}>
        <Modal.Body>
          <div className="container ">
            <div className="row">
              <div className="mb-3">
                <label htmlFor="deadline" className="form-label">
                  Срок исполнения
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="deadline"
                  {...register("Deadline", { required: true })}
                />
                {errors.name && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="eventName" className="form-label">
                  Наименование мероприятия
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="eventName"
                  {...register("EventName", { required: true })}
                />
                {errors.name && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-info' type='submit'>Submit</button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
