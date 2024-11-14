

/**
 * @name 皮埃尔
 */
const piaierDia = new _CharDias("piaier")
    .addDialogueInfo(new _DialogueInfo("goumai")
        .setQuestion("有什么可以招待的吗？")
        .setCanDia((/** @type {Internal.ItemEntityInteractedEventJS} */ event) => {
            // console.log(`event: ${event.player} ${event.item} ${event.item.id}`);
            return event.item.id == "minecraft:carrot_seed"
        })
        .addAnswer(new _Answer("购买商品", (player, event) => {
            // openTradeGui(player, event);
            // closeDialogue(player, getGlobalDia("goumai"));
        }))
        .addAnswer(new _Answer("没什么，看看", (player, event) => {
            // closeDialogue(player, getGlobalDia("goumai"));
        }))
        .addAnswer(new _Answer("退出", (player, event) => {
            // closeDialogue(player, getGlobalDia("goumai"));
        }))
    )
    .build()

