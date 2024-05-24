import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(value, ection) => {
        value.id = nanoid();
        onAdd(value);
        ection.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div>
          <label>Name</label>
          <Field className={css.input} name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div>
          <label>Number</label>
          <Field className={css.input} name="number" type="tel" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}