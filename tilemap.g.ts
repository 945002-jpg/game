// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level3":
            case "level3":return tiles.createTilemap(hex`100010000c0c0c0c0c030707090c0c0c0c0c0c0b0c0d0c0c0d040101080c0c0c0c0c0c0c0c0c0c0c0c040101080c0c0c0c0c0c0c0c0c0c0c0c040101080c0c0c0c0c0c0c0c0d0c0c0d040101080c0c0c0c0c0c0c030707070701010101070707070707070401010101010101010101010101010104010101010101010101010101010101020505050501010101050505050505050c0c0c0c0c040101080d0c0c0c0c0d0c0c0c0c0c0c040101080c0c0c0c0c0c0c0c0c0c0c0c040101080c0c0c0c0c0c0c0c0c0c0c0c040101080c0c0c0c0c0c0c0c0c0c0c0c040101080c0c0c0c0c0c0c0c0c0c0c0c040101080d0c0c0c0c0d0c0a0c0c0c0c020505060c0c0c0c0c0c0c`, img`
2 2 2 2 2 . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 
. 2 2 2 2 . . . . 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairLarge,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006060606060606060606060606060606060406060606060606060606060606080606060606060606060606060606060606060506060606060606060606060606020202020202020202020202020202020303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030101010101010101010101010101010106070606060606060606060606060607060606060606060606060606060606060606060606060606060606060606060606060607060606060606060607060606060606060606060606060606060606060607060606060606060606060606060706060606060606060606060606060606`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.dungeon.chestClosed,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.stairLarge], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100003010a09090903010a09090903010a0d02070509090902070509090902070509020705090909020705090909020705090207050909090207050909090207050902070509090902070509090902070509020705090b09020705090b090207050b02070701010107070707070707070705020707070707070707070707070707050c0707070707070707070707070707050207070707070707070707070707070502070706060607070706060607070705020705090b09020705090b090207050b0207050909090207050909090207050902070509090902070509090902070509020705090909020705090909020705090406080909090406080909090406080d`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath2,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tilePath9,sprites.dungeon.floorLight0,sprites.castle.tilePath3,sprites.dungeon.floorLight1,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairLarge], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`100010000809090909090909090909090909090a0f0202020202020202020202020213060f020c070707070702020207070707050f02060809090909020202090909090a0f02060f0e02020202020202020202060f0206030707070710020207070707050f02060e020202020f0202090909090a0f020b0909090a020f02020202020e060f020102020206020f020207070707050f020c04040405020f0202090909090a0f020602020202020f020202020202060f020602080909090d020209090909090f0206020f0e020202020202020202060f0206020307070707020202111102060f0206020202020202020202020212060f020307070404040404040404040705`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 . . . 2 2 2 2 2 
2 . 2 2 2 2 2 2 . . . 2 2 2 2 2 
2 . 2 2 . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 . . 2 2 2 2 2 
2 . 2 . . . . . 2 . . 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . 2 2 2 2 2 
2 . 2 2 2 2 2 . 2 . . 2 2 2 2 2 
2 . 2 . . . . . 2 . . . . . . 2 
2 . 2 . 2 2 2 2 2 . . . . . . 2 
2 . 2 . 2 . . . . . . . . . . 2 
2 . 2 . 2 2 2 2 2 . . . . . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorLight1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.stairLarge,sprites.dungeon.floorLight0], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030505050505050505050505050505030305050502020202020202020202050303060505020404040404040404020503030505050204040404040404040205030306050502040404040404040102050303050505020404040404040404020503030605050204040404020202020205030305050502040404040205050505050303060505020404040402050505050503030505050204040404020505050505030306050502040404040205050505050303050505020404040402050505050503030605050202040402020505050505030305050505050505050505050505050303030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 2 2 2 . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . 2 . . . . . . . . 2 . . 
. . . . 2 . . . . 2 2 2 2 2 . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 . . . . 2 . . . . . . 
. . . . 2 2 . . 2 2 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight0,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundCenter,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
