

ItemEvents.modification(evt => {
    let attReachItems1 = ["minecraft:stone_sword", "minecraft:wooden_sword", "minecraft:iron_sword", "minecraft:golden_sword"];
    evt.modify(attReachItems1, item => {
        item.addAttribute("forge:entity_reach", "2AD3F246-FEE1-4E67-B886-69FD380BB150", "entity reach modifier", 1, "addition");
    })

    let attReachItems2 = ["minecraft:diamond_sword", "minecraft:netherite_sword"];
    evt.modify(attReachItems2, item => {
        item.addAttribute("forge:entity_reach", "2AD3F246-FEE1-4E67-B886-69FD380BB150", "entity reach modifier", 2, "addition");
    })
})
