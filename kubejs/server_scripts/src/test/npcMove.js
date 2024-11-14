

const $Vec3 = Java.loadClass("net.minecraft.world.phys.Vec3")
const $NbtUtils = Java.loadClass("net.minecraft.nbt.NbtUtils")
const $BehaviorUtils = Java.loadClass("net.minecraft.world.entity.ai.behavior.BehaviorUtils")
ItemEvents.entityInteracted("compass", evt => {
    let player = evt.getPlayer()
    let handStack = player.mainHandItem
    if (!handStack.is("compass")) return
    // console.log(`${handStack}`);
    
    let posTag = handStack.getTagElement("LodestonePos")
    // console.log(`${posTag}`);
    
    if (posTag == null) return

    let dirPos = $NbtUtils.readBlockPos(posTag);

    let targetEntity = evt.getTarget()
    // console.log(targetEntity);

    let trackVec = new $Vec3(dirPos.getX(), dirPos.y + 1, dirPos.getZ());
    let playerVec = player.trackingPosition();

    // console.log(`noAi: ${targetEntity.isNoAi()}`);
    
    // targetEntity.setNoAi(false);
    targetEntity.goalSelector.removeAllGoals(goad => true);
    
    $BehaviorUtils.setWalkAndLookTargetMemories(targetEntity, trackVec, 0.5, 2);

    console.log(`targetEntity: ${targetEntity} ${trackVec}`);

    // targetEntity.moveTo(trackVec)
    // BehaviorUtils.setWalkAndLookTargetMemories(maid, mutableBlockPos, this.movementSpeed, 0);
    // targetEntity.getNavigation().moveTo(targetEntity, trackVec);
})