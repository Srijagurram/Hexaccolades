import { authProvider } from "../authConfig";
  export const getToken=()=>
  {
    var token;
    const httpHeaders={};
    if(authProvider.getAccountInfo().accountInfo != undefined)
    {
      token = authProvider.getAccountInfo().accountInfo.jwtAccessToken;
    }
    if(token){
      httpHeaders = { 
        'Content-Type' : 'application/x-www-form-urlencoded', 
        'Accept' : 'application/json',
        'Authorization' : `Bearer ${token}`
      };
      }
    else {
        httpHeaders = { 
          'Content-Type' : 'application/x-www-form-urlencoded', 
          'Accept' : 'application/json'
        };
      }
  }