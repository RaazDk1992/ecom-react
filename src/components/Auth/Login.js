import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from'./../utils/InputField';
import { Card } from 'react-bootstrap';

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
        label="Username"
        id="username"
        register={register}
        errors={errors}
        required = "*Username needed"
      />
      <InputField
        label="Password"
        id="password"
        register={register}
        errors={errors}
        required="*Password is required"
      />
      <button type="submit">Submit</button>
    </form>
      </Card.Body>
   </Card>

        </div>
  );
};

export default Login;
