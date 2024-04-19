
export const BooksTemplates = ({id, BgImg}) => {
  return (
    <div className="BookBox flex justify-center items-center bg-cover bg-no-repeat bg-center w-full h-64 bg-slate-500" id={id} style={{ backgroundImage: `url(${BgImg})` }}>
       <div className=" w-full h-full BookBoxOverlay "><p className=" text-center text-white uppercase"></p></div> 
    </div>
  )
}