import React from 'react'
import styled from 'styled-components'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'


const Layout = ({children}) => {
    return (
        <Wrapper>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </Wrapper>

    )
}

const Wrapper = styled.div`
    width: 1fr;
    display: block;
    justify-content: center;
    align-items: center;
`

const Main = styled.main`

`

export default Layout
