

let renderHeight = 0.25

global['questDialogues2'] = {
    //  对话id: ["对话内容", "选项", "选项", "退出键"]
    "goto_altar": {
        "qusetion": "旅行者你好,由于上古时期红魔大战,导致我们的祭坛损坏,你可帮我一忙",
        "answers": [{
            "text": "好的,此等任务，尽管交予我，必当倾囊相助",
            "action": (player, event) => {
                // gotoAltar(event)
                resetDiaInfo()
                closeDialogue(player, getGlobalDia("goto_altar"));
            }
        }, {
            "text": "待会吧",
            "action": (player, event) => {
                swithDialogue(player, getGlobalDia("goto_altar"), "noto_altar")
                // resetDiaInfo()
                closeDialogue(player, getGlobalDia("goto_altar"));
            }
        }, {
            "text": "退出",
            "action": (player, event) => {
                resetDiaInfo()
                closeDialogue(player, getGlobalDia("goto_altar"));
            }
        },],
    },

    "noto_altar": {
        // "qusetion": "为什么，是我的美貌不够吸引你么，呜呜呜，人家太伤心了",
        "qusetion": "有一位来自鹈鹕镇的观众最近写了一封信给我……我们来看看……她的名字是海莉。她写道：“上次我在祖祖市的时候，吃到了你做的粉色蛋糕，我马上就爱上它了。你能在下期节目中分享一下粉色蛋糕的配方吗？”。好吧，为什么不呢？这是一款非常棒的蛋糕。并且，你永远不会猜到其秘方是……甜瓜！",
        "answers": [{
            "text": "不是，假设哈，有一位美人肯当我伴侣，我定竭尽全力解她困扰",
            "action": (player, event) => {
                // gotoAltar(event)
                resetDiaInfo()
                closeDialogue(player, getGlobalDia("noto_altar"));
            }
        }, {
            "text": "并不是，我还有要事处理，待会过来帮忙",
            "action": (player, event) => {
                resetDiaInfo()
                closeDialogue(player, getGlobalDia("noto_altar"));
            }
        }, {
            "text": "退出",
            "action": (player, event) => {
                resetDiaInfo()
                closeDialogue(player, getGlobalDia("noto_altar"));
            }
        },],
    },

    "gather_wool": {
        "qusetion": "正如你所见,虽说是坏了,但好在还能修,你去帮我搜集下羊毛会来吧",
        "answers": [{
            "text": "区区小事，交给我吧",
            "action": (player, event) => {
                resetDiaInfo()
                closeDialogue(player, getGlobalDia("gather_wool"));
            },
        }, {
            "text": "这要去哪里呢，我看看吧",
            "action": (player, event) => {
                resetDiaInfo()
                closeDialogue(player, getGlobalDia("gather_wool"));
            },
        },],
    },


    "fangfengcao": {
        "qusetion": '你收到了15颗防风草种子! "收下这些，好好镇长刘易斯"',
        "answers": [],
    },
    "goumai_piaier": {
        'runCondition': (event) => {

        },
        "qusetion": '有什么可以招待的吗',
        "answers": [{
            "text": "购买商品",
            "action": (player, event) => {
                console.log("is goumai_piaier");
                console.log(global["questDiaInfo"]);
                closeDialogue(player, getGlobalDia("goumai_piaier"));
                console.log(global["questDiaInfo"]);
            }
        }, {
            "text": "没什么，看看",
            "action": (player, event) => {
                closeDialogue(player, getGlobalDia("goumai_piaier"));
                event.cancel(true)
            }
        },],
    }
}

let playerSpeed = 0;

ItemEvents.entityInteracted(event => {
    return


    let entity = event.getEntity()
    let target = event.getTarget()

    console.log(`entity: ${entity}`);
    console.log(`target: ${target}`);

    if (!global["questDiaInfo"].show && target.uuid.toString() == npcData["piaier"]) {
        setDiaFromNpc("goumai_piaier", target, entity)
        event.cancel(true)
    }

    if (global["questDiaInfo"].show) {
        runDiaAction(event)
    }
})

function click(params) {

}

