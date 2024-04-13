import { Listings } from "./Listings"
import { PageHeader } from "./PageHeader"

export const BooksPage = () => {
  return (
    <div className="BooksPage-Wrapper w-full flex justify-center items-start flex-grow bg-white">
        <div className="Booksage-Inner w-5/6">
            <PageHeader header="BOOK COLLECTIONS"/>
            <Listings title = "RIVER SIDE" About1 = "ABOUT THE BOOK" About2 ="ABOUT THE AUTHOR" desc1 = "If, you’re using 64 bit then just click the link at the very top that says, “Click here to download” so you can download the latest git version with the most recent updates. But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading." desc2 = "But if you’re using 32 bit you should instead click on the link that says, “32-bit Git for Windows Setup.” Under the “Standalone Installer” heading"/>
        </div>
    </div>
  )
}
