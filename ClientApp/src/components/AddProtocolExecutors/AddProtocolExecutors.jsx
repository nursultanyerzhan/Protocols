import style from './AddProtocolExecutors.module.css';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { useAddProtocolExecutorsMutation } from "../../services/pokemon";

export const AddProtocolExecutors = ({ handleClose, show, missionId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [addProtocolExecutors, { isError }] = useAddProtocolExecutorsMutation();

  const onformSubmit = async (data) => {
    const formData = new FormData();

    for (var key in data) {
      formData.append(key, data[key]);
    }

    formData.append('ProtocolMissionId', missionId);

    await addProtocolExecutors(formData);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Добавить исполнителя</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onformSubmit)}>
        <Modal.Body>
          <div className="container ">
            <div className="row">
              <div className="mb-3">
                <label htmlFor="freeUserName" className="form-label">
                  Исполнитель
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="freeUserName"
                  {...register("FreeUserName", { required: true })}
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
