import * as Yup from "yup";

const validation = Yup.object({
  nickname: Yup.string()
    .max(30, "Максимальная длина 30 символов")
    .matches(/^[a-zA-Zа-яА-Я0-9]+$/, "Введите только буквы")
    .required("Введите nickname"),
  name: Yup.string()
    .max(50, "Максимальная длина 50 символов")
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Введите только буквы")
    .required("Введите name"),
  sername: Yup.string()
    .max(50, "Максимальная длина 50 символов")
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Введите только буквы")
    .required("Введите sername"),
  sex: Yup.string().required("Выберите пол"),
});

export default validation;
