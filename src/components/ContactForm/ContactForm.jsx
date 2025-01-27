import { Formik, Form, Field } from 'formik';
import { useId } from 'react'
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css"
import { nanoid } from "nanoid";

const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
});

const initialValues = {
    name: "",
    number: "",
   
};
const ContactForm = ({onAdd}) => {

    const nameFieldId = useId();
    const numberFieldId = useId();
 


    const handleSubmit = (values,actions) => {
        
        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
      
        
    };
    return (
        <Formik initialValues={initialValues}
            onSubmit={handleSubmit}
        validationSchema={FormSchema}>
            <Form className={css.form}>
                <div className={css.fieldWrapper}>
                <label htmlFor ={nameFieldId}>Name</label>
                <Field autoComplete="name" className={css.field} type='text' name='name' id={nameFieldId} />
                <ErrorMessage className={css.error} name="name" component="span"/>   
                </div>
                <div className={css.fieldWrapper}>
                    <label htmlFor={numberFieldId}>Number</label>
                    
                <Field autoComplete="number" className={css.field} type='text' name='number' id={numberFieldId} />
                    <ErrorMessage className={css.error} name="number" component="span" /> 
                </div>
              <div className={css.btnWrapper}>
                <button className={css.btn} type='submit'>Add contact</button>
            </div>
            </Form>
        </Formik>
    );
};
export default ContactForm