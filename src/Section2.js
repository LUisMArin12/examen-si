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

function Section2() {
  const data = [
    { concepto: 'Ley General de protección de datos Personales de México', definicion: 'Regula el tratamiento de datos personales en posesión de cualquier entidad pública o privada en México.' },
    { concepto: 'Ley de propiedad industrial', definicion: 'Protege las invenciones, marcas, y diseños industriales, otorgando derechos exclusivos a los creadores.' },
    { concepto: 'Ley federal de derechos de autor', definicion: 'Salvaguarda los derechos de los autores sobre sus obras literarias y artísticas en México.' },
    { concepto: 'Ley federal de datos personales en posesión de particulares', definicion: 'Norma el uso y tratamiento de los datos personales en el sector privado para garantizar su protección.' },
    { concepto: 'Código penal federal', definicion: 'Contiene disposiciones sobre los delitos relacionados con el mal uso de la información y la violación de datos personales.' },
    { concepto: 'Ley general de transparencia y acceso a la información', definicion: 'Establece las bases y principios para que los ciudadanos puedan acceder a la información pública.' },
    { concepto: 'Criptografía simétrica', definicion: 'Método de cifrado en el que se usa la misma clave para cifrar y descifrar la información.' },
    { concepto: 'Criptografía asimétrica', definicion: 'Usa un par de claves (pública y privada) para cifrar y descifrar datos, haciendo más seguro el intercambio de información.' },
    { concepto: 'Cifrado por bloques y por flujo', definicion: 'Dos técnicas de cifrado: el cifrado por bloques cifra grandes cantidades de datos, mientras que el cifrado por flujo cifra bit a bit.' },
    { concepto: 'Criptoanálisis', definicion: 'El estudio y análisis de los sistemas de cifrado para intentar romper su seguridad sin conocer la clave.' },
  ];

  return (
    <div>
      <h2>Sección 2: Confidencialidad de la Información</h2>
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

export default Section2;
