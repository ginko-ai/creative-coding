function setup() {
    createCanvas(400, 400); // Create a 400x400 canvas
  }

  let t = 0; // Time variable for animation

  function draw() {
    background(6); // Set a dark background

    // Increment time for animation
    t += PI / 120;

    // Loop through 40,000 points
    for (let i = 0; i < 40000; i++) {
      let x = i % 200; // Calculate x coordinate
      let y = Math.floor(i / 200); // Calculate y coordinate
      a(x, y); // Draw the point
    }
  }

  // Function to calculate and draw a point
  const a = (x, y) => {
    let k = x / 8 - 12.5;
    let e = y / 8 - 12.5;
    let o = mag(k, e) ** 2 / 169;
    let d = 0.5 + 5 * cos(o);

    // Set stroke color based on dynamic calculations
    stroke((d * sin(k) * sin(t * 4 + e)) ** 2 * width, 36);

    // Calculate and draw the point
    point(
      x + d * k * sin(d * 2 + o + t) + e * cos(e + t) + 100,
      o * 135 - y / 4 - d * 6 * cos(d * 3 + o * 9 + t) + 125
    );
  };

