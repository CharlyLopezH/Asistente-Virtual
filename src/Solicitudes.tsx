import React from "react";
import { SolicitudesDummy } from "./SolicitudesDummy";
import { GrupoBotones } from "./GrupoBotones";


export const Solicitudes=()=>{

    //datos del solicitante
    const datosUsuario = [{ id: 1, codigo:'396', nombre: "Carlos I López Hurtado", nota: "Hard-Coded Info", sexo: 'Masculino' }];
    const nombre=datosUsuario[0].nombre;    
    console.log(datosUsuario[0].codigo);

    return (
        <>        
        <div className="class container">
        <h3>Trámite de Permisos</h3>
        <code>Prototipo para la Solicitud Electrónica de Permisos</code>
        
        <hr className="mb-1"/>

        <div className="bg-info p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center">        
        <span className="fw-bold text-bold">{`${nombre}`} </span>  
        
       </div>
      <span className="badge bg-info text-dark">Económicos (ECO): {' 4/8'}</span> <span/>
      <span className="badge bg-info text-dark">Estímulo (EST): {' 3/7'}</span> <span/>
      <span className="badge bg-info text-dark">V. Pendientes (VAC): {' 1/5'}</span>
      {/* <p className="mt-0"/> */}
      <hr className="mb-1 mt-1"/>      
      <div className="bg-light mt-0 p-1 d-inline-block rounded w-100 d-flex justify-content-center align-items-center" style={{ textAlign: 'left' }}>Solicitudes Atendidas</div>

      {/* Renderiza la tabla de solicitudes "inventada" */}
      
       <SolicitudesDummy/>
       {/* <hr/> */}

        {/* <code>Haz clic en los botones y sigue las indicaciones</code>         */}
        {/* <BotonesMenu/>                 */}        
        {/* <GrupoBotones/>     */}
        </div>
        </>
    )    
}