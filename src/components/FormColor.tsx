import { useState } from "react"
import Values from 'values.js'

export interface GeneratedColor {
  rgb: [number, number, number];
  type: string;
  weight: number;
  hex: string;
  alpha: number;
}

interface formColorProps{
    setList: (colorGenerado: GeneratedColor[]) => void;
}

const FormColor = ({ setList }: formColorProps) => {

    const [color, setColor] = useState("blue")
    const [error, setError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setColor(e.target.value)
    };

    const handleGenerator = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const colorGenerado = new Values(color).all(5);
            setList(colorGenerado)
            setError(false);

        }catch(error){
            console.error('hubo un error al generar el color', error)
            setError(true);
        }
        console.log(color)
    };

    return (
        <div className="form-color">
            <h1>Color Palete Generator</h1>
            <form onSubmit={handleGenerator}>
                <input type="text" placeholder="#fff" onChange={handleChange}/>
                <input type="submit" value="Generar" />
            </form>
            {error && <p className="error">No existe este color...</p>}
        </div>
    )
}

export default FormColor