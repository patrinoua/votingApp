import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
  border: 4px solid white;
  font-size: 1.4em;
`
const FirstTd = styled.td`
  font-size: 30px;
  text-align: center;
`
const HeaderTd = styled.td`
  width: 200px;
  font-size: 1.3em;
  text-align: center;
`
const VoterTd = styled.td`
  width: 150px;
  text-align: center;
`
const VoteTd = styled.td`
  background: #383e4a;
  height: 150px;
  width: 150px;
  text-align: center;
  &:hover {
    background: #5c6577;
    cursor: pointer;
  }
`
class Table extends React.Component {
  state = {
    voters: [
      {
        name: 'firstVoter',
        rest1: { id: 1, name: 'first restaurant', isVoted: false },
        rest2: { id: 2, name: 'second restaurant', isVoted: true },
        rest3: { id: 3, name: 'third restaurant', isVoted: false }
      }
    ]
  }
  componentDidMount = () => {
    console.log('whoop')
  }
  fetchRestaurants = () => {
    console.log('voted for')
  }
  onVote = e => {
    console.log('voted for', e)
  }
  render() {
    console.log(this.state)
    return (
      <StyledTable>
        <tbody>
          <tr>
            <FirstTd>empty</FirstTd>
            <HeaderTd>first restaurant</HeaderTd>
            <HeaderTd>second restaurant</HeaderTd>
            <HeaderTd>third restaurant</HeaderTd>
          </tr>
          {this.state.voters.map(({ name, rest1, rest2, rest3 }) => (
            <tr key={name}>
              {console.log('name', name)}
              <VoterTd>{name}</VoterTd>
              <VoteTd onClick={() => this.onVote(rest1)}>{rest1.name}</VoteTd>
              <VoteTd onClick={() => this.onVote(rest2)}>{rest2.name}</VoteTd>
              <VoteTd onClick={() => this.onVote(rest3)}>{rest3.name}</VoteTd>
            </tr>
          ))}
          <tr>
            <VoterTd>VOTER 1</VoterTd>
            <VoteTd onClick={this.onVote}>2 2</VoteTd>
            <VoteTd>2 3</VoteTd>
            <VoteTd>2 3</VoteTd>
          </tr>
        </tbody>
      </StyledTable>
    )
  }
}

export default Table
