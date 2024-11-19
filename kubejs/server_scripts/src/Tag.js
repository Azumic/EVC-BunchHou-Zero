

ServerEvents.tags("item", evt => {
    evt.get("forge:crops")
        .remove("minecraft:carrot", "minecraft:potato")

    evt.get("quark:seed_pouch_holdable")
        .remove("minecraft:carrot", "minecraft:potato")
        // .add("minecraft:potato_seed", "minecraft:carrot_seed")

    evt.get("sereneseasons:spring_crops").add("minecraft:carrot_seed", "minecraft:potato_seed")
    evt.get("sereneseasons:summer_crops").add()
    evt.get("sereneseasons:autumn_crops").add("minecraft:carrot_seed")
    evt.get("sereneseasons:winter_crops").add()

    evt.get("forge:seeds").add("minecraft:potato_seed", "minecraft:carrot_seed")

    evt.get("forge:seeds").add('bountifulfares:maize_seeds')

    evt.get("c:seeds").add('bountifulfares:maize_seeds')

})

ServerEvents.tags("block", evt => {
    evt.get("crockpot:unknown_crops").add("#minecraft:crops")
})

ServerEvents.tags("entity_type", evt => {
    evt.get("iceandfire:blinded").add("touhou_little_maid:maid")
    console.log(evt.get("iceandfire:blinded").getObjectIds());
    
})