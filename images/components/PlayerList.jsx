import React, { useState, useEffect } from 'react';
import '../styles/PlayerList.css';

const PlayerList = ({ players, currentPlayer }) => {
  return (
    <div className="player-list">
      <h3 className="player-list-title">Spieler ({players.length})</h3>
      <div className="player-list-container">
        {players.map((player) => (
          <div 
            key={player.name} 
            className={`player-item ${player.name === currentPlayer ? 'current-player' : ''}`}
          >
            <span className="player-name">
              {player.name === currentPlayer ? '👤 ' : ''}{player.name}
            </span>
            <span className="player-points">{player.points} Pkt.</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerList; 