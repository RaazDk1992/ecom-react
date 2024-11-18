import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import InputField from "../utils/InputField";
import { useEffect, useState } from "react";
import { useEcomContext } from "../../provider/ContextApi";
import api from "../../provider/api";

const Register = () =>{

    const signupEndpoint = process.env.REACT_APP_API_ENDPOINT;
    const[role,setRole] = useState();
    const[loading,setLoading] = useState(false);
    const{token} = useEcomContext();
    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm({
        defaultValues:{
            reg_first_name:"",
            reg_last_name:"",
            reg_email:"",
            reg_username:"",
            reg_password:"",
           
        },
        mode:'onTouched'
    });

    useEffect(() => {
        setRole("ROLE_USER");
      }, []);


    const onSubmit = async (data)=>{

            const  {
            firstName,
            lastName,
            email,
            userName,
            password,
            } =data;

            const signupData = {
                firstName,
                lastName,
                email,
                userName,
                password,
                role:[role],
            };

            try{
                console.log(signupData);
                setLoading(true);
            
                const response =  await api.post("/auth/signup",signupData);
                
            }catch(ex){
                    console.log(ex);
            }




    }


    return(
        <div className="d-flex justify-content-center align-items-center min-vh-100">

            <Card style={{width:'400px'}}>

                <Card.Header as="h4">Register</Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputField label="First Name"
                     type="text"
                     id="firstName" 
                     required="First Name required"
                     register={register}
                     errors={errors}/>

                     <InputField label="Last Name"
                     type="text"
                     id="lastName"
                     required="Last Name is required"
                     register={register}
                     errors={errors}
                     />
                     <InputField label="E-mail"
                     type="text"
                     id="email"
                     required="email is required"
                     register={register}
                     errors={errors}
                     />
                     <InputField label="UserName"
                     type="text"
                     id="userName"
                     required="username is required"
                     register={register}
                     errors={errors}
                     />
                     <InputField label="Password"
                     type="password"
                     id="password"
                     required="This field is required"
                     register={register}
                     errors={errors} />

                    <Button variant="primary" type="submit" className="d-block mx-auto">Signup</Button>
                    </Form>
                </Card.Body>

            </Card>

        </div>
    );

}

export default Register;