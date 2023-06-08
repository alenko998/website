import CircularSlider from '@fseehawer/react-circular-slider'
import React, { useState } from 'react'
import OptionButton from '../buttons/OptionButton'


const Calorie = () => {
    const [value, setValue] = useState(0);

    const handleValueChange = (newValue) => {
      setValue(newValue);
    }

  return (
    <div className='w-full h-[100vh] bg-gray-100 p-40 flex flex-col'>
      {/* circular */}
      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='mb-5 lg:mr-5'>
          <CircularSlider
            onChange={handleValueChange}
            dataIndex={value}
            labelColor="#3F51B5"
            knobColor='#fff'
            progressColorFrom="#3F51B5"
            width={200}
            min={0}
            max={100}
            label='Age'
          />
        </div>

        <div className='mb-5 lg:mr-5'>
            <CircularSlider
              labelColor="#3F51B5"
              knobColor='#fff'
              progressColorFrom="#3F51B5"
              width={200}
              min={0}
              max={300}
              label='Weight/Kg'
            />
        </div>

        <div>
          <CircularSlider
            labelColor="#3F51B5"
            knobColor='#fff'
            progressColorFrom="#3F51B5"
            width={200}
            min={0}
            max={250}
            label='Height/Cm'
          />
        </div>
      </div>
      {/* options */}
      <div className='self-center mt-4 mb-4'>
        <OptionButton/>
      </div>
      <div className='self-center'>
        <OptionButton/>
      </div>
      {/* button */}
      <button className='self-center mr-2 mt-3 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white border rounded-xl px-5 py-1'>Calculate</button>
    </div>
  )
}

export default Calorie


      {/* <div className='flex flex-col'>



      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='mb-5 lg:mr-5'>
                <CircularSlider
                onChange={handleValueChange}
                dataIndex={value}
                labelColor="#3F51B5"
                knobColor='#fff'
                progressColorFrom="#3F51B5"
                width={200}
                min={0}
                max={100}
                label='Age'
                />
        </div>
        <div className='mb-5 lg:mr-5'>
                <CircularSlider
                labelColor="#3F51B5"
                knobColor='#fff'
                progressColorFrom="#3F51B5"
                width={200}
                min={0}
                max={300}
                label='Weight/Kg'
                />
        </div>
        <div>
                <CircularSlider
                labelColor="#3F51B5"
                knobColor='#fff'
                progressColorFrom="#3F51B5"
                width={200}
                min={0}
                max={250}
                label='Height/Cm'
                />
        </div>
      </div>
      </div> */}


