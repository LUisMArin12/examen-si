import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin: 20px 0;
  overflow-x: auto; /* Permite scroll horizontal en pantallas pequeñas */
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  background-color: #002171; /* Color de fondo del encabezado */
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
`;

const TableData = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
  &:nth-child(even) {
    background-color: #f9f9f9; /* Color de fondo alternativo */
  }
`;

const TableRow = styled.tr`
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1; /* Color de fondo al pasar el ratón */
  }
`;

function Section3() {
  const data = [
    { concepto: 'Accesibilidad', definicion: 'Garantizar que la información esté disponible cuando sea necesario para las personas autorizadas.' },
    { concepto: 'Confidencialidad', definicion: 'Proteger la información contra el acceso no autorizado para garantizar que solo las personas adecuadas puedan acceder a ella.' },
    { concepto: 'Disponibilidad', definicion: 'Asegurar que los sistemas y la información estén disponibles para su uso cuando se necesiten.' },
    { concepto: 'Autenticación', definicion: 'El proceso de verificar la identidad de un usuario o sistema antes de otorgar acceso a los recursos.' },
    { concepto: 'Integridad', definicion: 'Garantizar que la información no sea alterada o destruida de manera no autorizada.' },
    { concepto: 'Control de acceso', definicion: 'Limitar el acceso a la información y los sistemas a los usuarios autorizados y los procesos específicos.' },
  ];

  return (
    <div>
      <h2>Sección 3: Principios de Seguridad de la Información</h2>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>Concepto</TableHeader>
              <TableHeader>Definición</TableHeader>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableData>{item.concepto}</TableData>
                <TableData>{item.definicion}</TableData>
              </TableRow>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </div>
  );
}

export default Section3;
