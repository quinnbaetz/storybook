var BlobWorld = new(function () {
    function b(f, h) {
        var d = new Blob;
        d.position.x = f.x;
        d.position.y = f.y;
        d.velocity.x = h.x;
        d.velocity.y = h.y;
        d.generateNodes();
        j.push(d)
    }
    function e(f) {
        u = f.clientX - (window.innerWidth - g.width) * 0.5;
        v = f.clientY - (window.innerHeight - g.height) * 0.5
    }
    function i(f) {
        f.preventDefault();
        y = true;
        E()
    }
    function k() {
        y = false;
        if (q) {
            q.dragNodeIndex = -1;
            q = null
        }
    }
    function s(f) {
        if (f.touches.length == 1) {
            f.preventDefault();
            y = true;
            u = f.touches[0].pageX - (window.innerWidth - g.width) * 0.5;
            v = f.touches[0].pageY - (window.innerHeight - g.height) * 0.5;
            (new Date).getTime() - F < 300 ? G() : E();
            F = (new Date).getTime()
        }
    }
    function z(f) {
        if (f.touches.length == 1) {
            f.preventDefault();
            u = f.touches[0].pageX - (window.innerWidth - g.width) * 0.5;
            v = f.touches[0].pageY - (window.innerHeight - g.height) * 0.5
        }
    }
    function L() {
        y = false;
        if (q) {
            q.dragNodeIndex = -1;
            q = null
        }
    }
    function M() {
        G()
    }
    function E() {
        q = j[D(j, {
            x: u,
            y: v
        })];
        q.dragNodeIndex = D(q.nodes, {
            x: u,
            y: v
        })
    }
    function G() {
        var f = {
            x: u,
            y: v
        },
            h = j[D(j, f)];
        distanceBetween(h.position, f) < h.radius + 30 && h.quality > 8 && j.push(h.split())
    }
    function N(f) {
        switch (f.keyCode) {
        case 40:
            A(-10);
            f.preventDefault();
            break;
        case 38:
            A(10);
            f.preventDefault();
            break;
        case 37:
            B(-1);
            f.preventDefault();
            break;
        case 39:
            B(1);
            f.preventDefault();
            break
        }
    }
    function O() {
        A(20)
    }
    function P() {
        A(-20)
    }
    function Q() {
        B(-1)
    }
    function R() {
        B(1)
    }
    function B(f) {
        w += f;
        w = w < 0 ? C.length - 1 : w;
        w = w > C.length - 1 ? 0 : w;
        document.body.style.backgroundColor = C[w].backgroundColor
    }
    function A(f) {
        for (var h = 0, d = j.length; h < d; h++) {
            blob = j[h];
            var n = blob.radius;
            blob.radius += f;
            blob.radius = Math.max(40, Math.min(blob.radius, 280));
            blob.radius != n && blob.updateNormals()
        }
    }

    function D(f, h) {
        for (var d = 9999, n = 9999, a = -1, o = 0, r = f.length; o < r; o++) {
            n = distanceBetween(f[o].position, {
                x: h.x,
                y: h.y
            });
            if (n < d) {
                d = n;
                a = o
            }
        }
        return a
    }
    function H() {
        g.width = window.innerWidth;
        g.height = window.innerHeight;
        t.width = g.width;
        t.height = g.height;
        g.x = 3;
        g.y = 3;
        g.width -= 6;
        g.height -= 6
    }
    function S() {
        var f = C[w],
            h, d, n, a;
        h = 0;
        for (n = j.length; h < n; h++) {
            a = j[h];
            l.clearRect(a.dirtyRegion.left - 80, a.dirtyRegion.top - 80, a.dirtyRegion.right - a.dirtyRegion.left + 160, a.dirtyRegion.bottom - a.dirtyRegion.top + 160);
            a.dirtyRegion.reset()
        }
        if (x.blobA != -1 && x.blobB != -1) {
            h = x.blobA;
            n = x.blobB;
            a = getTime();
            if (j[h] && j[n]) if (a - j[h].lastSplitTime > 500 && a - j[n].lastSplitTime > 500) {
                j[h].merge(j[n]);
                if (q == j[n] && y) q = j[h];
                j.splice(n, 1)
            }
            x.blobA = -1;
            x.blobB = -1
        }
        if (q) {
            q.velocity.x += (u - q.position.x) * 0.01;
            q.velocity.y += (v + 100 - q.position.y) * 0.01
        }
        h = 0;
        for (n = j.length; h < n; h++) {
            a = j[h];
            for (d = 0; d < n; d++) {
                var o = j[d];
                if (o != a) if (distanceBetween({
                    x: a.position.x,
                    y: a.position.y
                }, {
                    x: o.position.x,
                    y: o.position.y
                }) < a.radius + o.radius) {
                    x.blobA = a.position.x > o.position.x ? h : d;
                    x.blobB = a.position.x > o.position.x ? d : h
                }
            }
            a.velocity.x += (window.screenX - I) * (0.04 + Math.random() * 0.1);
            a.velocity.y += (window.screenY - J) * (0.04 + Math.random() * 0.1);
            d = {
                x: 1.035,
                y: 1.035
            };
            if (a.position.x > g.x + g.width) {
                a.velocity.x -= (a.position.x - g.width) * 0.04;
                d.y += 0.035
            } else if (a.position.x < g.x) {
                a.velocity.x += Math.abs(g.x - a.position.x) * 0.04;
                d.y += 0.035
            }
            if (a.position.y + a.radius * 0.25 > g.y + g.height) {
                a.velocity.y -= (a.position.y + a.radius * 0.25 - g.height) * 0.04;
                d.x += 0.015
            } else if (a.position.y < g.y) {
                a.velocity.y += Math.abs(g.y - a.position.y) * 0.04;
                d.x += 0.015
            }
            a.velocity.x += K.x;
            a.velocity.y += K.y;
            a.velocity.x /= d.x;
            a.velocity.y /= d.y;
            a.position.x += a.velocity.x;
            a.position.y += a.velocity.y;
            var r, c, m, p;
            d = 0;
            for (o = a.nodes.length; d < o; d++) {
                c = a.nodes[d];
                c.ghost.x = c.position.x;
                c.ghost.y = c.position.y
            }
            if (a.nodes[a.dragNodeIndex]) {
                a.rotation.target = Math.atan2(v - a.position.y - a.radius * 4, u - a.position.x);
                a.rotation.current += (a.rotation.target - a.rotation.current) * 0.2;
                a.updateNormals()
            }
            d = 0;
            for (o = a.nodes.length; d < o; d++) {
                c = a.nodes[d];
                c.normal.x += (c.normalTarget.x - c.normal.x) * 0.05;
                c.normal.y += (c.normalTarget.y - c.normal.y) * 0.05;
                p = {
                    x: a.position.x,
                    y: a.position.y
                };
                for (r = 0; r < c.joints.length; r++) {
                    m = c.joints[r];
                    var T = m.node.ghost.y - c.ghost.y - (m.node.normal.y - c.normal.y);
                    m.strain.x += (m.node.ghost.x - c.ghost.x - (m.node.normal.x - c.normal.x) - m.strain.x) * 0.3;
                    m.strain.y += (T - m.strain.y) * 0.3;
                    p.x += m.strain.x * m.strength;
                    p.y += m.strain.y * m.strength
                }
                p.x += c.normal.x;
                p.y += c.normal.y;
                r = getArrayIndexByOffset(a.nodes, a.dragNodeIndex, -1);
                m = getArrayIndexByOffset(a.nodes, a.dragNodeIndex, 1);
                if (a.dragNodeIndex != -1 && (d == a.dragNodeIndex || a.nodes.length > 8 && (d == r || d == m))) {
                    r = d == a.dragNodeIndex ? 0.7 : 0.5;
                    p.x += (u - p.x) * r;
                    p.y += (v - p.y) * r
                }
                c.position.x += (p.x - c.position.x) * 0.1;
                c.position.y += (p.y - c.position.y) * 0.1;
                c.position.x = Math.max(Math.min(c.position.x, g.x + g.width), g.x);
                c.position.y = Math.max(Math.min(c.position.y, g.y + g.height), g.y);
                a.dirtyRegion.inflate(c.position.x, c.position.y)
            }
            if (!f.debug) {
                l.beginPath();
                l.fillStyle = f.fillStyle;
                l.strokeStyle = f.strokeStyle;
                l.lineWidth = f.lineWidth
            }
            c = getArrayElementByOffset(a.nodes, 0, -1);
            p = getArrayElementByOffset(a.nodes, 0, 0);
            l.moveTo(c.position.x + (p.position.x - c.position.x) / 2, c.position.y + (p.position.y - c.position.y) / 2);
            d = 0;
            for (o = a.nodes.length; d < o; d++) {
                c = getArrayElementByOffset(a.nodes, d, 0);
                p = getArrayElementByOffset(a.nodes, d, 1);
                if (f.debug) {
                    l.beginPath();
                    l.lineWidth = 1;
                    l.strokeStyle = "#ababab";
                    for (r = 0; r < c.joints.length; r++) {
                        m = c.joints[r];
                        l.moveTo(c.position.x, c.position.y);
                        l.lineTo(m.node.position.x, m.node.position.y)
                    }
                    l.stroke();
                    l.beginPath();
                    l.fillStyle = d == 0 ? "#00ff00" : d == a.dragNodeIndex ? "ff0000" : "#dddddd";
                    l.arc(c.position.x, c.position.y, 5, 0, Math.PI * 2, true);
                    l.fill()
                } else l.quadraticCurveTo(c.position.x, c.position.y, c.position.x + (p.position.x - c.position.x) / 2, c.position.y + (p.position.y - c.position.y) / 2)
            }
            l.stroke();
            l.fill()
        }
        I = window.screenX;
        J = window.screenY
    }
    var g = {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight
    },
        t, l, j = [],
        q, I = window.screenX,
        J = window.screenY,
        u = g.width * 0.5,
        v = g.height * 0.5,
        y = false,
        F = 0,
        K = {
            x: 0,
            y: 1.2
        },
        x = {
            blobA: -1,
            blobB: -1
        },
        w = 0,
        C = [{
            fillStyle: "rgba(0,200,250,1.0)",
            strokeStyle: "#ffffff",
            lineWidth: 5,
            backgroundColor: "#222222",
            debug: false
        }, {
            fillStyle: "",
            strokeStyle: "",
            lineWidth: 0,
            backgroundColor: "#222222",
            debug: true
        }, {
            fillStyle: "rgba(0,0,0,0.1)",
            strokeStyle: "rgba(255,255,255,1.0)",
            lineWidth: 6,
            backgroundColor: "#222222",
            debug: false
        }, {
            fillStyle: "rgba(255,60,60,1.0)",
            strokeStyle: "rgba(0,0,0,1.0)",
            lineWidth: 2,
            backgroundColor: "#222222",
            debug: false
        }, {
            fillStyle: "rgba(255,255,0,1.0)",
            strokeStyle: "rgba(0,0,0,1.0)",
            lineWidth: 4,
            backgroundColor: "#222222",
            debug: false
        }, {
            fillStyle: "rgba(255,255,255,1.0)",
            strokeStyle: "rgba(0,0,0,1.0)",
            lineWidth: 4,
            backgroundColor: "#000000",
            debug: false
        }, {
            fillStyle: "rgba(0,0,0,1.0)",
            strokeStyle: "rgba(0,0,0,1.0)",
            lineWidth: 4,
            backgroundColor: "#ffffff",
            debug: false
        }];
    this.init = function () {
        if ((t = document.getElementById("world")) && t.getContext) {
            l = t.getContext("2d");
            document.addEventListener("mousemove", e, false);
            t.addEventListener("mousedown", i, false);
            t.addEventListener("dblclick", M, false);
            document.addEventListener("mouseup", k, false);
            document.addEventListener("keydown", N, false);
            t.addEventListener("touchstart", s, false);
            t.addEventListener("touchmove", z, false);
            t.addEventListener("touchend", L, false);
            window.addEventListener("resize", H, false);
            document.getElementById("keyboardUp").addEventListener("click", O, false);
            document.getElementById("keyboardDown").addEventListener("click", P, false);
            document.getElementById("keyboardLeft").addEventListener("click", Q, false);
            document.getElementById("keyboardRight").addEventListener("click", R, false);
            b({
                x: g.width * 0.15,
                y: g.height * Math.random() * 0.2
            }, {
                x: g.width * 0.011,
                y: 0
            });
            b({
                x: g.width * 0.85,
                y: g.height * Math.random() * 0.2
            }, {
                x: -g.width * 0.011,
                y: 0
            });
            H();
            setInterval(S, 1E3 / 60)
        }
    }
});

