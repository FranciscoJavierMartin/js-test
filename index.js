let currentTimer = null;

const getRandomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const mouseoverHandler = (event) => {
  event.target.style.backgroundColor = `#${getRandomColor()}`;

  currentTimer = setTimeout(() => {
    event.target.removeEventListener('mouseover', mouseoverHandler);
    event.target.removeEventListener('mouseout', mouseoutHandler);
    event.target.parentElement.removeChild(event.target);
  }, 2000);
};

const mouseoutHandler = () => {
  if (currentTimer) {
    clearTimeout(currentTimer);
    currentTimer = null;
  }
};

const drawContainer = (containerSize, childSize, numberOfChildren, divId) => {
  if (!Number.isInteger(containerSize) || containerSize <= 0) {
    throw `containerSize params is not valid. Current value is ${containerSize}`;
  } else if (!Number.isInteger(childSize) || childSize <= 0) {
    throw `containerSize params is not valid. Current value is ${containerSize}`;
  } else if (!Number.isInteger(numberOfChildren) || numberOfChildren < 0) {
    throw `containerSize params is not valid. Current value is ${containerSize}`;
  }

  const container = document.getElementById(divId);
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
    child.style.backgroundColor = `#${getRandomColor()}`;
    child.addEventListener('mouseover', mouseoverHandler);
    child.addEventListener('mouseout', mouseoutHandler);
    container.appendChild(child);
  }
};

drawContainer(200, 50, 17, 'mainSquare');
drawContainer(310, 200, 4, 'secondSquare');
drawContainer(413, 42, 30, 'thirdSquare');
drawContainer(200, 300, 2, 'fourthSquare');
