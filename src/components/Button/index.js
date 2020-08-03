import styled from 'styled-components';

const Button = styled.button`
    margin: 5px;
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`
export default Button;

// import React from 'react';

// function Button(props){

//     return (
//         <a href={props.href} className={props.className}>
//             {props.children}
//         </a>
//     )
// }

// export default Button;