import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React from "react";
import { auth } from '../../config/firebase';
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";






const Login = () => {
  const navigate = useNavigate();
    const [phone, setPhone] = useState('+91');
    const [otp, setOtp] = useState();
    const [hasFilled, setHasFilled] = useState(false);
 

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // ...
            },
            'expired-callback': () => {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            }
          }, auth);
          
    }

 const handleSend = (event)=>{
    event.preventDefault();
    setHasFilled(true)
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

 }

const verifyOtp = (event) =>{
   let otp = event.target.value;
   setOtp(otp);
   if(otp.length === 6) {
    //verify otp
    let confirmationResult = window.confirmationResult;
    console.log(confirmationResult)
    confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        const user = result.user;
      
        console.log(user)
        console.log("user signed in successfully")
        navigate("/brands")

       
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        alert('invalid OTP');

      });
      
   }
      
}

    if(!hasFilled){
        return(
            <div className="app__container">
                <Card sx={{ width: '300px'}} >
                    <CardContent sx={{ display:'flex', alignItems:'center', flexDirection:'column'}}>
                        <Typography sx={{ padding:'25px'}} variant="h5" component='div'>Enter Your Mobile Number</Typography>
                        <form onSubmit={handleSend}>
                            <TextField sx={{ width:'240px'}} variant="outlined" label="phone number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                            <Button type="submit" variant='contained' sx={{ width: '240px', marginTop: '20px'}}>Send OTP</Button>
                        </form>
                    </CardContent>
                </Card>
                <div id="recaptcha"></div>
            </div>
        )
    }
else {
    return(
        <div className="app__container">
             <Card sx={{ width: '300px'}} >
             <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
             <Typography sx={{ padding: '20px'}} variant='h5' component='div'>Enter the OTP</Typography>
             <TextField sx={{ width:'240px'}} variant="outlined" label="otp" value={otp} onChange={verifyOtp} />
                </CardContent>
             </Card>
             <div id="recaptcha"></div>
        </div>
    )

}
   
}


export default Login;