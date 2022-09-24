import React from 'react'
import Header from './components/Header'
import MainBoard from './components/MainBoard'
import unsplash from './api/unsplash'
import axios from 'axios'

function App() {
  const getImages = (term) => {
    return axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        client_id: '9NKafZDS939X3ex_XDrJPeB54I6AVkXpyv-tba9jKH4',
      },
    })
  }
  const onSearchSubmit = (term) => {
    getImages(term)
  }

  return (
    <div className='App'>
      <Header onSubmit={onSearchSubmit} />
      <MainBoard />
    </div>
  )
}

export default App
