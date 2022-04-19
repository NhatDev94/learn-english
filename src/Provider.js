import { createContext, useEffect, useState } from "react";
import * as api from "./api";
import * as service from './service'

export const VocabularyContext = createContext();

function Provider({ children }) {
  const [all, setAll] = useState([]);
  const [learnings, setLearnings] = useState([]);
  const [currentVocabulary, setCurrentVocabulary] = useState()
  const [notAgain, setNotAgain] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const [resAll] = await api.getAllVocabulary();
      const [resLearnings] = await api.getLearning();

      if (resLearnings.data.length === 0) {
        const [learnings, allVocabulary] = service.createLearningDefault(resAll.data);
        const current = service.setCurrentVocabularyHandle(learnings, notAgain)

        updateDatabse(allVocabulary, learnings)

        setAll(allVocabulary)
        setLearnings(learnings);
        setCurrentVocabulary(current)
        return;
      }

      const current = service.setCurrentVocabularyHandle(resLearnings.data, notAgain)
      setAll(resAll.data);
      setLearnings(resLearnings.data);
      setCurrentVocabulary(current)
    };
    getData();
  }, []);

  const enterCompletedHandle = (current) => {
    const newNotAgain = [current.vocabulary, ...notAgain]
    if (newNotAgain.length > 4) newNotAgain.pop()

    const newAll = all.map(item => {
      if (current.vocabulary === item.vocabulary) item = current
      return item
    })
    let newLearnings = learnings.filter(item => {
      if (current.vocabulary === item.vocabulary) item =current
      return item.type !== 'learned'
    })

    if (newLearnings.length < 5) {
      const [result, list] = service.pushMoreVocabularyLearning(newAll)
      newLearnings = [...newLearnings, result]
      newAll = list
    }

    const newCurrentVocabulary = service.setCurrentVocabularyHandle(newLearnings, newNotAgain)
    setAll(newAll)
    setNotAgain(newNotAgain)
    setLearnings(newLearnings)
    setCurrentVocabulary(newCurrentVocabulary)
    updateDatabse(newAll, newLearnings)
  }

  const updateDatabse = (all, learnings) => {
    api.putLearning(learnings)
    api.putAllVocabulary(all)
  }

  const value = {
    all,
    learnings,
    currentVocabulary,
    enterCompletedHandle
  };

  return (
    <VocabularyContext.Provider value={value}>
      {children}
    </VocabularyContext.Provider>
  );
}

export default Provider;
