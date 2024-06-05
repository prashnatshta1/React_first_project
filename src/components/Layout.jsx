import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "react-confirm-alert/src/react-confirm-alert.css"
import "react-toastify/dist/ReactToastify.min.css"
import "./Layout.css"

import { Outlet } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import { CmsNav } from "./CmsNav"

export const Layout = () => {
    return<>
        <CmsNav />
        <Container>
            <Row>
                <Outlet />
            </Row>
        </Container>
    
    </>

}