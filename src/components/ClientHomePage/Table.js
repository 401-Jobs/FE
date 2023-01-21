import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

const DataTable = () => {
  const companies = [
    {
      id: 1,
      logo: "https://www.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg",
      company_name: "Test",
      company_address: "MALTA",
    },

    {
      id: 1,
      logo: "https://www.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg",
      company_name: "Test",
      company_address: "MALTA",
    },

    {
      id: 1,
      logo: "https://www.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg",
      company_name: "Test",
      company_address: "MALTA",
    },

    {
      id: 1,
      logo: "https://www.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg",
      company_name: "Test",
      company_address: "MALTA",
    },
    {
      id: 1,
      logo: "https://www.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg",
      company_name: "Test",
      company_address: "MALTA",
    },
    
  ];

  if (companies.length == 0) return "NO INTERVIEWS YOU ARE SO BAD";

  return (
    <>
      <ListGroup variant="flush">
        <ListGroupItem style={{ marginTop: "7%", backgroundColor: "#8758FF" }}>
          <Row
            style={{
              fontSize: "large",
              color: "black",
              fontWeight: "bolder",
              textAlign:'center',
              paddingTop:'15px'
            }}
          >
            <Col md={2}>
              <h5>Logo</h5>
            </Col>
            <Col md={3}>
              <h5>Company</h5>
            </Col>

            <Col md={3}>
              <h5>Address</h5>
            </Col>

            <Col md={2}>
              <h5>Accept</h5>
            </Col>

            <Col md={2}>
              <h5>Reject</h5>
            </Col>
          </Row>
        </ListGroupItem>

        {companies.map((company) => {
          return (
            <ListGroupItem key={company.id} style={{  backgroundColor: "#F2F2F2" }} >
              <Row >
                <Col md={2}>
                  <Image src={company.logo} alt={company.name} fluid rounded />
                </Col>
                <Col md={3} style={{textAlign:'center',paddingTop:'20px'}}>
                  <Link to={`/company/${company.id}`}>
                    <span>{company.company_name}</span>
                  </Link>
                </Col>

                <Col md={3} style={{textAlign:'center',paddingTop:'20px'}}>{company.company_address}</Col>

                <Col md={2} style={{textAlign:'center'}}>
                  <Button
                    type="button"
                    variant="light"
                    style={{ marginTop: "15px" }}
                  >
                 
                    <i class="fa-solid fa-check"></i>
                  </Button>
                </Col>

                <Col md={2} style={{textAlign:'center'}}>
                  <Button
                    type="button"
                    variant="light"
                    style={{ marginTop: "15px" }}
                  >
      
                    <i class="fa-solid fa-xmark"></i>
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </>
  );
};

export default DataTable;
