/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import Admin from "layouts/Admin";
import Header from "components/Headers";
import Audio from "components/Audio";
import { useState } from "react";
import Select from "react-select";

const options = [
  { label: "Đại lý", value: "dai_ly" },
  { label: "Khách hàng", value: "khach_hang" },
];

const RegisterVoice = (props) => {
  const [fileAudio, setFileAudio] = useState();

  return (
    <Admin {...props}>
      <>
        <Header></Header>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Đăng ký</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Loại đăng ký
                            </label>
                            <Select placeholder="chọn..." options={options} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Tên đăng ký
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-username"
                              placeholder=""
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Chọn tệp audio
                            </label>
                            <Audio
                              file={fileAudio}
                              setFile={setFileAudio}
                            ></Audio>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="text-center">
                        <Col lg="12">
                          <Button color="primary" type="button">
                            Đăng ký
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    </Admin>
  );
};

export default RegisterVoice;
