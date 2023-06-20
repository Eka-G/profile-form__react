"use client";

import { FieldArray } from "formik";
import { FormBtn, FormItemField } from "@/components";
import {
  StyledListWrapper,
  StyledDeleteBtn,
  StyledFieldWrapper,
  StyledHint,
} from "./styled";

interface ListProps {
  name: string;
  valuesArr: string[];
  fieldId: string;
  delBtnId: string;
  addBtnId: string;
  placeholder: string;
  hint: string;
}

const ManagedFieldList = ({
  name,
  valuesArr,
  fieldId,
  delBtnId,
  addBtnId,
  placeholder,
  hint,
}: ListProps) => {
  return (
    <FieldArray
      name={name}
      render={(arrayHelpers: {
        remove: (arg0: number) => void;
        insert: (arg0: number, arg1: string) => void;
        push: (arg0: string) => void;
      }) => (
        <StyledListWrapper>
          <label htmlFor={name}>Advantages</label>
          {valuesArr && valuesArr.length > 0 ? (
            valuesArr.map((value, index) => (
              <StyledFieldWrapper key={index}>
                <FormItemField
                  id={`${fieldId}-${index + 1}`}
                  name={`${name}.${index}`}
                  type="text"
                  placeholder={placeholder}
                />
                <StyledDeleteBtn
                  id={`${delBtnId}-${index + 1}`}
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                />
              </StyledFieldWrapper>
            ))
          ) : (
            <StyledHint>{hint}</StyledHint>
          )}

          <FormBtn
            id={addBtnId}
            label="+"
            type="button"
            style={{
              fontSize: "16px",
              lineHeight: "16px",
            }}
            onClick={() => arrayHelpers.insert(valuesArr.length, "")}
            $reversed
          />
        </StyledListWrapper>
      )}
    />
  );
};

export default ManagedFieldList;
