import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataexperience, meta } from "../../content_option";

const Experience = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Experience | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Experience </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataexperience.map((data, i) => {
            return (
              <div key={i} className="ex_item">
                <div className="content">
                  <p>{data.description}</p>
                
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};

export default Experience