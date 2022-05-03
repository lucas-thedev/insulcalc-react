import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color: #131313;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

export const LogoPlus = styled.span`
    border: 1px solid #cbe49a;
    outline-offset: 4px;
    outline: 2px solid #cbe49a;
    color: #cbe49a;
    font-weight: 900;
    padding: 0 8px;
    font-size: 35px;
`

export const AppTitle = styled.h1`
    font-family: 'Bebas Neue';
    color: #cbe49a;
    display: inline;
    margin-left: 10px;
`

export const Results = styled.div`
    display: flex;

    .calc-wrapper {
        border: 2px solid #cbe49a;
        width: 200px;
        height: 150px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }

    .calc-result {
        color: #EAF4D6;
        font-family: 'Bebas Neue';
        font-size: 80px;
    }

    .calc-un {
        color: #EAF4D6;
        font-family: 'Bebas Neue';
        font-size: 30px;
        margin-top: 125px;
        margin-left: 10px;
        margin-right: -30px;
        height: fit-content;
    }

`

export const Label = styled.label`
    color: #cbe49a;
    font-size: 20px;
    font-family: 'Open Sans';
    margin-bottom: 5px;
    display: block;
}
`

export const Refeicao = styled.div`
    .icon-wrapper {
        width: 70%; 
    }

    .icons {
        display: flex; 
        justify-content: space-between; 
        width: 100%;
    }

    .icon {
        margin: 0 5px; 
        color: white;
    }
}
`
export const SaveButton = styled.button`
    border: none;
    background-color: #cbe49a;
    width: 70%;
    height: 45px;
    color: #131313;
    font-family: 'Bebas Neue';
    font-size: 20px;
    padding-top: 3px;
`