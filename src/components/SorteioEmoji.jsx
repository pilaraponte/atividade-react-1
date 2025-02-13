import React, { useState } from 'react';
import './Body.css'; 

function EmojiSorteio() {

  const emojis = ['😊', '😂', '😍', '😎', '🥺', '🤔', '😜', '🤯', '😈', '😇', '😁', '😘', '😂'];


  function sortearEmoji() {
    const i = Math.floor(Math.random() * emojis.length); 
    return emojis[i]; 
  }

  const [emoji, setEmoji] = useState('');

  function responderClique() {
    const emojiSorteado = sortearEmoji();
    setEmoji(emojiSorteado); 
  }

  return (
    <div className="emoji-sorteio-container">
      <h2>Vamos sortear um emoji para você:</h2>
      <button onClick={responderClique}>Clique para sortear</button>
      {emoji && <h3>Emoji sorteado: {emoji}</h3>}
    </div>
  );
}

export default EmojiSorteio;
