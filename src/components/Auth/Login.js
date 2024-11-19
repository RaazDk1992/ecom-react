import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputField from'./../utils/InputField';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle, FcSearch } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { useEcomContext } from '../../provider/ContextApi';
import api from '../../provider/api';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const apiEndPoint = process.env.REACT_APP_API_ENDPOINT;
  const[jwtToken,setJwtToken] = useState("");
  const[loading,setLoading] = useState(false);
  const{setToken,token} = useEcomContext();
  const navigate = useNavigate();



const onLoginHandler = async(data)=>{

  try{
    setLoading(true);
    const response  = await api.post("/auth/login",data);
    console.log(response);
    if(response.status === 200 && response.data.jwtToken){

      const decoded = jwtDecode(response.data.jwtToken);
      console.log(decoded);
      setJwtToken(response.data.jwtToken);
      
    }

  }catch(ex){
     console.log(ex);
  }

};

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
    mode: 'onTouched', // Triggers validation on focus out
  });


  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">

<Card style={{width:"40%"}}>
      <Card.Header as="h4">Login</Card.Header>
      <Card.Body>
      <form onSubmit={handleSubmit(onLoginHandler)}>
      <InputField
        type="text"
        label="Username"
        id="userName"
        register={register}
        errors={errors}
        required = "*Username required!"
      />
      <InputField
        label="Password"
        type="password"
        id="password"
        register={register}
        errors={errors}
        required="*Password is required"
      />
      <Button variant="primary" type="submit" className="btn btn-primary d-block mx-auto">Submit</Button>
    </form>
    <p className="text-center text-sm text-slate-700 mt-6">
              Don't have an account?{" "}
              <Link
                className="font-semibold underline hover:text-black"
                to="/signup"
              >
                SignUp
              </Link>
            </p>
      </Card.Body>
      <Card.Footer className="d-flex align-items-center justify-content-center">
      <b>Or, Continue with,</b>
      <Link
                  to={`${apiEndPoint}/oauth2/authorization/google`}
                  className="flex gap-1 items-center justify-center flex-1 border p-2 shadow-sm shadow-slate-200 rounded-md hover:bg-slate-300 transition-all duration-300"
                >
        <span >
          <FcGoogle size={40}  className="text-4xl"/>
          
        </span>
       </Link>
        &nbsp;&nbsp;
       <a href={`${apiEndPoint}/oauth2/authorization/google`}>
        <span >
          <FaFacebook size={40}  className="text-4xl"/>
          
        </span>
       </a>
      </Card.Footer>
   </Card>

        </div>
  );
};

export default Login;
