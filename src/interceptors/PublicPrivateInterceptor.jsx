// import { getBasicAuthorization } from '@\services';
// import { SnackBarUtilies } from '@\utilities';
// import { getValidatorErrorMessage } from '@\utilities/validation.utility';
// import axios from 'axios';

// export const PublicPrivateInterceptor = () =>  {
//     axios.interceptor.request.use(function (request) {
//         if(request.url?.includes('assets') || request.headers?.Authorization) {
//             return request;
//         }
//         const token = getBasicAuthorization();
//         const newHeaders = {
//             Authorization: token,
//             'Content-type': 'aplication/json'
//         };

//         request.headers = newHeaders;
//         return request;
//     });

//     axios.interceptor.response.use(
//         (response) => {
//             window.location.href === '/reset-success';
//             return response;
//         },
//         function (error) {
//             if(error.response.data.error.code) SnackBarUtilies.error(getValidatorErrorMessage(error.response.data.error.code));
//         }
//     );
// };