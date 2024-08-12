import styled from "styled-components";

const useStyled = () => {

    const AddBtn = styled.button`
        position: absolute;
        right: 0px;
        background: #7DA0FF;
        width: 122px;
        height: 60px;
        border-radius: 40px;
        border: none;
        color: #FFFFFF;
        font-size: 24px;
    `

    const CheckBox = styled.input`
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0,0,0,0);
        white-space: nowarp;
        border: 0;

        &:checked + label {
            background: #7DA0FF
        }
    `

    const CheckBoxLabel = styled.label`
        width: 30px;
        height: 30px;
        border: 2px solid #7DA0FF;
        border-radius: 50%;
    `
    const EditBtn = styled.button`
        background-color: #ECECEC;
        border: 2px solid #7DA0FF;
        width: 60px;
        height: 30px;
        border-radius: 15px;
        color: #7DA0FF;

        &:hover {
          background-color: #7DA0FF;
          color: #FFFFFF;
          transition: 0.5s;  
        }

    `
    const SaveBtn = styled.button`
        background-color: #7DA0FF;
        border: none;
        width: 60px;
        height: 30px;
        border-radius: 15px;
        color: #FFFFFF;
    `
    const DeleteBtn = styled.button`
        background-color: #ECECEC;
        border: 2px solid #FF7D7D;
        width: 60px;
        height: 30px;
        border-radius: 15px;
        color: #FF7D7D;

        &:hover {
          background-color: #FF7D7D;
          color: #FFFFFF;
          transition: 0.5s;  
        }
    `
    const BtnWrap = styled.div`
        display: flex;
        gap: 12px;
    `

    return { 
        AddBtn, 
        CheckBox, 
        CheckBoxLabel,
        EditBtn,
        SaveBtn,
        DeleteBtn,
        BtnWrap,
    }
}
export default useStyled