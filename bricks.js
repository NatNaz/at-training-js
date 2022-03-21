function bricks (bricksOnTheFloor, brickCarryingCapacity) {
    console.log  ('There are ' + bricksOnTheFloor + ' bricks on the floor.');
    while (bricksOnTheFloor > 0) {
        bricksOnTheFloor -= brickCarryingCapacity;
        console.log('After putting away ' + brickCarryingCapacity + ' bricks, I now have ' + bricksOnTheFloor + ' bricks left.');
    }
    console.log ('Horray! All the bricks have been put away!');
    }
    bricks(60,15);