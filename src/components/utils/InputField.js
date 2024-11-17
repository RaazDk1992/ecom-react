import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Row, Col } from 'react-bootstrap';

const InputField = ({ label, id, register, errors, required }) => {
  return (
    <Form.Group  controlId={id} className='mb-2'>
      <Form.Label >
        {label}
      </Form.Label>
      <Col >
        <Form.Control
          type="text"
          isInvalid={!!errors[id]} // Set the red border if there's an error
          {...register(id, { required: required })}
        />
        <Form.Control.Feedback type="invalid">
          {errors[id]?.message}
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
};

export default InputField;
