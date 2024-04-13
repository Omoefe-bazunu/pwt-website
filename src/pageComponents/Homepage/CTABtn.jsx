

export const CTABtn = ({title}) => {
  return (
    <div className="main w-full flex place-items-center gap-x-5 mt-12 mb-12">
        <div className="line h-px w-full bg-purple-950 flex-grow"></div>
        <h3 className="bg-purple-900 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">{title}</h3>
        <div className="line h-px w-full bg-purple-950 "></div>
    </div>
  )
}
