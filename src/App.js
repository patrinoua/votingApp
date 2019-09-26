import React from 'react'
import './App.css'
import styled from 'styled-components'
import Table from './components/Table'

const AppContainer = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

function App() {
  return (
    <AppContainer>
      <Table />
    </AppContainer>
  )
}

export default App
