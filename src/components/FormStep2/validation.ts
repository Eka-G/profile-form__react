import * as Yup from "yup";

const validation = Yup.object({
  advantages: Yup.array().of(Yup.string()).required("Введите достидения"),
});

export default validation;
