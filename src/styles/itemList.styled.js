import styled from "@emotion/styled";

const ListContainer = styled.div`
margin-top: 10px;
`

const TableContainer = styled.div`
width: 90vw;
  min-width: 1100px;
  max-width: 1800px;
  margin: 10px auto;
  border: 1px solid #e9e8e8;
  background-color: #fefffe;
  border-radius: 10px;
  padding: 20px 60px;
`

const InputBtnContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const InputContainer = styled.div`
height: 30px;
  width: 200px;
  border-radius: 10px;
  border: 1px solid gray;
`

const Input = styled.input`
border: none;
  padding: 5px 10px;
  outline: none;
  background-color: transparent;
`

const BtnsContainer = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
`

const NewItemBtn = styled.div`
height: 30px;
border: 1px solid green;
border-radius: 15px;
color: #1f633e;
padding: 10px 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-size: 12px;
margin-right: 20px;
cursor:pointer;
`

const ItemImage = styled.img`
height: 30px; width: 30px; margin-right: 10px 
`

const IconContainer = styled.span`
height: 20px;
width: 20px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
cursor:pointer
`

const itemListStyle = {
    ListContainer, TableContainer, InputBtnContainer, InputContainer, Input, BtnsContainer, NewItemBtn, ItemImage, IconContainer
}

export default itemListStyle;