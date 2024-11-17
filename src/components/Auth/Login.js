import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from'./../utils/InputField';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onTouched', // Triggers validation on focus out
  });

  const onSubmit = (data) => {
    console.log(data); // Form data after successful validation
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">

<Card style={{width:"40%"}}>
      <Card.Header as="h4">Login</Card.Header>
      <Card.Body>
      <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        type="text"
        label="Username"
        id="username"
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
   </Card>

        </div>
  );
};

export default Login;
