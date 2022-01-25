import React from 'react';
import Link from "next/link";
import styled from "styled-components";
import theme from "../../styles/theme";

interface PropsTitle {
    title: string;
    link: string
}

function TitleSection({title, link}: PropsTitle) {
    return (
        <Title>
            <h2>{ title }</h2>
            <Link href={link}>
                <a>Explore more</a>
            </Link>
        </Title>
    );
}

const Title = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2{
    font-size: 32px;
  }
  a{
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    border-bottom: 2px solid ${theme.colors.gradient};
    padding-bottom: .2rem;
  }
`

export default TitleSection;
