import PropTypes from 'prop-types'

import dataFunctions from '../db/functions.json'

import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Text = ({ id, content, color, fonts }) => {
  const { text, num } = color
  const { textSize, weight, numSize, height } = fonts

  if (!content || content === '') return null

  return (
    <div className={`flex items-center ${height} ${weight}`}>
      {id ? <span className={`${num} ${numSize} px-2`}>{id}.</span> : null}
      <span className={`pl-4 ${text} ${textSize}`}>{content}</span>
    </div>
  )
}

const Notation = ({ notation }) => {
  const count = notation?.length !== 1 ? true : false

  if (notation.filter((item) => item.name !== '').length === 0) return null

  return (
    <>
      {notation
        .filter((item) => item.name !== '')
        .map(({ id, name, details }, index) => (
          <div className="flex flex-col items-start px-2 my-2 ml-3 border-l-4 border-lotus-800" key={index}>
            <span className="text-[#f83c86] py-2 font-bold text-lg">{count ? id : null} Notación:</span>
            <span className="ml-2 px-4 py-2 font-medium text-xl bg-slate-300">{name}</span>
            {details.map((item, index) => (
              <div className="px-2 flex gap-2 items-center justify-center" key={index}>
                <FontAwesomeIcon icon={faCircle} className="text-sm w-2 h-2" />
                <span className="">{item}</span>
              </div>
            ))}
          </div>
        ))}
    </>
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
    property: { textSize: 'text-base  ', weight: '' },
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

              <Notation notation={notation} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

Text.propTypes = {
  id: PropTypes.number,
  content: PropTypes.string.isRequired,
  color: PropTypes.shape({
    text: PropTypes.string.isRequired,
    num: PropTypes.string,
  }),
  fonts: PropTypes.shape({
    textSize: PropTypes.string.isRequired,
    weight: PropTypes.string.isRequired,
    numSize: PropTypes.string,
    height: PropTypes.string.isRequired,
  }),
}

Notation.propTypes = {
  notation: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      details: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
  ).isRequired,
}

export default Functions
