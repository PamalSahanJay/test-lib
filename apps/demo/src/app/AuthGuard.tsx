import React from 'react'
import {jwtDecode} from 'jwt-decode';
import { useCookies } from 'react-cookie'; // Assuming you're using 'react-cookie'


const AuthGuard = ({ children }: any) => {
    const [cookies] = useCookies(['TESTBANK']);
    const testbankCookie = cookies.TESTBANK;
  
    if (testbankCookie) {
      try {
        const decodedToken = jwtDecode(testbankCookie);
        const currentDate = new Date();
        const currentTimestamp =  Math.floor(currentDate.getTime() / 1000);
        console.log("currentTime", currentTimestamp)
        console.log("token exp", decodedToken.exp)
  
        // Check if token has expired
        if (decodedToken.exp && decodedToken.exp < currentTimestamp ) {
            console.log('expiration')
          // Token expired
          return <div>Token is expired.</div>;
        }

        console.log("children")
  
        // Token is valid
        return children;
      } catch (error) {
        // Error decoding token
        return <div>Invalid token.</div>;
      }
    }
  
    // No token found
    return <div>No cookie token found.</div>;
}

export default AuthGuard