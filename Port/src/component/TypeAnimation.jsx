
import { TypeAnimation } from 'react-type-animation';
const TypeAnimations = () => {
    return (
      <div className='font-[anzo2]  uppercase text-2xl mt-100 '>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            
            'I AM FullStack Developer',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'I AM  React Developer',
            1000,
            'I AM  FrontEnd Developer',
            1000,
            'I AM  Backend Developer',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' ,color:'black'}}
          repeat={Infinity}
        />
      </div>
        
      );
}

export default TypeAnimations