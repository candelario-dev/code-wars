//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
return p1 == 'scissors' && p2 =='paper' || p1 =='paper' && p2 =='rock' || p1=='rock' && p2=='scissors' ? 'Player 1 won!' : p1 == p2 ? 'Draw!' : 'Player 2 won!'
};
