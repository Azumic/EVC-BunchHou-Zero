

// ForgeEvents.onEvent("net.minecraftforge.client.event.ScreenEvent$MouseScrolled$Pre", event => {
//     global['mouseScroll'](event)
// })

global['mouseScroll'] = (/** @type {Internal.InputEvent$MouseScrollingEvent} */ event) => {
    if (global["questDiaInfo"]["show"] && event.getScrollDelta() != 0) {

        let dialogueId = global["questDiaInfo"]["dialogueId"]

        let curDiaIds = global["questDiaInfo"]["curDiaIds"]
        if (curDiaIds.length != 0) {
            dialogueId = curDiaIds[curDiaIds.length - 1]
        }

        let answer = global["questDiaInfo"]["answerId"]
        let dialogue = global['questDialogues2'][dialogueId]

        let qusetionText = dialogue.qusetion
        let curstage = (global["questDiaInfo"]["renderTick"] / 2) + 1
        let maxCurstage = curstage > qusetionText.length
        
        if (!maxCurstage) {
            return
        }
        
        console.log(dialogue);
        // 向上滚
        if (event.getScrollDelta() > 0 && answer > 1) {
            global["questDiaInfo"]["answerId"]--;
        }

        // 向下滚
        if (event.getScrollDelta() < 0 && answer < dialogue["answers"].length) {
            global["questDiaInfo"]["answerId"]++;
        }
    }

    console.log("mouseScroll");
    console.log(global["questDiaInfo"]);
}

ForgeEvents.onEvent("net.minecraftforge.client.event.InputEvent$MouseScrollingEvent", event => {
    global['mouseScroll'](event)
})