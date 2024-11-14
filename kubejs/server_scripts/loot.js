LootJS.modifiers(evt => {
    // evt.enableLogging()
})

LootJS.modifiers(evt => {

    evt.addBlockLootModifier("minecraft:grass")
        .replaceLoot("#c:seeds", "crockpot:unknown_seeds")
        .replaceLoot("bountifulfares:grass_seeds", "crockpot:unknown_seeds")


    const $CropBlock = Java.loadClass("net.minecraft.world.level.block.CropBlock")
    const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")

    Ingredient.of("#c:seeds").getStacks()
        .forEach(stack => {
            let blockItem = stack.getItem()
            if (!(blockItem instanceof $BlockItem && blockItem.getBlock() instanceof $CropBlock)) return
            /**
             * @type {Internal.CropBlock}
             */
            const cropBlock = blockItem.getBlock()
            const maxAge = cropBlock.getMaxAge()
            const seed = cropBlock.getBaseSeedId()

            console.log(`${stack} ${cropBlock} ${maxAge} ${blockItem.getItem()} ${seed}}`)

            if (blockItem.getItem() != cropBlock.getBaseSeedId()) {
                console.log(`${seed} not found in ${stack}`);
                
            }

            evt.addBlockLootModifier(cropBlock.getId())
                .customCondition({
                        condition: "minecraft:block_state_property",
                        block: cropBlock.getId(),
                        properties: {
                            age: maxAge
                        }
                    })
                    .removeLoot(cropBlock.getBaseSeedId())
        })

    // Ingredient.all.getStacks()
    //     .forEach(stack => {
    //         let blockItem = stack.getItem()
    //         if (blockItem instanceof $BlockItem && blockItem.getBlock() instanceof $CropBlock) {
    //             /**
    //              * @type {Internal.CropBlock}
    //              */
    //             const cropBlock = blockItem.getBlock()
    //             const maxAge = cropBlock.getMaxAge()
    //             const seed = cropBlock.getBaseSeedId()

    //             console.log(`${stack} ${cropBlock} ${maxAge} ${blockItem.getItem()} ${seed}}`)


    //             if (blockItem.getItem() != cropBlock.getBaseSeedId()) {
    //                 console.log(`${seed} not found in ${stack}`);

    //                 evt.addBlockLootModifier(cropBlock.getId())
    //                     .modifyLoot(cropBlock.getBaseSeedId(), s => {
    //                         console.log(s);
                            
    //                         return s;
    //                         // s.shrink(1)
    //                     })
    //                     // .replaceLoot(cropBlock.getBaseSeedId(), blockItem.getItem())
    //             } else {
    //                 evt.addBlockLootModifier(cropBlock.getId())
    //                     .customCondition({
    //                         condition: "minecraft:block_state_property",
    //                         block: cropBlock.getId(),
    //                         properties: {
    //                             age: maxAge
    //                         }
    //                     })
    //                     .removeLoot(cropBlock.getBaseSeedId())
    //             }
    //         }
    //     })
})