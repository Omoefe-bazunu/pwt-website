
import { HomePage } from "./HomePage";
import { AdminLogin } from "./pageComponents/AdminLogin";
import { AdminPage } from "./pageComponents/AdminPage";
import { BlogHome } from "./pageComponents/Blog/BlogHome";
import BlogPostDetails from "./pageComponents/Blog/BlogPostDetails";
import BusinessBlogPost from "./pageComponents/Blog/BusinessBlogPost";
import CareerBlogPost from "./pageComponents/Blog/CareerBlogPost";
import { CreateBlogPost } from "./pageComponents/Blog/CreateBlogPost";
import TechBlogPost from "./pageComponents/Blog/TechBlogPost";
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
      <Route path="AdminPage" element={<AdminPage/>}/>
      <Route path="AdminLogin" element={<AdminLogin/>}/>
      <Route path="BlogHome" element={<BlogHome />}>
        <Route index element={<BusinessBlogPost />}/>
        <Route path="CreateBlogPost" element={<CreateBlogPost/>}/>
        <Route path="BlogPostDetails" element={<BlogPostDetails />}/>
        <Route path="TechBlogPost" element={<TechBlogPost />}/>
        <Route path="CareerBlogPost" element={<CareerBlogPost />}/>
      </Route>
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