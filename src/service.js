export const setCurrentVocabularyHandle = (learningList, notAgain) => {
    let result = sortByLearnNum(learningList)
    result = getCurrentVocabulary(result, notAgain)
    return result
}

export const createLearningDefault = (list) => {
    let learnings = [];
    const allVocabulary = list.map((item) => {
      if (learnings.length < 10 && item.type !== "learned") {
        item.type = "learning";
        learnings = [...learnings, item];
      }
      return item;
    });

    return [
      learnings,
      allVocabulary
    ]
}

export const pushMoreVocabularyLearning = (list) => {
    let pushList = []
    list.map(item => {
        if(pushList.length < 6 && item.type !== 'learned' && item.type !== 'learning') {
            pushList = [...pushList, item]
            item.type = 'learning'
        }
        return item
    })
    return [pushList, list]
}

const sortByLearnNum = (list, type = null) => {
    for(let i = 0; i < list.length - 1; i++) {
        for(let j = i + 1; j < list.length; j++) {
            if (list[j].learnNum < list[i].learnNum) {
                const tem = list[i]
                list[i] = list[j]
                list[j] = tem
            }
        }
    }
    return list
}

const getCurrentVocabulary = (list, notAgain) => {
    let result = {}
    for(let i = 0; i < list.length; i++) {
        if(notAgain.indexOf(list[i].vocabulary) === -1) {
            result = list[i]
            i = list.length
        }
    }
    return result
}