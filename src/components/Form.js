import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Form(props) {
  const formulario = useRef();
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("presionado", formulario.current.email.value);
    // formulario.current.reset()
    const name = formulario.current.name.value;
    const email = formulario.current.email.value;
    const message = formulario.current.message.value;
    const send = {
      name,
      email,
      message,
    };
    const res = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(send),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    const resp = await res.json();
    console.log(resp);
    navigate("/my-web-site")
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={onSubmit} ref={formulario}>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Nombre
              </label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                  />
                </div>
                Mensaje
              </label>
              <div className="">
                <textarea
                  className="form-control"
                  placeholder="Escribe aquí tu mensaje"
                  style={{ height: 100 }}
                  defaultValue={""}
                  name="message"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
