

/**
 * @name 刘易斯
 */
const liuyisiDia = new _CharDias("liuyisi")
    .addDialogueInfo(new _DialogueInfo("dazhaohu")
        .setQuestion("你好啊，我是镇长刘易斯")
        .setCanDia((event) => false)
        .addAnswer(new _Answer("镇长真伟大！", (player, event) => {
            // closeDialogue(player, getGlobalDia("dazhaohu"));
        }))
        .addAnswer(new _Answer("退出", (player, event) => {
            // closeDialogue(player, getGlobalDia("dazhaohu"));
        }))
    )
    .addDialogueInfo(new _DialogueInfo("songliwu")
        .setQuestion("你要送我礼物吗！")
        .setCanDia((/** @type {Internal.ItemEntityInteractedEventJS} */ event) => {
            return event.item.id == "minecraft:potato_seed"
        })
        .addAnswer(new _Answer("那可不，我伟大的镇长", (player, event) => {
            // closeDialogue(player, getGlobalDia("songliwu"));
        }))
        .addAnswer(new _Answer("不，找你来事项说下那块地的是事", (player, event) => {
            // closeDialogue(player, getGlobalDia("songliwu"));
        }))
        .addAnswer(new _Answer("退出", (player, event) => {
            // closeDialogue(player, getGlobalDia("songliwu"));
        }))
    )
    .build()
