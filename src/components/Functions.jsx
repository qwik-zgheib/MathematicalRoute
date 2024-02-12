import dataFunctions from '../db/functions.json'

const Functions = () => {
  console.log(dataFunctions)

  return (
    <div>
      <div className="mt-4 flex">
        <div>
          <div className="flex items-center h-16 border-l-4 border-[#a70d3b]">
            <span className="text-4xl text-[#a70d3b] px-4">1.</span>
          </div>
          <div className="flex items-center h-16 border-l-4 border-gray-400">
            <span className="text-4xl text-[#ffa2cb] px-4"></span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center h-16">
            <span className="text-lg text-[#8b1034] font-bold">Lorem ipsum dolor sit amet?</span>
          </div>
          <div className="flex items-center py-2">
            <span className="text-[#f83c86]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, nisi. Deserunt, illo porro quod placeat molestiae ipsum, saepe vitae
              sed eaque earum modi nobis a quisquam incidunt fugiat eos iste. Explicabo nemo magnam voluptates consequuntur magni similique architecto
              reiciendis quasi iusto corrupti! Eum harum, adipisci facere nobis fugit perferendis expedita atque cupiditate incidunt, impedit dolor
              labore eligendi fuga, non rem!
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Functions
