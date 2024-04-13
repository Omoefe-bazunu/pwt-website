
export const ServiceBox = ({ServiceTitle, list, ServiceBox}) => {
  return (
    <div className="ServiceBox-Wrapper flex flex-col h-fit w-full justify-between " id={ServiceBox}>
        <div className="Img h-64 w-full bg-cover bg-center bg-no-repeat"></div>
        <div className="Description pt-4 pb-2 flex-grow px-5 flex flex-col h-44 bg-white justify-start text-slate-800 border-b-2 border-purple-900">
            <p className=" font-semibold text-2xl text-wrap">{ServiceTitle}</p>
            <u className=" lg:text-sm text-base no-underline mt-2">
             {list.map((list, index) => (
            <li key={index} className="serviceFeatures">{list}</li>
            ))}
            </u>
        </div>

    </div>
  )
}
