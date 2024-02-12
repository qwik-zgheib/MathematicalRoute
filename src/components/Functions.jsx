import dataFunctions from '../db/functions.json'

const renderNotation = (notation) => {
  if (typeof notation === 'string') {
    return (
      <div className="flex items-center py-2">
        <span className="text-[#f83c86]">{notation}</span>
      </div>
    )
  } else {
    return (
      <div>
        <div className="flex items-center h-16">
          <span className="text-base text-[#8b1034] font-bold">{notation.name}</span>
        </div>
        <div className="flex items-center py-2">
          <span className="text-[#f83c86]">{notation.characteristic}</span>
        </div>
        <div className="flex items-center py-2">
          <ul>
            {notation.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="text-[#f83c86]">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const Functions = () => {
  return (
    <div>
      <h1 className="text-3xl text-[#8b1034] font-bold px-5">Funciones</h1>
      {dataFunctions.functions.map((func, funcIndex) => (
        <div key={func.id} className="mt-4">
          <div className="flex items-center h-16 border-l-4 border-[#a70d3b]">
            <span className="text-4xl text-[#a70d3b] px-4">{funcIndex + 1}.</span>
          </div>
          <div className="flex items-center h-16 border-l-4 border-gray-400">
            <span className="text-4xl text-[#ffa2cb] px-4">|</span>
          </div>

          <div className="flex items-center h-16">
            <span className="text-lg text-[#8b1034] font-bold">{func.topic}</span>
          </div>
          <div className="flex items-center py-2">
            <span className="text-[#f83c86]">{func.description}</span>
          </div>

          {func.subtopic.map((sub, subIndex) => (
            <div key={subIndex} className="ml-8 mt-2">
              <div className="flex items-center h-16">
                <span className="text-base text-[#8b1034] font-bold">{sub.subtopic}</span>
              </div>
              <div className="flex items-center py-2">
                <span className="text-[#f83c86]">{sub.description}</span>
              </div>

              {sub.notation.map((notation, notationIndex) => (
                <div key={notationIndex} className="ml-8 mt-2">
                  {renderNotation(notation)}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Functions
