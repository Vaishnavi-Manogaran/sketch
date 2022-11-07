import React, { useEffect, useRef, useState } from 'react';
import classes from './main.module.scss';

const Main=()=>{

 
  // const canvasRef = useRef(null);
  // const ctxRef = useRef(null);
  // const [isDrawing, setIsDrawing] = useState(false);
  // const [lineWidth, setLineWidth] = useState(5);
  // const [lineColor, setLineColor] = useState("black");
  // const [lineOpacity, setLineOpacity] = useState(0.1);
  
  // // Initialization when the component
  // // mounts for the first time
  // useEffect(() => {
  //   const canvas = canvasRef.current as HTMLCanvasElement |null;
  //   const ctx = canvas?.getContext("2d");
  //   if(ctx != undefined){
  //     ctx.lineCap = "round";
  //     ctx.lineJoin = "round";
  //     ctx.globalAlpha = lineOpacity;
  //     ctx.strokeStyle = lineColor;
  //     ctx.lineWidth = lineWidth;
  //     if(ctxRef != undefined){
  //       ctxRef.current = ctx;
  
  //     }
  //   }
    

  // }, [lineColor, lineOpacity, lineWidth]);

  const paintCanvas = document.getElementById( 'paint' ) as HTMLCanvasElement |null;
  const context = paintCanvas?.getContext('2d');
  if (context != undefined) {
    context.lineCap = 'round';
  }

  const colorPicker = document.getElementById( 'picker');

  colorPicker?.addEventListener('change', event => {
    if (context != undefined) {

      context.strokeStyle = event?.target.value;
    }
} );

 
  return (
    <div className={classes.mainn} id="myChart">
      
    <div className={classes.menu}>
        <input type={'color'} id='picker' />
        <input type={'range'} min={'1'} max={'100'} />
    </div>
     <canvas id='paint' className={classes.main} width={'200px'} height={'100%'} ></canvas>
    </div>
  );
}


export default Main;