function runDiaAction(event) {
    let dialogueId = global["questDiaInfo"]["dialogueId"]

    let curDiaIds = global["questDiaInfo"]["curDiaIds"]
    if (curDiaIds.length != 0) {
        dialogueId = curDiaIds[curDiaIds.length - 1]
    }

    let answerId = global["questDiaInfo"]["answerId"]
    let nowDialogue = global["questDialogues2"][dialogueId]

    let qusetionText = nowDialogue.qusetion
    let curstage = (global["questDiaInfo"]["renderTick"] / 2) + 1
    let maxCurstage = curstage > qusetionText.length

    console.log(`curstage: ${curstage}`);


    if (!maxCurstage) {
        global["questDiaInfo"]["renderTick"] = (qusetionText.length * 2) + 1
    }

    let player = event.player
    let level = event.level

    level.runCommandSilent(`playsound minecraft:item.trident.hit_ground ambient ${player.name.getString()}`)
    // event.player.setSpeed(playerSpeed)
    nowDialogue["answers"][answerId - 1]["action"](player, event)
}

function setDiaFromNpc(diaId, npc, player) {
    npc.lookAt("eyes", player.getEyePosition())
    npc.lookAt("feet", player.getEyePosition())

    setDia(diaId)
}

function setDia(diaId) {
    global["questDiaInfo"]["show"] = true
    global["questDiaInfo"]["answerId"] = 1

    global["questDiaInfo"]["dialogueId"] = diaId
    global["questDiaInfo"]["renderTick"] = -1
}

global["questDiaInfo"] = {
    show: false,
    dialogueId: "goto_altar",
    answerId: 1,
    tick: false,
    renderTick: 0,
    curDiaIds: [],
}


function getGlobalDia(dialogueId) {
    return global['questDialogues2'][dialogueId]
}

function swithDialogue(player, closeDia, dialogueName) {
    closeDialogue(player, closeDia)

    global["questDiaInfo"]["curDiaIds"].push(dialogueName)
    global["questDiaInfo"]["answerId"] = 1
    global["questDiaInfo"]["renderTick"] = -1
}


function gotoAltar(event) {
    global["questDiaInfo"]["tick"] = true
    let player = event.player
    maid = player.level.createEntity("touhou_little_maid:maid")
    maid.setPos(player.x, player.y, player.z)
    maid.setModelId("touhou_little_maid:yakumo_ran")
    maid.spawn();
    let dirPos = new BlockPos(-1, 10, 32);
    let trackVec = new $Vec3(dirPos.getX(), dirPos.y + 1, dirPos.getZ());
    $BehaviorUtils.setWalkAndLookTargetMemories(maid, trackVec, 0.5, 2);
}


/**
 * @param {{qusetion: string, answers: [{text: string}]}} dialogue
 * @param {{answerId: number}} questDiaInfo 
 * @param {Internal.Player} player  
 */
