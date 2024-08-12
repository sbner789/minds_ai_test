import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useStyled from "./styles/useStyled";

const AddList = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 810px;
    height: 56px;
`

const InputBar = styled.input`
        width: 100%;
        height: 100%;
        border-radius: 40px;
        border: 2px solid #ECECEC;
        text-align: center;
        font-size: 20px;
        outline-color: #7DA0FF;

        &::placeholder {
            position: relative;
            top: 3px;
            color: #ECECEC;
            font-size: 20px;
            text-align: center;
        }
    `

const ListContainer = styled.div`
    padding: 60px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    width: 810px;
    height: 660px;
    border: 2px solid #ECECEC;
    border-radius: 40px;
    box-sizing: border-box;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
`

const List = styled.li`
        flex: 0 0 auto;
        background: #ECECEC;
        padding: 0px 15px 0px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 740px;
        height: 60px;
        border-radius: 40px;
        list-style: none;
        box-sizing: border-box;
    `

    const EditInput = styled.input`
    border: none;
    border-radius: 15px;
    width: 400px;
    height: 30px;
    text-align: center;
    outline-color: #7DA0FF;
`

const TodoList = ({ todoData, setTodo }) => {
    const [addTodo, setAddTodo] = useState("");
    const [editId, setEditId] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const styledCode = useStyled();

    useEffect(() => {
        localStorage.setItem('todoData', JSON.stringify(todoData));
    }, [todoData]);

    const addTodoList = () => {
        if(addTodo !== "") {
            const newTodo = {
                userId: 1,
                id: Date.now(),
                title: addTodo,
                completed: false
            };
            setTodo([...todoData, newTodo]);
            setAddTodo("");
        }
    }

    const deleteTodo = (id) => {
        setTodo(todoData.filter((el) => el.id !== id));
    }

    const checkTodo = (id) => {
        const updatedTodo = todoData.map(el => el.id === id ? { ...el, completed: !el.completed } : el);
        setTodo(updatedTodo);
    }

    const editTodo = (id, title) => {
        setEditId(id);
        setEditTitle(title);
    }

    const saveEdit = (id) => {
        const updatedTodo = todoData.map(el => el.id === id ? { ...el, title: editTitle } : el);
        setTodo(updatedTodo);
        setEditId(null);
        setEditTitle("");
    }

    return (
        <div>
            <h1>Todo List</h1>
            <AddList>
                <InputBar
                    type="text"
                    value={addTodo}
                    onChange={(e) => setAddTodo(e.target.value)}
                    placeholder="할 일을 적어주세요"
                />
                <styledCode.AddBtn onClick={addTodoList}>ADD</styledCode.AddBtn>
            </AddList>
            <ListContainer>
            {
                todoData.map((el) => (
                   <List key={el.id}>
                        <styledCode.CheckBox
                            type="checkbox"
                            checked={el.completed}
                            onChange={() => checkTodo(el.id)}
                            id={el.id}
                        />
                        <styledCode.CheckBoxLabel htmlFor={el.id} />
                        {editId === el.id ? (
                            <EditInput
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                        ) : (
                            <span>{el.title}</span>
                        )}
                        <styledCode.BtnWrap>
                            {editId === el.id ? (
                                <styledCode.SaveBtn onClick={() => saveEdit(el.id)}>저장</styledCode.SaveBtn>
                            ) : (
                                <styledCode.EditBtn onClick={() => editTodo(el.id, el.title)}>수정</styledCode.EditBtn>
                            )}
                            <styledCode.DeleteBtn onClick={() => deleteTodo(el.id)}>삭제</styledCode.DeleteBtn>
                        </styledCode.BtnWrap>
                   </List>
                ))
            }
            </ListContainer>
        </div>
    );
};

export default TodoList;