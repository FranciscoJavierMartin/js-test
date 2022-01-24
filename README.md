# js-test

### On load:

Using plain vanilla javascript to create square div containerSize \* containerSize

1. Create inside it numberOfChildren square elements which:
   - do no overlap each other
   - are fully contained within the container div
   - do not stretch container and not showing the scroll
   - has size childSize \* childSize (squares)
   - has random background color
2. In case container cannot fit numberOfChildren:
   - render as much children as container can fit and show message for the user about actual rendered number of children inside container.
3. When hover, child squares should change background colors randomly
4. When hover it longer than 2 seconds child square disappears

### Options to test if it appears correctly

- drawContainer(310, 200, 4);
- drawContainer(413, 42, 30);
- drawContainer(200, 300, 2);

### Expected result must be similar to this

![Squares](result.jpg)

# Some considerations
- I develop using Chrome in a Mac. I tested in Chrome, Firefox and Safari.
- During the testing in Safari. I catch a bug. When you hover a little square, this dissappear, the next little square is placed in its position, triggering hover again (without moving the mouse). I the rest of browsers, the squares start to disappear one after one. In Safari this never happens. In real scenario, I will ask if this is acceptable considering the user rate of Safari and the ammount of time used in solve something for a specific browser.
- In real scenario, I will setup some testing tools, linters and formatters. Here I only use visual testing and the extensions installed in VSCode.
- I usually use responsive design for development. Here is not applied.
- I assume that when a child vanish, if there more room for children that were out, those will still be out (it is not specified).

## Steps followed
- Create container
- Add elements
- Add height to child
- Add width to child
- Add random background color
- Place elements (flex and flex-wrap)
- Add listerner for hover
- Add timeout for 2 seconds
- Remove listener when mouseout
- Remove child when 2 seconds pass
- Add more childrens if there are available
- Error handling
- Fix the gap in height
- Clean code
- Check compatibility
- Documentation