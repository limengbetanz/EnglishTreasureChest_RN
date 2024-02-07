import LearningModel, { TopicType } from './LearningModel';
import type { Topic } from './LearningModel';

import practicalOralEnglishViewModel from './practical_oral_english/PracticalOralEnglishViewModel';
import OneMinuteGrammarViewModel from './one_minute_grammar/OneMinuteGrammarViewModel';
import MyNotebookViewModel from './my_notebook/MyNotebookViewModel';
import DesynonymisationViewModel from './desynonymisation/DesynonymisationViewModel';

class LearningViewModel {
    topics: Topic[];
    
    constructor() {
        const model = new LearningModel();
        this.topics = model.getAllTopics();
    }

    getTopicFromType(type: TopicType): Topic {
        const topics: Topic[] = this.topics.filter(topic => topic.type = type);
        const topic: Topic = topics[0]!;
        return topic;
    }
}

export { TopicType };
export type { Topic };
export default LearningViewModel;
