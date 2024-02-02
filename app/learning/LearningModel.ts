export type Topic = {
    screenName: string
    title: string;
    color: string;
};

class LearningModel {
    getAllTopics(): Topic[] {
        return [{screenName: "PracticalOralEnglish", title: "实用口语", color: "crimson"}, 
                {screenName: "Desynonymisation", title: "同义词辨析", color: "steelblue"},
                {screenName: "SceneDialogues", title: "场景对话", color: "peru"},
                {screenName: "OneMinuteGrammar", title: "一分钟语法", color: "darkcyan"},
                {screenName: "MyNotebook", title: "我的笔记本", color: "darkorange"}];
    }
}

export default LearningModel;