/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

// Declare variables for puck
var puck = document.getElementById("puck"),
    puck_x = 10,
    puck_y = 10,
    puck_speed = 50,
    level = 1,
    lives = 3,
    gaps = [];

function genLevel() {
    
}

function checkCollisions() {
    if (puck_x > 600 || puck_x < 0 || puck_y > 400 || puck_y < 0) {
        lives --;
        puck_x = 10;
        puck_y = 10;
    }
}
function draw() {
    console.log(puck_x + ":" + puck_y);
    
    checkCollisions();
    
    puck.style.left = puck_x + "px";
    puck.style.top = puck_y + "px";
    
    // Stats
    document.getElementById("stats").innerHTML = "Level: " + level + " Lives: " + lives;
}

// Event listeners
document.getElementById("left").addEventListener("click", function() {
    puck_x -= puck_speed;
    draw();
});
document.getElementById("right").addEventListener("click", function() {
    puck_x += puck_speed;
    draw();
});
document.getElementById("up").addEventListener("click", function() {
    puck_y -= puck_speed;
    draw();
});
document.getElementById("down").addEventListener("click", function() {
    puck_y += puck_speed;
    draw();
});

draw();