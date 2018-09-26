var expect = require('chai').expect;

describe('Check for Ship', function(){

    var checkForShip = require('../game_logic/ship_methods').checkForShip;
    
    it('should correctly report no ship at given players coordinate ', function(){
        
        player =  {
            ships: [
                {
                    locations: [ [0,0] ]
                }
            ],

        }
        
        expect(checkForShip(player, [9,9])).to.be.false;
    
    });


});