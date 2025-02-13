import './Body.css';
import EmojiSorteio from './SorteioEmoji';

function Body() {
    


  return (
    <div className='body-container'>
    <p className='body-p'>A regra é muito simples:</p>
    <p className='body-p'>Basta clicar na imagem, o sistema sorteará um emoji e você precisa desenvolver uma história para seus amigos a partir do emoji sorteado!</p>
    <EmojiSorteio />
    </div>

  )
}

export default Body;