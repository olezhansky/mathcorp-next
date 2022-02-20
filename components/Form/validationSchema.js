import * as yup from "yup";

const validationsForm = yup.object({
  name: yup.string().required("common:form.errorName"),
  phone: yup
    .number()
    .typeError("common:form.errorPhoneCorrect")
    .required("common:form.errorPhone"),
  selectClass: yup.string().required("common:form.errorSelect"),
});

export default validationsForm;