function Region() {
    this.top = this.left = 999999;
    this.bottom = this.right = 0
}
Region.prototype.reset = function () {
    this.top = this.left = 999999;
    this.bottom = this.right = 0
};
Region.prototype.inflate = function (b, e) {
    this.left = Math.min(this.left, b);
    this.top = Math.min(this.top, e);
    this.right = Math.max(this.right, b);
    this.bottom = Math.max(this.bottom, e)
};

function Blob() {
    this.position = {
        x: 0,
        y: 0
    };
    this.velocity = {
        x: 0,
        y: 0
    };
    this.radius = 85;
    this.nodes = [];
    this.rotation = {
        current: 0,
        target: 0
    };
    this.dragNodeIndex = -1;
    this.lastSplitTime = 0;
    this.quality = 16;
    this.dirtyRegion = new Region
}
Blob.prototype.generateNodes = function () {
    this.nodes = [];
    var b, e;
    for (b = 0; b < this.quality; b++) {
        e = {
            normal: {
                x: 0,
                y: 0
            },
            normalTarget: {
                x: 0,
                y: 0
            },
            position: {
                x: this.position.x,
                y: this.position.y
            },
            ghost: {
                x: this.position.x,
                y: this.position.y
            },
            angle: 0
        };
        this.nodes.push(e)
    }
    this.updateJoints();
    this.updateNormals()
};
Blob.prototype.updateJoints = function () {
    for (var b = 0; b < this.quality; b++) {
        var e = this.nodes[b];
        e.joints = [];
        e.joints.push(new Joint(getArrayElementByOffset(this.nodes, b, -1), 0.4));
        e.joints.push(new Joint(getArrayElementByOffset(this.nodes, b, 1), 0.4));
        if (this.quality > 4) {
            e.joints.push(new Joint(getArrayElementByOffset(this.nodes, b, -2), 0.4));
            e.joints.push(new Joint(getArrayElementByOffset(this.nodes, b, 2), 0.4))
        }
        if (this.quality > 8) {
            e.joints.push(new Joint(getArrayElementByOffset(this.nodes, b, -3), 0.4));
            e.joints.push(new Joint(getArrayElementByOffset(this.nodes, b, 3), 0.4))
        }
    }
};
Blob.prototype.updateNormals = function () {
    var b, e, i;
    for (b = 0; b < this.quality; b++) {
        i = this.nodes[b];
        if (this.dragNodeIndex != -1) {
            e = b - Math.round(this.dragNodeIndex);
            e = e < 0 ? this.quality + e : e
        } else e = b;
        i.angle = e / this.quality * Math.PI * 2 + this.rotation.target;
        i.normalTarget.x = Math.cos(i.angle) * this.radius;
        i.normalTarget.y = Math.sin(i.angle) * this.radius;
        if (i.normal.x == 0 && i.normal.y == 0) {
            i.normal.x = i.normalTarget.x;
            i.normal.y = i.normalTarget.y
        }
    }
};
Blob.prototype.split = function () {
    var b = this.radius / 10,
        e = Math.round(this.nodes.length * 0.5),
        i = this.radius * 0.5,
        k = new Blob;
    k.position.x = this.position.x;
    k.position.y = this.position.y;
    k.nodes = [];
    for (var s = 0; s++ < e;) k.nodes.push(this.nodes.shift());
    var z = e = 0;
    for (s = 0; s < this.nodes.length; s++) e += this.nodes[s].position.x;
    for (s = 0; s < k.nodes.length; s++) z += k.nodes[s].position.x;
    k.velocity.x = z > e ? b : -b;
    k.velocity.y = this.velocity.y;
    k.radius = i;
    k.quality = k.nodes.length;
    this.velocity.x = e > z ? b : -b;
    this.radius = i;
    this.quality = this.nodes.length;
    this.dragNodeIndex = -1;
    this.updateJoints();
    this.updateNormals();
    k.dragNodeIndex = -1;
    k.updateJoints();
    k.updateNormals();
    k.lastSplitTime = getTime();
    this.lastSplitTime = getTime();
    return k
};
Blob.prototype.merge = function (b) {
    this.velocity.x *= 0.5;
    this.velocity.y *= 0.5;
    this.velocity.x += b.velocity.x * 0.5;
    for (this.velocity.y += b.velocity.y * 0.5; b.nodes.length;) this.nodes.push(b.nodes.shift());
    this.quality = this.nodes.length;
    this.radius += b.radius;
    this.dragNodeIndex = b.dragNodeIndex != -1 ? b.dragNodeIndex : this.dragNodeIndex;
    this.updateNormals();
    this.updateJoints()
};

