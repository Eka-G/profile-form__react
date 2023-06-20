"use client";

import { Formik, FormikProps, Form } from "formik";
import { FormBtnGroup, ManagedFieldList } from "@/components";
import valdation from "./validation";

interface FormStep2Fields {
  advantages: string[];
}

function FormStep2() {
  return (
    <Formik
      initialValues={{ advantages: ["", "", ""] }}
      validationSchema={valdation}
      onSubmit={(values, { setSubmitting }) => {
        //TODO: implement responce
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        values,
        isSubmitting,
        isValid,
        dirty,
      }: FormikProps<FormStep2Fields>) => (
        <Form>
          <ManagedFieldList
            name="advantages"
            valuesArr={values.advantages}
            fieldId="field-advatages"
            delBtnId="button-remove"
            addBtnId="button add"
            placeholder="Placeholder"
            hint="Добавьте достоинство"
          />
          <FormBtnGroup disabled={isSubmitting || !(dirty && isValid)} />
        </Form>
      )}
    </Formik>
  );
}

export default FormStep2;
