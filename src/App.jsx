
import { HomePage } from "./HomePage";
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
      <Route path="ContactPage" element={<ContactUsSection/>}/>
    </Route>
  )
)


function App() {
  return (
      <RouterProvider router = {router}/>
  )
}

export default App;