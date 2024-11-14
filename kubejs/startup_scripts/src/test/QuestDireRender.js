

ForgeEvents.onEvent("net.minecraftforge.client.event.RenderLevelStageEvent", event => {
    global['questDireRenderEvent'](event)
})

const $RenderLevelStageEventStage = Java.loadClass("net.minecraftforge.client.event.RenderLevelStageEvent$Stage")
const $NbtUtils = Java.loadClass("net.minecraft.nbt.NbtUtils")
const $Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3")
const $RenderSystem = Java.loadClass("com.mojang.blaze3d.systems.RenderSystem")
const $RenderHelper = Java.loadClass("com.github.tartaricacid.touhoulittlemaid.util.RenderHelper")
global['questDireRenderEvent'] = (/** @type {Internal.RenderLevelStageEvent} */ event) => {
    let mc = Client;
    let player = mc.player;

    if (!($RenderLevelStageEventStage.AFTER_PARTICLES.equals(event.getStage()) && player != null)) return;

    // console.log(`${player.x} ${player.y} ${player.z}`);
    
    // let handStack = player.mainHandItem
    // if (!handStack.is("compass")) return
    // // console.log(`${handStack}`);
    
    // let posTag = handStack.getTagElement("LodestonePos")
    // // console.log(`${posTag}`);
    
    // if (posTag == null) return

    // let dirPos = $NbtUtils.readBlockPos(posTag);
    // console.log(`${pos.x} ${pos.y} ${pos.z}`);

    if (!global["questDiaInfo"]["tick"]) return
    let dirPos = new BlockPos(-1, 10, 32);


    let trackVec = new $Vec3(dirPos.getX(), dirPos.getY(), dirPos.getZ());
    let playerVec = player.trackingPosition();

    let actualDistance = playerVec.distanceTo(trackVec);
    if (actualDistance < 5) {
        return;
    }
    let viewDistance = actualDistance;
    let maxRenderDistance = mc.options.renderDistance().get() * 16;
    if (actualDistance > maxRenderDistance) {
        let delta = trackVec.subtract(playerVec).normalize();
        trackVec = playerVec.add(delta.x * maxRenderDistance, delta.y * maxRenderDistance, delta.z * maxRenderDistance);
        viewDistance = maxRenderDistance;
    }
    let scale = 0.02 * (( viewDistance + 4.0) / 3.0);
    $RenderSystem.disableDepthTest();
    $RenderSystem.depthMask(false);
    $RenderHelper.renderFloatingText(event.getPoseStack(), Math.round(actualDistance) + " m", trackVec, 0xff8800, scale, -17);
    $RenderHelper.renderFloatingText(event.getPoseStack(), "▼", trackVec, 0xff0000, scale * 1.2, -5);

}