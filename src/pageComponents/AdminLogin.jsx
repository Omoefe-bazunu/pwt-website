
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export const AdminLogin = () => {

  
  // This code handles the Login authentication
    const handleLogin = async (e) => {
    const LogIn = document.querySelector('.LogInForm');
    const email = LogIn.email.value;
    const password = LogIn.password.value;
    e.preventDefault()
    try {
     await signInWithEmailAndPassword(auth, email, password) ;
     LogIn.reset();
     window.location.href = '/'
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="LoginPage-Wrapper w-full flex flex-col justify-center items-center bg-white">
        <div className="CommentsForm w-5/6 fit mt-12 flex flex-col gap-10 ">
              <div className="header text-2xl text-gray-500">Admin Login</div>
              <form className='LogInForm flex flex-col gap-5 justify-start my-0 mx-auto w-full' onSubmit={handleLogin}>
                <input   type='email' name='email' placeholder="Email" className=" outline-none py-3 px-5 border-b border-slate-300"/>
                <input type='password' name='password' placeholder="Password" className=" outline-none py-3 px-5 border-b border-slate-300"/>
                <button type='submit' className="Comment-Btn py-4 px-5 mb-24 cursor-pointer bg-amber-600 font-medium text-white w-fit text-nowrap text-sm mt-5">LOG IN</button>
            </form>
          </div>
    </div>
  )
}
