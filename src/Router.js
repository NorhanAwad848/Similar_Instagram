import {createBrowserRouter,Navigate } from "react-router-dom";
import App from "./App"
import { AsideList } from "./components/Aside/AsideList";
import {Explore_share} from "./Shared/Explore_share"
import { PostList } from "./components/Post/PostList";
import { Real_share } from "./Shared/Real_shared";
import { Home } from "./Shared/Home";
export const router = createBrowserRouter([
    // {
    //   path: "",
    //   element: <Navigate to="/Nav" replace />,
    // },   
    {
          path: "/",
          element: <App/>,
          // Nesting routes
          children:[
  
            {   path:"",
          children: [
            {
              path: "/Followers",
              element: (
                    <>
                      <AsideList />
                    </>
                  ),
            },
            {
              path: "/Home",
              element: (
                    <>
                      <Home />
                    </>
                  ),
            },
            {
              path: "/Explore",
              element: (
                    <>
                      <Explore_share />
                    </>
                  ),
            },
            {
                path: "/Post",
                element: (
                      <>
                        <PostList />
                      </>
                    ),
              },
              {
                path: "/Real",
                element: (
                      <>
                        <Real_share />
                      </>
                    ),
              },
          ],
        }
            
      ],
    }
    ]);