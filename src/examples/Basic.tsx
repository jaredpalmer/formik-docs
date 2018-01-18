import * as React from 'react';
import { Formik, Field, Form, FormikActions } from 'formik';

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const Basic: React.SFC<{}> = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikActions<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      render={() => (
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" placeholder="John" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field id="email" placeholder="john@acme.com" type="email" />

          <button type="submit">Submit</button>
        </Form>
      )}
    />
  </div>
);

export default Basic;
