
export const PageHeader = ({header}) => {
  return (
    <div className="PageHeadermain w-full flex items-center justify-between gap-x-5 mt-20">
        <h3 className="text-2xl font-bold w-fit text-nowrap text-center text-purple-950">{header}</h3>
        <div className="line h-0.5 w-full bg-purple-950"></div>
    </div>
  )
}
