define("canvas.Audio", function() {
    //Spriting object template that currently always uses vertical sprites
    return function(audio){
        this.play = function(){
            audio.play();
        }
        this.pause = function(){
            audio.pause();
        }
    }
});
