import { Layout } from "@/components";
import * as Pages from "@/pages"
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const WebRoutes = () => {
    return<BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element = {<Pages.Dashboard.Home/>}></Route>
                <Route path = "login" element ={<Pages.Auth.Login />} />

            </Route>
        </Routes>
    </BrowserRouter>
}