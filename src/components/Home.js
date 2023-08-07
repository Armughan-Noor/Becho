import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import Button from "@mui/material/Button";
import UserDataServices from "../services/users.services"

export default function Home() {
    const {user, logOut} = useUserAuth();

    const handleLogout = async()=>{
        try{
            await logOut();
        }catch(err){
            console.log(err.message);
        }
    }

    const getActiveUser = async()=>{
      const activeUser = await UserDataServices.getUser(user.email);
      console.log(activeUser.data().name);
    }
    
    
  return (
    <>
    <div>Hello <br/> {user && user.email}</div>
    <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={getActiveUser}
        >
          Get
        </Button>

    <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleLogout}
        >
          Log out
        </Button>
    </>
  )
}
