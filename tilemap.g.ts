// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001e0001010101010101010101010101010101020202020b020b020b020b020b0201010101010101010101010101010101020202020202020202020202020201010101010101010101010101010101020202020b020b020b020b020b0201010101010101010101010101010101020202020202020202020202020201010101010101010101010101010202020202020b020b020b020b020b0201010101010101010101010101010101020202020202020202020202020201010101010101010101010101010101020202020b020b020b020b020b0201010101010101010101010101010101020202020202020202020202020201010101010101010101010101010101020202020b020b020b020b020b020101010101010101010101010101010102020202020202020202020202020101010101010101010101010101010102020202020202020202020202020101010101010101010101010101010102020202020202020202020202020101010101010101010101010101010102020202020202020202020202020101010101010101010101010101010102020202020202020202020202020101010101010101010101010101010102020202020202020202020202020101010101010101010101010101010102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020303030303030303030303030303030303030303030303030303030302020305060506050305050503050505050305050505030a0505050506030202030507080905030505050305050505030505050503050505050505030202030505050505030505050405050505030505050504050505050505030202030505050505030505050305050505030505050503050505050505030202030505050505040505050305050505040505050503050505050505030202030505050505030304030303030303030304030303030303030303030202030505050505030505050503020202020202020202020202020202020202030505050505030505050503020202020202020202020202020202020202030303030303030303030303020202020202020202020202020202020202`, img`
...222222.222222..............
...............2..............
....2.2.22222.22..............
2.2222.2......22..............
2.2.22.222222222..............
2.2..........222..............
2.2.222.22.222.2..............
2.......22.222.2..............
2.2.2.22.......2..............
2.2.2.2222222222..............
..2....2......................
2.2.2.22.2222222..............
2.2.2.22.2222222..............
2.2......2222222..............
2.22222222222222..............
2222222222222222..............
..............................
..............................
..............................
..............................
2222222222222222222222222222..
2.....2...2....2....2......2..
2.....2...2....2....2......2..
2.....2........2...........2..
2.....2...2....2....2......2..
2.........2.........2......2..
2.....22.22222222.2222222222..
2.....2....2..................
2.....2....2..................
222222222222..................
`, [myTiles.transparency16,sprites.castle.saplingPine,sprites.castle.tileGrass1,sprites.builtin.brick,myTiles.tile1,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,sprites.castle.saplingOak], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
