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

function Section1() {
  const data = [
    { concepto: 'DDoS', definicion: 'Un ataque distribuido de denegación de servicio busca hacer que un servicio en línea no esté disponible, abrumándolo con tráfico de múltiples fuentes.' },
    { concepto: 'Ordenador Zombie', definicion: 'Un ordenador infectado por un malware que permite a los ciberdelincuentes controlarlo remotamente para realizar ataques.' },
    { concepto: 'Ciberdelincuente', definicion: 'Una persona que comete delitos utilizando la tecnología de la información y las redes.' },
    { concepto: 'Botmaster', definicion: 'El individuo o grupo que controla una red de bots (ordenadores zombis) para realizar ciberataques.' },
    { concepto: 'Botnet', definicion: 'Una red de dispositivos infectados (zombis) que son controlados remotamente por un botmaster para realizar actividades maliciosas.' },
    { concepto: 'Ransomware', definicion: 'Un tipo de malware que bloquea el acceso a los datos de un sistema hasta que se pague un rescate.' },
    { concepto: 'Disclaimer', definicion: 'Una declaración que niega responsabilidad en el uso indebido o daño resultante de la información compartida.' },
    { concepto: 'The Morris Worm', definicion: 'Uno de los primeros gusanos informáticos, lanzado en 1988, que causó daños significativos en Internet.' },
    { concepto: 'Ciberwarfare', definicion: 'El uso de ataques cibernéticos por parte de naciones u organizaciones para dañar otros estados o instituciones.' },
    { concepto: 'Stuxnet', definicion: 'Un gusano informático desarrollado para sabotear el programa nuclear de Irán, atacando sus sistemas de control industrial.' },
    { concepto: 'Moonlight Maze', definicion: 'Una operación de ciberespionaje que afectó a varios sistemas del gobierno de EE.UU. en los años 90.' },
    { concepto: 'Operation Aurora', definicion: 'Un ciberataque contra corporaciones estadounidenses, particularmente Google, atribuido a hackers chinos en 2009.' },
    { concepto: 'Freeze it into submission', definicion: 'Táctica de paralización de un sistema o red hasta que cumpla con las demandas del atacante.' },
    { concepto: 'Wannacry', definicion: 'Un ataque global de ransomware en 2017 que afectó a miles de ordenadores en más de 150 países.' },
    { concepto: 'Petya', definicion: 'Un ransomware similar a Wannacry que cifraba archivos y exigía un rescate para liberarlos.' },
    { concepto: 'Equifax (ataque)', definicion: 'Un ataque en 2017 que comprometió los datos de 147 millones de personas debido a una vulnerabilidad no parcheada.' },
    { concepto: 'Cam4 (ataque)', definicion: 'Un ataque masivo que expuso 10.88 mil millones de registros en 2020, afectando la plataforma de streaming en vivo Cam4.' },
  ];

  return (
    <div>
      <h2>Sección 1: Ataques Cibernéticos</h2>
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

export default Section1;
