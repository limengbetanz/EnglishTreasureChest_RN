import LearningModel, { TopicType } from "./LearningModel";
import type { Topic } from "./LearningModel";

class LearningViewModel {
    topics: Topic[];

    constructor() {
        const model = new LearningModel();
        this.topics = model.getAllTopics();
    }
}

export { TopicType };
export type { Topic };
export default LearningViewModel;
