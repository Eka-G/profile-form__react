"use client";

import { Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { FormBtn } from "@/components";
import { StyledForm, StyledFormGroup, StyledGroupWrapper } from "./styled";

function FormMain() {
  return (
    <Formik
      initialValues={{ phone: "", email: "" }}
      validationSchema={Yup.object({
        phone: Yup.string()
          .matches(
            /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
            "Неверный формат номера телефона"
          )
          .required("Введите номер телефона"),
        email: Yup.string()
          .email("Введите действительный адрес")
          .required("Введите адрес электронной почты"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        //TODO: implement responce
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleBlur,
        values,
        isSubmitting,
        isValid,
        dirty,
      }: FormikProps<{
        phone: string;
        email: string;
      }>) => (
        <StyledForm>
          <StyledGroupWrapper>
            <StyledFormGroup
              label="Номер телефона"
              mask="+7 (999) 999-99-99"
              maskChar="_"
              id="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              placeholder="+7 999 999-99-99"
            />

            <StyledFormGroup
              label="Email"
              name="email"
              type="text"
              placeholder="tim.jennings@example.com"
            />
          </StyledGroupWrapper>

          <FormBtn
            id="button-start"
            type="submit"
            label="Начать"
            disabled={isSubmitting || !(dirty && isValid)}
          />
        </StyledForm>
      )}
    </Formik>
  );
}

export default FormMain;
