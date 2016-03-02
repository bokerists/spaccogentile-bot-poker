
exports = module.exports = {

  VERSION: 'Superstar poker player',

  bet: function (gamestate, bet) {

    'use strict';
    
    debugger;
    var me = gamestate.me;
    var cards = gamestate.players[me].cards;
    var cardsLength = cards.length;
    var betAmount = this.algoritmoDelDiavoloPokerista(cards);

    return bet(betAmount);

  },

  cardValue: function(cardRank) {

        if (parseInt(cardRank).toString() !="NaN") {
            return cardRank;
        }

        if (cardRank === 'J') return '11';
        if (cardRank === 'Q') return '12';
        if (cardRank === 'K') return '13';
        if (cardRank === 'A') return '14';

  },

  isCoupleValue: function(cards) {

    return (cards[0].rank === cards[1].rank);
  
  },

  algoritmoDelDiavoloPokerista: function(cards) {

    if(this.isCoupleValue(cards)) {
      var value = parseInt(this.cardValue(cards[0].rank), 10) + parseInt(this.cardValue(cards[1].rank), 10);
      if(value > 16) {
        return 10000;
      } else {
        return 5000;
      }
    }

    return 0;

  }

};