

StartupEvents.registry("item", evt => {
    const $Item = Java.loadClass("net.minecraft.world.item.Item")
    const $FrKeys = Java.loadClass("net.minecraftforge.registries.ForgeRegistries$Keys")
    const $ItemNameBlockItem = Java.loadClass("net.minecraft.world.item.ItemNameBlockItem")
    const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties")

    const $FarmersDelight = Java.loadClass("vectorwing.farmersdelight.FarmersDelight");
    const $FoodValues = Java.loadClass("vectorwing.farmersdelight.common.FoodValues");
    const $ModBlocks = Java.loadClass("vectorwing.farmersdelight.common.registry.ModBlocks");
    const $ModItems = Java.loadClass("vectorwing.farmersdelight.common.registry.ModItems");


    evt.createCustom("minecraft:carrot", () => new $Item(new $ItemProperties().food(Items.CARROT.getFoodProperties())))
    evt.createCustom("minecraft:carrot_seed", () => new $ItemNameBlockItem(Blocks.CARROTS, new $ItemProperties()))
    evt.createCustom("minecraft:potato", () => new $Item(new $ItemProperties().food(Items.POTATO.getFoodProperties())))
    evt.createCustom("minecraft:potato_seed", () => new $ItemNameBlockItem(Blocks.POTATOES, new $ItemProperties()))
    // evt.createCustom("farmersdelight:onion", () => new $Item($ModItems.foodItem($FoodValues.ONION)))
    // evt.createCustom("farmersdelight:onion_seed", () => new $ItemNameBlockItem($ModBlocks.ONION_CROP.get(), new $ItemProperties()))
})