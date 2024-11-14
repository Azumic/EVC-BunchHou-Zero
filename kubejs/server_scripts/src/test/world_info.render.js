

// const $ChatScrenn = Java.loadClass("net.minecraft.client.gui.screens.ChatScrenn")
// const $ChatScrenn = Java.loadClass("net.minecraft.client.gui.screens.ChatScreen")

// let render = true;

// PlayerEvents.tick(event => {
//     if (!render) return

//     let draw = Client.screen && Client.screen instanceof $ChatScrenn ? "gui" : "ingame"

//     let player = event.player
//     player.paint({
//         world_info: {
//             type: 'rectangle',
//             visible: true,
//             alignX: "right",
//             alignY: "top",
//             x: 0,
//             y: 0,
//             u0: 0,
//             v0: 0,
//             u1: 72,
//             v1: 57,
//             w: "$screenW*0.20", 
//             h: "$screenW*0.20",
//             // texture: 'kubejs:textures/painter/world_info/base128x.png',
//             texture: 'kubejs:textures/painter/world_info/world_info.png',
//             draw: draw,
//         },
//         lava: {
//             type: 'atlas_texture',
//             texture: 'minecraft:block/lava_flow',
//         },
//     })
// })

// ClientEvents.tick(event => {
//     Client.g
// })