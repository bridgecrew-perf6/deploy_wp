// import { AxiosResponse} from 'axios';
// import { useEffect } from 'react';

// export const useAsync = (
//     asyncFn: () => Promise<AxiosResponse <AnalyserNode,any>>
//     succesFunction: Function,
//     returnFunction: Function,
//     dependencies: any[] = []
// ) => {
//     useEffect(() => {
//         let isActive = true;
//         asyncFn().then((result) => {
//             if (isActive) succesFunction(result.data);
//         });
//         return () => {
//             returnFunction && returnFunction();
//             isActive = false;
//         };
//     }, dependencies);  
// };