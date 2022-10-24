import styled from 'styled-components';

export const List = styled.ul`
 list-style: none;
  width: 430px;
  margin: 0;
  padding: 30px;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
`;

export const ListItem = styled.li`
display: flex;
justify-content: space-between;
list-style: none;
    :first-child {
        margin-top:20px;
    }
    :not(:last-child) {
        margin-bottom:15px;
    }
    
`;

export const Button = styled.button`
padding: 4px 5px;
width: 80px;
border-radius: 10px;
border: 1px solid #550403;
cursor: pointer;
background-color:  #e46262;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover {
        background-color: #da0404;
    }
`;