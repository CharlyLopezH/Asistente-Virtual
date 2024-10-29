import { useState } from 'react';

export const useDatosDummy = () => {
  const datosUsuario = [{ id: 1, codigo:'396', nombre: "Carlos López", nota: "Hard-Coded Info", sexo: 'Masculino' }];
  console.log(datosUsuario);
  return datosUsuario;
};