import validatejs from 'validate.js';
import validation from './validationConstraints';

export default function validate(fieldName, value) {
  const formValues = {};
  formValues[fieldName] = value;
  const formFields = {};
  formFields[fieldName] = validation[fieldName];
  const result = validatejs(formValues, formFields);
  if (result) {
    return result[fieldName][0];
  }
  return null;
}
