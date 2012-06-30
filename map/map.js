define("map", ["extern/canvas.Sprites/canvas.Sprites"], function(Sprite) {
    return function(){
            var introRead = false;
            var windmills = new Array({"x":820,"y":70, "scale":.12, "rot": 0, "speed": .1},
                                        {"x":760,"y":110, "scale":.18, "rot": .3, "speed": .05},
                                        {"x":850,"y":50, "scale":.3, "rot": .5, "speed": .07}
                                          );

            var clouds = [{x:-120, y:Math.random()*70, scale:Math.random()+.5}];
            var makeCloud = true;
            var time = 0;
            var introOpacity = 0;
            var transMap = true && !DEBUG; //if we want to do a transformation
            var firstMap = true && !DEBUG; //if first time viewing the map
            var transPos;
            var waterSprite = new Sprite(imgs["waterSprite"].img, 4, {scale: imgs["waterSprite"].scale, x: imgs["waterSprite"].x, y: imgs["waterSprite"].y, ctx: ctx});

            var drawMap = function(){
                drawTitleBG(WIDTH, HEIGHT);

                if(firstMap){
                    transPos = HEIGHT;
                    firstMap = false;    
                }
                 ctx.save();
                 if(transMap){
                    ctx.translate(0, transPos-=8); 
                    if(transPos<=0){
                        transMap = false;
                    }
                 }
                 time++;

                 var toDelete = -1;
                 for(var i in clouds){
                     clouds[i].x+=2; 
                     ctx.save();
                     ctx.scale(clouds[i].scale,clouds[i].scale);
                      drawCloud(clouds[i].x, clouds[i].y);
                     ctx.restore();
                     if((clouds[i].x-140)*clouds[i].scale >= WIDTH){
                        toDelete = i; 
                     }
                 }
                 if(toDelete !== -1){
                     clouds.splice(toDelete, 1);
                 }
                 if(Math.random()<.005){
                    var scale = Math.random()+.5;
                    clouds.push({x:-120*scale, y:Math.random()*70, scale:scale}); 
                 }

                  imgs["map"].draw();

                  if(time%2==0){
                      waterSprite.advance();
                  }
                  waterSprite.draw();

                  var smokeY = 440;
                  drawCoalSmoke(findCoalSmokeX(830, time%101), smokeY, time%101);
                  drawCoalSmoke(findCoalSmokeX(872.5, (time+33)%101), smokeY, (time+33)%101);
                  drawCoalSmoke(findCoalSmokeX(915, (time+66)%101), smokeY, (time+66)%101);

                  smokeY = 440;
                  drawNuclearSmoke(findCoalSmokeX(80, time%101), smokeY, time%101);
                  drawNuclearSmoke(findCoalSmokeX(225, (time+50)%101), smokeY, (time+50)%101);

                  //ctx.drawImage(imgs["smokeNuclear"], 70, 478);

                  //windmills
                  var w = 195;
                  var h = 230;
                  for(var i in windmills){
                      windmills[i].rot +=  windmills[i].speed;
                      windmill(windmills[i].x, windmills[i].y, windmills[i].scale);
                      ctx.save();
                          ctx.translate(windmills[i].x+w*windmills[i].scale, windmills[i].y+h*windmills[i].scale);
                          ctx.rotate(windmills[i].rot);
                          ctx.translate(-(windmills[i].x+w*windmills[i].scale), -(windmills[i].y+h*windmills[i].scale));
                          blades(windmills[i].x, windmills[i].y, windmills[i].scale);
                      //ctx.restore();
                  }

                  if(!transMap && !introRead){
                      imgs['introMsg'].draw({alpha: introOpacity});
                      if(introOpacity<1){
                          introOpacity += .08;
                      }else{
                          introOpacity = 1;
                      }
                  }
                  ctx.restore();
            }

            function drawSmoke(imgName, x, y, dist){
                imgs[imgName].draw({x: x, y: y-dist, alpha: 1-dist/100});
            }

            function drawCoalSmoke(x, y, dist){
                drawSmoke("smokeCoal", x, y, dist);
            }

            function drawNuclearSmoke(x, y, dist){
                drawSmoke("smokeNuclear", x, y, dist);
            }

            function findCoalSmokeX(x, dist){
                return x+((dist)/100)*((dist)/100)*150;
            }

            function drawCloud(x, y){
               ctx.fillStyle = "#FFFFFF";
               var w = 70;
               var h = 50;
               drawEllipse(ctx, x+h*3/4, y, w, h);
               drawEllipse(ctx, x, y+h/2, w, h);
               drawEllipse(ctx, x+h, y+h/2, w, h);
            }

            var mapMousePressed = function(x, y){
                if(transMap || introOpacity !== 1){
                    return "map";
                }
                if(!introRead){
                    introRead = true;
                    return "map";
                }
                if(varersect(375, 285, 375, 275, x, y) /*|| varersect(0, 250, 250, 200, x, y)*/){
                    return "house";    
                }
                if(varersect(700, 50, 300, 300, x, y)){
                    return "wind";    
                }
                if(varersect(0, 0, 375, 280, x, y)){
                    audio['damBG'].play()
                    return "damTop";    
                }

                if(varersect(770, 465, 350, 320, x, y)){
                    return "coal";    
                }
                if(varersect(0, 478, 450, 352, x, y)){
                    return "nuclear";    
                }

                return "map";
            }
            return {
                draw: drawMap,
                mousePressed: mapMousePressed
            };
    };

});