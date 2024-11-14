


/**
 * @param {String} charName 
 */
function _CharDias(charName) {
    this.charName = charName;
    /***
     * @type {{String : _DialogueInfo}}
    */
    this.dialoguesInfo = {};
    // this.condition = null;

    this.isDiaChar = (event) => {
        return event.target.uuid.toString() == npcData[this.charName];
    }

    this.getCharName = () => {
        return this.charName
    }

    /**
     * @param {String} diaId 
     * @returns {_DialogueInfo}
     */
    this.getDialogueInfo = (diaId) => {
        return this.dialoguesInfo[diaId];
    }

    /**
     * @returns {{String : _DialogueInfo}}
     */
    this.getDialogueInfos = () => {
        return this.dialoguesInfo;
    }

    /**
     * @returns {_DialogueInfo[]}
     */
    this.getDialogueInfosValue = () => {
        return Object.values(this.getDialogueInfos());
    }

    /**
     * @param {_DialogueInfo } dialogueInfo
     */
    this.addDialogueInfo = (dialogueInfo) => {
        this.dialoguesInfo[dialogueInfo.diaId] = dialogueInfo
        return this
    }

    this.build = () => {
        global["_CharsDia"][charName] = this
        return this
    }
}


/**
 * @param {String} charName 
 */
function _DialogueInfo(diaId) {
    /**
     * @type {String}
     */
    this.diaId = diaId;
    /**
     * @type {String}
     */
    this.question = "";
    /**
     * @type {Function}
     */
    this.canDia = (/** @type {Internal.ItemEntityInteractedEventJS} */ event) => false;
    /**
     * @type {_Answer[]}
     */
    this.answers = [];

    /**
     * @param {String} name 
     * @returns {_DialogueInfo}
     */
    this.setQuestion = (name) => {
        this.question = name;
        return this
    }

    /**
     * @param {Function} func 
     * @returns {_DialogueInfo}
     */
    this.setCanDia = (func) => {
        this.canDia = func; // 将传入的函数赋值给runCondition
        return this
    }

    /**
     * @param {_Answer} answerInfo 
     * @returns {_DialogueInfo}
     */
    this.addAnswer = (answerInfo) => {
        this.answers.push(answerInfo)
        return this
    }

    /**
     * @returns {String}
     */
    this.getQuestionText = () => {
        return this.question;
    }

    /**
     * @returns {String[]}
     */
    this.getAnswersText = () => {
        return this.answers.map(answer => answer.text)
    }
}


/**
 * @param {String} text 
 * @param {Function} actionFunc 
 */
function _Answer(text, actionFunc) {
    this.text = text;
    this.actionFunc = actionFunc;
}




ItemEvents.entityInteracted(event => {
    // 使用Object.values()获取CharsDialogue对象的所有值
    /**
     * @type _CharDias[]
     */
    var _charsDia = Object.values(global["_CharsDia"]);
    for (const charDia of _charsDia) {
        // console.log(`charDia.name: ${charDia.charName}`);
        if (charDia.isDiaChar(event)) {
            for (const dialogue of charDia.getDialogueInfosValue()) {
                if (dialogue.canDia(event)) {
                    console.log(`charDia.name: ${charDia.charName} dialogue:`);
                    console.log(dialogue);
                    return
                }
            }
        }
    }
})


