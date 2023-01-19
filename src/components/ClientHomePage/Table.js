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
    {
      id: 1,
      logo: "https://www.shutterstock.com/image-vector/abstract-initial-letter-s-logo-260nw-1862762845.jpg",
      company_name: "Test",
      company_address: "MALTA",
    },
   
  ];

  if (companies.length == 0)
    return "NO INTERVIEWS YOU ARE SO BAD"

  return (
    <>
      
      
      <ListGroup variant="flush" >
      <ListGroupItem style={{marginTop:'7%',backgroundColor:'#5CB8E4'}}>
              <Row>
                <Col md={2}>
                 <h4 >Logo</h4>
                </Col>
                <Col md={3}>
                  <h4>Company</h4>
                </Col>

                <Col md={3}>
                  <h4>Address</h4>
                  </Col>

                <Col md={2}>
                  <h4>Accept</h4>
                </Col>

                <Col md={2}>
                    <h4>Reject</h4>
                </Col>
              </Row>
            </ListGroupItem>




        {companies.map((company) => {
          return (
            <ListGroupItem key={company.id}>
              <Row>
                <Col md={2}>
                  <Image src={company.logo} alt={company.name} fluid rounded />
                </Col>
                <Col md={3}>
                  <Link to={`/company/${company.id}`}>
                    <span>{company.company_name}</span>
                  </Link>
                </Col>

                <Col md={3}>{company.company_address}</Col>

                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    // onClick={() => removeFromCart(item.product)}
                    style={{ marginTop: "15px" }}
                  >
                    <i class="fa-sharp fa-solid fa-circle-check"></i>
                  </Button>
                </Col>

                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    // onClick={() => removeFromCart(item.product)}
                    style={{ marginTop: "15px" }}
                  >
                   <i class="fa-sharp fa-solid fa-circle-xmark"></i>
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
