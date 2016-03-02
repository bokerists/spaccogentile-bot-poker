
exports = module.exports = {

  VERSION: 'Superstar poker player',

  bet: function (gamestate, bet) {

    'use strict';
    
    debugger;
    let me = gamestate.me;
    let cards = gamestate.players[me].cards;
    let cardsLength = cards.length;
    let betAmount = algoritmoDelDiavoloPokerista(cards);

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

  },

  cardsValue: function(cards) {

    for( let i=0;i<=cardsLength;i++ ) {
      myHandValue += cardToNumber( gamestate.players[me].cards[i] );
    }

    return myHandValue;

  },

  isCoupleValue: function(cards) {

    return (cards[0].rank === cards[1].rank);
  
  },

  isColor: function(cards) {

    return (cards[0].type === cards[1].type);

  },

  algoritmoDelDiavoloPokerista: function(cards) {

    if(isCoupleValue(cards) && cardsValue(cards) > 18) {

      return 5000;

    } else if(isCoupleValue(cards) && cardsValue(cards) > 12) {

      return 1000;

    } else if(isCoupleValue && cardsValue > 10) {
      
      return 500;

    }

    return 0;

  }

};