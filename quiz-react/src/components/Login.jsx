import React,{useEffect} from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Center from "./Center";
import useForm from "../hooks/useForm";
import { ENDPOINTS, createAPIEndpoint } from "./api/index";
import useStateContext from "../hooks/useStateContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const getFreshModel = () => ({
    name: "",
    email: "",
  });
  useEffect(()=>{
    resetContext()
  },[])
  const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate();
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  const onLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      createAPIEndpoint(ENDPOINTS.participant)
        .post(values)
        .then(res =>{
          setContext({participantId: res.data.participantId})
          navigate('/quiz')
          console.log(context);
        })
        .catch((err) => console.log(err));
    }
    console.log(values);
  };
  const validate = () => {
    let temp = {};
    temp.email = /^\S+@\S+\.\S+$/.test(values.email) ? "" : "Email is required";
    temp.name = values.name != "" ? "" : " This Field is required";
    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };
  return (
    <Center>
      <Card
        sx={{
          width: 400,
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ my: 3 }}>
            Quiz App
          </Typography>
          <Box
            sx={{
              "& .MuiTextField-root": {
                margin: 1,
                width: "90%",
              },
            }}
          >
            <form nonValidate autoComplete="on" onSubmit={onLogin}>
              <TextField
                label="Email"
                name="email"
                values={values.email}
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.email && { error: true, helperText: errors.email })}
              />
              <TextField
                label="Name"
                name="name"
                values={values.name}
                onChange={handleInputChange}
                variant="outlined"
                {...(errors.name && { error: true, helperText: errors.name })}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ width: "90%" }}
              >
                Start
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Center>
  );
};

export default Login;
