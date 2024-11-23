


const $FishBehaviorReloadListener = Java.loadClass("com.bonker.stardewfishing.server.FishBehaviorReloadListener")
const $FishBehavior = Java.loadClass("com.bonker.stardewfishing.common.FishBehavior")
StardewFishing.miniGameStart(event => {
    let defaultFishBehaivor = {
        idleTime: 40,
        topSpeed: 1.5,
        upAcceleration: 0.4,
        downAcceleration: 0.4,
        avgDistance: 40,
        moveVariation: 20,
    }

    let avgDistanceD = 1, moveVariationD = avgDistanceD;
    let upAccelerationD = 0.1, downAccelerationD = upAccelerationD, topSpeedD = upAccelerationD;

    let rewards = event.getRewards()
    let fishBehavior = event.getFishBehavior()

    console.log("=============================================================================");
    console.log(`rewards: ${rewards}, fishBehavior: ${fishBehavior}, rewards.get(0): ${rewards.get(0)}`);
    let quality = 0;
    for (const itemstack of rewards) {
        if (itemstack.getOrCreateTag().contains("quality_food")) {
            quality = itemstack.getOrCreateTag().contains("quality_food");
            console.log(`quality itemstack: ${itemstack}, quality: ${quality}, nbt: ${itemstack.getOrCreateTag()}`);
            break;
        }
    }

    if (fishBehavior == null) {
        event.setFishBehavior(new $FishBehavior(defaultFishBehaivor.idleTime, defaultFishBehaivor.topSpeed, defaultFishBehaivor.upAcceleration, defaultFishBehaivor.downAcceleration, defaultFishBehaivor.avgDistance, defaultFishBehaivor.moveVariation, "stardew_fishing:textures/fish.png"))
        fishBehavior = event.getFishBehavior()
    }

    if (quality > 0) {
        console.log(`oriTopSpeed: ${fishBehavior.getTopSpeed()}, upAcceleration: ${fishBehavior.getUpAcceleration()}, downAcceleration: ${fishBehavior.getDownAcceleration()}, avgDistance: ${fishBehavior.getAvgDistance()}, moveVariation: ${fishBehavior.getMoveVariation()}`);
        fishBehavior.setTopSpeed(fishBehavior.getTopSpeed() * ((quality * topSpeedD) + 1))
        fishBehavior.setUpAcceleration(fishBehavior.getUpAcceleration() * ((quality * upAccelerationD) + 1))
        fishBehavior.setDownAcceleration(fishBehavior.getDownAcceleration() * ((quality * downAccelerationD) + 1))
        fishBehavior.setAvgDistance(fishBehavior.getAvgDistance() + (quality * avgDistanceD))
        fishBehavior.setMoveVariation(fishBehavior.getMoveVariation() + (quality * moveVariationD))
    } else {
        fishBehavior.setIdleTime(defaultFishBehaivor.idleTime)
        fishBehavior.setTopSpeed(defaultFishBehaivor.topSpeed)
        fishBehavior.setUpAcceleration(defaultFishBehaivor.upAcceleration)
        fishBehavior.setDownAcceleration(defaultFishBehaivor.downAcceleration)
        fishBehavior.setAvgDistance(defaultFishBehaivor.avgDistance)
        fishBehavior.setMoveVariation(defaultFishBehaivor.moveVariation)
    }

    console.log(`endTopSpeed: ${fishBehavior.getTopSpeed()}, upAcceleration: ${fishBehavior.getUpAcceleration()}, downAcceleration: ${fishBehavior.getDownAcceleration()}, avgDistance: ${fishBehavior.getAvgDistance()}, moveVariation: ${fishBehavior.getMoveVariation()}`);
    console.log("-----------------------------------------------------------------------------");
})

StardewFishing.miniGameEnd(event => {
    if (event.getStoredRewards().isEmpty() || event.getStoredRewards().get().size() <= 1) {
        return
    }
    event.player.tell("=========")
    event.getStoredRewards().get().forEach(stack => {
        event.player.tell(stack.displayName)
    })
})