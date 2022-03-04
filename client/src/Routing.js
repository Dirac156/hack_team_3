import React, { lazy, Suspense } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";


const Routing = () => {
    return (
        <>
          <Suspense fallback={<div>...loading</div>}>
            <BrowserRouter>
                <Routes>
              </Routes>
              <Footer />
            </BrowserRouter>
          </Suspense>
        </>
      );
}

export default Routing;


// import React, { lazy, Suspense } from "react";
// import { Routes, BrowserRouter, Route } from "react-router-dom";
// import PageLoading from './page/loading/loading.page';
// import NavbarComponent from "./component/navbar/navbar.component";
// import Footer from "./component/footer/fotter.component";

// const Home = lazy(() => import('./page/home/home.page.jsx'));
// const Shop = lazy(() => import('./page/shop/shop.page.jsx'));
// const Login = lazy(() => import('./page/login/login.component.jsx'));
// const SignUp = lazy(() => import('./page/signup/signup.component.jsx'));
// const Cart = lazy(() => import("./page/cart/cart.page.jsx"));
// const PageNotFound = lazy(() => import('./page/page-not-found/page-not-found.page'));

// const Routing = () => {
//     return (
//         <>
//           <Suspense fallback={<PageLoading />}>
//             <BrowserRouter>
//               <NavbarComponent />
//               <Routes>
//                   <Route exact path="/" element={<Home />} />
//                   <Route exact path="/shop" element={<Shop />} />
//                   <Route exact path="/login" element={<Login />} />
//                   <Route exact path="/register" element={<SignUp />} />
//                   <Route exact path="shop/cart" element={<Cart />} />
//                   <Route element={<PageNotFound />} />
//               </Routes>
//               <Footer />
//             </BrowserRouter>
//           </Suspense>
//         </>
//       );
// }

// export default Routing;
