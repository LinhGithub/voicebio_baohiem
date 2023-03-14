export const isAuth = () => {
  const token = localStorage.getItem("token");
  var checkAuth = true;

  if (!token) {
    checkAuth = false;
  }

  return checkAuth;
};

export const resetToken = (navigate) => {
  localStorage.clear();
  navigate("/signin");
};
