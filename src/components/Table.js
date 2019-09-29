import React from 'react'
import styled from 'styled-components'
import CityInput from './CityInput'

const StyledTable = styled.table`
  border: 4px solid white;
  font-size: 1.4em;
  border-spacing: 3px;
`
const Td = styled.td`
  text-align: center;
  border-radius: 3px;
`
const CityTd = styled(Td)`
  border-radius: 3px;
  width: 180px;
  height: 110px;
  background: white;
  color: black;
  letter-spacing: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`
const HeaderTd = styled(Td)`
  width: 250px;
  height: 130px;
  background: white;
  color: black;
  font-weight: 600;
  letter-spacing: 0.2;
`
const AddVoterTd = styled(Td)`
  &:hover {
    background: #5c6577;
    cursor: pointer;
  }
`
const VoterTd = styled(Td)`
  width: 150px;
  text-align: center;
`
const VoteTd = styled(Td)`
  background: #383e4a;
  height: 200px;
  &:hover {
    background: #5c6577;
    cursor: pointer;
  }
`
class Table extends React.Component {
  state = {
    recommendations: [],
    addingVoter: false,
    voters: [
      {
        name: 'firstVoter',
        rest1: { id: 1, name: 'first restaurant', isVoted: false },
        rest2: { id: 2, name: 'second restaurant', isVoted: true },
        rest3: { id: 3, name: 'third restaurant', isVoted: false }
      }
    ]
  }
  // componentDidMount = () => {
  //   console.log('Get the results')
  // }
  // fetchRestaurants = () => {
  //   console.log('voted for')
  // }
  // onVote = e => {
  //   console.log('voted for', e)
  // }
  addVoter = () => {
    this.setState({ addingVoter: !this.state.addingVoter })
    // const newVoter = {
    //   name: 'newVoter',
    //   rest1: { id: 1, name: 'first restaurant', isVoted: false },
    //   rest2: { id: 2, name: 'second restaurant', isVoted: true },
    //   rest3: { id: 3, name: 'third restaurant', isVoted: false }
    // }
    // this.setState({
    //   voters: [...this.state.voters, newVoter]
    // })
  }
  onInputChange = e => {
    console.log('change', e.target, e.target.name, e.target.value)
  }
  onSubmit = e => {
    e.preventDefault()
    console.log('inSubmit', e.target, e.target.name, e.target.value)
  }
  retrieveRecommendations = recommendations => {
    this.setState({ recommendations })
  }

  render() {
    const { addingVoter, recommendations } = this.state

    return (
      <StyledTable>
        <tbody>
          <tr>
            <CityTd>
              <CityInput
                retrieveRecommendations={this.retrieveRecommendations}
              />
            </CityTd>
            {recommendations.map(recommendation => (
              <HeaderTd key={recommendation.location.address}>
                {recommendation.name}
                <p style={{ fontSize: '18px', fontWeight: '400' }}>
                  {recommendation.location.address}
                </p>
              </HeaderTd>
            ))}
          </tr>
          {this.state.voters.map(({ name, rest1, rest2, rest3 }) => (
            <tr key={name}>
              <VoterTd>{name}</VoterTd>
              <VoteTd onClick={() => this.onVote(rest1)}>{rest1.name}</VoteTd>
              <VoteTd onClick={() => this.onVote(rest2)}>{rest2.name}</VoteTd>
              <VoteTd onClick={() => this.onVote(rest3)}>{rest3.name}</VoteTd>
            </tr>
          ))}
          {addingVoter ? (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ) : (
            <tr>
              <AddVoterTd onClick={this.addVoter}>Add Voter</AddVoterTd>
              <td>
                <input
                  type='text'
                  name='newVoterName'
                  placeholder={'new'}
                  onChange={this.onInputChange}
                />
              </td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </StyledTable>
    )
  }
}

export default Table
