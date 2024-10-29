import { useEffect, useState } from "react";

//Hook personalizado para extraer los datos hard-coded de una serie de solicitudes
export const useSolicitudesHardCoded=()=>{
    const [datosSolFake] = useState([        
        { id: 1, code: 'DAI/180/2020', fecha: '14/11/2020', status: 'En Revisión' },
        { id: 2, code: 'DAI/421/2021', fecha: '15/10/2021', status: 'En Revisión' },
        { id: 3, code: 'DAI/102/2021', fecha: '4/03/2022', status: 'Aplicada' },      
        { id: 4, code: 'DAI/148/2021', fecha: '33/12/2023', status: 'Aplicada' },
        { id: 5, code: 'DAI/133/2021', fecha: '18/01/2023', status: 'Cancelada' },
        { id: 6, code: 'DAI/190/2021', fecha: '01/14/2024', status: 'Aplicada' },
    ]);
    return datosSolFake;
}   


