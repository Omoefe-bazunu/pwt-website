import { CTABtn } from "./CTABtn"
import { SectionHeader } from "./SectionHeader"

export const ContactUsSection = () => {
  return (
    <div id="Contact" className="ContactUs-Wrapper w-full bg-white flex justify-center items-center">
        <div className="ContactUs-Inner w-5/6 flex flex-col items-center">
            <SectionHeader header="CONTACT US"/>
            <div className="ContactMain grid gap-5 mt-10 h-fit w-full mb-24 ">
                <form className="ContactUsForm flex justify-start items-center gap-10 w-full mt-5">
                    <div className="inputs flex flex-col gap-y-5 justify-center items-center w-full  h-full">
                        <input type="text" placeholder="Your Full name" name="fullName"  className="Input1 py-3 px-5 w-full rounded-3xl outline-none bg-slate-200"/>
                        <input type="text" placeholder="Your Email" name="email"  className="Input2 py-3 px-5 w-full rounded-3xl outline-none bg-slate-200"/>
                        <input type="text" placeholder="Your Phone number" name="phoneNumber"  className="Input3 bg-slate-200 py-3 px-5 w-full rounded-3xl outline-none"/>
                    </div>
                    <textarea type="text" name="message" className="message w-full flex-grow rounded-3xl h-72 bg-slate-200 py-8 px-10 outline-none" placeholder="Briefly state what you want to enquire or tell us about. It can be a review, suggestion or demand for any of our services. We will respond within the shortest possible time. Thanks.."/>
                </form>
                <div className=""><CTABtn title="SUBMIT MESSAGE"/></div>
            </div>
        </div>
    </div>
  )
}
