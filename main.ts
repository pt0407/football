namespace SpriteKind {
    export const Goal = SpriteKind.create()
    export const Ball = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    football.throwDart()
    info.changeScoreBy(1)
})
function setDefaultPosition () {
	
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Goal, function (sprite, otherSprite) {
    game.splash("You Scored!")
    sprites.destroy(football)
})
let football: Dart = null
info.setScore(1)
football = darts.create(assets.image`myImage`, SpriteKind.Ball)
let Goal = sprites.create(img`
    .............cc.
    ............cbbc
    ............cbbc
    ...........b5cc.
    ...........b5bb.
    ..........b55c..
    ..........b5bb..
    .........b55c...
    .........b5bb...
    ........b55c....
    ........b5bb....
    .......b55c.....
    .......b5bb.....
    ......b55c......
    ......b5bb......
    .....b55c.......
    .....b5bb.......
    ....b55c........
    ....b5bb........
    ...b55c.........
    ...b5bb.........
    ..b55c..........
    ..b5bb..........
    .b55c...........
    .b5bb...........
    b55c............
    b55c............
    b55c............
    b55c.........cc.
    b55c........cbbc
    b55c........cbbc
    b55c.......b5cc.
    b55c.......b5bb.
    b55c......b55c..
    b55bccc...b5bb..
    b55bbbbccc55c...
    b55bcccbcc5bb...
    b55b..ccb55c....
    b55b...cc5bbc...
    b55b...b55cbc...
    b55b...b5bbcac..
    b55b..b55c.fac..
    b55b..b5bb.faf..
    b55b.b55c..faf..
    b55b.b5bb..faf..
    b55bb55c...faf..
    b55bb5bb...faf..
    b55b55c...cfafc.
    b5555bb..cbfafbc
    b5555c...cdfffdc
    b555bb...cdcfcdc
    c555c....cadddac
    c55bb....caaaaac
    c55c.....caaaaac
    c5bb.....caaaaac
    .cc......caaaaac
    .........caaaaac
    .........caaaaac
    .........caaaaac
    .........8aaaaa8
    .........8aaaaa8
    .........6aaaaa6
    ..........6aaa6.
    ...........666..
    `, SpriteKind.Goal)
football.setTrace()
football.controlWithArrowKeys()
Goal.setPosition(randint(130, 150), randint(40, 100))
scaling.scaleToPercent(Goal, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
