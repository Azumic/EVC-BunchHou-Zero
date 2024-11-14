


let render = false;
const WORLD_INFO_RECSOUCE = new ResourceLocation("kubejs", "textures/painter/world_info/world_info.png");
// ForgeEvents.onEvent("com.wallev.clientbunch.api.client.OverlayRenderEvent", event => {
//     global['overlayRender'](event)
// })

// global['overlayRender'] = (/** @type {Internal.OverlayRenderEvent} */ event) => {
//     // console.log("overlayRender event");
//     // console.log(`${event.getGui()}`);

//     if (!render) return;

//     const gui = event.getGui();
//     const guiGraphics = event.getGuiGraphics();

//     gui.setupOverlayRenderState(true, false);
//     guiGraphics.blit(WORLD_INFO_RECSOUCE, 0, 0, 75, 57, 256, 256);

//     // event.getScreen().renderables.add()
// }

ForgeEvents.onEvent("net.minecraftforge.client.event.RenderGuiOverlayEvent$Pre", event => {
    global['overlayRenderPre'](event)
})

const BG = new ResourceLocation("touhou_little_maid", "textures/gui/download_background.png");

const $PowerCapabilityProvider = Java.loadClass("com.github.tartaricacid.touhoulittlemaid.capability.PowerCapabilityProvider")
const $ChatFormatting = Java.loadClass("net.minecraft.ChatFormatting")
const $Formatter = Java.loadClass("java.util.Formatter")
const $CurrentSeason = Java.loadClass("club.iananderson.seasonhud.impl.seasons.CurrentSeason")
global['overlayRenderPre'] = (/** @type {Internal.RenderGuiOverlayEvent$Pre} */ event) => {
    // console.log("overlayRender event");
    // console.log(`${event.getGui()}`);

    if (!render || event.overlay.id().toString() != "minecraft:hotbar" || Client.player == null) return;
    // console.log(`overlay ${event.overlay.id().toString()}`);
    // graphics.blit(WORLD_INFO_RECSOUCE, event.getWindow().getGuiScaledWidth() / 2 - 8, event.getWindow().getGuiScaledHeight() / 2, 72, 57, 256, 256);

    //     let text = new $Formatter().format("%s×%.2f", $ChatFormatting.BOLD, cap.get()).toString();
    //     graphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](Client.font, text, 20, 35, 0xffffff, false);
    let seasonCombined = $CurrentSeason.getInstance(Client).getSeasonHudText();
    let width = Client.font.width(seasonCombined.getString())
    let graphics = event.getGuiGraphics()
    // graphics["fill(int, int, int, int, int)"](2, 25, 2 + 11, 25 + width + 2, 0xef58626b)
    // graphics.drawString(Client.font, seasonCombined.getString(), 2, 25, 0xffffff);
    // graphics.blit(WORLD_INFO_RECSOUCE, event.getWindow().getGuiScaledWidth() - 72, 0, 0, 0, 72, 57);
    // let text = new $Formatter().format("%s×%.2f", $ChatFormatting.BOLD, cap.get()).toString();
    // graphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](Client.font, seasonCombined.getString(), 2, 25, 0xffffff, false);
    // graphics["drawString(net.minecraft.client.gui.Font,java.lang.String,float,float,int,boolean)"](Client.font, text, 20, 35, 0xffffff, false);
    // graphics["m_280430_(net.minecraft.client.gui.Font,net.minecraft.network.chat.Component,int,int,int)"](Client.font, seasonCombined, 2, 25, 0xffffff);
    // graphics["drawString(net.minecraft.client.gui.Font,net.minecraft.network.chat.Component,int,int,int)"](Client.font, seasonCombined, 2, 25, 0xffffff);



    $RenderSystem.enableBlend();
}
