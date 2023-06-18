"use client";

import { Formik, FormikProps } from "formik";
import { FormBtn, FormGroup, FormItemField, FormItemMask } from "@/components";
import validation from "./validation";
import { StyledForm, StyledGroupWrapper } from "./styled";

const BG_COLOR = "rgba(0, 0, 0, 0.04)";

function FormMain() {
  return (
    <Formik
      initialValues={{ phone: "", email: "" }}
      validationSchema={validation}
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
            <FormGroup id="phone" label="Номер телефона" name="phone">
              <FormItemMask
                id="phone"
                mask="+7 (999) 999-99-99"
                maskChar="_"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                placeholder="+7 999 999-99-99"
                bgColor={BG_COLOR}
              />
            </FormGroup>

            <FormGroup id="email" label="Email" name="email">
              <FormItemField
                id="email"
                name="email"
                type="text"
                placeholder="tim.jennings@example.com"
                bgColor={BG_COLOR}
              />
            </FormGroup>
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
