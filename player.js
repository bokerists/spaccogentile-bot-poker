
exports = module.exports = {

  VERSION: 'Superstar poker player',

  bet: function (gamestate, bet) {

    'use strict';

    let me = gamestate.me;
    let myHandValue = cardToNumber( gamestate.players[me].cards );
    let betAmount = 0;

    if(myHandValue > 18) {
      betAmount = 1000;
    } else {
      betAmount = 0;
    }

    return bet(betAmount);

  },

  cardToNumber: function(cardRank) {
      
      if( parseInt(cardRank).toString() != "NaN" ) {
        return cardRank;
      }

      if( cardRank === 'J' ) return '11';
      if( cardRank === 'Q' ) return '12';
      if( cardRank === 'K' ) return '13';
      if( cardRank === 'A' ) return '14';

  }

};
