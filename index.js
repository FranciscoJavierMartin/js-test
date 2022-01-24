let currentTimer = null;

/**
 * Get a random color in HEX format
 * @returns {string} Color in HEX format.
 */
const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

/**
 * Handle the mouseover event. Change the background color and setup a timeout
 * to remove the square
 * @param {Object} event Event from mouseover
 */
const mouseoverHandler = (event) => {
  event.target.style.backgroundColor = `${getRandomColor()}`;

  currentTimer = setTimeout(() => {
    event.target.removeEventListener('mouseover', mouseoverHandler);
    event.target.removeEventListener('mouseout', mouseoutHandler);
    event.target.parentElement.removeChild(event.target);
  }, 2000);
};

/**
 * Handle the mouseout event. Clear the timeout before is called.
 */
const mouseoutHandler = () => {
  if (currentTimer) {
    clearTimeout(currentTimer);
    currentTimer = null;
  }
};

/**
 * Draw a big square and its children as little squares.
 * @param {Number} containerSize container side measure in pixels. Must be an integer.
 * @param {Number} childSize child side measure in pixels. Must be an integer.
 * @param {Number} numberOfChildren number of children that contains at maximun. Must be an integer.
 */
const drawContainer = (containerSize, childSize, numberOfChildren) => {
  if (!Number.isInteger(containerSize) || containerSize <= 0) {
    throw `containerSize params is not valid. Current value is ${containerSize}`;
  } else if (!Number.isInteger(childSize) || childSize <= 0) {
    throw `containerSize params is not valid. Current value is ${containerSize}`;
  } else if (!Number.isInteger(numberOfChildren) || numberOfChildren < 0) {
    throw `containerSize params is not valid. Current value is ${containerSize}`;
  }

  const container = document.getElementById('mainSquare');
  container.style.height = `${containerSize}px`;
  container.style.width = `${containerSize}px`;
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.alignContent = 'flex-start';

  const childrenPerSide = Math.floor(containerSize / childSize);
  const minimunNumberOfChildren = Math.min(
    childrenPerSide * childrenPerSide,
    numberOfChildren
  );

  for (let i = 0; i < minimunNumberOfChildren; i++) {
    const child = document.createElement('div');
    child.style.width = `${childSize}px`;
    child.style.height = `${childSize}px`;
    child.style.backgroundColor = `${getRandomColor()}`;
    child.addEventListener('mouseover', mouseoverHandler);
    child.addEventListener('mouseout', mouseoutHandler);
    container.appendChild(child);
  }
};

drawContainer(200, 50, 17);
// drawContainer(310, 200, 4);
// drawContainer(413, 42, 30);
// drawContainer(200, 300, 2);
