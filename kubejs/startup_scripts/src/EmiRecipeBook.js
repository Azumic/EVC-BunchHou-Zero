StartupEvents.postInit(event => {
    const $EmiScreenManager = Java.loadClass("dev.emi.emi.screen.EmiScreenManager")
    const $AbstractContainerScreen = Java.loadClass("net.minecraft.client.gui.screens.inventory.AbstractContainerScreen")

    $EmiScreenManager.setGetContainerClassName((screen) => screen instanceof $AbstractContainerScreen ? screen.getMenu().getClass().getName() : "")

    // $EmiScreenManager.recipeTypeMap.put("net.satisfyu.meadow.client.gui.handler.WoodcutterGuiHandler", "meadow:woodcutting")
    // $EmiScreenManager.recipeTypeMap.put("net.mehvahdjukaar.sawmill.SawmillMenu", "sawmill:woodcutting")
})