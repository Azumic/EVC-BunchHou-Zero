// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

StartupEvents.registry("block", evt => {
    // const $CarrotBlock = Java.loadClass("net.minecraft.world.level.block.CarrotBlock")
    // evt.create("minecraft:carrots", "crop")
    //     .age($CarrotBlock.MAX_AGE)
    //     .model("minecraft:carrots")
    //     .box(0, 0, 0, 16, 2, 16)
    //     .box(0, 0, 0, 16, 3, 16)
    //     .box(0, 0, 0, 16, 4, 16)
    //     .box(0, 0, 0, 16, 6, 16)
    //     .box(0, 0, 0, 16, 7, 16)
    //     .box(0, 0, 0, 16, 8, 16)
    //     .box(0, 0, 0, 16, 9, 16)
})

ForgeModEvents.onEvent("net.minecraftforge.registries.RegisterEvent", evt => {
    // const $FrKeys = Java.loadClass("net.minecraftforge.registries.ForgeRegistries$Keys")
    // const $ItemNameBlockItem = Java.loadClass("net.minecraft.world.item.ItemNameBlockItem")
    // const $ItemProperties = Java.loadClass("net.minecraft.world.item.Item$Properties")

    // const $FarmersDelight = Java.loadClass("vectorwing.farmersdelight.FarmersDelight");
    // const $FoodValues = Java.loadClass("vectorwing.farmersdelight.common.FoodValues");
    // const $ModBlocks = Java.loadClass("vectorwing.farmersdelight.common.registry.ModBlocks");
    // const $ModItems = Java.loadClass("vectorwing.farmersdelight.common.registry.ModItems");

    // evt.register($FrKeys.ITEMS, helper => helper.register(new ResourceLocation(ResourceLocation.DEFAULT_NAMESPACE, "carrot"), new Item(new $ItemProperties().food(Items.CARROT.getFoodProperties()))));
    // evt.register($FrKeys.ITEMS, helper => helper.register(new ResourceLocation(ResourceLocation.DEFAULT_NAMESPACE, "carrot_seed"), new $ItemNameBlockItem(Blocks.CARROTS, new $ItemProperties())));
    // evt.register($FrKeys.ITEMS, helper => helper.register($ModItems.ONION.getId(), new Item($ModItems.foodItem($FoodValues.ONION))));
    // evt.register($FrKeys.ITEMS, helper => helper.register(new ResourceLocation($FarmersDelight.MODID, "onion_seed"), new $ItemNameBlockItem($ModBlocks.ONION_CROP.get(), new $ItemProperties())));
})

