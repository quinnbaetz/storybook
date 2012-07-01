    function wires(ctx, x, y, glowing, alpha){
        ctx.save();
         ctx.translate(x, y);
         ctx.beginPath();
          ctx.moveTo(539.9, 460.0);
          ctx.bezierCurveTo(539.9, 468.0, 601.1, 363.7, 630.6, 429.7);
          ctx.bezierCurveTo(660.1, 495.7, 626.9, 533.8, 600.4, 504.0);
          ctx.bezierCurveTo(574.0, 474.3, 602.4, 338.0, 602.4, 338.0);
          ctx.lineTo(606.1, 338.0);
          /*ctx.bezierCurveTo(606.1, 338.0, 575.5, 462.6, 607.1, 503.7);
          ctx.bezierCurveTo(653.5, 550.2, 647.4, 309.6, 545.1, 471.9);
          ctx.bezierCurveTo(537.9, 463.0, 539.9, 468.0, 539.9, 468.0);*/
          if(glowing){
              ctx.lineWidth = 10;
              ctx.strokeStyle = "rgba(255, 2550, 200, "+alpha+")";
          }else{
            ctx.lineWidth = 3.8;
            ctx.strokeStyle = "rgb(0, 0, 0)";
          }
          ctx.stroke();

          // layer1/Layer 2/redWire
          var startX = 560;
          var startY = 479;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(555.9, 493.4, 630.0, 349.5, 553.3, 354.1);
          ctx.bezierCurveTo(476.6, 358.8, 620.4, 532.9, 670.0, 492.3);
          ctx.bezierCurveTo(696.2, 452.9, 653.1, 348.0, 653.1, 348.0);
          ctx.lineTo(649.1, 348.0);
          ctx.bezierCurveTo(649.1, 348.0, 709.1, 489.6, 651.4, 493.7);
          ctx.bezierCurveTo(593.7, 497.7, 507.7, 371.1, 548.4, 360.7);
          ctx.bezierCurveTo(594.3, 349.0, 581.7, 414.3, 581.7, 414.3);
          ctx.lineTo(startX, startY);
          ctx.closePath();
          if(!glowing){
              ctx.strokeStyle = "rgb(255, 0, 0)";
            }
            ctx.stroke();
            ctx.restore();
    }

    function gears3(x, y, angle){
        // layer1/Layer 2/gear3
        ctx.save();
        tx = 378.9+x;
        ty = 570.1+y;
        ctx.translate(tx, ty);
        ctx.rotate(angle);
        ctx.translate(-tx, -ty);

        ctx.translate(x, y);
        ctx.beginPath();
        ctx.moveTo(396.1, 580.5);
        ctx.lineTo(388.4, 580.1);
        ctx.lineTo(386.2, 587.4);
        ctx.lineTo(380.2, 582.7);
        ctx.lineTo(374.1, 587.2);
        ctx.lineTo(372.1, 579.9);
        ctx.lineTo(364.5, 580.0);
        ctx.lineTo(367.2, 572.9);
        ctx.lineTo(360.9, 568.5);
        ctx.lineTo(367.3, 564.3);
        ctx.lineTo(364.9, 557.1);
        ctx.lineTo(372.5, 557.4);
        ctx.lineTo(374.7, 550.1);
        ctx.lineTo(380.7, 554.9);
        ctx.lineTo(386.8, 550.3);
        ctx.lineTo(388.8, 557.7);
        ctx.lineTo(396.4, 557.6);
        ctx.lineTo(393.7, 564.7);
        ctx.lineTo(400.0, 569.1);
        ctx.lineTo(393.6, 573.3);
        ctx.lineTo(396.1, 580.5);
        ctx.closePath();
        gradient = ctx.createRadialGradient(380.5, 568.8, 0.0, 380.5, 568.8, 19.1);
        gradient.addColorStop(0.00, "rgb(200, 200, 200)");
        gradient.addColorStop(1.00, "rgb(140, 140, 140)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = "rgb(103, 104, 104)";
        ctx.lineJoin = "miter";
        ctx.miterLimit = 4.0;
        ctx.stroke();

        ctx.restore();
    }

    function gears2(x, y, angle){
        ctx.save();

        tx = 358.9+x;
        ty = 480.1+y;
        ctx.translate(tx, ty);
        ctx.rotate(angle);
        ctx.translate(-tx, -ty);

        ctx.translate(x, y);
        
        ctx.beginPath();
        ctx.moveTo(419.4, 528.1);
        ctx.lineTo(404.6, 527.1);
        ctx.lineTo(404.0, 541.9);
        ctx.lineTo(390.0, 537.1);
        ctx.lineTo(385.5, 551.2);
        ctx.lineTo(373.3, 542.9);
        ctx.lineTo(365.3, 555.4);
        ctx.lineTo(355.6, 544.2);
        ctx.lineTo(344.7, 554.2);
        ctx.lineTo(338.2, 540.9);
        ctx.lineTo(325.1, 547.7);
        ctx.lineTo(322.2, 533.2);
        ctx.lineTo(307.8, 536.4);
        ctx.lineTo(308.8, 521.7);
        ctx.lineTo(294.0, 521.0);
        ctx.lineTo(298.8, 507.0);
        ctx.lineTo(284.7, 502.5);
        ctx.lineTo(293.0, 490.3);
        ctx.lineTo(280.5, 482.3);
        ctx.lineTo(291.7, 472.6);
        ctx.lineTo(281.7, 461.7);
        ctx.lineTo(295.0, 455.2);
        ctx.lineTo(288.2, 442.1);
        ctx.lineTo(302.7, 439.2);
        ctx.lineTo(299.5, 424.8);
        ctx.lineTo(314.2, 425.8);
        ctx.lineTo(314.9, 411.0);
        ctx.lineTo(328.9, 415.8);
        ctx.lineTo(333.4, 401.7);
        ctx.lineTo(345.6, 410.0);
        ctx.lineTo(353.6, 397.5);
        ctx.lineTo(363.3, 408.7);
        ctx.lineTo(374.2, 398.7);
        ctx.lineTo(380.7, 412.0);
        ctx.lineTo(393.8, 405.2);
        ctx.lineTo(396.7, 419.7);
        ctx.lineTo(411.1, 416.5);
        ctx.lineTo(410.1, 431.3);
        ctx.lineTo(424.9, 431.9);
        ctx.lineTo(420.1, 445.9);
        ctx.lineTo(434.2, 450.4);
        ctx.lineTo(425.9, 462.6);
        ctx.lineTo(438.4, 470.6);
        ctx.lineTo(427.2, 480.3);
        ctx.lineTo(437.2, 491.2);
        ctx.lineTo(423.9, 497.7);
        ctx.lineTo(430.7, 510.8);
        ctx.lineTo(416.2, 513.7);
        ctx.lineTo(419.4, 528.1);
        ctx.closePath();
        gradient = ctx.createRadialGradient(359.4, 476.5, 0.0, 359.4, 476.5, 78.9);
        gradient.addColorStop(0.00, "rgb(200, 200, 200)");
        gradient.addColorStop(1.00, "rgb(140, 140, 140)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.lineWidth = 1.6;
        ctx.stroke();

        ctx.restore();
    }

    function gears1(x, y, angle){
        ctx.save();
        tx = 348.9+x;
        ty = 360.1+y;
        ctx.translate(tx, ty);
        ctx.rotate(angle);
        ctx.translate(-tx, -ty);

        ctx.translate(x, y);

        ctx.beginPath();
        ctx.moveTo(445.1, 440.0);
        ctx.lineTo(421.5, 438.4);
        ctx.lineTo(420.4, 462.0);
        ctx.lineTo(398.0, 454.3);
        ctx.lineTo(390.9, 476.9);
        ctx.lineTo(371.2, 463.7);
        ctx.lineTo(358.5, 483.7);
        ctx.lineTo(342.9, 465.8);
        ctx.lineTo(325.5, 481.8);
        ctx.lineTo(315.0, 460.5);
        ctx.lineTo(294.0, 471.4);
        ctx.lineTo(289.5, 448.2);
        ctx.lineTo(266.4, 453.3);
        ctx.lineTo(268.0, 429.6);
        ctx.lineTo(244.3, 428.6);
        ctx.lineTo(252.0, 406.2);
        ctx.lineTo(229.4, 399.0);
        ctx.lineTo(242.6, 379.4);
        ctx.lineTo(222.7, 366.6);
        ctx.lineTo(240.5, 351.1);
        ctx.lineTo(224.6, 333.6);
        ctx.lineTo(245.8, 323.2);
        ctx.lineTo(234.9, 302.2);
        ctx.lineTo(258.2, 297.6);
        ctx.lineTo(253.1, 274.5);
        ctx.lineTo(276.7, 276.1);
        ctx.lineTo(277.8, 252.5);
        ctx.lineTo(300.2, 260.2);
        ctx.lineTo(307.3, 237.6);
        ctx.lineTo(327.0, 250.8);
        ctx.lineTo(339.7, 230.8);
        ctx.lineTo(355.3, 248.7);
        ctx.lineTo(372.8, 232.7);
        ctx.lineTo(383.2, 254.0);
        ctx.lineTo(404.2, 243.1);
        ctx.lineTo(408.7, 266.3);
        ctx.lineTo(431.9, 261.2);
        ctx.lineTo(430.2, 284.8);
        ctx.lineTo(453.9, 285.9);
        ctx.lineTo(446.2, 308.3);
        ctx.lineTo(468.8, 315.5);
        ctx.lineTo(455.6, 335.1);
        ctx.lineTo(475.5, 347.9);
        ctx.lineTo(457.7, 363.4);
        ctx.lineTo(473.6, 380.9);
        ctx.lineTo(452.4, 391.3);
        ctx.lineTo(463.3, 412.3);
        ctx.lineTo(440.0, 416.9);
        ctx.lineTo(445.1, 440.0);
        ctx.closePath();
        gradient = ctx.createRadialGradient(349.1, 357.2, 0.0, 349.1, 357.2, 126.4);
        gradient.addColorStop(0.00, "rgb(200, 200, 200)");
        gradient.addColorStop(1.00, "rgb(140, 140, 140)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.lineWidth = 2.6;
        ctx.stroke();

        ctx.restore();
    }
