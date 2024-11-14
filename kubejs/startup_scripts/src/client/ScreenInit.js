


ForgeEvents.onEvent("net.minecraftforge.client.event.ScreenEvent$Init$Post", event => {
    global['screenInit'](event)
})

global['screenInit'] = (/** @type {Internal.ScreenEvent$Init$Post} */ event) => {
    // console.log("screenInit");
    // console.log(`${event.getScreen()}`);
    
    // event.getScreen().renderables.add()
}

// ForgeEvents.onEvent("org.violetmoon.zetaimplforge.client.event.play.ForgeZRenderGuiOverlay", event => {
//     global['crosshair'](event)
// })

// global['crosshair'] = (/** @type {org.violetmoon.zeta.client.event.play.ZRenderGuiOverlay$Crosshair$Post} */ event) => {
//     console.log("crosshair");
//     console.log(`${event.getScreen()}`);
    
//     // event.getScreen().renderables.add()
// }