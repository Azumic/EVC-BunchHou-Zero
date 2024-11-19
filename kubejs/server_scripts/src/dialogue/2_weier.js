

/**
 * @name 皮埃尔
 */
const weierDia = new _CharDias("weier")
    .addDialogueInfo(new _DialogueInfo("shengjiyugan")
        .setQuestion("要升级鱼竿吗")
        .setCanDia((/** @type {Internal.ItemEntityInteractedEventJS} */ event) => {
            // console.log(`event: ${event.player} ${event.item} ${event.item.id}`);
            return event.item.id == "minecraft:fishing_rod"
        })
        .addAnswer(new _Answer("嗯，对的", (player, event) => {
            // openTradeGui(player, event);
            // closeDialogue(player, getGlobalDia("goumai"));
        }))
        .addAnswer(new _Answer("没有，买点钓鱼用具", (player, event) => {
            // closeDialogue(player, getGlobalDia("goumai"));
        }))
        .addAnswer(new _Answer("退出", (player, event) => {
            // closeDialogue(player, getGlobalDia("goumai"));
        }))
    )
    .build()

