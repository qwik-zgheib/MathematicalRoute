import dataFunctions from '../db/functions.json'

// eslint-disable-next-line react/prop-types
const Text = ({ id, content, color, fonts }) => {
  const { text, border, num } = color || { text: '', border: '', num: '' }
  const { textSize, weight, numSize } = fonts || { textSize: '', weight: '', numSize: '' }
  if (!content || content === '') {
    return null
  }
  return (
    <div className={`flex items-center h-16 border-l-4 ${border} ${weight}`}>
      {id ? <span className={`text-4xl ${num} ${numSize} px-2`}>{id}.</span> : null}
      <span className={`pl-4 ${text} ${textSize}`}>{content}</span>
    </div>
  )
}

const Functions = () => {
  const colors = {
    topic: { text: 'text-lotus-800', border: 'border-lotus-700', num: 'text-lotus-900' },
    subtopic: { text: 'text-lotus-800', border: 'border-gray-400' },
    text: { text: 'text-waikawa-gray-900', border: 'border-blue-chill-700' },
    property: { text: '', border: '' },
    example: { text: '', border: '' },
    exercise: { text: '', border: '' },
    resolution: { text: '', border: '' },
  }

  const fonts = {
    topic: { textSize: 'text-3xl', weight: 'font-bold', numSize: 'text-4xl' },
    subtopic: { textSize: 'text-lg', weight: 'font-bold' },
    text: { textSize: 'text-base', weight: 'font-normal' },
    property: { textSize: '', weight: '' },
    example: { textSize: '', weight: '' },
    exercise: { textSize: '', weight: '' },
    resolution: { textSize: '', weight: '' },
  }

  return (
    <div className="pr-3 mr-10">
      <h1 className="text-3xl text-waikawa-gray-950 font-bold px-5">Funciones</h1>
      {dataFunctions.functions.map(({ id, topic, description, subtopic }, funcIndex) => (
        <div key={id} className="pt-4">
          <Text id={funcIndex + 1} content={topic} color={colors.topic} fonts={fonts.topic} />

          <Text content={description} color={colors.text} fonts={fonts.text} />

          {subtopic.map(({ subtopic, notation }, subtopicIndex) => (
            <div key={subtopicIndex} className="flex flex-col">
              <Text content={subtopic} color={colors.subtopic} fonts={fonts.subtopic} />

              {notation.map(({ name, details }, notationIndex) => (
                <div key={notationIndex} className="flex flex-col h-auto border-l-4 border-gray-400">
                  <span className="text-lg text-lotus-800 px-2">{name}</span>
                  <div className="flex flex-col">
                    {details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex">
                        {detail}
                      </div>
                    ))}
                  </div>
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
