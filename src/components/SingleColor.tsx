import { useState } from 'react';
import clipTransparent from '/clipTransparent.png'

interface singleColorProps{
    hexColor: string;
}




const SingleColor = ({ hexColor }: singleColorProps) => {

    const [copy, setCopy] = useState(false)


    const handleCopy = (color: string) => () => {
    
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(()=>{
            setCopy(false);
        },2000)
    }


    return (
        <div className="single-card" style={{backgroundColor: `#${hexColor}`}}>
            <div className="content">
                <p>#{hexColor}</p>
                <button onClick={handleCopy(hexColor)}>
                    <img src={clipTransparent} alt="" />
                </button>
            </div>
            {copy && <p className='copy-alert'>Copied to clipboard</p>}
            
        </div>
    )
}

export default SingleColor