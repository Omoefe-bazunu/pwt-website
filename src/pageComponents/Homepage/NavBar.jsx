
export const NavBar = () =>{
  return (
    <div className="NavBar-Wrapper w-full flex justify-center items-center flex-col">
      <div className="QuickLink-Wrapper w-full h-fit bg-purple-950 py-2">
      <div className="QickLinks my-0 mx-auto w-5/6 text-white flex justify-between items-center ">
            <div className="Contacts flex gap-x-10  justify-start items-center text-sm">
                <p className=" flex justify-start items-center gap-x-2">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffff" className="w-5 h-5 cursor-pointer">
  <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" />
</svg>
<span className="Text cursor-pointer">+234-9043970401</span>
</p>
                <p className=" flex justify-start items-center gap-x-2 cursor-pointer">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#ffff" className="w-5 h-5 cursor-pointer">
  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
</svg>
<span className="Text">raniem57@gmail.com</span>
</p>
            </div>
            <div className="SocialLinks flex justify-end items-center gap-4">
            <i className="fa-brands fa-whatsapp wp-icon cursor-pointer"></i>
            <i className="fa-brands fa-facebook-f fb-icon cursor-pointer"></i>
            <i className="fa-brands fa-instagram ig-icon cursor-pointer"></i>
            <i className="fa-brands fa-linkedin-in ld-icon cursor-pointer"></i>
            </div>
        </div>
      </div>
      <div className="NavBar-Wrapper bg-purple-900 w-full">
        <div className="NavBar-Bg  my-0 mx-auto w-5/6 flex justify-between items-center h-16">
          <div className="Logo">
            <img src="../src/assets/pwtLogo.png" alt="pwt-logo" className="w-14" />
          </div>
          <div className="NavLinks text-whit my-0 h-full text-white" >
            <ul className="flex justify-end items-center gap-8 h-full p-0 m-0 cursor-pointer">
              <li className="list-none no-underline bg-slate-500 border-b-2 border-white h-full px-3 flex items-center"><a href="#" className="active">HOME</a></li>
              <li className="list-none no-underline h-full flex items-center"><a href="#">SERVICES</a></li>
              <li className="list-none no-underline h-full flex items-center"><a href="#">PROJECTS</a></li>
              <li className="list-none no-underline h-full flex items-center"><a href="#">ABOUT US</a></li>
              <li className="list-none no-underline h-full flex items-center"><a href="#">CONTACT US</a></li>
            </ul>
          </div>

        </div>
       
      </div>
        
    </div>
  )
}
