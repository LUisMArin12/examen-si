import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
//import Section from './Section'; // Componente para las secciones
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';



const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 2px -2px gray;
`;

const Logo = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  margin-right: 20px;
  color: #000;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #0069d9;
  }
`;

const MainContainer = styled.div`
  padding: 50px;
  text-align: center;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const SectionButton = styled(Link)`
  width: 30%;
  height: 300px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 20px;
  background-color: #002171;
`;

const SectionImage1 = styled(SectionButton)`
  background-image: url('/images/1.jpg');
`;

const SectionImage2 = styled(SectionButton)`
  background-image: url('/images/2.jpg');
`;

const SectionImage3 = styled(SectionButton)`
  background-image: url('/images/3.jpg');
`;

const StartButton = styled(Link)`
  background-color: #0069d9;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

function App() {
  return (
    <Router>
      <div>
        <Header>
          <Logo>Alumno: Marín Ramírez Luis Carlos</Logo>
          <Nav>
            <NavItem to="/Section1">Sección 1</NavItem>
            <NavItem to="/Section2">Sección 2</NavItem>
            <NavItem to="/Section3">Sección 3</NavItem>
            <StartButton to="/">Inicio</StartButton>
          </Nav>
        </Header>

        <Routes>
          <Route
            path="/"
            element={
              <MainContainer>
                <h2>Seguridad de la Información</h2>
                <p>
                  ¿Qué es la seguridad de la información? La seguridad de la
                  información es el conjunto de medidas y prácticas que buscan
                  proteger la confidencialidad, integridad y disponibilidad de
                  los datos...
                </p>
                <SectionWrapper>
                  <SectionImage1 to="/Section1">SECCIÓN 1</SectionImage1>
                  <SectionImage2 to="/Section2">SECCIÓN 2</SectionImage2>
                  <SectionImage3 to="/Section3">SECCIÓN 3</SectionImage3>
                </SectionWrapper>
              </MainContainer>
            }
          />
          <Route path="/Section1" element={<Section1 title="Sección 1" />} />
          <Route path="/Section2" element={<Section2 title="Sección 2" />} />
          <Route path="/Section3" element={<Section3 title="Sección 3" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
