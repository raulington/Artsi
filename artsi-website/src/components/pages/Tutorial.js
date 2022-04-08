import React, { useCallback, useEffect, useRef, useState } from 'react';
import {Grid} from "@material-ui/core"


const colors = [
  "red",
  "green",
  "yellow",
  "black",
  "blue"
]


function Tutorial() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback((x, y) => {
    y = y - 150;
    x = x - 750;
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = 10;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, selectedColor, setPosition])

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX - 750,
      y: e.pageY - 100
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY)
  }
 return ( 
      <Grid container direction="row" alignItems="center" justify="center" spacing="7px">
        <Grid item style={{padding: 0, margin: 0}}>
            <br></br>
            <div style={{marginLeft: 175}}>
              <b>Tutorial Title</b>
            </div>
            <br></br>
            <iframe width="500" height="450" src="https://www.youtube.com/embed/-WR-FyUQc6I"></iframe>
        </Grid>
        <Grid item style={{padding: 50}}>

        </Grid>
        <Grid item style={{marginTop: 50}}>
          <canvas
          style={{
            border: "1px solid #000"
          }}
          width={650}
          height={550}
          ref={canvasRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        />
        <br />
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          {
            colors.map(
              color => <option key={color} value={color}>{color}</option>
            )
          }
        </select>
        <button onClick={clear}>Clear</button>
        <button onClick={download}>Download</button>
        </Grid>
      </Grid>
    );
}

export default Tutorial;