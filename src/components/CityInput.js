import React from 'react'
import styled from 'styled-components'
import secrets from '../secrets.json'
const axios = require('axios')

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`
export const SearchBar = styled.input`
  width: 130px
  width: 130px;
  padding: 5px;
  font-size: .8em;
  box-shadow: inset 0px 2px 3px 0px rgba(0,0,0,0.2);
`

export const SearchButton = styled.button`
  background-color: #c8ccc899;
  color: white;
  width: 145px;
  border-radius: 21px;
  padding: 5px;
  margin: 10px;
  font-size: 1em;
  : hover {
    background: #8bc34af2;
    cursor: pointer;
  }
`
class CityInput extends React.Component {
  state = {
    value: '',
    recommendations: []
  }
  handleChange = event => {
    if (event.target.value.length > 0) {
      this.setState({
        value: event.target.value
      })
    } else {
      this.setState({ value: '' })
    }
  }
  callFoursquareApi = () => {
    const address = this.state.value || 'Berlin'
    const qs = `?client_id=${secrets.CLIENT_ID}&client_secret=${secrets.CLIENT_SECRET}&query=lunch&near=${address}&v=20190724&limit=3`
    axios
      .get(`https://api.foursquare.com/v2/venues/explore${qs}`)
      .then(res => {
        let recommendations = res.data.response.groups[0].items
        let formattedRecommendations = recommendations.map(recommendation => {
          const name = recommendation.venue.name
          const location = recommendation.venue.location
          return { name, location }
        })
        console.log(formattedRecommendations)
        this.props.retrieveRecommendations(formattedRecommendations)
      })
      .catch(err => console.log(err))
  }
  componentDidMount = () => {
    this.callFoursquareApi()
  }
  render() {
    const { addingVoter } = this.state

    //event listener for enter key!
    // document.addEventListener('keydown', console.log('whoop'))
    // document.addEventListener('keydown', function(event) {
    //   document.body.style.background = 'violet'
    // })

    return (
      <SearchBarContainer>
        <SearchBar
          id='searchbar'
          type='text'
          name='search'
          placeholder='City eg. "Berlin"'
          onChange={this.handleChange}
        />
        <SearchButton onClick={this.callFoursquareApi}>Enter</SearchButton>
      </SearchBarContainer>
    )
  }
}

export default CityInput
