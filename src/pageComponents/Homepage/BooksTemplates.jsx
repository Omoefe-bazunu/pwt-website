
export const BooksTemplates = ({title}) => {
  return (
    <div className="BookBox flex justify-center items-center bg-cover bg-no-repeat bg-center w-64 h-64 bg-slate-500">
        <p className=" text-center text-white uppercase">{title}</p>
    </div>
  )
}
