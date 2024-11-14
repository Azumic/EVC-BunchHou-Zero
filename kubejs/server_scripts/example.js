// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ItemEvents.rightClicked("stick", evt => {

    // console.log("is  ");


    // // console.log(Ingredient.of("#c:swords").getItemIds());
    // let level = evt.getLevel()
    // let customer = evt.target.block

    // let displayod = level.createEntity("minecraft:item_display")
    // displayod.mergeNbt(`{transformation:[0.8000f,0.0000f,0.0000f,0.0000f,0.0000f,0.8000f,0.0000f,-0.2500f,0.0000f,0.0000f,1.0000f,0.0000f,0.0000f,0.0000f,0.0000f,1.0000f],billboard:"vertical",item:{id:"create:golden_sheet",Count:1b},item_display:"none"}`)
    // displayod.setPosition(customer.x, customer.getY() + 2.5, customer.z)
    // displayod.setCustomName(Text.of(`§e收银 5C`))
    // displayod.setCustomNameVisible(true)
    // displayod.spawn()
})

ItemEvents.entityInteracted(evt => {
    // let targetEntity = evt.getTarget()
    // console.log(targetEntity);

})

ItemEvents.rightClicked("apple", evt => {
    // console.log(`is ${evt.item.id}`);


    // let level = evt.getLevel()

    

    // let displayod = level.createEntity("minecraft:item_display")
    // // displayod.mergeNbt(`{transformation:[0.8000f,0.0000f,0.0000f,0.0000f,0.0000f,0.8000f,0.0000f,-0.2500f,0.0000f,0.0000f,1.0000f,0.0000f,0.0000f,0.0000f,0.0000f,1.0000f],billboard:"vertical",item:{id:"${evt.item.id}",Count:1b}`)
    // displayod.mergeNbt(`{item:{id:"${evt.item.id}",Count:1b}}`)
    // // displayod.mergeNbt(`item:{id:"${evt.item.id}",Count:1b}`)
    // displayod.setPosition(evt.target.hitX, evt.target.hitY, evt.target.hitZ)
    // displayod.setCustomName(Text.of(`§e收银 5C`))
    // displayod.setCustomNameVisible(true)
    // displayod.spawn()
})