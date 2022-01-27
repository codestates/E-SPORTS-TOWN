import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiArrowBack } from 'react-icons/bi';
import axios from 'axios';
// import { writingContent } from '../../utils/data';
import { useStore, useMyToken } from '../utils/store';
// import { useData } from '../../utils/store';
// import { useLoading } from '../../utils/store';

const CreateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  //padding: 10px;
  //margin: 20px;
  width: 100%;
`;
const CreateTitleInput = styled.input`
  width: 100%;
  height: 100px;
  font-size: 40px;
  border: none;
  outline: none;
  padding: 10px;
`;

const CreateTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  font-size: 20px;
  border: none;
  outline: none;
`;
const CreateButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 50px;
`;

const CreateBackButton = styled.button`
  background: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  outline: none;
  padding: 0px 1.25rem;
  text-align: center;
  width: 100px;
  height: 30px;
  margin-left: 10px;
  :hover {
    background-color: #f4f4f4;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: black;
  }
`;

const CreateSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
  color: #f4f4f4;
  border: none;
  background-color: #05b388;
  font-weight: bold;
  cursor: pointer;
  padding: 0px 1.25rem;
  margin-right: 10px;
  :hover {
    opacity: 0.7;
  }
`;

const Comment = () => {
  let navigate = useNavigate();
  const [user, setUser] = useStore((state) => [state.user, state.setUser]);

  // const [isLoading, setIsLoading] = useLoading((state) => [
  //   state.isLoading,
  //   state.setIsLoading,
  // ]);

  const onSubmitWriting = (e) => {
    // setIsLoading(true);
    e.preventDefault();
    let data = {
      userId: user.username,
      title: e.target[0].value,
      content: e.target[1].value,
      date: new Date().toLocaleString(),
      address: user.address,
    };
    console.log(data);

    // writingContent(data);
    navigate('/');
    window.location.reload(false);
  };
  return (
    <CreateContainer>
      <form onSubmit={(e) => onSubmitWriting(e)}>
        {/* <CreateTitleInput type="text" placeholder="제목" /> */}
        {/*<br />*/}
        <CreateTextArea
          placeholder="당신의 이야기를 적어보세요..."
          rows="80"
          cols="80"
        />
        {/*<br />*/}

        <CreateButtonContainer>
          <CreateBackButton>
            <Link to="/">
              <BiArrowBack />
              <p>나가기</p>
            </Link>
          </CreateBackButton>

          <CreateSubmitButton>글작성</CreateSubmitButton>
        </CreateButtonContainer>
      </form>
    </CreateContainer>
  );
};

export default Comment;
