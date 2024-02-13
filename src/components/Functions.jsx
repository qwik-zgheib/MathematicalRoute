import dataFunctions from '../db/functions.json'

// eslint-disable-next-line react/prop-types
const Text = ({ id, content, color, fonts }) => {
  const { text, num } = color || { text: '', num: '' }
  const { textSize, weight, numSize, height } = fonts || { textSize: '', weight: '', height: '', numSize: '' }
  if (!content || content === '') {
    return null
  }
  return (
    <div className={`flex items-center ${height} ${weight}`}>
      {id ? <span className={`${num} ${numSize} px-2`}>{id}.</span> : null}
      <span className={`pl-4 ${text} ${textSize}`}>{content}</span>
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Notation = ({ notation }) => {
  return (
    <div className="flex items-center py-2">
      <span className="text-[#f83c86]">{notation}</span>
    </div>
  )
}

const Functions = () => {
  const colors = {
    topic: { text: 'text-lotus-800', num: 'text-lotus-900' },
    subtopic: { text: 'text-lotus-800' },
    text: { text: 'text-waikawa-gray-900' },
    property: { text: '' },
    example: { text: '' },
    exercise: { text: '' },
    resolution: { text: '' },
  }

  const fonts = {
    topic: { textSize: 'text-2xl', weight: 'font-bold', height: 'h-14', numSize: 'text-3xl' },
    subtopic: { textSize: 'text-xl', weight: 'font-semibold', height: 'h-12' },
    text: { textSize: 'text-base', weight: 'font-normal', height: 'h-auto' },
    property: { textSize: '', weight: '' },
    example: { textSize: '', weight: '' },
    exercise: { textSize: '', weight: '' },
    resolution: { textSize: '', weight: '' },
  }

  return (
    <div className="pr-3">
      <h1 className="text-3xl text-waikawa-gray-950 font-bold px-5">Funciones</h1>
      {dataFunctions.functions.map(({ id, topic, description, subtopic }, funcIndex) => (
        <div key={id} className="pt-4">
          <Text id={funcIndex + 1} content={topic} color={colors.topic} fonts={fonts.topic} />

          <Text content={description} color={colors.text} fonts={fonts.text} />

          {subtopic.map(({ subtopic, notation }, subtopicIndex) => (
            <div key={subtopicIndex} className="flex flex-col">
              <Text content={subtopic} color={colors.subtopic} fonts={fonts.subtopic} />

              <Notation notation={'xddd'} />

              {notation.map(({ name, details }, notationIndex) => (
                <div key={notationIndex} className="flex flex-col pt-2">
                  <Text content={name} color={colors.text} fonts={{ ...fonts.text, textSize: 'text-xl' }} />
                  <div className="flex flex-col">
                    {details.map((detail, detailIndex) => (
                      <Text key={detailIndex} content={detail} color={colors.text} fonts={fonts.text} />
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
