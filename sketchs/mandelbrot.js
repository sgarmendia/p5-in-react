export default p => {
    p.setup = () => {
        p.createCanvas(710, 400);
        p.pixelDensity(1);
        p.noLoop();
    };

    p.redrawFromProps = props => {
        if (props !== null){
            
        }
    };
  
    p.draw = () => {
        p.background(0);
        // Establish a range of values on the complex plane
        // A different range will allow us to "zoom" in or out on the fractal
      
        // It all starts with the width, try higher or lower values
        const w = 4;
        const h = (w * p.height) / p.width;
      
        // Start at negative half the width and height
        // const xmin = -w/2;
        // const ymin = -h/2;

        const xmin = -w/1.6;
        const ymin = -h/2;
      
        // Make sure we can write to the pixels[] array.
        // Only need to do this once since we don't do any other drawing.
        p.loadPixels();
      
        // Maximum number of iterations for each point on the complex plane
        const maxiterations = 100;
      
        // x goes from xmin to xmax
        const xmax = xmin + w;
        // y goes from ymin to ymax
        const ymax = ymin + h;
      
        // Calculate amount we increment x,y for each pixel
        const dx = (xmax - xmin) / (p.width);
        const dy = (ymax - ymin) / (p.height);
      
        // Start y
        let y = ymin;
        for (let j = 0; j < p.height; j++) {
            // Start x
            let x = xmin;
            for (let i = 0; i < p.width; i++) {
        
                // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
                let a = x;
                let b = y;
                let n = 0;
                while (n < maxiterations) {
                    const aa = a * a;
                    const bb = b * b;
                    const twoab = 2.0 * a * b;
                    a = aa - bb + x;
                    b = twoab + y;
                    // Infinty in our finite world is simple, let's just consider it 16
                    if (p.dist(aa, bb, 0, 0) > 16) {
                        break;  // Bail
                    }
                    n++;
                }
        
                // We color each pixel based on how long it takes to get to infinity
                // If we never got there, let's pick the color black
                const pix = (i+j*p.width)*4;
                const norm = p.map(n, 0, maxiterations, 0, 1);
                let bright = p.map(p.sqrt(norm), 0, 1, 0, 255);
                if (n == maxiterations) {
                    bright = 0;
                } else {
                    // Gosh, we could make fancy colors here if we wanted
                    p.pixels[pix + 0] = bright;
                    p.pixels[pix + 1] = 50;
                    p.pixels[pix + 2] = 100;
                    p.pixels[pix + 3] = 255;
                }
                x += dx;
            }
            y += dy;
        }
        p.updatePixels();
    };
};
