

LootJS.modifiers(evt => {
    console.log("is lootjs modefiers");

    evt.enableLogging()

})


/**
 * @todo 
 * 鱼类全都放在一个奖池里
 * 
 */
const $SeasonHelper = Java.loadClass("sereneseasons.api.season.SeasonHelper")
const $Season = Java.loadClass("sereneseasons.api.season.Season")
LootJS.modifiers(evt => {
    evt.addLootTypeModifier("fishing")
        .removeLoot("#minecraft:fishes")

    evt.addLootTypeModifier("fishing")
        .pool(pool => {
            pool.rolls(1)
                .randomChance(0.5)
                .and(b => {
                    b.timeCheck(24000, 6000, 10000)
                        .entityPredicate(entity => {
                            return isSeason(entity.level, "summer")
                        })
                })
                .addLoot("minecraft:pufferfish")

            pool.rolls(1)
                .randomChance(0.5)
                .and(b => {
                    b.timeCheck(24000, 6000, 10000)
                        .entityPredicate(entity => {
                            return isSeason(entity.level, "summer")
                        })
                })
                .addLoot("minecraft:diamond")
        })
})

function getSeasonName(serverLevel) {
    return $SeasonHelper.getSeasonState(serverLevel).getSeason().name().toLowerCase()
}

function isSeason(serverLevel, seasonName) {
    return getSeasonName(serverLevel).equals(seasonName);
}

// LootJS.modifiers(evt => {
//     evt.addLootTypeModifier("fishing")
//         .matchLoot("#minecraft:pufferfish")
//         .not(b => {
//             b.timeCheck(24000, 6000, 10000)
//         })
//         .removeLoot("minecraft:pufferfish")

//     evt.addLootTypeModifier("fishing")
//         .matchLoot("minecraft:salmon")
//         .not(b => {
//             b.timeCheck(24000, 0, 13000)
//         })
//         .removeLoot("minecraft:salmon")

//     evt.addLootTypeModifier("fishing")
//         .matchLoot("minecraft:cod")
//         .not(b => {
//             b.timeCheck(24000, 12000, 24000);
//         })
//         .removeLoot("minecraft:cod")
// })