import React from "react";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Adrian Bogdan"
      body={
        <>
          <p>
            <strong>Mam 24 lata.</strong> Skończyłem Technikum Leśne, lecz nie
            pracuje w swoim zawodzie.
          </p>
          <p>
            <strong>Uprawiam sporty takie jak</strong> koszykówka i sporadycznie
            chodzę na siłownie. Lubię także oglądać filmy i grać w gry
            komputerowe."
          </p>
        </>
      }
    />
  </Container>
);
