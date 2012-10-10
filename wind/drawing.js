define(function(){
    function blade(ctx, x, y) {
        if(y>-150){
            return;  
        }
        // blade/blade
        ctx.save();
        var scale =  (-275-y)/125;
        if(scale == 0){
            return;  
        }
        ctx.scale(1,scale);
        try{
            ctx.translate(x,((y+670)/scale)-670);
        }catch(e){
            ctx.translate(x,0);    
        }
        ctx.beginPath();
        ctx.moveTo(799.9, 445.3);
        ctx.bezierCurveTo(797.0, 505.9, 751.9, 672.7, 751.9, 672.7);
        ctx.bezierCurveTo(751.9, 672.7, 681.8, 548.8, 686.7, 447.0);
        ctx.bezierCurveTo(691.6, 345.2, 751.9, 0.0, 751.9, 0.0);
        ctx.bezierCurveTo(751.9, 0.0, 805.3, 332.3, 799.9, 445.3);
        ctx.closePath();
        ctx.fillStyle = "rgb(188, 203, 211)";
        ctx.fill();
        ctx.stroke();
         
        ctx.restore();
    }
    function lines(ctx, x, y){
      //draw power lines
        ctx.save();
           ctx.beginPath();
           ctx.moveTo(783.0, 581.0);
           ctx.lineTo(726.0, 581.0);
           ctx.lineTo(726.0, 570.0);
           ctx.lineTo(783.0, 570.0);
           ctx.lineTo(783.0, 581.0);
           ctx.closePath();
           ctx.fillStyle = "rgb(78, 126, 169)";
           ctx.fill();

           // layer6/linesrasterizelines/Path
           ctx.beginPath();
           ctx.moveTo(759.8, 581.0);
           ctx.bezierCurveTo(759.8, 581.0, 759.4, 598.3, 750.4, 598.3);
           ctx.bezierCurveTo(741.5, 598.3, 622.0, 599.4, 622.0, 599.4);
           ctx.lineTo(622.0, 597.0);
           ctx.bezierCurveTo(622.0, 597.0, 702.2, 596.3, 750.0, 596.0);
           ctx.bezierCurveTo(758.1, 595.5, 756.5, 581.0, 756.5, 581.0);
           ctx.fillStyle = "rgb(255, 255, 255)";
           ctx.fill();

           // layer6/linesrasterizelines/Path
           ctx.beginPath();
           ctx.moveTo(753.8, 581.0);
           ctx.bezierCurveTo(753.8, 581.0, 753.4, 594.3, 744.4, 594.3);
           ctx.bezierCurveTo(735.5, 594.3, 616.0, 595.4, 616.0, 595.4);
           ctx.lineTo(616.0, 593.0);
           ctx.bezierCurveTo(616.0, 593.0, 696.2, 592.3, 744.0, 592.0);
           ctx.bezierCurveTo(752.1, 591.5, 750.5, 581.0, 750.5, 581.0);
           ctx.fill();

           // layer6/linesrasterizelines/Path
           ctx.beginPath();
           ctx.moveTo(622.0, 617.9);
           ctx.bezierCurveTo(622.0, 620.2, 620.8, 622.0, 619.2, 622.0);
           ctx.lineTo(586.9, 622.0);
           ctx.bezierCurveTo(585.3, 622.0, 584.0, 620.2, 584.0, 617.9);
           ctx.lineTo(584.0, 592.0);
           ctx.bezierCurveTo(584.0, 589.7, 585.3, 588.0, 586.9, 588.0);
           ctx.lineTo(619.2, 588.0);
           ctx.bezierCurveTo(620.8, 588.0, 622.0, 589.7, 622.0, 592.0);
           ctx.lineTo(622.0, 617.9);
           ctx.closePath();
           ctx.fillStyle = "rgb(188, 203, 211)";
           ctx.fill();

           // layer6/linesrasterizelines/Path
           ctx.beginPath();
           ctx.moveTo(608.0, 768.0);
           ctx.lineTo(598.0, 768.0);
           ctx.lineTo(598.0, 622.0);
           ctx.lineTo(608.0, 622.0);
           ctx.lineTo(608.0, 768.0);
           ctx.closePath();
           ctx.fill();
           ctx.restore();
        
    }
        return {
            blade: blade,
            lines: lines
        }
});