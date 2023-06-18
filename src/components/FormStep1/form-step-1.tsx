"use client";

import { Formik, FormikProps } from "formik";
import { FormBtnGroup, FormGroup, FormItemField } from "@/components";
import { type OptionValues } from "@/shared";
import valdation from "./validation";
import { StyledForm, StyledGroupWrapper } from "./styled";

interface FormStep1Fields {
  nickname: string;
  name: string;
  sername: string;
  sex: "" | "man" | "woman";
}

const options: OptionValues = [
  {
    id: "man",
    value: "man",
    name: "man",
  },
  {
    id: "woman",
    value: "woman",
    name: "woman",
  },
];

function FormStep1() {
  return (
    <Formik
      initialValues={{ nickname: "", name: "", sername: "", sex: "" }}
      validationSchema={valdation}
      onSubmit={(values, { setSubmitting }) => {
        //TODO: implement responce
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid, dirty }: FormikProps<FormStep1Fields>) => (
        <StyledForm>
          <StyledGroupWrapper>
            <FormGroup id="field-nickname" label="Nickname" name="nickname">
              <FormItemField
                id="field-nickname"
                name="nickname"
                type="text"
                placeholder="Nickname"
              />
            </FormGroup>

            <FormGroup id="field-name" label="Name" name="name">
              <FormItemField
                id="field-name"
                name="name"
                type="text"
                placeholder="Name"
              />
            </FormGroup>

            <FormGroup id="field-sername" label="Sername" name="sername">
              <FormItemField
                id="field-sername"
                name="sername"
                type="text"
                placeholder="Sername"
              />
            </FormGroup>

            <FormGroup id="field-sex" label="Sex" name="sex">
              <FormItemField
                id="field-sex"
                name="sex"
                component="select"
                placeholder="Не выбрано"
                optionsList={options}
              />
            </FormGroup>
          </StyledGroupWrapper>

          <FormBtnGroup disabled={isSubmitting || !(dirty && isValid)} />
        </StyledForm>
      )}
    </Formik>
  );
}

export default FormStep1;
