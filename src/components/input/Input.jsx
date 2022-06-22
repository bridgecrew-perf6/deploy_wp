// import { InputError } from '@/styled-components';
// import { FieldErrors } from 'react-hook-form';

// const formValidation = (errors: FieldErrors, errorKey: string) => {
//     return errors[errorKey] ? <InputError className="error-message">{errors[errorKey].message}</InputError> : '';
// };

// export const Input = ({ register, name, errors, label = '',
// type, inputProps, disabled = false, trigger}: inputProps) => {
//     return (
//         <div>
//             <TextField
//                 required
//                 disabled={disabled}
//                 type={type}
//                 error={errors && !!errors[name]}
//                 id={name}
//                 label={label}
//                 variant="standard"
//                 {...register(name)}
//                 {...(inputProps && { inputProps })}
//                 onChange={() => trigger && trigger()}
//                 fullWidth
//             />
//             {errors && formValidation(errors, name)}
//         </div>
//     );
// };

// export default Input;