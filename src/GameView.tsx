import React, { useState } from 'react';
import './GameView.css';

import { GameViewBoxes } from './components/GameViewBoxes/GameViewBoxes';
import { ReactComponent as Continents } from './resource/continents-map.svg';

function GameView() {
	const [guesses, setGuesses] = useState<string[]>([])
	const updateGss = (newGuesses: string[]) => {
		setGuesses(newGuesses)
	}

	return (
		<>
			<Continents style={{ width: '100vw', height: '100vh', position: 'fixed', opacity: 0.2, zIndex: -10000 }} />
			<div className="GameView">
				<header className="GameView-header">
					<h1>MAPPLE</h1>
				</header>
				<GameViewBoxes guesses={guesses} setGuesses={updateGss} hints={["Green is not a creative color", "There's always time for a song", "We must feed him gravel", "Inside my mind there is a digital mind", "You're better off with plain white sauce", "Looks like someone's having a bad dream", "You can’t eat diamonds, can you", "You laid an egg. Quick, make a wish", "That's our family scent"]} />
			</div>
		</>
	);
}

export default GameView;
