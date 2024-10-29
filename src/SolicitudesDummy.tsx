import React from "react";
import { useSolicitudesHardCoded } from "./hooks/useSolicitudesHardCoded";
import { GrupoBotones } from "./GrupoBotones";

export const SolicitudesDummy = () => {
  
  //Hook personalizado que regresa un arreglo de datos para simular las solicitudes
  const data = useSolicitudesHardCoded();

  return (
    <>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Folio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Situación</th>
            <th scope="col">Detalles</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <th scope="row">{row.id}</th>
              <td>{row.code}</td>
              <td>{row.fecha}</td>
              <td>{row.status}</td>

              {/* <i className="bi bi-info-square"></i> */}

              <td><a href="#link" className="btn btn-outline-primary" role="button"><i className="bi bi-info-square-fill"></i></a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-light p-1 d-inline-block w-100 d-flex justify-content-center align-items-center">  
         <GrupoBotones/>     
      </div>
   
    </>
  );
};
