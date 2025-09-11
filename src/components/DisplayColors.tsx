import SingleColor from "./SingleColor";
import type { GeneratedColor } from "../models";

interface DisplayColorsProps {
  list: GeneratedColor[];
}

const DisplayColors = ({ list }: DisplayColorsProps) => {
    return (
        <div className="colors-box">
        {list.map((color, index)=>(
            <SingleColor key={index} hexColor={color.hex}/>
        ))}
        </div>
    )
}

export default DisplayColors;