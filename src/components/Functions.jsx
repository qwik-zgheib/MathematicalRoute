import PropTypes from 'prop-types'

import dataFunctions from '../db/functions.json'
import styleFunctions from '../utils/functions.json'

import { faCircle, faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

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

const Example = ({ example }) => {
  const [examples, setExamples] = useState(example.filter((item) => item.name !== ''))

  const styles = {
    active: {
      icon: faCircleChevronUp,
      text: 'Ocultar resolución',
      style: 'text-red-500',
    },
    inactive: {
      icon: faCircleChevronDown,
      text: 'Mostrar resolución',
      style: 'text-green-500',
    },
  }

  if (examples.length === 0) return null

  const toggleVisibility = (index) => {
    const updatedExamples = [...examples]
    updatedExamples[index].visible = !updatedExamples[index].visible
    setExamples(updatedExamples)
  }

  return (
    <>
      {examples.map(({ id, name, answer, visible, resolution }, index) => (
        <div className="flex flex-col items-start px-2 my-2 ml-3 border-l-4 border-lotus-800" key={index}>
          <span className="text-[#f83c86] py-2 font-bold text-lg">
            {id} Ejercicio: {name}
          </span>
          <span className="ml-2 py-2 text-lg">{answer}</span>
          {visible && (
            <div className="px-2 flex flex-col gap-2 items-center justify-center self-center">
              {resolution?.map((item, index) => (
                <span className="text-waikawa-gray-800 text-lg" key={index}>
                  {item}
                </span>
              ))}
            </div>
          )}
          <button onClick={() => toggleVisibility(index)}>
            {visible ? <Buttton button={styles.active} /> : <Buttton button={styles.inactive} />}
          </button>
        </div>
      ))}
    </>
  )
}

const Buttton = ({ button }) => {
  const { icon, text, style } = button
  return (
    <div className={`flex flex-row gap-2 items-center ${style}`}>
      <FontAwesomeIcon icon={icon} />
      <span>{text}</span>
    </div>
  )
}

Buttton.propTypes = {
  button: PropTypes.shape({
    icon: PropTypes.shape({}),
    text: PropTypes.string,
    style: PropTypes.string,
  }),
}

Example.propTypes = {
  example: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      answer: PropTypes.string,
      visible: PropTypes.bool.isRequired,
      image: PropTypes.string,
      resolution: PropTypes.arrayOf(PropTypes.string).isRequired,
      res: PropTypes.string,
    }),
  ).isRequired,
}

const Functions = () => {
  const { colors, fonts } = styleFunctions

  return (
    <div className="pr-3">
      <h1 className="text-3xl text-waikawa-gray-950 font-bold px-5">Funciones</h1>
      {dataFunctions.functions.map(({ id, topic, description, subtopic, example }, funcIndex) => (
        <div key={id} className="pt-4">
          <Text id={funcIndex + 1} content={topic} color={colors.topic} fonts={fonts.topic} />

          <Text content={description} color={colors.text} fonts={fonts.text} />

          {example && <Example example={example} />}

          {subtopic.map(({ subtopic, characteristic, notation, example }, subtopicIndex) => (
            <div key={subtopicIndex} className="flex flex-col">
              <Text content={subtopic} color={colors.subtopic} fonts={fonts.subtopic} />
              <span>{characteristic}</span>

              <Notation notation={notation} />

              {example && <Example example={example} />}
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

// <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
// <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// Purple to blue
// </span>
// </button>
// <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
// <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// Cyan to blue
// </span>
// </button>
// <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
// <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// Green to blue
// </span>
// </button>
// <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
// <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// Purple to pink
// </span>
// </button>
// <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
// <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// Pink to orange
// </span>
// </button>
// <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
// <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// Teal to Lime
// </span>
// </button>
// <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
// <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
// Red to Yellow
// </span>
// </button>
