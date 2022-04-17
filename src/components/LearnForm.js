import React, { useContext, useRef, useState } from "react";
import { VocabularyContext } from "../Provider";

function LearnForm() {
  const { currentVocabulary, enterCompletedHandle } = useContext(VocabularyContext);

  const [input, setInput] = useState("");
  const [isHint, setIsHint] = useState(false);

  const inputRef = useRef();

  const enterHandle = (target) => {
    if (input === "") return;
    if (
      input.toLocaleLowerCase() !==
      currentVocabulary.vocabulary.toLocaleLowerCase()
    ) {
      target.classList.add("wrong");
      return;
    }
    let newCurrentVocabulary = currentVocabulary;

    if (isHint)
      newCurrentVocabulary.learnNum =
        newCurrentVocabulary.learnNum - 3 > 1
          ? newCurrentVocabulary.learnNum - 3
          : 0;

    newCurrentVocabulary.learnNum++;

    if(newCurrentVocabulary.learnNum >= 5) {
      newCurrentVocabulary.type = 'learned'
    }

    enterCompletedHandle(newCurrentVocabulary)
    target.classList.remove("wrong");
    setInput("");
    setIsHint(false)
  };

  const hintHandle = () => {
    setIsHint(true);
    inputRef.current.focus();
  };

  const enterReviewHandle = () => {
    
  }

  const hintReviewHandle = () => {

  }

  return (
    <div className="learn-form mt-5">
      <p className="mean font-semibold text-2xl mb-5">
        Mean: {currentVocabulary?.mean}
      </p>
      {currentVocabulary?.learnNum !== 0 && (
        <p
          className="py-2 px-5 text-white bg-green-500 cursor-pointer w-fit rounded font-semibold"
          onClick={() => hintHandle()}
        >
          Show Hint
        </p>
      )}
      <div className="min-h-[80px]">
        {(isHint || currentVocabulary?.learnNum === 0) && (
          <p className="hint font-bold text-5xl mt-5">
            {currentVocabulary?.vocabulary}
          </p>
        )}
      </div>
      <input
        placeholder="Enter vocabulary..."
        value={input}
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && enterHandle(e.target)}
        className={`
                    input-vocabulary
                    font-semibold
                    text-[74px]
                    text-black
                    outline-none
                    w-[720px]
                    px-2
                `}
      />
    </div>
  );
}

export default LearnForm;
