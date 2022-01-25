const COMMON = 5;
const RARE = 3.75;
const EPIC = 2.5;
const LEGENDARY = 1.25;
const HERO = 0;

const cards = {
    26000028: {
        name: "threeMusketeers",
        cost: 9,
        rarity: RARE,
        dsName: "3M",
        img: imgPath("threeMusketeers")
    },
    26000038: {
        name: "iceGolem",
        cost: 2,
        rarity: RARE,
        dsName: "IceGolem",
        img: imgPath("iceGolem")
    },
    26000044: {
        name: "hunter",
        cost: 4,
        rarity: EPIC,
        dsName: "Hunter",
        img: imgPath("hunter")
    },
    26000050: {
        name: "royalGhost",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Ghost",
        img: imgPath("royalGhost")
    },
    26000059: {
        name: "royalHogs",
        cost: 5,
        rarity: RARE,
        dsName: "RoyalHogs",
        img: imgPath("royalHogs")
    },
    26000074: {
        name: "goldenKnight",
        cost: 4,
        rarity: HERO,
        dsName: "GoldenKnight",
        img: imgPath("goldenKnight")
    },
    28000015: {
        name: "barbBarrel",
        cost: 2,
        rarity: EPIC,
        dsName: "BarbBarrel",
        img: imgPath("barbBarrel")
    },
    28000016: {
        name: "healSpirit",
        cost: 1,
        rarity: RARE,
        dsName: "HealSpirit",
        img: imgPath("healSpirit")
    },
    26000009: {
        name: "golem",
        cost: 8,
        rarity: EPIC,
        dsName: "Golem",
        img: imgPath("golem")
    },
    26000013: {
        name: "bomber",
        cost: 2,
        rarity: COMMON,
        dsName: "Bomber",
        img: imgPath("bomber")
    },
    26000016: {
        name: "prince",
        cost: 5,
        rarity: EPIC,
        dsName: "Prince",
        img: imgPath("prince")
    },
    26000048: {
        name: "nightWitch",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "NightWitch",
        img: imgPath("nightWitch")
    },
    26000049: {
        name: "bats",
        cost: 2,
        rarity: COMMON,
        dsName: "Bats",
        img: imgPath("bats")
    },
    26000080: {
        name: "skeletonDragons",
        cost: 4,
        rarity: COMMON,
        dsName: "SkeletonDragons",
        img: imgPath("skeletonDragons")
    },
    28000007: {
        name: "lightning",
        cost: 6,
        rarity: EPIC,
        dsName: "Lightning",
        img: imgPath("lightning")
    },
    28000012: {
        name: "tornado",
        cost: 3,
        rarity: EPIC,
        dsName: "Tornado",
        img: imgPath("tornado")
    },
    26000010: {
        name: "skeletons",
        cost: 1,
        rarity: COMMON,
        dsName: "Skellies",
        img: imgPath("skeletons")
    },
    26000027: {
        name: "darkPrince",
        cost: 4,
        rarity: EPIC,
        dsName: "DarkPrince",
        img: imgPath("darkPrince")
    },
    26000072: {
        name: "archerQueen",
        cost: 5,
        rarity: HERO,
        dsName: "ArcherQueen",
        img: imgPath("archerQueen")
    },
    26000083: {
        name: "motherWitch",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "MotherWitch",
        img: imgPath("motherWitch")
    },
    26000085: {
        name: "electroGiant",
        cost: 8,
        rarity: EPIC,
        dsName: "ElectroGiant",
        img: imgPath("electroGiant")
    },
    27000012: {
        name: "goblinCage",
        cost: 4,
        rarity: RARE,
        dsName: "GoblinCage",
        img: imgPath("goblinCage")
    },
    26000047: {
        name: "royalRecruits",
        cost: 7,
        rarity: COMMON,
        dsName: "RoyalRecruits",
        img: imgPath("royalRecruits")
    },
    26000052: {
        name: "zappies",
        cost: 4,
        rarity: RARE,
        dsName: "Zappies",
        img: imgPath("zappies")
    },
    26000057: {
        name: "flyingMachine",
        cost: 4,
        rarity: RARE,
        dsName: "FlyingMachine",
        img: imgPath("flyingMachine")
    },
    28000000: {
        name: "fireball",
        cost: 4,
        rarity: RARE,
        dsName: "Fireball",
        img: imgPath("fireball")
    },
    28000001: {
        name: "arrows",
        cost: 3,
        rarity: COMMON,
        dsName: "Arrows",
        img: imgPath("arrows")
    },
    26000004: {
        name: "pekka",
        cost: 7,
        rarity: EPIC,
        dsName: "PEKKA",
        img: imgPath("pekka")
    },
    26000006: {
        name: "balloon",
        cost: 5,
        rarity: EPIC,
        dsName: "Balloon",
        img: imgPath("balloon")
    },
    26000015: {
        name: "babyDragon",
        cost: 4,
        rarity: EPIC,
        dsName: "BabyD",
        img: imgPath("babyDragon")
    },
    26000035: {
        name: "lumberjack",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "Lumber",
        img: imgPath("lumberjack")
    },
    26000042: {
        name: "electroWizard",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "eWiz",
        img: imgPath("electroWizard")
    },
    28000005: {
        name: "freeze",
        cost: 4,
        rarity: EPIC,
        dsName: "Freeze",
        img: imgPath("freeze")
    },
    28000008: {
        name: "zap",
        cost: 2,
        rarity: COMMON,
        dsName: "Zap",
        img: imgPath("zap")
    },
    26000008: {
        name: "barbarians",
        cost: 5,
        rarity: COMMON,
        dsName: "Barbs",
        img: imgPath("barbarians")
    },
    26000029: {
        name: "lavaHound",
        cost: 7,
        rarity: LEGENDARY,
        dsName: "Lava",
        img: imgPath("lavaHound")
    },
    26000032: {
        name: "miner",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Miner",
        img: imgPath("miner")
    },
    26000037: {
        name: "infernoDragon",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "InfernoD",
        img: imgPath("infernoDragon")
    },
    26000046: {
        name: "bandit",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Bandit",
        img: imgPath("bandit")
    },
    26000051: {
        name: "ramRider",
        cost: 5,
        rarity: LEGENDARY,
        dsName: "RamRider",
        img: imgPath("ramRider")
    },
    26000055: {
        name: "megaKnight",
        cost: 7,
        rarity: LEGENDARY,
        dsName: "MegaKnight",
        img: imgPath("megaKnight")
    },
    26000084: {
        name: "electroSpirit",
        cost: 1,
        rarity: COMMON,
        dsName: "ElectroSpirit",
        img: imgPath("electroSpirit")
    },
    26000012: {
        name: "skeletonArmy",
        cost: 3,
        rarity: EPIC,
        dsName: "Skarmy",
        img: imgPath("skeletonArmy")
    },
    26000024: {
        name: "royalGiant",
        cost: 6,
        rarity: COMMON,
        dsName: "RG",
        img: imgPath("royalGiant")
    },
    26000026: {
        name: "princess",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "Princess",
        img: imgPath("princess")
    },
    26000040: {
        name: "dartGoblin",
        cost: 3,
        rarity: RARE,
        dsName: "DartGob",
        img: imgPath("dartGoblin")
    },
    28000004: {
        name: "goblinBarrel",
        cost: 3,
        rarity: EPIC,
        dsName: "Barrel",
        img: imgPath("goblinBarrel")
    },
    26000033: {
        name: "sparky",
        cost: 6,
        rarity: LEGENDARY,
        dsName: "Sparky",
        img: imgPath("sparky")
    },
    26000043: {
        name: "eliteBarbarians",
        cost: 6,
        rarity: COMMON,
        dsName: "eBarbs",
        img: imgPath("eliteBarbarians")
    },
    26000060: {
        name: "goblinGiant",
        cost: 6,
        rarity: EPIC,
        dsName: "GobGiant",
        img: imgPath("goblinGiant")
    },
    28000002: {
        name: "rage",
        cost: 2,
        rarity: EPIC,
        dsName: "Rage",
        img: imgPath("rage")
    },
    26000000: {
        name: "knight",
        cost: 3,
        rarity: COMMON,
        dsName: "Knight",
        img: imgPath("knight")
    },
    26000017: {
        name: "wizard",
        cost: 5,
        rarity: RARE,
        dsName: "Wiz",
        img: imgPath("wizard")
    },
    26000020: {
        name: "giantSkeleton",
        cost: 6,
        rarity: EPIC,
        dsName: "GiantSkelly",
        img: imgPath("giantSkeleton")
    },
    26000021: {
        name: "hog",
        cost: 4,
        rarity: RARE,
        dsName: "Hog",
        img: imgPath("hog")
    },
    28000011: {
        name: "log",
        cost: 2,
        rarity: LEGENDARY,
        dsName: "Log",
        img: imgPath("log")
    },
    26000003: {
        name: "giant",
        cost: 5,
        rarity: RARE,
        dsName: "Giant",
        img: imgPath("giant")
    },
    26000005: {
        name: "minions",
        cost: 3,
        rarity: COMMON,
        dsName: "Minions",
        img: imgPath("minions")
    },
    26000007: {
        name: "witch",
        cost: 5,
        rarity: EPIC,
        dsName: "Witch",
        img: imgPath("witch")
    },
    28000010: {
        name: "graveyard",
        cost: 5,
        rarity: LEGENDARY,
        dsName: "Graveyard",
        img: imgPath("graveyard")
    },
    28000017: {
        name: "snowball",
        cost: 2,
        rarity: COMMON,
        dsName: "Snowball",
        img: imgPath("snowball")
    },
    26000034: {
        name: "bowler",
        cost: 5,
        rarity: EPIC,
        dsName: "Bowler",
        img: imgPath("bowler")
    },
    26000063: {
        name: "electroDragon",
        cost: 5,
        rarity: EPIC,
        dsName: "eDragon",
        img: imgPath("electroDragon")
    },
    26000002: {
        name: "goblins",
        cost: 2,
        rarity: COMMON,
        dsName: "Gobs",
        img: imgPath("goblins")
    },
    26000011: {
        name: "valkyrie",
        cost: 4,
        rarity: RARE,
        dsName: "Valk",
        img: imgPath("valkyrie")
    },
    26000030: {
        name: "iceSpirit",
        cost: 1,
        rarity: COMMON,
        dsName: "IceSpirit",
        img: imgPath("iceSpirit")
    },
    26000045: {
        name: "executioner",
        cost: 5,
        rarity: EPIC,
        dsName: "Exe",
        img: imgPath("executioner")
    },
    28000003: {
        name: "rocket",
        cost: 6,
        rarity: RARE,
        dsName: "Rocket",
        img: imgPath("rocket")
    },
    26000054: {
        name: "cannonCart",
        cost: 5,
        rarity: COMMON,
        dsName: "CannonCart",
        img: imgPath("cannonCart")
    },
    27000001: {
        name: "goblinHut",
        cost: 5,
        rarity: RARE,
        dsName: "GobHut",
        img: imgPath("goblinHut")
    },
    27000010: {
        name: "furnace",
        cost: 4,
        rarity: RARE,
        dsName: "Furnace",
        img: imgPath("furnace")
    },
    26000019: {
        name: "spearGoblins",
        cost: 2,
        rarity: COMMON,
        dsName: "SpearGobs",
        img: imgPath("spearGoblins")
    },
    26000022: {
        name: "minionHorde",
        cost: 5,
        rarity: COMMON,
        dsName: "Horde",
        img: imgPath("minionHorde")
    },
    26000041: {
        name: "goblinGang",
        cost: 3,
        rarity: COMMON,
        dsName: "GobGang",
        img: imgPath("goblinGang")
    },
    27000002: {
        name: "mortar",
        cost: 4,
        rarity: COMMON,
        dsName: "Mortar",
        img: imgPath("mortar")
    },
    26000053: {
        name: "rascals",
        cost: 5,
        rarity: COMMON,
        dsName: "Rascals",
        img: imgPath("rascals")
    },
    28000006: {
        name: "mirror",
        cost: 0,
        rarity: EPIC,
        dsName: "Mirror",
        img: imgPath("mirror")
    },
    26000069: {
        name: "skeletonKing",
        cost: 4,
        rarity: HERO,
        dsName: "SkeletonKing",
        img: imgPath("skeletonKing")
    },
    26000058: {
        name: "wallbreakers",
        cost: 2,
        rarity: EPIC,
        dsName: "WallBreakers",
        img: imgPath("wallbreakers")
    },
    26000062: {
        name: "magicArcher",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "MagicArcher",
        img: imgPath("magicArcher")
    },
    27000004: {
        name: "bombTower",
        cost: 4,
        rarity: RARE,
        dsName: "BombTower",
        img: imgPath("bombTower")
    },
    26000014: {
        name: "musketeer",
        cost: 4,
        rarity: RARE,
        dsName: "Musk",
        img: imgPath("musketeer")
    },
    28000009: {
        name: "poison",
        cost: 4,
        rarity: EPIC,
        dsName: "Poison",
        img: imgPath("poison")
    },
    26000018: {
        name: "miniPekka",
        cost: 4,
        rarity: RARE,
        dsName: "MP",
        img: imgPath("miniPekka")
    },
    26000031: {
        name: "fireSpirit",
        cost: 1,
        rarity: COMMON,
        dsName: "FireSpirit",
        img: imgPath("fireSpirit")
    },
    26000036: {
        name: "battleRam",
        cost: 4,
        rarity: RARE,
        dsName: "Ram",
        img: imgPath("battleRam")
    },
    26000067: {
        name: "elixirGolem",
        cost: 3,
        rarity: RARE,
        dsName: "ElixirGolem",
        img: imgPath("elixirGolem")
    },
    26000068: {
        name: "battleHealer",
        cost: 4,
        rarity: RARE,
        dsName: "BattleHealer",
        img: imgPath("battleHealer")
    },
    26000023: {
        name: "iceWizard",
        cost: 3,
        rarity: LEGENDARY,
        dsName: "IceWiz",
        img: imgPath("iceWizard")
    },
    27000006: {
        name: "tesla",
        cost: 4,
        rarity: LEGENDARY,
        dsName: "Tesla",
        img: imgPath("tesla")
    },
    27000008: {
        name: "xbow",
        cost: 6,
        rarity: EPIC,
        dsName: "XBow",
        img: imgPath("xbow")
    },
    26000039: {
        name: "megaMinion",
        cost: 3,
        rarity: RARE,
        dsName: "MM",
        img: imgPath("megaMinion")
    },
    26000061: {
        name: "fisherman",
        cost: 3,
        rarity: COMMON,
        dsName: "Fisherman",
        img: imgPath("fisherman")
    },
    26000025: {
        name: "guards",
        cost: 3,
        rarity: EPIC,
        dsName: "Guards",
        img: imgPath("guards")
    },
    27000013: {
        name: "goblinDrill",
        cost: 3,
        rarity: EPIC,
        dsName: "GoblinDrill",
        img: imgPath("goblinDrill")
    },
    26000056: {
        name: "skeletonBarrel",
        cost: 3,
        rarity: COMMON,
        dsName: "SkellyBarrel",
        img: imgPath("skeletonBarrel")
    },
    26000064: {
        name: "firecracker",
        cost: 3,
        rarity: COMMON,
        dsName: "Firecracker",
        img: imgPath("firecracker")
    },
    27000005: {
        name: "barbarianHut",
        cost: 7,
        rarity: RARE,
        dsName: "BarbHut",
        img: imgPath("barbarianHut")
    },
    27000007: {
        name: "elixirCollector",
        cost: 6,
        rarity: RARE,
        dsName: "Pump",
        img: imgPath("elixirCollector")
    },
    27000000: {
        name: "cannon",
        cost: 3,
        rarity: COMMON,
        dsName: "Cannon",
        img: imgPath("cannon")
    },
    27000009: {
        name: "tombstone",
        cost: 3,
        rarity: RARE,
        dsName: "Tombstone",
        img: imgPath("tombstone")
    },
    27000003: {
        name: "infernoTower",
        cost: 5,
        rarity: RARE,
        dsName: "Inferno",
        img: imgPath("infernoTower")
    },
    26000001: {
        name: "archer",
        cost: 3,
        rarity: COMMON,
        dsName: "Archers",
        img: imgPath("archer")
    },
    28000013: {
        name: "clone",
        cost: 3,
        rarity: EPIC,
        dsName: "Clone",
        img: imgPath("clone")
    },
    28000014: {
        name: "earthquake",
        cost: 3,
        rarity: RARE,
        dsName: "Earthquake",
        img: imgPath("earthquake")
    },
    28000018: {
        name: "royalDelivery",
        cost: 3,
        rarity: COMMON,
        dsName: "RoyalDelivery",
        img: imgPath("royalDelivery")
    },
};

function imgPath(name) { return `./img/cards/${name}.png`; }

export { cards }