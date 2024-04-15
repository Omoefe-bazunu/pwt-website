import { Link } from "react-router-dom"
import { Listings } from "./Listings"
import { PageHeader } from "./PageHeader"

export const BooksPage = () => {

// BOOK DETAILS
const Book1 = {
    ListedImage: "River",
    title: "RIVER SIDE",
    Cost: "1,000",
    baboutTheBook:  "If, you’re using 64 bit then just click the link at the very top that says, “Click here to download” so you can download the latest git version with the most recent updates. But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading.",
    aboutTheAuthor: "But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading"

}
// FUNCTION THAT RUNS OUTPUTS THE DETAILS - DO NOT TAMPER
  return (
    <div className="BooksPage-Wrapper w-full flex justify-center items-start flex-grow bg-white">
        <div className="Booksage-Inner w-5/6">
            <PageHeader header="BOOK COLLECTIONS"/>
            <Listings ListedImage={Book1.ListedImage} title = {Book1.title} Cost={Book1.Cost} About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = {Book1.baboutTheBook} desc2 = {Book1.aboutTheAuthor} />
            <Listings ListedImage={Book1.ListedImage} title = {Book1.title} Cost={Book1.Cost} About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = {Book1.baboutTheBook} desc2 = {Book1.aboutTheAuthor} />
        </div>
    </div>
  )
}
