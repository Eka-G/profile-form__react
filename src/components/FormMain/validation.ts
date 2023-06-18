import * as Yup from "yup";

const validation = Yup.object({
  phone: Yup.string()
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      "Неверный формат номера телефона"
    )
    .required("Введите номер телефона"),
  email: Yup.string()
    .email("Введите действительный адрес")
    .required("Введите адрес электронной почты"),
});

export default validation;
