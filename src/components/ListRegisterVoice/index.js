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
  CardFooter,
  Media,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers";
import Admin from "layouts/Admin";
import PagingCustom from "utils/PagingCustom";
import { useState } from "react";

const ListRegisterVoice = (props) => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItem, setTotalItem] = useState(53);
  return (
    <Admin {...props}>
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Danh sách đăng ký</h3>
                </CardHeader>
                <div className="overflow-auto">
                  <Table className="align-items-center">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Loại</th>
                        <th scope="col" style={{ maxWidth: "300px" }}>
                          Tên
                        </th>
                        <th scope="col" style={{ minWidth: "300px" }}>
                          Tệp audio
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">Đại lý</span>
                            </Media>
                          </Media>
                        </th>
                        <td>Đại lý 1 ở Hà Nội</td>
                        <td>
                          <audio controls className="w-100">
                            <source src="horse.mp3" type="audio/mpeg"></source>
                          </audio>
                        </td>
                        <td className="text-right">
                          <Button size="sm" color="primary" type="button">
                            Sửa
                          </Button>
                          <Button size="sm" color="danger" type="button">
                            Xóa
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <Media className="align-items-center">
                            <Media>
                              <span className="mb-0 text-sm">Khách hàng</span>
                            </Media>
                          </Media>
                        </th>
                        <td>Khách hàng 1 ở Hà Nội</td>
                        <td>
                          <audio controls className="w-100">
                            <source src="horse.mp3" type="audio/mpeg"></source>
                          </audio>
                        </td>
                        <td className="text-right">
                          <Button size="sm" color="primary" type="button">
                            Sửa
                          </Button>
                          <Button size="sm" color="danger" type="button">
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <PagingCustom
                      pageCurrent={pageCurrent}
                      totalItem={totalItem}
                      pageSize={pageSize}
                      setPageCurrent={setPageCurrent}
                    ></PagingCustom>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    </Admin>
  );
};

export default ListRegisterVoice;
