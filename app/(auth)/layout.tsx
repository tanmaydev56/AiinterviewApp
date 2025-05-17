import {ReactNode} from "react";
import "../globals.css"
import { isAuthenticated } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const AuthLayout = async ({children:children}:{children:ReactNode}) =>{
      const isUserAuth = await isAuthenticated();
    
      if(isUserAuth) redirect("/")
return(
    <div className="auth-layout">{children}</div>
)
}
export default AuthLayout
