
export const BooksTemplates = ({title, id}) => {
  return (
    <div className="BookBox flex justify-center items-center bg-cover bg-no-repeat bg-center w-full h-64 bg-slate-500">
        <p className=" text-center text-white uppercase" id={id}>{title}</p>
    </div>
  )
}