function renderDialogue(dialogue, questDiaInfo, player) {
    let dia = {}

    let qusetionText = dialogue.qusetion
    let curstage = (questDiaInfo["renderTick"] / 2) + 1
    let maxCurstage = curstage > qusetionText.length

    let maxLenthText = ""

    // if (!maxCurstage) {
    for (let index = 0; index < parseInt(qusetionText.length / 18) + 1; index++) {
        let quesText = qusetionText.slice(index * 18, Math.min(curstage, (index + 1) * 18));
        dia["qusetion" + index] = {
            type: 'text',
            text: quesText,
            scale: 1.5,
            visible: true,
            alignX: "center",
            alignY: "bottom",
            x: 0, y: `(-$screenH*${renderHeight} - ${(parseInt(qusetionText.length / 18) + 1) * 18}) + ${index * 18}`,
            draw: "ingame"
        }

        if (Client.font.width(quesText) > Client.font.width(maxLenthText)) {
            maxLenthText = quesText;
        }
    }
    // }
    for (let i = 0; i < dialogue.answers.length; i++) {
        let ansText = dialogue.answers[i].text;
        dia["answers" + i] = {
            type: 'text',
            text: ansText,
            color: maxCurstage && i + 1 == questDiaInfo.answerId ? "white" : "gray",
            scale: 1.2,
            visible: true,
            alignX: "left",
            alignY: "bottom",
            x: `(($screenW - ${Client.font.width(dialogue.answers[i].text)}) / 2)`,
            y: `-$screenH*${renderHeight} + ${(i) * 11}`,
            draw: "ingame"
        }

        if (Client.font.width(ansText) > Client.font.width(maxLenthText)) {
            maxLenthText = ansText;
        }
    }
    let anwerText = dialogue.answers[questDiaInfo.answerId - 1].text
    let anwerTextW = Client.font.width(anwerText)
    let curOffset2W = Client.font.width("▶") + 5
    if (maxCurstage) {
        dia["answersCur"] = {
            type: 'text',
            text: "▶",
            scale: 1.2,
            visible: true,
            alignX: "left",
            alignY: "bottom",
            x: `(($screenW - ${anwerTextW}) / 2) - ${curOffset2W} - (sin((time() * 5)))`,
            y: `-$screenH*${renderHeight} + ${(questDiaInfo["answerId"] - 1) * 11}`,
            draw: "ingame"
        }
    }


    // if (!maxCurstage) {
    let repeatTime = (Client.font.width(maxLenthText) / Client.font.width("=")) + 10
    let lineText = "=".repeat(repeatTime)
    dia["topLine"] = {
        type: 'text',
        text: lineText,
        scale: 1.2,
        visible: true,
        alignX: "center",
        alignY: "bottom",
        x: 0,
        y: `-$screenH*${renderHeight} - ${18 * (parseInt(qusetionText.length / 18) + 1)} - 11`,
        draw: "ingame"
    }
    dia["midLine"] = {
        type: 'text',
        text: lineText,
        scale: 1.2,
        visible: true,
        alignX: "center",
        alignY: "bottom",
        x: 0,
        y: `-$screenH*${renderHeight} - 9`,
        draw: "ingame"
    }
    dia["endLine"] = {
        type: 'text',
        text: lineText,
        scale: 1.2,
        visible: true,
        alignX: "center",
        alignY: "bottom",
        x: 0,
        y: `-$screenH*${renderHeight} + ${(dialogue.answers.length - 1) * 11} + 9`,
        draw: "ingame"
    }
    // }

    player.paint(dia)

    if (maxCurstage) return
    player.level.runCommandSilent(`playsound minecraft:block.note_block.hat neutral ${player.getUsername().toString()} ${player.x} ${player.y} ${player.z} 0.3 1.1 0.3`)
    questDiaInfo.renderTick++;
}

/**
 * @param {Internal.Player} player 
 */
function closeDialogue(player, dialogues) {
    resetDiaInfo()

    let removeDia = {
        "topLine": { type: 'text', remove: true },
        "midLine": { type: 'text', remove: true },
        "endLine": { type: 'text', remove: true },
        "answersCur": { type: 'text', remove: true },
    }

    for (let index = 0; index < parseInt(dialogues.qusetion.length / 18) + 1; index++) {
        removeDia["qusetion" + index] = { type: 'text', remove: true }
    }

    for (let index = 0; index < dialogues.answers.length; index++) {
        removeDia["answers" + index] = { type: 'text', remove: true }
    }

    console.log(`closeDialogue: ${dialogues.qusetion.length / 18} ${parseInt(dialogues.qusetion.length / 18) + 1}`);
    console.log(dialogues);


    player.paint(removeDia);
}

/**
 * @type {Internal.EntityMaid}
 */
let maid

PlayerEvents.tick(event => {
    let questDiaInfo = global["questDiaInfo"]

    if (!questDiaInfo["show"]) return

    let dialogueId = questDiaInfo["dialogueId"]

    let curDiaIds = questDiaInfo["curDiaIds"]
    if (curDiaIds.length != 0) {
        dialogueId = curDiaIds[curDiaIds.length - 1]
    }

    let dialogue = global['questDialogues2'][dialogueId]

    renderDialogue(dialogue, questDiaInfo, event.player)
})

