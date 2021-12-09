import React, { useEffect, useRef } from 'react';
// import './style.css';
import { useLocation } from 'react-router-dom';


export function WinnerPage(props) {
    
    const location = useLocation();

    const canvasRef = useRef(null)

    useEffect(() => {

        const homecanvas = canvasRef.current
        const ctx = homecanvas.getContext('2d') 
        homecanvas.width = window.innerWidth
        homecanvas.height = window.innerHeight

        let bubbleArray;

        // create Bubble class & constructor
        class Bubble {
            constructor(x, y, directionX, directionY, size, color){
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            // add draw function
            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            // movement function
            update(){
                if(this.x + this.size >= homecanvas.width || this.x - this.size <= 0){
                    this.directionX = -this.directionX;
                }
                if(this.y + this.size >= homecanvas.height || this.y - this.size <= 0){
                    this.directionY = - this.directionY;
                }
                
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }
            // create the bubble array
            function init(){
                bubbleArray = [];
                for (let i = 0; i < 50; i++) {
                    let size = Math.random() * 50;
                    let x = Math.random() * (homecanvas.width - size * 2);
                    let y = Math.random() * (homecanvas.height - size * 3);
                    let directionX = (Math.random() * 0.4) - 0.2;
                    let directionY = (Math.random() * 0.4) - 0.2;
                    let color = 'rgba(250, 250, 250, 0.6)';

                    bubbleArray.push(new Bubble(x, y, directionX, directionY, size, color));
                }
            }
            // animation loop
            function animate(){
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, innerWidth, innerHeight);

                for (let i = 0; i < bubbleArray.length; i++){
                    bubbleArray[i].update()
                }
            }
        init();
        animate();

        window.addEventListener('resize', function(){
            homecanvas.width = innerWidth;
            homecanvas.height = innerHeight;
            init();
        })

    }, [])

    return(
        <>
        <canvas ref={canvasRef} {...props} id='homecanvas'></canvas>
        <h1>{props.location.state.winner}</h1>
        </>
    )
}