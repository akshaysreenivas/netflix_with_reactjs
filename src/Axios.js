import { Axios } from 'axios';
import { BASE_URL} from './Constants/Constants';
 const axiosInstance = new Axios({
    baseURL: BASE_URL,
  });

  export default axiosInstance