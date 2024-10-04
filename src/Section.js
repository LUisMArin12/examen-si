import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

function Section({ title }) {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      <p>Contenido de la {title}.</p>
    </SectionContainer>
  );
}

export default Section;
