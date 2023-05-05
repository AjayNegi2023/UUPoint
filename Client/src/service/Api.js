import axios from 'axios';
import { API_NOTIFICATION_MESSAGES,SERVICE_URLS} from '../constants/config';

const API_URL='http://localhost:8000';
// Backend call
const axiosInstance= axios.create({
        baseURL:API_URL,
        timeout:10000,
        headers:{
            "content-type": "application/json"
        }
})

axiosInstance.interceptors.request.use(// interceptors for request
        function(config){ // if success
            return config;
        },
        function(error){
            return Promise.reject(error);
        }

)

axiosInstance.interceptors.response.use(
    function(response){
        //Stop global loader here
        return processResponse(response);
    },
    function(error){
        //Stop global loader here
        return Promise.reject(processError(error))
    }
)

 // If isSuccess-> return {isSuccess:true, data:Object}
 // If fail -> return {isFailure:true , status : string, msg:string, code:int}
const processResponse=(response)=>{
         if(response?.status===200){
            return {isSuccess:true, data:response.data}
         }else{ 
            return{
                isFailure:true,
                status:response?.status,
                msg:response?.msg,
                code:response?.code
            }
         }
}
// If isSuccess-> return {isSuccess:true, data:Object}
 // If fail -> return {isFailure:true , status : string, msg:string, code:int}
const processError=async(error)=>{
        if(error.response){
                // Request made and server responded with a other status
                // that fails out of the range 2.x.x
                console.log("Error in response : ", error.toJSON());
                return {
                         isError:true,
                        msg:API_NOTIFICATION_MESSAGES.responseFailure,
                        code:error.response.status
                }
            }
            else if (error.request) { 
                // The request was made but no response was received
                console.log("ERROR IN REQUEST: ", error.toJSON());
                return {
                    isError: true,
                    msg: API_NOTIFICATION_MESSAGES.requestFailure,
                    code: "",//Request is made but not received at backend so no code coming from backend
                }
              
            }
        else{
            // Something happend in setting up request that triggers an error
            console.log("Error in Network : ", error.toJSON());
            return {
                    isError:true,
                    msg:API_NOTIFICATION_MESSAGES.networkError,
                    code:"", //Request is made but not received at backend so no code coming from backend
            }    
        }
        }

        const API={};
        for (const [key,value] of Object.entries(SERVICE_URLS)){
            API[key]=(body,showUploadProgress,showDownloadProgress)=>
                axiosInstance({
                    method:value.method,
                    url:value.url,
                    data: body,
                    responseType:value.responseType,
                    onUploadProgress:function(progressEvent){
                        if(showUploadProgress){
                            let percentageCompleted= Math.round((progressEvent.loaded*100) /progressEvent.total)
                             showUploadProgress(percentageCompleted)
                        }
                    },
                    onDownloadProgress:function(progressEvent){
                        if(showDownloadProgress){
                            let percentageCompleted= Math.round((progressEvent.loaded*100) /progressEvent.total)
                             showDownloadProgress(percentageCompleted)
                        }
                    }

                })
            
        }
export {API};


