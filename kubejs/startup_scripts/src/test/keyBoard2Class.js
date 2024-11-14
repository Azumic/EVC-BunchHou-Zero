// // 定义对话选项常量
// var DIALOGUES = ["有什么可以招待的吗?", "购买商品", "没什么，随便看看"];

// // 定义全局角色对话对象
// var CharsDialogue = {};

// /**
//  * 角色对话构造函数
//  * @param {String} charName 
//  * @param {Function} conditionFunc 
//  */
// function CharDialogue(charName, conditionFunc) {
//     this.charName = charName;
//     this.condition = conditionFunc;
//     this.dialogueInfos = [];
// }

// CharDialogue.prototype.addDialogueInfo = function (dialogueInfo) {
//     this.dialogueInfos.push(dialogueInfo);
//     return this;
// };

// CharDialogue.prototype.build = function () {
//     CharsDialogue[this.charName] = this;
// };

// /**
//  * 对话信息构造函数
//  * @param {String} diaId 
//  */
// function DialogueInfo(diaId) {
//     this.diaId = diaId;
//     this.question = "";
//     this.runCondition = function () { return true; };
//     this.answers = [];
// }

// DialogueInfo.prototype.setQuestion = function (question) {
//     this.question = question;
//     return this;
// };

// DialogueInfo.prototype.setRunCondition = function (func) {
//     this.runCondition = func;
//     return this;
// };

// DialogueInfo.prototype.addAnswer = function (answer) {
//     this.answers.push(answer);
//     return this;
// };

// /**
//  * 答案构造函数
//  * @param {String} text 
//  * @param {Function} actionFunc 
//  */
// function Answer(text, actionFunc) {
//     this.text = text;
//     this.actionFunc = actionFunc;
// }

// // 创建角色对话实例
// var piaierDialogue = new CharDialogue("piaier", function (event) {
//     return event.target.uuid.toString() === npcData[this.charName];
// })
//     .addDialogueInfo(new DialogueInfo("goumai")
//         .setQuestion("有什么可以招待的吗？")
//         .setRunCondition(function (event) { return true; })
//         .addAnswer(new Answer("购买商品", function (player, event) {
//             // openTradeGui(player, event);
//             closeDialogue(player, CharsDialogue[piaierDialogue.charName].dialogueInfos[0]);
//         }))
//         .addAnswer(new Answer("没什么，看看", function (player, event) {
//             closeDialogue(player, CharsDialogue[piaierDialogue.charName].dialogueInfos[0]);
//         }))
//         .addAnswer(new Answer("退出", function (player, event) {
//             closeDialogue(player, CharsDialogue[piaierDialogue.charName].dialogueInfos[0]);
//         }))
//     )
//     .build();
