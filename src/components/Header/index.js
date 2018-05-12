import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components';
import logo from '../../images/logo.svg';
import Img from "gatsby-image";

const HeaderWrapper = styled.div`
    background: #524763;
    margin-bottom: '1.45rem';
    overflow: hidden;
    position: relative;
    height: ${({isHome}) => ( isHome ? '70vh' : '20vh' )};
    h1 {
        img {
            height: 80px;
        }
    }
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

const MainNav = styled.div`
    ul {
        list-style-type: none;
        display: flex;
        li {
            margin-left: 8px;
            a {
                text-decoration: none;
                color: white;
                &:hover {
                    border-bottom: 3px solid #524763;
                }
            }
        }
    }
`;

const Billboard = styled(Img)`
`;

export default class Header extends Component {
    componentDidUpdate = (prevProps, prevState) => {
        const { location } = this.props;
        if (location.pathname != prevProps.location.pathname) {
            if (this.props.location.pathname === '/') {
                this.wrapper.animate([
                    {height: '20vh'},
                    {height: '70vh' }
                ],
            {
                duration: 300,
                fill: 'forwards',
                easing: 'cubic-bezier(.86, 0, .07, 1)',
                iterations: 1
            })
            } else {
                this.wrapper.animate([
                    {height: '70vh'},
                    {height: '20vh' }
                ],
            {
                duration: 300,
                fill: 'forwards',
                easing: 'cubic-bezier(.86, 0, .07, 1)',
                iterations: 1
            })
            }
        }
    }
    render() {
        const { data, location } = this.props;
        return (
            <HeaderWrapper 
            ref={wrapper => (this.wrapper = ReactDOM.findDOMNode(wrapper)) }
            isHome = {location.pathname === '/'}
            >
                <HeaderContainer>
                <h1 style={{ margin: 0 }}>
                    <Link
                    to="/"
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                    }}
                    >
                    <img src={logo} />
                    </Link>
                </h1>
                <MainNav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </MainNav>
                </HeaderContainer>
                <Img
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        opacity: '0.3',
                    }}
                    sizes={data.background.sizes}
                />
            </HeaderWrapper>
        )
    }
}
