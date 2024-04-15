
import {Link} from 'react-router-dom'
import { CTABtn } from './Homepage/CTABtn'

export const ErrorPage = () => {
  return (
    <div className="ErrorPage-Wrapper w-full flex justify-center items-start flex-grow bg-white h-full">
        <div className="ErrorPage-Inner w-5/6">
            <Link to="/"><CTABtn title="RETURN TO HOME PAGE" /></Link>
            <h1 className=" text-center text-xl"> Hello! It seems you got lost trying to find a page. No Qualms. Click the button above to return to the HOME PAGE</h1>
        </div>
    </div>
  )
}
