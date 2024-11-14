

ItemEvents.tooltip(evt => {
    evt.addAdvanced(["#sereneseasons:spring_crops", "#sereneseasons:summer_crops", "#sereneseasons:autumn_crops", "#sereneseasons:winter_crops"],  (stack, advanced, tooltips) => {        
        let seasonDescs = []
        if (stack.hasTag("sereneseasons:spring_crops")) {
            seasonDescs.push(Component.translatable("desc.sereneseasons.spring").withStyle("green"))
        }
        if (stack.hasTag("sereneseasons:summer_crops")) {
            seasonDescs.push(Component.translatable("desc.sereneseasons.summer").withStyle("yellow"))
        }
        if (stack.hasTag("sereneseasons:autumn_crops")) {
            seasonDescs.push(Component.translatable("desc.sereneseasons.autumn").withStyle("gold"))
        }
        if (stack.hasTag("sereneseasons:winter_crops")) {
            seasonDescs.push(Component.translatable("desc.sereneseasons.winter").withStyle("aqua"))
        }

        if (seasonDescs.length > 0) {
            tooltips.add(Component.translatable("desc.sereneseasons.fertile_seasons").append(":"))
    
            if (seasonDescs.length == 4) {
                tooltips.add(Component.translatable("desc.sereneseasons.year_round").withStyle("light_purple"))
            } else {
                let desc = Component.literal(" ").append(seasonDescs[0]);
                if (seasonDescs.length > 1) {
                    for (let i = 1; i < seasonDescs.length; i++) {
                        desc = desc.append("、").append(seasonDescs[i])
                    }
                }
                tooltips.add(desc)
            }
        }
    })
})