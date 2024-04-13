

export const SectionHeader = ({header}) => {
  return (
    <div className="main w-full flex items-center justify-between gap-x-5 mt-20">
        <div className="line h-0.5 w-full bg-purple-950 flex-grow"></div>
        <h3 className="SectionHeader lg:text-2xl text-3xl font-bold w-fit text-nowrap text-center text-purple-950">{header}</h3>
        <div className="line h-0.5 w-full bg-purple-950 "></div>
    </div>
  )
}
