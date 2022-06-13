import React from "react"
import HexaccoladesBranding from "./HexaccoladesBranding"
import HexagonBranding from "./HexagonBranding"
import { Container, Row, Col } from "react-bootstrap"
const Branding = () => {
    return (
        <div>
            <Container fluid="md">
                <Row>
                    
                        <HexagonBranding />
                   
                </Row>
                <Row>
                    <HexaccoladesBranding />
                </Row>
            </Container>
        </div>


    )
}
export default Branding;