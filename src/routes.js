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
import RegisterVoice from "components/RegisterVoice";
import VerifyVoice from "components/VerifyVoice";
import ListRegisterVoice from "components/ListRegisterVoice";
import Login from "components/Login";

var routes = [
  {
    path: "/register_voice",
    name: "Đăng ký giọng nói",
    icon: "fas fa-microphone-alt text-primary",
    component: RegisterVoice,
    layout: "/admin",
  },
  {
    path: "/list_register_voice",
    name: "Danh sách đăng ký giọng nói",
    icon: "far fa-list-alt text-info",
    component: ListRegisterVoice,
    layout: "/admin",
  },
  {
    path: "/verify_voice",
    name: "Xác thực giọng nói",
    icon: "fas fa-user-check text-success",
    component: VerifyVoice,
    layout: "/admin",
  },

  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
];

const navLink = routes.filter((item) => item.layout !== "/auth");

export { navLink };

export default routes;
