
import { HomePage } from "./HomePage";
import { BookPaymentPage } from "./pageComponents/BookPaymentPage";
import { ErrorPage } from "./pageComponents/ErrorPage";
import { HomeLayout } from "./pageComponents/HomeLayout";
import { ContactUsSection } from "./pageComponents/Homepage/ContactUsSection";
import { BooksPage } from "./pageComponents/RoutedPages/BooksPage";
import { ProjectsPage } from "./pageComponents/RoutedPages/ProjectsPage";
import {createBrowserRouter, 
createRoutesFromElements,
Route,
RouterProvider} from 'react-router-dom'

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path="/" element={<HomeLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="ProjectsPage" element={<ProjectsPage />}/>
      <Route path="BooksPage" element={<BooksPage />}/>
      <Route path="BooksPaymentPage" element={<BookPaymentPage />}/>
      <Route path="ContactPage" element={<ContactUsSection/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Route>
  )
)


function App() {
  return (
      <RouterProvider router = {router}/>
  )
}

export default App;