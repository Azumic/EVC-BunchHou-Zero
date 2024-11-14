ServerEvents.recipes(evt => {
    evt.remove({ output: "#waystones:sharestones"})
    evt.remove({ output: "#waystones:waystones"})
    evt.remove({ output: "waystones:portstone"})
})