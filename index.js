const drawContainer = (containerSize, childSize, numberOfChildren, divId) => {
  const container = document.getElementById(divId);
  // TODO: This border is just for development purposes. Remove after
  container.style.border = '1px solid';
  container.style.height = `${containerSize}px`;
  container.style.width = `${containerSize}px`;
};

drawContainer(200, 50, 17, 'mainSquare');
drawContainer(310, 200, 4, 'secondSquare');
drawContainer(413, 42, 30, 'thirdSquare');
drawContainer(200, 300, 2, 'fourthSquare');
