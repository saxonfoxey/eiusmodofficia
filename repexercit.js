const canvasUtilities = {
    rect: function (x, y, w, h) {
        // Function implementation here, e.g., drawing a rectangle on a canvas
        console.log(`Drawing rectangle at (${x}, ${y}) with width ${w} and height ${h}`);
        
        // Assuming a 2D drawing context 'ctx' from a canvas element
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.stroke();
    }
};

// Usage example
// Assume 'ctx' is a valid 2D drawing context from a canvas element
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Use the rect method to draw a rectangle
canvasUtilities.rect(10, 20, 150, 100);