function Joint(b, e) {
    this.node = b;
    this.strength = e;
    this.strain = {
        x: 0,
        y: 0
    }
}

function getArrayIndexByOffset(b, e, i) {
    if (b[e + i]) return e + i;
    if (e + i > b.length - 1) return e - b.length + i;
    if (e + i < 0) return b.length + (e + i)
}
function getArrayElementByOffset(b, e, i) {
    return b[getArrayIndexByOffset(b, e, i)]
}
function getTime() {
    return (new Date).getTime()
}
function distanceBetween(b, e) {
    var i = e.x - b.x,
        k = e.y - b.y;
    return Math.sqrt(i * i + k * k)
}
BlobWorld.init();

/*

Drawing wave

*/

function drawShape(){
 
    midPointY = Math.sin(counter*10*C)*((dur-counter)*ampMultiplier); //Calculates the y value of the midpoint
 
    if (counter <= dur){
      points[midPointIndex] = new Array(0,midPointY);
 
      //Check if counter has reached 90deg or 270deg, if so, time to spawn another point
      if (counter%9 == 0 && counter%2 == 1){
        points[point] = Array(-1,midPointY);
        point++;
      }
    }
 
    ctx.clearRect(0,0,canvas.width,canvas.height); //Clear the canvas
 
    ctx.beginPath();
    ctx.moveTo(0, waterLevel); //Start on the left side
 
    //Will contain the previous point to help each point set its bezier curve
    var lastPoint = new Array(0,waterLevel);
 
    //Loop through the array of points
    //Calculates the proper x and y values of each point
    //Does the actual drawing
    for (var pt = 0; pt < totalPoints; pt++){
      if (points[pt]){
        if (pt < midPointIndex){
          points[pt][0] = (points[pt][0]*spreadAccelleration)-spreadSpeed; //Move points away from the center point
          points[(midPointIndex-pt)+midPointIndex] = new Array(-points[pt][0],points[pt][1]); //Create an opposite point
        }
 
        var x = points[pt][0]+midPointX;
        var y = points[pt][1]+waterLevel;
 
        var bezHandle1 = ((x-lastPoint[0])/2)+lastPoint[0];
        var bezHandle2 = x-((x-lastPoint[0])/2);
        ctx.bezierCurveTo(bezHandle1, lastPoint[1], bezHandle2, y, x, y);
 
        lastPoint[0] = x;
        lastPoint[1] = y;
      }
    };
 
    //The Water Level has been rendered, draw the rest of the container
    ctx.lineTo(cWidth, waterLevel);
    ctx.lineTo(cWidth, 0);
    ctx.lineTo(0,0);
    ctx.closePath();
 
    ctx.fill();
 
    counter++;
    if ( counter == dur) animationActive = false;
    if (counter >= (dur*2)) stopAni();         
 
  }