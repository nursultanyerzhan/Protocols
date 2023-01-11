import style from './Eastern.module.css';
import React from "react";
import { useForm, Controller } from "react-hook-form";
// import { MultiSelectSample } from "../MultiSelectSample/MultiSelectSample";
import { useEffect, useState } from "react";
import Select from 'react-select';

let country = [
  { label: "Bangladesh", value: "1" },
  { label: "India", value: "2" },
  { label: "China", value: "3" },
  { label: "Finland", value: "4" }
];

export const Eastern = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm();

  const [countryValue, setCountryValue] = useState(null);

  const onformSubmit = (data) => {
    console.log('data = ', data);
    console.log(typeof [2,4]);
    const formData = new FormData();

    for (var key in data) {
      if (key === 'fileEast')
        continue;
      if (key === 'country')
        continue;
      formData.append(key, data[key]);
    }

    for (let i = 0; i < data.fileEast.length; i++) {
      formData.append("fileEast", data.fileEast[i]);
    }
    for (let i = 0; i < data.country.length; i++) {
      formData.append("country[]", data.country[i].value);
    }

    postData('postTestData', formData)
      .then((data) => {
        console.log(data);
      });
  };

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      body: data
    });
    return response.json();
  }

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col mt-4 col-md-8 offset-md-2">
            <form onSubmit={handleSubmit(onformSubmit)}>
              <div className="mb-3">
                <label htmlFor="txtname" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="txtname"
                  {...register("userName", { required: true })}
                />
                {errors.name && (
                  <div className="invalid-feedback">Name must be required</div>
                )}
              </div>
              <div className='mb-3'>
                <label htmlFor='fileId' className="form-label">
                  Файл
                </label>
                <input
                  type="file"
                  multiple
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="fileId"
                  {...register("fileEast", { required: true })}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='selectId' className="form-label">
                  Файл
                </label>
                <select
                  id='selectId'
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  {...register("selectName", { required: true })}
                >
                  <option val="1">111111111</option>
                  <option val="2">222222222</option>
                  <option val="3">333333333</option>
                </select>
              </div>
              <div className='mb-3'>
                <Controller
                  name="country"
                  control={control}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <Select
                      options={country}
                      value={country.find((c) => c.value === value)}
                      // onChange={(val) => onChange(val.value)}
                      onChange={onChange}
                      isMulti={true}
                      onBlur={onBlur}
                      // value={value}
                      name={name}
                      ref={ref}
                    />
                  )}
                  rules={{ required: true }}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
