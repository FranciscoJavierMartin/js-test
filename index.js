let currentTimer = null;

const mouseoverHandler = (event) => {
  event.target.style.backgroundColor = `#${Math.floor(Math.random() * 10000)}`;

  currentTimer = setTimeout(() => {
    event.target.removeEventListener('mouseover', mouseoverHandler);
    event.target.removeEventListener('mouseout', mouseoutHandler);
  }, 2000);
};

const mouseoutHandler = (event) => {
  clearTimeout(currentTimer);
  currentTimer = null;
};

const drawContainer = (containerSize, childSize, numberOfChildren, divId) => {
  const container = document.getElementById(divId);
  // TODO: This border is just for development purposes. Remove after
  container.style.border = '1px solid';
  container.style.height = `${containerSize}px`;
  container.style.width = `${containerSize}px`;
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';

  const childrenPerSide = Math.floor(containerSize / childSize);
  const minimunNumberOfChildren = Math.min(
    childrenPerSide * childrenPerSide,
    numberOfChildren
  );

  for (let i = 0; i < minimunNumberOfChildren; i++) {
    const child = document.createElement('div');
    child.innerText = i + 1;
    child.style.width = `${childSize}px`;
    child.style.height = `${childSize}px`;
    // TODO: use HEX code
    child.style.backgroundColor = `#${Math.floor(Math.random() * 10000)}`;
    child.addEventListener('mouseover', mouseoverHandler);
    child.addEventListener('mouseout', mouseoutHandler);
    container.appendChild(child);
  }
};

drawContainer(200, 50, 17, 'mainSquare');
drawContainer(310, 200, 4, 'secondSquare');
drawContainer(413, 42, 30, 'thirdSquare');
drawContainer(200, 300, 2, 'fourthSquare');
