import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const LogoStyled = styled.h1`
  background: red;
  font-size: 4rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyled = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 10px solid var(--black, black);
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: auto 1fr;
    border-bottom: 10px solidvar(--black, black);
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <div className="bar">
        <LogoStyled>
          <Link href="/">Sick Fits Logo</Link>
        </LogoStyled>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyled>
  );
}
