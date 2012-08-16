define("solar", ["extern/canvas.Sprites/canvas.Sprites", "extern/canvas.DrawSprites/canvas.DrawSprites"], function(Sprite, DrawSprite) {
    return function(){
       
          var reset = _.bind(function(){
          }, this);
        
          reset();
        
        var drawSolar = function(){
            imgs["solarBG"].draw();
        };
     return {
            draw: drawSolar,
            reset: reset
        }
    };
});