import React, {useEffect, useState} from 'react'
import {jwtDecode} from 'jwt-decode';
import { useAuth } from 'oidc-react';



const Home = () => {

    const [testbankValue, setTestbankValue] = useState("");
    const [username, setUsername] = useState("");
    const [expirationTime, setExpirationTime] = useState("");
    // const { userData, isLoading } = useAuth();


    useEffect(() => {
        const cookies = document.cookie.split('; ');
        const testbankCookie = cookies.find(cookie => cookie.startsWith('TESTBANK='));
        // const { userData, isLoading } = useAuth();
        // console.log("userData", userData);
    
        if (testbankCookie) {
          const value = testbankCookie.split('=')[1];
          const decodedToken = jwtDecode(value);
          const extractUsername = (decodedToken: any) => {
            return decodedToken.sub.split(':')[2];
          }
          console.log();
          console.log(decodedToken.exp)
          // setUsername(decodedToken.aud || "");
          // setExpirationTime(new Date(decodedToken * 1000).toLocaleString());
          setTestbankValue(value);
          setUsername(extractUsername(decodedToken));
        } else {
          console.log('TESTBANK cookie not found');
        }
      }, []);

  return (
    <div>
        <div>Home</div>
        <h2> cookie</h2>
        <p>{testbankValue}</p>
        <p>Username: {username}</p>
        <p>Expiration Time: {expirationTime}</p>
    </div>
  )
}

export default Home