const canvas = document.querySelector('.main');
const context = canvas.getContext('2d');
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;

canvas.width = width;
canvas.height = height;

context.fillStyle = 'rgb(179, 179, 179)';
context.fillRect(0, 0, width, height);

const handleMouseDown = (event) => {
  /* const optionsForMouseEvents = {
    handleMouseMove: (event) => { },
    handleMouseUp: (event) => { },
    mousePositionInsideHandle,
  }; 
  const handleMouseMove = handleMouseMove.bind(this, optionsForMouseEvents);
  optionsForMouseEvents.handleMouseMove = handleMouseMove;

  const handleMouseUp = handleMouseUp.bind(this, optionsForMouseEvents);
  optionsForMouseEvents.handleMouseUp = handleMouseUp; */

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
  document.addEventListener('touchmove', handleMouseMove);
  document.addEventListener('touchend', handleMouseUp);

  beginDrawing(event);
};

const handleMouseMove = (event) => {
  draw(event);
};

const handleMouseUp = (event) => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
  document.removeEventListener('touchmove', handleMouseMove);
  document.removeEventListener('touchend', handleMouseUp);

  endDrawing(event);
};

const calculateMousePosition = (event) => {
  let x;
  let y;
  if (event instanceof TouchEvent) {
    x = event.changedTouches[0].pageX;
    y = event.changedTouches[0].pageY;
  } else {
    x = event.clientX;
    y = event.clientY;
  }
  // y = (document.documentElement.clientHeight + window.pageYOffset) - y;

  /* return new Vector(x, y); */
  return { x, y };
};

const brushRadius = 5;

const beginDrawing = (event) => {
  const position = calculateMousePosition(event);
  context.beginPath();
  context.moveTo(position.x, position.y);
};

const draw = (event) => {
  const position = calculateMousePosition(event);

  /* context.fillStyle = 'black';
  context.fillRect(position.x - brushRadius, position.y - brushRadius, brushRadius * 2, brushRadius * 2); */

  context.lineTo(position.x, position.y);
  context.strokeStyle = 'black';
  context.stroke();
};

const endDrawing = (event) => {
  context.closePath();
};

canvas.ondragstart = () => false;
canvas.addEventListener('mousedown', handleMouseDown);
canvas.addEventListener('touchstart', handleMouseDown);