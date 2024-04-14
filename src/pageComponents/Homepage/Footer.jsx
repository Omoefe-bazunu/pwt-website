
export const FooterSection = () => {

  return (
    <div id="Footer" className="Footer-Wrapper flex justify-start items-center flex-col h-fit w-full bg-purple-900 ">
        <div className="Footer-Inner text-white flex justify-center items-center w/6 py-3 gap-5">
            <img src="./src/assets/pwtLogo.png" alt="pwt-logo" className="Logo w-20" />
            <div className="FooterTexts flex justify-center items-center w/6 py-10 flex-col">
                <h1>PHENOMENAL WORLD TRADE</h1>
                <p>...pioneering business evolution</p>
            </div>
        </div>
    </div>
  )
}
