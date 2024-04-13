
export const ServiceBox = ({ServiceTitle, list, ServiceImage}) => {
  return (
    <div className="ServiceBox-Wrapper flex flex-col h-72 w-72 justify-between">
        <div className="Img h-full w-full  flex-grow bg-cover bg-center bg-no-repeat" id={ServiceImage}></div>
        <div className="Description py-4 px-8 flex flex-col h-full bg-white justify-start text-slate-800 border-b-2 border-purple-900">
            <p className=" font-semibold text-wrap">{ServiceTitle}</p>
            <u className=" text-sm no-underline mt-2">
             {list.map((list, index) => (
            <li key={index}>{list}</li>
            ))}
            </u>
        </div>

    </div>
  )
}
