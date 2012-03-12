
        function crank() {
    		ctx.drawImage(imgs["crank"].img, imgs["crank"].x-imgs["crank"].width, imgs["crank"].y-imgs["crank"].height+110, imgs["crank"].width, imgs["crank"].height);
    	}
    
        function container(x, y) {
    	  if(false){
    		 ctx.drawImage(imgs["container"], 200, 300, 370*.7, 533*.7);
    	  }else{
    			  
          	var alpha = ctx.globalAlpha;
    
          // container/Path
          ctx.save();
    	  ctx.translate(x+200, y-20);
    	  ctx.scale(.7, .7);
          ctx.globalAlpha = alpha * 0.75;
          ctx.beginPath();
          ctx.moveTo(256.2, 713.9);
          ctx.lineTo(235.2, 708.6);
          ctx.lineTo(230.2, 729.7);
          ctx.lineTo(210.9, 719.7);
          ctx.lineTo(201.2, 739.1);
          ctx.lineTo(184.8, 724.9);
          ctx.lineTo(170.9, 741.5);
          ctx.lineTo(158.2, 723.9);
          ctx.lineTo(140.8, 736.9);
          ctx.lineTo(132.5, 716.9);
          ctx.lineTo(112.6, 725.5);
          ctx.lineTo(109.1, 704.1);
          ctx.lineTo(87.8, 707.9);
          ctx.lineTo(89.3, 686.3);
          ctx.lineTo(67.7, 685.0);
          ctx.lineTo(74.2, 664.3);
          ctx.lineTo(53.4, 658.1);
          ctx.lineTo(64.5, 639.5);
          ctx.lineTo(45.7, 628.7);
          ctx.lineTo(60.8, 613.1);
          ctx.lineTo(45.0, 598.3);
          ctx.lineTo(63.3, 586.6);
          ctx.lineTo(51.3, 568.5);
          ctx.lineTo(71.8, 561.4);
          ctx.lineTo(64.4, 541.0);
          ctx.lineTo(86.0, 538.8);
          ctx.lineTo(83.4, 517.2);
          ctx.lineTo(104.9, 520.0);
          ctx.lineTo(107.4, 498.5);
          ctx.lineTo(127.7, 506.2);
          ctx.lineTo(135.1, 485.8);
          ctx.lineTo(153.0, 498.0);
          ctx.lineTo(164.9, 479.8);
          ctx.lineTo(179.6, 495.8);
          ctx.lineTo(195.4, 480.9);
          ctx.lineTo(205.9, 499.8);
          ctx.lineTo(224.7, 489.0);
          ctx.lineTo(230.6, 509.8);
          ctx.lineTo(251.4, 503.6);
          ctx.lineTo(252.4, 525.3);
          ctx.lineTo(274.0, 524.0);
          ctx.lineTo(270.0, 545.3);
          ctx.lineTo(291.3, 549.0);
          ctx.lineTo(282.5, 568.8);
          ctx.lineTo(302.4, 577.4);
          ctx.lineTo(289.2, 594.6);
          ctx.lineTo(306.6, 607.5);
          ctx.lineTo(289.8, 621.2);
          ctx.lineTo(303.8, 637.8);
          ctx.lineTo(284.2, 647.3);
          ctx.lineTo(294.0, 666.7);
          ctx.lineTo(272.8, 671.4);
          ctx.lineTo(277.9, 692.5);
          ctx.lineTo(256.2, 692.2);
          ctx.lineTo(256.2, 713.9);
          ctx.closePath();
          ctx.lineWidth = 0.6;
          ctx.strokeStyle = "rgb(238, 151, 73)";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 4.0;
          ctx.stroke();
    
          // case/Path
          ctx.beginPath();
          ctx.moveTo(242.0, 905.7);
          ctx.lineTo(226.2, 901.7);
          ctx.lineTo(222.4, 917.6);
          ctx.lineTo(208.0, 910.1);
          ctx.lineTo(200.7, 924.7);
          ctx.lineTo(188.3, 914.0);
          ctx.lineTo(177.8, 926.5);
          ctx.lineTo(168.3, 913.3);
          ctx.lineTo(155.2, 923.1);
          ctx.lineTo(148.9, 908.0);
          ctx.lineTo(134.0, 914.5);
          ctx.lineTo(131.4, 898.4);
          ctx.lineTo(115.3, 901.2);
          ctx.lineTo(116.5, 884.9);
          ctx.lineTo(100.2, 884.0);
          ctx.lineTo(105.1, 868.5);
          ctx.lineTo(89.4, 863.8);
          ctx.lineTo(97.8, 849.8);
          ctx.lineTo(83.6, 841.6);
          ctx.lineTo(95.0, 829.9);
          ctx.lineTo(83.1, 818.7);
          ctx.lineTo(96.9, 810.0);
          ctx.lineTo(87.9, 796.3);
          ctx.lineTo(103.3, 791.0);
          ctx.lineTo(97.7, 775.6);
          ctx.lineTo(113.9, 774.0);
          ctx.lineTo(112.0, 757.8);
          ctx.lineTo(128.2, 759.9);
          ctx.lineTo(130.1, 743.7);
          ctx.lineTo(145.3, 749.5);
          ctx.lineTo(150.9, 734.1);
          ctx.lineTo(164.4, 743.3);
          ctx.lineTo(173.3, 729.6);
          ctx.lineTo(184.4, 741.7);
          ctx.lineTo(196.2, 730.4);
          ctx.lineTo(204.2, 744.7);
          ctx.lineTo(218.3, 736.5);
          ctx.lineTo(222.8, 752.2);
          ctx.lineTo(238.4, 747.5);
          ctx.lineTo(239.1, 763.8);
          ctx.lineTo(255.4, 762.8);
          ctx.lineTo(252.4, 778.9);
          ctx.lineTo(268.4, 781.7);
          ctx.lineTo(261.8, 796.6);
          ctx.lineTo(276.8, 803.0);
          ctx.lineTo(266.8, 816.0);
          ctx.lineTo(279.9, 825.7);
          ctx.lineTo(267.3, 836.0);
          ctx.lineTo(277.8, 848.5);
          ctx.lineTo(263.1, 855.6);
          ctx.lineTo(270.5, 870.2);
          ctx.lineTo(254.5, 873.7);
          ctx.lineTo(258.3, 889.6);
          ctx.lineTo(242.0, 889.4);
          ctx.lineTo(242.0, 905.7);
          ctx.closePath();
          ctx.stroke();
    
          // case/Path
          ctx.globalAlpha = alpha * 0.75;
          ctx.beginPath();
          ctx.moveTo(349.0, 621.5);
          ctx.bezierCurveTo(349.0, 629.6, 338.8, 931.3, 322.0, 936.5);
          ctx.bezierCurveTo(261.6, 955.4, 115.5, 955.8, 49.0, 938.3);
          ctx.bezierCurveTo(28.1, 932.8, 15.0, 630.6, 15.0, 621.5);
          ctx.bezierCurveTo(15.0, 529.3, 89.8, 454.5, 182.0, 454.5);
          ctx.bezierCurveTo(274.2, 454.5, 349.0, 529.3, 349.0, 621.5);
          ctx.closePath();
          ctx.fillStyle = "rgb(235, 27, 35)";
          ctx.fill();
          ctx.restore();
    	  }
     }
    
        function largeGear(angle) {
            var cTGearX = imgs['tGear'].x;
            var cTGearY = imgs['tGear'].y;
            
            var tGearWidth = imgs['tGear'].width;
            var tGearHeight = imgs['tGear'].height;
    	   
            ctx.save();
    	  
            ctx.translate(cTGearX, cTGearY);
            ctx.rotate(angle);
            ctx.translate(-cTGearX, -cTGearY);
    	  
    	 
    	  if(true){
    	      ctx.drawImage(imgs["tGear"].img, cTGearX-tGearWidth/2, cTGearY-tGearHeight/2, tGearWidth, tGearHeight);
    	  }else{
    		 ctx.translate(205, 324);
    	  	 ctx.scale(1.3, 1.3);
    		   var gradient;
    	
    		  // largeGear/Path
    		  ctx.beginPath();
    		  ctx.moveTo(150.4, 117.6);
    		  ctx.lineTo(143.2, 115.5);
    		  ctx.lineTo(145.7, 122.6);
    		  ctx.lineTo(138.7, 119.8);
    		  ctx.lineTo(140.5, 127.1);
    		  ctx.lineTo(133.8, 123.6);
    		  ctx.lineTo(134.9, 131.1);
    		  ctx.lineTo(128.5, 126.9);
    		  ctx.lineTo(128.8, 134.4);
    		  ctx.lineTo(122.9, 129.7);
    		  ctx.lineTo(122.5, 137.1);
    		  ctx.lineTo(117.1, 131.9);
    		  ctx.lineTo(115.9, 139.2);
    		  ctx.lineTo(111.0, 133.4);
    		  ctx.lineTo(109.1, 140.6);
    		  ctx.lineTo(104.8, 134.4);
    		  ctx.lineTo(102.2, 141.3);
    		  ctx.lineTo(98.5, 134.7);
    		  ctx.lineTo(95.3, 141.3);
    		  ctx.lineTo(92.3, 134.4);
    		  ctx.lineTo(88.3, 140.7);
    		  ctx.lineTo(86.0, 133.5);
    		  ctx.lineTo(81.4, 139.3);
    		  ctx.lineTo(79.9, 132.0);
    		  ctx.lineTo(74.7, 137.3);
    		  ctx.lineTo(73.9, 129.9);
    		  ctx.lineTo(68.3, 134.6);
    		  ctx.lineTo(68.2, 127.2);
    		  ctx.lineTo(62.0, 131.3);
    		  ctx.lineTo(62.7, 123.9);
    		  ctx.lineTo(56.2, 127.4);
    		  ctx.lineTo(57.6, 120.1);
    		  ctx.lineTo(50.7, 123.0);
    		  ctx.lineTo(52.8, 115.9);
    		  ctx.lineTo(45.7, 118.0);
    		  ctx.lineTo(48.5, 111.2);
    		  ctx.lineTo(41.3, 112.6);
    		  ctx.lineTo(44.7, 106.1);
    		  ctx.lineTo(37.3, 106.8);
    		  ctx.lineTo(41.4, 100.6);
    		  ctx.lineTo(34.0, 100.6);
    		  ctx.lineTo(38.7, 94.9);
    		  ctx.lineTo(31.2, 94.1);
    		  ctx.lineTo(36.5, 89.0);
    		  ctx.lineTo(29.2, 87.4);
    		  ctx.lineTo(35.0, 82.8);
    		  ctx.lineTo(27.8, 80.6);
    		  ctx.lineTo(34.0, 76.6);
    		  ctx.lineTo(27.1, 73.7);
    		  ctx.lineTo(33.7, 70.3);
    		  ctx.lineTo(27.1, 66.7);
    		  ctx.lineTo(34.0, 64.1);
    		  ctx.lineTo(27.7, 59.8);
    		  ctx.lineTo(34.9, 57.9);
    		  ctx.lineTo(29.1, 53.0);
    		  ctx.lineTo(36.4, 51.8);
    		  ctx.lineTo(31.1, 46.4);
    		  ctx.lineTo(38.6, 45.9);
    		  ctx.lineTo(33.8, 40.1);
    		  ctx.lineTo(41.3, 40.3);
    		  ctx.lineTo(37.1, 34.0);
    		  ctx.lineTo(44.6, 35.0);
    		  ctx.lineTo(41.0, 28.4);
    		  ctx.lineTo(48.3, 30.1);
    		  ctx.lineTo(45.5, 23.2);
    		  ctx.lineTo(52.6, 25.6);
    		  ctx.lineTo(50.5, 18.4);
    		  ctx.lineTo(57.3, 21.5);
    		  ctx.lineTo(55.9, 14.2);
    		  ctx.lineTo(62.4, 18.0);
    		  ctx.lineTo(61.7, 10.5);
    		  ctx.lineTo(67.9, 15.0);
    		  ctx.lineTo(67.9, 7.5);
    		  ctx.lineTo(73.6, 12.5);
    		  ctx.lineTo(74.4, 5.1);
    		  ctx.lineTo(79.6, 10.6);
    		  ctx.lineTo(81.1, 3.4);
    		  ctx.lineTo(85.7, 9.4);
    		  ctx.lineTo(87.9, 2.3);
    		  ctx.lineTo(91.9, 8.7);
    		  ctx.lineTo(94.9, 1.9);
    		  ctx.lineTo(98.2, 8.7);
    		  ctx.lineTo(101.9, 2.3);
    		  ctx.lineTo(104.5, 9.3);
    		  ctx.lineTo(108.8, 3.3);
    		  ctx.lineTo(110.7, 10.5);
    		  ctx.lineTo(115.6, 5.0);
    		  ctx.lineTo(116.8, 12.3);
    		  ctx.lineTo(122.2, 7.3);
    		  ctx.lineTo(122.6, 14.8);
    		  ctx.lineTo(128.5, 10.3);
    		  ctx.lineTo(128.2, 17.8);
    		  ctx.lineTo(134.6, 13.9);
    		  ctx.lineTo(133.5, 21.3);
    		  ctx.lineTo(140.2, 18.1);
    		  ctx.lineTo(138.5, 25.3);
    		  ctx.lineTo(145.4, 22.8);
    		  ctx.lineTo(143.0, 29.8);
    		  ctx.lineTo(150.2, 28.0);
    		  ctx.lineTo(147.0, 34.7);
    		  ctx.lineTo(154.4, 33.6);
    		  ctx.lineTo(150.6, 40.0);
    		  ctx.lineTo(158.1, 39.6);
    		  ctx.lineTo(153.6, 45.5);
    		  ctx.lineTo(161.1, 46.0);
    		  ctx.lineTo(156.1, 51.4);
    		  ctx.lineTo(163.5, 52.5);
    		  ctx.lineTo(158.0, 57.4);
    		  ctx.lineTo(165.2, 59.3);
    		  ctx.lineTo(159.2, 63.6);
    		  ctx.lineTo(166.3, 66.2);
    		  ctx.lineTo(159.9, 69.9);
    		  ctx.lineTo(166.7, 73.2);
    		  ctx.lineTo(159.9, 76.2);
    		  ctx.lineTo(166.3, 80.1);
    		  ctx.lineTo(159.3, 82.4);
    		  ctx.lineTo(165.3, 87.0);
    		  ctx.lineTo(158.0, 88.5);
    		  ctx.lineTo(163.6, 93.7);
    		  ctx.lineTo(156.2, 94.5);
    		  ctx.lineTo(161.2, 100.1);
    		  ctx.lineTo(153.8, 100.2);
    		  ctx.lineTo(158.2, 106.3);
    		  ctx.lineTo(150.8, 105.7);
    		  ctx.lineTo(154.6, 112.2);
    		  ctx.lineTo(147.2, 110.8);
    		  ctx.lineTo(150.4, 117.6);
    		  ctx.closePath();
    		  gradient = ctx.createRadialGradient(96.9, 71.6, 0.0, 96.9, 71.6, 69.8);
    		  gradient.addColorStop(0.00, "rgb(200, 200, 200)");
    		  gradient.addColorStop(1.00, "rgb(140, 140, 140)");
    		  ctx.fillStyle = gradient;
    		  ctx.fill();
    		  ctx.lineWidth = 1.6;
    		  ctx.strokeStyle = "rgb(103, 104, 104)";
    		  ctx.lineJoin = "miter";
    		  ctx.miterLimit = 4.0;
    		  ctx.stroke();
    	  }
    	  ctx.restore();
        }
    
        function smallGear(angle) {

            var cBGearX = imgs['bGear'].x;
            var cBGearY = imgs['bGear'].y;
            var bGearWidth = imgs['bGear'].width;
            var bGearHeight = imgs['bGear'].height;
            
    	  ctx.save();
    	  ctx.translate(cBGearX, cBGearY);
    	  ctx.rotate(-angle*2);
    	  ctx.translate(-cBGearX, -cBGearY);
    	  
    	  
    	  if(true){
    	      ctx.drawImage(imgs["bGear"].img, cBGearX-bGearWidth/2, cBGearY-bGearHeight/2, bGearWidth, bGearHeight);
    	  }else{
    		  ctx.translate(-250, 343);
    	  ctx.scale(1.3, 1.3);
    		  var gradient;
    
          // smallGear/Path
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(480.6, 200.7);
          ctx.lineTo(475.8, 199.3);
          ctx.lineTo(477.5, 204.1);
          ctx.lineTo(472.8, 202.2);
          ctx.lineTo(474.0, 207.1);
          ctx.lineTo(469.5, 204.8);
          ctx.lineTo(470.2, 209.7);
          ctx.lineTo(465.9, 207.0);
          ctx.lineTo(466.1, 212.0);
          ctx.lineTo(462.1, 208.8);
          ctx.lineTo(461.8, 213.8);
          ctx.lineTo(458.2, 210.3);
          ctx.lineTo(457.4, 215.2);
          ctx.lineTo(454.1, 211.3);
          ctx.lineTo(452.8, 216.2);
          ctx.lineTo(450.0, 212.0);
          ctx.lineTo(448.2, 216.7);
          ctx.lineTo(445.7, 212.2);
          ctx.lineTo(443.5, 216.7);
          ctx.lineTo(441.5, 212.0);
          ctx.lineTo(438.8, 216.2);
          ctx.lineTo(437.3, 211.4);
          ctx.lineTo(434.2, 215.3);
          ctx.lineTo(433.2, 210.4);
          ctx.lineTo(429.7, 213.9);
          ctx.lineTo(429.1, 208.9);
          ctx.lineTo(425.3, 212.1);
          ctx.lineTo(425.3, 207.1);
          ctx.lineTo(421.2, 209.9);
          ctx.lineTo(421.6, 204.9);
          ctx.lineTo(417.2, 207.3);
          ctx.lineTo(418.2, 202.4);
          ctx.lineTo(413.6, 204.3);
          ctx.lineTo(415.0, 199.5);
          ctx.lineTo(410.2, 201.0);
          ctx.lineTo(412.1, 196.4);
          ctx.lineTo(407.2, 197.3);
          ctx.lineTo(409.5, 192.9);
          ctx.lineTo(404.5, 193.4);
          ctx.lineTo(407.3, 189.3);
          ctx.lineTo(402.3, 189.2);
          ctx.lineTo(405.4, 185.4);
          ctx.lineTo(400.4, 184.9);
          ctx.lineTo(404.0, 181.4);
          ctx.lineTo(399.0, 180.4);
          ctx.lineTo(402.9, 177.3);
          ctx.lineTo(398.1, 175.8);
          ctx.lineTo(402.3, 173.1);
          ctx.lineTo(397.6, 171.1);
          ctx.lineTo(402.1, 168.9);
          ctx.lineTo(397.6, 166.4);
          ctx.lineTo(402.3, 164.7);
          ctx.lineTo(398.1, 161.8);
          ctx.lineTo(402.9, 160.5);
          ctx.lineTo(399.0, 157.2);
          ctx.lineTo(403.9, 156.4);
          ctx.lineTo(400.4, 152.8);
          ctx.lineTo(405.4, 152.5);
          ctx.lineTo(402.2, 148.5);
          ctx.lineTo(407.2, 148.7);
          ctx.lineTo(404.4, 144.5);
          ctx.lineTo(409.4, 145.1);
          ctx.lineTo(407.0, 140.6);
          ctx.lineTo(411.9, 141.8);
          ctx.lineTo(410.0, 137.1);
          ctx.lineTo(414.8, 138.8);
          ctx.lineTo(413.4, 133.9);
          ctx.lineTo(418.0, 136.0);
          ctx.lineTo(417.0, 131.1);
          ctx.lineTo(421.4, 133.6);
          ctx.lineTo(421.0, 128.6);
          ctx.lineTo(425.1, 131.6);
          ctx.lineTo(425.1, 126.6);
          ctx.lineTo(428.9, 130.0);
          ctx.lineTo(429.5, 125.0);
          ctx.lineTo(432.9, 128.7);
          ctx.lineTo(434.0, 123.8);
          ctx.lineTo(437.1, 127.8);
          ctx.lineTo(438.6, 123.1);
          ctx.lineTo(441.3, 127.4);
          ctx.lineTo(443.3, 122.8);
          ctx.lineTo(445.5, 127.4);
          ctx.lineTo(448.0, 123.1);
          ctx.lineTo(449.7, 127.8);
          ctx.lineTo(452.6, 123.7);
          ctx.lineTo(453.9, 128.6);
          ctx.lineTo(457.2, 124.9);
          ctx.lineTo(458.0, 129.9);
          ctx.lineTo(461.6, 126.5);
          ctx.lineTo(461.9, 131.5);
          ctx.lineTo(465.9, 128.5);
          ctx.lineTo(465.7, 133.5);
          ctx.lineTo(470.0, 130.9);
          ctx.lineTo(469.3, 135.9);
          ctx.lineTo(473.8, 133.7);
          ctx.lineTo(472.6, 138.6);
          ctx.lineTo(477.3, 136.9);
          ctx.lineTo(475.6, 141.6);
          ctx.lineTo(480.5, 140.4);
          ctx.lineTo(478.4, 144.9);
          ctx.lineTo(483.3, 144.2);
          ctx.lineTo(480.8, 148.4);
          ctx.lineTo(485.8, 148.2);
          ctx.lineTo(482.8, 152.2);
          ctx.lineTo(487.8, 152.5);
          ctx.lineTo(484.5, 156.1);
          ctx.lineTo(489.4, 156.9);
          ctx.lineTo(485.7, 160.2);
          ctx.lineTo(490.6, 161.5);
          ctx.lineTo(486.6, 164.4);
          ctx.lineTo(491.3, 166.1);
          ctx.lineTo(487.0, 168.6);
          ctx.lineTo(491.6, 170.8);
          ctx.lineTo(487.0, 172.8);
          ctx.lineTo(491.3, 175.5);
          ctx.lineTo(486.6, 177.0);
          ctx.lineTo(490.7, 180.1);
          ctx.lineTo(485.8, 181.1);
          ctx.lineTo(489.5, 184.6);
          ctx.lineTo(484.5, 185.1);
          ctx.lineTo(487.9, 188.9);
          ctx.lineTo(482.9, 189.0);
          ctx.lineTo(485.9, 193.1);
          ctx.lineTo(480.9, 192.7);
          ctx.lineTo(483.5, 197.0);
          ctx.lineTo(478.5, 196.1);
          ctx.lineTo(480.6, 200.7);
          ctx.closePath();
          gradient = ctx.createRadialGradient(444.6, 169.8, 0.0, 444.6, 169.8, 46.9);
          gradient.addColorStop(0.00, "rgb(200, 200, 200)");
          gradient.addColorStop(1.00, "rgb(140, 140, 140)");
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.lineWidth = 1.6;
          ctx.strokeStyle = "rgb(103, 104, 104)";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 4.0;
          ctx.stroke();
    
          // smallGear/Path
          ctx.beginPath();
          ctx.moveTo(455.4, 179.0);
          ctx.lineTo(453.8, 178.5);
          ctx.lineTo(454.3, 180.0);
          ctx.lineTo(452.8, 179.4);
          ctx.lineTo(453.2, 181.0);
          ctx.lineTo(451.7, 180.3);
          ctx.lineTo(452.0, 181.9);
          ctx.lineTo(450.6, 181.0);
          ctx.lineTo(450.7, 182.6);
          ctx.lineTo(449.4, 181.6);
          ctx.lineTo(449.3, 183.2);
          ctx.lineTo(448.1, 182.1);
          ctx.lineTo(447.8, 183.7);
          ctx.lineTo(446.8, 182.4);
          ctx.lineTo(446.4, 184.0);
          ctx.lineTo(445.4, 182.6);
          ctx.lineTo(444.9, 184.1);
          ctx.lineTo(444.1, 182.7);
          ctx.lineTo(443.3, 184.1);
          ctx.lineTo(442.7, 182.6);
          ctx.lineTo(441.8, 184.0);
          ctx.lineTo(441.3, 182.4);
          ctx.lineTo(440.3, 183.7);
          ctx.lineTo(440.0, 182.1);
          ctx.lineTo(438.9, 183.2);
          ctx.lineTo(438.7, 181.6);
          ctx.lineTo(437.5, 182.7);
          ctx.lineTo(437.4, 181.0);
          ctx.lineTo(436.1, 181.9);
          ctx.lineTo(436.3, 180.3);
          ctx.lineTo(434.8, 181.1);
          ctx.lineTo(435.1, 179.5);
          ctx.lineTo(433.6, 180.1);
          ctx.lineTo(434.1, 178.6);
          ctx.lineTo(432.6, 179.0);
          ctx.lineTo(433.2, 177.5);
          ctx.lineTo(431.6, 177.9);
          ctx.lineTo(432.3, 176.4);
          ctx.lineTo(430.7, 176.6);
          ctx.lineTo(431.6, 175.2);
          ctx.lineTo(430.0, 175.2);
          ctx.lineTo(431.0, 174.0);
          ctx.lineTo(429.4, 173.8);
          ctx.lineTo(430.5, 172.7);
          ctx.lineTo(428.9, 172.4);
          ctx.lineTo(430.2, 171.4);
          ctx.lineTo(428.6, 170.9);
          ctx.lineTo(430.0, 170.0);
          ctx.lineTo(428.5, 169.4);
          ctx.lineTo(429.9, 168.6);
          ctx.lineTo(428.5, 167.9);
          ctx.lineTo(430.0, 167.3);
          ctx.lineTo(428.6, 166.3);
          ctx.lineTo(430.2, 165.9);
          ctx.lineTo(428.9, 164.9);
          ctx.lineTo(430.5, 164.6);
          ctx.lineTo(429.4, 163.4);
          ctx.lineTo(431.0, 163.3);
          ctx.lineTo(430.0, 162.0);
          ctx.lineTo(431.6, 162.1);
          ctx.lineTo(430.7, 160.7);
          ctx.lineTo(432.3, 161.0);
          ctx.lineTo(431.5, 159.5);
          ctx.lineTo(433.1, 159.9);
          ctx.lineTo(432.5, 158.4);
          ctx.lineTo(434.1, 158.9);
          ctx.lineTo(433.6, 157.3);
          ctx.lineTo(435.1, 158.0);
          ctx.lineTo(434.8, 156.4);
          ctx.lineTo(436.2, 157.2);
          ctx.lineTo(436.0, 155.6);
          ctx.lineTo(437.4, 156.6);
          ctx.lineTo(437.4, 154.9);
          ctx.lineTo(438.6, 156.0);
          ctx.lineTo(438.8, 154.4);
          ctx.lineTo(439.9, 155.6);
          ctx.lineTo(440.3, 154.0);
          ctx.lineTo(441.3, 155.4);
          ctx.lineTo(441.8, 153.8);
          ctx.lineTo(442.6, 155.2);
          ctx.lineTo(443.3, 153.7);
          ctx.lineTo(444.0, 155.2);
          ctx.lineTo(444.8, 153.8);
          ctx.lineTo(445.4, 155.3);
          ctx.lineTo(446.3, 154.0);
          ctx.lineTo(446.7, 155.6);
          ctx.lineTo(447.8, 154.4);
          ctx.lineTo(448.0, 156.0);
          ctx.lineTo(449.2, 154.9);
          ctx.lineTo(449.3, 156.5);
          ctx.lineTo(450.6, 155.6);
          ctx.lineTo(450.5, 157.2);
          ctx.lineTo(451.9, 156.3);
          ctx.lineTo(451.7, 158.0);
          ctx.lineTo(453.1, 157.3);
          ctx.lineTo(452.8, 158.8);
          ctx.lineTo(454.3, 158.3);
          ctx.lineTo(453.7, 159.8);
          ctx.lineTo(455.3, 159.4);
          ctx.lineTo(454.6, 160.9);
          ctx.lineTo(456.2, 160.6);
          ctx.lineTo(455.4, 162.0);
          ctx.lineTo(457.0, 162.0);
          ctx.lineTo(456.1, 163.2);
          ctx.lineTo(457.7, 163.3);
          ctx.lineTo(456.6, 164.5);
          ctx.lineTo(458.2, 164.8);
          ctx.lineTo(457.0, 165.8);
          ctx.lineTo(458.6, 166.2);
          ctx.lineTo(457.3, 167.2);
          ctx.lineTo(458.8, 167.7);
          ctx.lineTo(457.4, 168.5);
          ctx.lineTo(458.9, 169.3);
          ctx.lineTo(457.4, 169.9);
          ctx.lineTo(458.8, 170.8);
          ctx.lineTo(457.3, 171.3);
          ctx.lineTo(458.6, 172.3);
          ctx.lineTo(457.0, 172.6);
          ctx.lineTo(458.2, 173.7);
          ctx.lineTo(456.6, 173.9);
          ctx.lineTo(457.7, 175.1);
          ctx.lineTo(456.1, 175.2);
          ctx.lineTo(457.1, 176.5);
          ctx.lineTo(455.4, 176.4);
          ctx.lineTo(456.3, 177.8);
          ctx.lineTo(454.7, 177.5);
          ctx.lineTo(455.4, 179.0);
          ctx.closePath();
          gradient = ctx.createRadialGradient(443.7, 168.9, 0.0, 443.7, 168.9, 15.2);
          gradient.addColorStop(0.00, "rgb(200, 200, 200)");
          gradient.addColorStop(1.00, "rgb(140, 140, 140)");
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.stroke();
          ctx.restore();
    	  }
    	  ctx.restore();
        }
    	
    	
    	function blades(x, y, scale){
    	  // layer1/blades/Path
          ctx.save();
    	  ctx.translate(x, y);
    	  ctx.scale(scale, scale);
    	  
          ctx.beginPath();
          ctx.moveTo(98.9, 253.9);
          ctx.bezierCurveTo(114.5, 245.6, 167.8, 239.0, 167.8, 239.0);
          ctx.bezierCurveTo(167.8, 239.0, 157.6, 289.2, 131.5, 303.1);
          ctx.bezierCurveTo(105.4, 317.0, 4.4, 345.2, 4.4, 345.2);
          ctx.bezierCurveTo(4.4, 345.2, 70.0, 269.4, 98.9, 253.9);
          ctx.closePath();
          ctx.fillStyle = "rgb(188, 203, 211)";
          ctx.fill();
          ctx.lineWidth = 3.0;
          ctx.strokeStyle = "rgb(159, 158, 158)";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 4.0;
          ctx.stroke();
    
          // layer1/Windmill/Path
          ctx.beginPath();
          ctx.moveTo(276.1, 287.3);
          ctx.bezierCurveTo(260.4, 279.4, 224.3, 239.6, 224.3, 239.6);
          ctx.bezierCurveTo(224.3, 239.6, 271.2, 219.0, 297.6, 232.3);
          ctx.bezierCurveTo(324.0, 245.6, 405.2, 311.9, 405.2, 311.9);
          ctx.bezierCurveTo(405.2, 311.9, 305.5, 302.0, 276.1, 287.3);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
    
          // layer1/Windmill/Path
          ctx.beginPath();
          ctx.moveTo(226.8, 225.1);
          ctx.bezierCurveTo(226.8, 238.9, 217.6, 257.8, 203.8, 257.8);
          ctx.bezierCurveTo(189.9, 257.8, 167.9, 254.9, 167.9, 241.1);
          ctx.bezierCurveTo(167.9, 227.3, 188.0, 200.1, 201.8, 200.1);
          ctx.bezierCurveTo(215.6, 200.1, 226.8, 211.3, 226.8, 225.1);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
    
          // layer1/Windmill/Path
          ctx.beginPath();
          ctx.moveTo(226.8, 134.2);
          ctx.bezierCurveTo(225.3, 151.7, 201.8, 200.1, 201.8, 200.1);
          ctx.bezierCurveTo(201.8, 200.1, 165.3, 164.2, 167.9, 134.7);
          ctx.bezierCurveTo(170.4, 105.2, 201.8, 5.2, 201.8, 5.2);
          ctx.bezierCurveTo(201.8, 5.2, 229.6, 101.5, 226.8, 134.2);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();
          ctx.restore();
          ctx.restore();
    }
    
    function windmill(x, y, scale){
    	  // layer1/blades/Path
          ctx.save();
    	  ctx.translate(x, y);
    	  ctx.scale(scale, scale);
    	  
    	  
          ctx.beginPath();
          ctx.moveTo(212.3, 241.2);
          ctx.lineTo(212.3, 781.2);
          ctx.lineTo(251.3, 781.2);
          ctx.lineTo(251.3, 241.2);
          ctx.lineTo(212.3, 241.2);
          ctx.closePath();
          ctx.fillStyle = "rgb(203, 203, 203)";
          ctx.fill();
          ctx.lineWidth = 2.0;
          ctx.strokeStyle = "rgb(159, 158, 158)";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 4.0;
          ctx.stroke();
    
          // layer1/blades/Path
          ctx.beginPath();
          ctx.moveTo(212.3, 244.2);
          ctx.bezierCurveTo(212.3, 244.2, 212.3, 273.3, 212.3, 260.8);
          ctx.bezierCurveTo(212.3, 248.2, 241.3, 251.7, 241.3, 268.2);
          ctx.bezierCurveTo(241.3, 284.7, 240.3, 784.2, 240.3, 784.2);
          ctx.lineTo(250.3, 784.2);
          ctx.lineTo(250.3, 244.2);
          ctx.lineTo(212.3, 244.2);
          ctx.closePath();
          ctx.fillStyle = "rgb(159, 158, 158)";
          ctx.fill();
    
          // layer1/blades/Path
          ctx.beginPath();
          ctx.moveTo(199.3, 200.1);
          ctx.bezierCurveTo(199.3, 200.1, 260.3, 168.2, 271.9, 204.9);
          ctx.bezierCurveTo(280.2, 230.9, 217.0, 251.2, 217.0, 251.2);
          ctx.bezierCurveTo(217.0, 251.2, 143.6, 263.9, 199.3, 200.1);
          ctx.closePath();
          ctx.fillStyle = "rgb(188, 203, 211)";
          ctx.fill();
          ctx.lineWidth = 3.0;
          ctx.stroke();
    
          // layer1/blades/Path
          ctx.beginPath();
          ctx.moveTo(221.9, 244.2);
          ctx.bezierCurveTo(221.9, 244.2, 226.2, 239.5, 231.3, 236.8);
          ctx.bezierCurveTo(246.5, 228.9, 275.7, 215.2, 272.5, 207.6);
          ctx.bezierCurveTo(273.3, 223.2, 251.3, 235.6, 251.3, 235.6);
          ctx.bezierCurveTo(251.3, 235.6, 207.9, 256.7, 221.9, 244.2);
          ctx.closePath();
          ctx.fillStyle = "rgb(159, 158, 158)";
          ctx.fill();
    
          // layer1/Windmill
          ctx.restore();	
    }
    
    function dam(x, y, scale){
    	  // layer1/blades/Path
          ctx.save();
    	  ctx.translate(x, y);
    	  ctx.scale(scale, scale);
    	  
          ctx.beginPath();
          ctx.moveTo(338.2, 148.4);
          ctx.bezierCurveTo(349.8, 150.4, 575.0, 186.8, 562.3, 217.3);
          ctx.bezierCurveTo(549.7, 247.8, 1075.3, 270.9, 1075.3, 270.9);
          ctx.lineTo(978.3, 367.3);
          ctx.bezierCurveTo(978.3, 367.3, 474.3, 291.9, 518.3, 257.9);
          ctx.bezierCurveTo(562.3, 223.9, 325.3, 200.3, 325.3, 200.3);
          ctx.bezierCurveTo(325.3, 200.3, 326.7, 146.5, 338.2, 148.4);
          ctx.closePath();
          ctx.fillStyle = "rgb(188, 203, 211)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(140.1, 118.5);
          ctx.bezierCurveTo(140.1, 118.5, 157.2, -32.4, 297.5, 6.4);
          ctx.bezierCurveTo(446.3, 47.4, 434.7, 95.6, 446.3, 110.6);
          ctx.bezierCurveTo(457.8, 125.7, 140.1, 118.5, 140.1, 118.5);
          ctx.closePath();
          ctx.fillStyle = "rgb(0, 165, 80)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(188.2, 45.4);
          ctx.bezierCurveTo(188.2, 45.4, 388.3, 35.2, 388.3, 65.4);
          ctx.bezierCurveTo(388.3, 94.0, 388.5, 152.3, 388.5, 152.3);
          ctx.lineTo(329.7, 193.3);
          ctx.bezierCurveTo(329.7, 193.3, 341.3, 99.3, 312.8, 99.3);
          ctx.bezierCurveTo(284.2, 99.3, 177.3, 101.3, 177.3, 101.3);
          ctx.bezierCurveTo(177.3, 101.3, 152.8, 46.6, 188.2, 45.4);
          ctx.closePath();
          ctx.fillStyle = "rgb(188, 203, 211)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(325.3, 99.4);
          ctx.bezierCurveTo(325.3, 99.4, 378.6, 109.3, 388.3, 65.4);
          ctx.bezierCurveTo(388.3, 149.3, 388.3, 163.3, 388.3, 163.3);
          ctx.bezierCurveTo(388.3, 163.3, 325.3, 207.3, 325.3, 192.3);
          ctx.bezierCurveTo(325.3, 177.3, 325.3, 99.4, 325.3, 99.4);
          ctx.closePath();
          ctx.fillStyle = "rgb(178, 178, 178)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(343.6, 165.1);
          ctx.bezierCurveTo(343.6, 169.8, 341.5, 173.6, 338.8, 173.6);
          ctx.bezierCurveTo(336.1, 173.6, 334.0, 169.8, 334.0, 165.1);
          ctx.bezierCurveTo(334.0, 160.5, 336.1, 156.6, 338.8, 156.6);
          ctx.bezierCurveTo(341.5, 156.6, 343.6, 160.5, 343.6, 165.1);
          ctx.closePath();
          ctx.fillStyle = "rgb(101, 101, 101)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(365.6, 152.1);
          ctx.bezierCurveTo(365.6, 156.8, 363.5, 160.6, 360.8, 160.6);
          ctx.bezierCurveTo(358.1, 160.6, 356.0, 156.8, 356.0, 152.1);
          ctx.bezierCurveTo(356.0, 147.5, 358.1, 143.6, 360.8, 143.6);
          ctx.bezierCurveTo(363.5, 143.6, 365.6, 147.5, 365.6, 152.1);
          ctx.closePath();
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(385.6, 141.1);
          ctx.bezierCurveTo(385.6, 145.8, 383.5, 149.6, 380.8, 149.6);
          ctx.bezierCurveTo(378.1, 149.6, 376.0, 145.8, 376.0, 141.1);
          ctx.bezierCurveTo(376.0, 136.5, 378.1, 132.6, 380.8, 132.6);
          ctx.bezierCurveTo(383.5, 132.6, 385.6, 136.5, 385.6, 141.1);
          ctx.closePath();
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(346.2, 163.3);
          ctx.bezierCurveTo(350.6, 164.4, 359.0, 183.3, 358.3, 189.3);
          ctx.bezierCurveTo(357.6, 195.3, 340.8, 204.2, 343.6, 196.6);
          ctx.bezierCurveTo(346.5, 189.1, 332.0, 168.0, 334.1, 167.1);
          ctx.bezierCurveTo(336.2, 166.2, 341.8, 162.2, 346.2, 163.3);
          ctx.closePath();
          ctx.fillStyle = "rgb(188, 203, 211)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(345.8, 198.6);
          ctx.bezierCurveTo(340.6, 201.0, 338.6, 190.6, 345.0, 193.2);
          ctx.bezierCurveTo(344.6, 191.4, 344.1, 189.8, 345.6, 188.4);
          ctx.bezierCurveTo(347.4, 186.6, 349.5, 187.6, 349.9, 189.9);
          ctx.bezierCurveTo(351.0, 188.5, 351.5, 186.3, 353.6, 185.9);
          ctx.bezierCurveTo(355.5, 185.5, 357.9, 187.4, 356.7, 189.5);
          ctx.bezierCurveTo(358.1, 188.9, 360.2, 186.6, 361.8, 187.4);
          ctx.bezierCurveTo(363.7, 188.3, 363.2, 191.7, 361.5, 192.3);
          ctx.bezierCurveTo(363.8, 193.7, 363.4, 196.7, 360.4, 196.5);
          ctx.bezierCurveTo(361.0, 198.5, 359.3, 198.8, 357.6, 198.5);
          ctx.bezierCurveTo(357.2, 199.9, 356.5, 200.0, 355.6, 200.7);
          ctx.bezierCurveTo(355.2, 200.9, 354.6, 200.5, 354.1, 200.7);
          ctx.bezierCurveTo(353.6, 200.9, 353.5, 201.9, 352.9, 202.3);
          ctx.bezierCurveTo(353.0, 202.2, 350.0, 203.0, 350.5, 203.0);
          ctx.bezierCurveTo(349.5, 202.9, 348.5, 203.4, 348.7, 201.5);
          ctx.bezierCurveTo(347.7, 202.9, 345.8, 203.0, 346.0, 201.0);
          ctx.bezierCurveTo(345.7, 201.5, 345.1, 201.5, 344.8, 201.8);
          ctx.bezierCurveTo(344.0, 200.9, 344.1, 199.7, 344.9, 198.8);
          ctx.bezierCurveTo(344.7, 198.5, 344.4, 198.4, 344.1, 198.3);
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.fill();
          ctx.strokeStyle = "rgb(188, 203, 211)";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 4.0;
          ctx.stroke();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(369.2, 152.3);
          ctx.bezierCurveTo(373.6, 153.4, 382.0, 172.3, 381.3, 178.3);
          ctx.bezierCurveTo(380.6, 184.3, 363.8, 193.2, 366.6, 185.6);
          ctx.bezierCurveTo(369.5, 178.1, 355.0, 157.0, 357.1, 156.1);
          ctx.bezierCurveTo(359.2, 155.2, 364.8, 151.2, 369.2, 152.3);
          ctx.closePath();
          ctx.fillStyle = "rgb(188, 203, 211)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(368.8, 187.6);
          ctx.bezierCurveTo(363.6, 190.0, 361.6, 179.6, 368.0, 182.2);
          ctx.bezierCurveTo(367.6, 180.4, 367.1, 178.8, 368.6, 177.4);
          ctx.bezierCurveTo(370.4, 175.6, 372.5, 176.6, 372.9, 178.9);
          ctx.bezierCurveTo(374.0, 177.5, 374.5, 175.3, 376.6, 174.9);
          ctx.bezierCurveTo(378.5, 174.5, 380.9, 176.4, 379.7, 178.5);
          ctx.bezierCurveTo(381.1, 177.9, 383.2, 175.6, 384.8, 176.4);
          ctx.bezierCurveTo(386.7, 177.3, 386.2, 180.7, 384.5, 181.3);
          ctx.bezierCurveTo(386.8, 182.7, 386.4, 185.7, 383.4, 185.5);
          ctx.bezierCurveTo(384.0, 187.5, 382.3, 187.8, 380.6, 187.5);
          ctx.bezierCurveTo(380.2, 188.9, 379.5, 189.0, 378.6, 189.7);
          ctx.bezierCurveTo(378.2, 189.9, 377.6, 189.5, 377.1, 189.7);
          ctx.bezierCurveTo(376.6, 189.9, 376.5, 190.9, 375.9, 191.3);
          ctx.bezierCurveTo(376.0, 191.2, 373.0, 192.0, 373.5, 192.0);
          ctx.bezierCurveTo(372.5, 191.9, 371.5, 192.4, 371.7, 190.5);
          ctx.bezierCurveTo(370.7, 191.9, 368.8, 192.0, 369.0, 190.0);
          ctx.bezierCurveTo(368.7, 190.5, 368.1, 190.5, 367.8, 190.8);
          ctx.bezierCurveTo(367.0, 189.9, 367.1, 188.7, 367.9, 187.8);
          ctx.bezierCurveTo(367.7, 187.5, 367.4, 187.4, 367.1, 187.3);
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.fill();
          ctx.stroke();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(389.2, 142.3);
          ctx.bezierCurveTo(393.6, 143.4, 402.0, 162.3, 401.3, 168.3);
          ctx.bezierCurveTo(400.6, 174.3, 383.8, 183.2, 386.6, 175.6);
          ctx.bezierCurveTo(389.5, 168.1, 375.0, 147.0, 377.1, 146.1);
          ctx.bezierCurveTo(379.2, 145.2, 384.8, 141.2, 389.2, 142.3);
          ctx.closePath();
          ctx.fillStyle = "rgb(188, 203, 211)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(388.8, 177.6);
          ctx.bezierCurveTo(383.6, 180.0, 381.6, 169.6, 388.0, 172.2);
          ctx.bezierCurveTo(387.6, 170.4, 387.1, 168.8, 388.6, 167.4);
          ctx.bezierCurveTo(390.4, 165.6, 392.5, 166.6, 392.9, 168.9);
          ctx.bezierCurveTo(394.0, 167.5, 394.5, 165.3, 396.6, 164.9);
          ctx.bezierCurveTo(398.5, 164.5, 400.9, 166.4, 399.7, 168.5);
          ctx.bezierCurveTo(401.1, 167.9, 403.2, 165.6, 404.8, 166.4);
          ctx.bezierCurveTo(406.7, 167.3, 406.2, 170.7, 404.5, 171.3);
          ctx.bezierCurveTo(406.8, 172.7, 406.4, 175.7, 403.4, 175.5);
          ctx.bezierCurveTo(404.0, 177.5, 402.3, 177.8, 400.6, 177.5);
          ctx.bezierCurveTo(400.2, 178.9, 399.5, 179.0, 398.6, 179.7);
          ctx.bezierCurveTo(398.2, 179.9, 397.6, 179.5, 397.1, 179.7);
          ctx.bezierCurveTo(396.6, 179.9, 396.5, 180.9, 395.9, 181.3);
          ctx.bezierCurveTo(396.0, 181.2, 393.0, 182.0, 393.5, 182.0);
          ctx.bezierCurveTo(392.5, 181.9, 391.5, 182.4, 391.7, 180.5);
          ctx.bezierCurveTo(390.7, 181.9, 388.8, 182.0, 389.0, 180.0);
          ctx.bezierCurveTo(388.7, 180.5, 388.1, 180.5, 387.8, 180.8);
          ctx.bezierCurveTo(387.0, 179.9, 387.1, 178.7, 387.9, 177.8);
          ctx.bezierCurveTo(387.7, 177.5, 387.4, 177.4, 387.1, 177.3);
          ctx.fillStyle = "rgb(255, 255, 255)";
          ctx.fill();
          ctx.stroke();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(36.1, 203.3);
          ctx.bezierCurveTo(36.1, 203.3, 46.4, 65.3, 213.2, 55.1);
          ctx.bezierCurveTo(365.6, 45.7, 343.6, 204.8, 343.6, 204.8);
          ctx.bezierCurveTo(343.6, 204.8, 235.9, 225.5, 190.4, 225.5);
          ctx.bezierCurveTo(144.9, 225.5, 36.1, 203.3, 36.1, 203.3);
          ctx.closePath();
          ctx.fillStyle = "rgb(0, 165, 80)";
          ctx.fill();
    
          // layer1/Path
          ctx.beginPath();
          ctx.moveTo(7.3, 192.0);
          ctx.bezierCurveTo(-1.2, 170.3, -24.8, 21.3, 105.2, 6.3);
          ctx.bezierCurveTo(224.0, -7.4, 206.9, 225.0, 206.9, 225.0);
          ctx.bezierCurveTo(206.9, 225.0, 22.3, 230.0, 7.3, 192.0);
          ctx.closePath();
          ctx.fill();
          ctx.restore();	
    }
    
    function drawLight(ctx, x, y, perc){
    // light/Path
    	  ctx.save();
    	  ctx.translate(ctx, x, y);
    	  ctx.beginPath();
    	  ctx.moveTo(570.7, 202.4);
    	  ctx.bezierCurveTo(565.6, 191.5, 510.9, 223.4, 494.6, 227.8);
    	  ctx.bezierCurveTo(478.3, 232.2, 527.0, 210.4, 527.0, 210.4);
    	  ctx.bezierCurveTo(527.0, 210.4, 578.7, 189.7, 570.6, 181.5);
    	  ctx.bezierCurveTo(557.9, 168.5, 478.1, 212.8, 476.4, 208.7);
    	  ctx.bezierCurveTo(474.8, 204.7, 490.6, 198.8, 490.6, 198.8);
    	  ctx.bezierCurveTo(490.6, 198.8, 561.0, 172.9, 564.7, 170.2);
    	  ctx.bezierCurveTo(568.5, 167.5, 571.5, 160.1, 561.5, 152.4);
    	  ctx.bezierCurveTo(551.5, 144.6, 500.4, 175.9, 486.0, 181.5);
    	  ctx.bezierCurveTo(471.6, 187.1, 478.5, 175.9, 478.5, 175.9);
    	  ctx.bezierCurveTo(478.5, 175.9, 544.2, 150.6, 545.9, 147.8);
    	  ctx.bezierCurveTo(547.6, 144.9, 548.0, 138.9, 539.3, 134.8);
    	  ctx.bezierCurveTo(537.8, 134.1, 527.8, 129.6, 523.5, 130.9);
    	  ctx.bezierCurveTo(519.1, 132.3, 520.3, 138.4, 518.4, 138.8);
    	  ctx.bezierCurveTo(491.5, 144.1, 461.8, 164.6, 461.8, 164.6);
    	  ctx.bezierCurveTo(459.3, 165.9, 450.4, 175.4, 453.1, 182.6);
    	  ctx.bezierCurveTo(456.1, 190.8, 458.1, 185.1, 458.9, 189.8);
    	  ctx.bezierCurveTo(459.6, 194.4, 454.8, 193.9, 456.5, 200.3);
    	  ctx.bezierCurveTo(458.1, 206.6, 461.9, 204.1, 462.6, 211.5);
    	  ctx.bezierCurveTo(463.3, 219.2, 462.0, 218.2, 464.9, 224.3);
    	  ctx.bezierCurveTo(468.3, 231.4, 476.0, 231.2, 477.2, 236.5);
    	  ctx.bezierCurveTo(477.9, 239.1, 473.8, 241.7, 474.6, 246.3);
    	  ctx.bezierCurveTo(475.5, 252.0, 481.4, 259.6, 484.4, 261.1);
    	  ctx.bezierCurveTo(489.8, 263.8, 484.4, 277.3, 484.4, 277.3);
    	  ctx.bezierCurveTo(484.4, 277.3, 491.6, 277.8, 504.7, 277.3);
    	  ctx.bezierCurveTo(510.5, 264.5, 502.1, 251.6, 497.7, 246.4);
    	  ctx.bezierCurveTo(505.6, 243.9, 526.1, 237.3, 543.4, 229.1);
    	  ctx.bezierCurveTo(536.8, 245.1, 528.1, 277.5, 528.1, 277.5);
    	  ctx.bezierCurveTo(528.1, 277.5, 528.1, 277.5, 547.2, 277.5);
    	  ctx.bezierCurveTo(535.6, 269.1, 558.1, 225.6, 560.7, 219.4);
    	  ctx.bezierCurveTo(568.7, 213.8, 573.3, 207.9, 570.7, 202.4);
    	  ctx.closePath();
    	  
    	  ctx.fillStyle = "rgb("+250+", "+240+", "+Math.floor(255-perc*2)+")";
    	  
    	  ctx.fill();
    	  ctx.restore();
    }
