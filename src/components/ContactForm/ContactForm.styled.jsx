import styled from 'styled-components';

export const Form = styled.form`
display:flex;
flex-direction: column;
align-items: center;
margin-left: auto;
margin-right: auto;
`;

export const Label = styled.label`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;
flex-direction: column;
`;

export const Input = styled.input`
padding: 1px 5px;
width: 300px;
height: 30px;
font-size: 14px;
border: 1px solid #EDC7B7;
border-radius: 10px;
outline: none;
margin-top: 5px;

transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus {
    border-color: #8f918f;
    background-color: #e1f3eb;
    }
`;

export const Button = styled.button`
margin-left: auto;
margin-right: auto;
padding: 10px;
font-size: 17px;
width:140px;
border-radius: 10px;
border: 1px solid #377856;
cursor: pointer;
background-color:  #88f3ae93;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        background-color: #1ddb6c;
    }
`;