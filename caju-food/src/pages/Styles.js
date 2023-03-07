import styled from 'styled-components'


export const Navbar = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    font-size: 16px;
    align-items: center ;
    justify-content: center; 
    gap: 10px;
    background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p3/8660558-conceito-de-fundo-de-comida-organica-desenhado-a-mao-gratis-vetor.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`;

export const CardLogin = styled.div`
    box-shadow: 0 1px 10px blueviolet;
    border-radius: 20px;
    padding: 40px;
    text-align: center;
`;

export const Button = styled.button`
    padding: 10px;
    margin: 10px;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 10px;
`;

export const InputSubmit = styled.input`
    padding: 10px;
    margin: 10px;
    background-color: blueviolet;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 10px;
`;

export const Header = styled.header`
    font-size: 40px;
    font-family: 'Tilt Prism', cursive;
    color: blueviolet;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const CardLabel = styled.div`
    font-size: larger;
    margin-bottom: 10px;
`;