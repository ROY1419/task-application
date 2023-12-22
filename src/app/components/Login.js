import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const url = app_config.backend_url
  const loginform = {
    email: "",
    password: "",
  };


  const loginSubmit = (formdata) => {
    fetch( url+"/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Success!!👍",
        });

        res.json().then((data) => {
          console.log(data);

          sessionStorage.setItem("user", JSON.stringify(data));
          navigate('/home');
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Login Failed!!👍",
        });
      }
    });
  };

  return (
    <div className="container">
      <div className="col-md">
        <div className="card">
          <div className="card-body">
            {/* <img
              style={{  }}
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            /> */}

            {/* <div
              style={{
                background:
                  "url(https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)",
                height: "10rem",
                width: "27rem",
                backgroundPosition: "center",
              }}
            > */}

          </div>
          <h3 className="mt-5 mb-5">Login Here</h3>

          <Formik initialValues={loginform} onSubmit={loginSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-floating mt-3">
                  <input
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <label>Email</label>
                </div>

                <TextField
                  variant="outlined"
                  className="w-100 align-center mt-3"
                  label="Password"
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                />

                <Button
                  type="submit"
                  className="w-100 mt-3"
                  variant="contained"
                  color="primary"
                // sx={{ color: "red", background: "white" }}
                >
                  Login Now
                </Button>
                
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>

  );
};

export default Login;