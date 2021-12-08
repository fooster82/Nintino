import React, { useEffect, useRef } from 'react';
// import './style.css';


export function WinnerPage(props) {
    
    const canvasRef = useRef(null)
    
    useEffect(() => {
        
        const winner = canvasRef.current
        const context = winner.getContext('2d') 
        winner.width = window.innerWidth
        winner.height = window.innerHeight

        class Circle {
            constructor(xpos, ypos, radius, color, speed) {
                this.xpos = xpos;
                this.ypos = ypos;
                this.radius = radius;
                this.color = color;
                this.speed = speed;
        
                this.dx = 1 * this.speed;
                this.dy = 1 * this.speed;
            }
        
            draw(context) {
                context.beginPath();
                context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
                context.stroke();
            }
        
            update() {
                context.clearRect(0, 0, winner.width, winner.height)
                this.draw(context);
                
                if ( (this.xpos + this.radius) > winner.width){
                    this.dx = -this.dx;
                }
        
                if ( (this.xpos - this.radius) < 0 ){
                    this.dx = -this.dx
                }
                
                this.ypos += this.dx
        
            }
        }

        let circle1 = new Circle(winner.width/2, 0, 25, "pink", 5);
        circle1.draw(context);
        
        let updateCircle = function() {
            requestAnimationFrame(updateCircle)
            circle1.update();
        }
        
        updateCircle();

    }, [])



    return (
        <>
            <canvas ref={canvasRef} {...props} id="winner" ></canvas>

        </>
    )
}

// let racetrack = document.getElementById("myCanvas");
// const context = racetrack.getContext("2d");


