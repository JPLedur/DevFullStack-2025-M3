import { BrowserRouter,Route,Routes } from "react-router-dom"

import {RootLayout} from "./layout/RootLayout"
import {Sobre} from "./pages/Sobre"
import {Post} from "./pages/Post"
import {Home} from "./pages/Home"
import {NotFound} from "./pages/NotFound "
import {Navbar} from "./components/Navbar"

export default function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="sobre" element={<Sobre/>}/>
            <Route path="post/:id" element={<Post/>}/>

            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

