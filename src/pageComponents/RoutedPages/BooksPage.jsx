import { Listings } from "./Listings"
import { PageHeader } from "./PageHeader"

export const BooksPage = () => {

// BOOK DETAILS
const Book1 = {
    title: "RIVER SIDE",
    baboutTheBook:  "If, you’re using 64 bit then just click the link at the very top that says, “Click here to download” so you can download the latest git version with the most recent updates. But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading.",
    aboutTheAuthor: "But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading"
}
// FUNCTION THAT RUNS OUTPUTS THE DETAILS - DO NOT TAMPER
  return (
    <div className="BooksPage-Wrapper w-full flex justify-center items-start flex-grow bg-white">
        <div className="Booksage-Inner w-5/6">
            <PageHeader header="BOOK COLLECTIONS"/>
            <Listings title = {Book1.title} About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = {Book1.baboutTheBook} desc2 = {Book1.aboutTheAuthor} />
            <div className="main w-full flex place-items-center gap-x-5 mb-24">
              <div className="line h-px w-full bg-purple-950 flex-grow"></div>
              <h3 className="bg-purple-900 px-12 py-2 text-center w-fit text-nowrap rounded-3xl text-white font-medium cursor-pointer">Get this Book</h3>
              <div className="line h-px w-full bg-purple-950 "></div>
            </div>
        </div>

    </div>
  )
}
