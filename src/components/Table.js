import React from "react";

function Table({ data, learning = false }) {

  return (
    <div className="table w-full">
      <div className="flex items-center pt-2 border-b py-2">
        <p className="w-1/5 font-bold">Vocabulary</p>
        <p className="w-1/5 font-bold">LearnNum</p>
        <p className="w-3/5 font-bold">Mean</p>
      </div>
      {data?.map((item, i) => {
        return (
          <div className="flex items-center" key={i}>
            <p className={`w-1/5 
                            font-semibold 
                            py-2 border-b
                            ${!learning ? item.type : ''}
                            `}>{item?.vocabulary}</p>
            <p className="w-1/5 py-2 border-b">{item?.learnNum}</p>
            <p className="w-3/5 py-2 border-b">{item?.mean}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