ItemEvents.firstLeftClicked(event => {
    return

    if (global["questDiaInfo"]["show"]) {
        let dialogueId = global["questDiaInfo"]["dialogueId"]

        let curDiaIds = global["questDiaInfo"]["curDiaIds"]
        if (curDiaIds.length != 0) {
            dialogueId = curDiaIds[curDiaIds.length - 1]
        }

        let answerId = global["questDiaInfo"]["answerId"]
        let nowDialogue = global["questDialogues2"][dialogueId]

        let qusetionText = nowDialogue.qusetion
        let curstage = (global["questDiaInfo"]["renderTick"] / 2) + 1
        let maxCurstage = curstage > qusetionText.length

        console.log(`curstage: ${curstage}`);


        if (!maxCurstage) {
            global["questDiaInfo"]["renderTick"] = (qusetionText.length * 2) + 1
            return
        }

        let player = event.player
        let level = event.level

        nowDialogue["answers"][answerId - 1]["action"](player, event)
        level.runCommandSilent(`playsound minecraft:item.trident.hit_ground ambient ${player.name.getString()}`)
    }
})



ItemEvents.rightClicked("sereneseasons:calendar", event => {

    if (global["questDiaInfo"]["show"]) {
        resetDiaInfo()
    } else {
        global["questDiaInfo"]["show"] = true
        global["questDiaInfo"]["answerId"] = 1

        let dialogueId = global["questDiaInfo"]["dialogueId"]
        let dialogue = global['questDialogues2'][dialogueId]
        global["questDiaInfo"]["renderTick"] = -1
    }

    console.log(global["questDiaInfo"]);

    let dialogueId = global["questDiaInfo"]["dialogueId"]
    let dialogue = global['questDialogues2'][dialogueId]
    let player = event.player;
    if (!global["questDiaInfo"]["show"]) {
        closeDialogue(player, dialogue)
    }

})


ItemEvents.entityInteracted(event => {
    return

    let entity = event.getEntity()
    let target = event.getTarget()

    console.log(`entity: ${entity}`);
    console.log(`target: ${target}`);



    if (global["questDiaInfo"]["show"]) {
        resetDiaInfo()
    } else {
        target.lookAt("eyes", entity.getEyePosition())
        target.lookAt("feet", entity.getEyePosition())

        global["questDiaInfo"]["show"] = true
        global["questDiaInfo"]["answerId"] = 1

        let dialogueId = global["questDiaInfo"]["dialogueId"]
        let dialogue = global['questDialogues2'][dialogueId]
        // global["questDiaInfo"]["renderTick"] = -(dialogue.qusetion.length * 2)
        global["questDiaInfo"]["renderTick"] = -1
    }

    console.log(global["questDiaInfo"]);

    let dialogueId = global["questDiaInfo"]["dialogueId"]
    let dialogue = global['questDialogues2'][dialogueId]
    let player = event.player;
    if (!global["questDiaInfo"]["show"]) {
        closeDialogue(player, dialogue)
    }

    event.cancel(true)
})


function resetDiaInfo() {
    global["questDiaInfo"]["show"] = false
    global["questDiaInfo"]["answerId"] = 1
    global["questDiaInfo"]["renderTick"] = 0
    global["questDiaInfo"]["curDiaIds"] = []
}



PlayerEvents.tick(event => {
    if (!global["questDiaInfo"]["tick"]) return

    let dirPos = new BlockPos(-1, 10, 32);
    let trackVec = new $Vec3(dirPos.getX(), dirPos.y + 1, dirPos.getZ());

    let player = event.player
    let playerVec = player.trackingPosition();
    if (maid.position().distanceTo(trackVec) < 5) {
        global["questDiaInfo"]["tick"] = false;
        turn2NextDialogue();
    } else {
        $BehaviorUtils.setWalkAndLookTargetMemories(maid, trackVec, 0.5, 2);
    }
})

function turn2NextDialogue() {
    let dialogues = Object.keys(global["questDialogues2"])
    let nowDialogue = global["questDiaInfo"]["dialogueId"]

    let index = 0;
    for (; index < dialogues.length; index++) {
        const element = dialogues[index];
        if (element == nowDialogue) {
            break;
        }
    }

    global["questDiaInfo"]["dialogueId"] = dialogues[index + 1];

    console.log(global["questDiaInfo"]);

}

// PlayerEvents.chat(event => {
//     event.getMessage()
// })