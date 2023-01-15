import style from './AddDocument.module.css';
import Modal from 'react-bootstrap/Modal';
import { useForm, Controller } from "react-hook-form";

export const AddDocument = ({ handleClose, show }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const onformSubmit = (data) => {
    const formData = new FormData();

    for (var key in data) {
      formData.append(key, data[key]);
    }

    postData('postDocument', formData)
      .then((data) => {
        console.log(data);
      });
  }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      body: data
    });
    return response.json();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Создать документ</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit(onformSubmit)}>
        <Modal.Body>
          <div className="container ">
            <div className="row">
              <div className="mb-3">
                <label htmlFor="startName" className="form-label">
                  Дата старта
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="startName"
                  {...register("StartDate", { required: true })}
                />
                {errors.name && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="endDate" className="form-label">
                  Дата окончания
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="endDate"
                  {...register("EndDate", { required: true })}
                />
                {errors.name && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Название документа
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="title"
                  {...register("Title", { required: true })}
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
