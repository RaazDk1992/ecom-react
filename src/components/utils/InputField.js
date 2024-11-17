import React from 'react';
import { Form, Col } from 'react-bootstrap';

const InputField = ({ type,label, id, register, errors, required }) => {
  return (
    <Form.Group  controlId={id} className='mb-2'>
      <Form.Label >
        {label}
      </Form.Label>
      <Col >
        <Form.Control
          type={type}
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
