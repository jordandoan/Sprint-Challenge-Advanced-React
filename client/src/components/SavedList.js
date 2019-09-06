import React from 'react';

const SavedList = ({ list }) => {
  return (
    <div className="saved-list-container">
      <h2>Your List</h2>
      <div className="saved-list">
      {list.map(player => 
          <div key={player.id} className="player-card saved-card">
            <p>Rank {player.id + 1}</p>
            <p>Name: {player.name}</p>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
          </div>
      )}
      </div>
    </div>
  )
}

export default SavedList;