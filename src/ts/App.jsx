import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div `
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 1.5fr 9.5fr;
  grid-template-rows: 1;
  grid-template-areas: "
    sidebar main
  ";
`;
const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: #F7F6F3;
`;
const FileList = styled.div`
  padding: 2px 0px;
  list-style: none;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;

  & span {
    text-align: center;
    padding: 7px;
    &:hover {
      background-color: #E8E7E3;
    }

    & p {
      margin: 2px;
      padding: 3px auto;
    }
  }
`;
const Main = styled.main`
  padding: 2px auto;
  grid-area: main;
  background-color: #fff;
`;

function App() {

  const [files, setFiles]= useState<Array<FileLink>>([]);

  useEffect(() => {
    setFiles()
  }, [])

  return (
    <Wrapper>
        <Sidebar>
          <FileList files={files}/>
        </Sidebar>
        <Main>
          Teste
        </Main>
    </Wrapper>
  );
}

export default App;
