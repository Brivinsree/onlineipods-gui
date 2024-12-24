import { useState } from 'react';
import { BracketsService } from '../../utils/services/parantheses';
import smartpodStyle from '../onlineipod/ipodstyle.module.css';


const GenerateParantheses = () => {
    const [number, setNumber] = useState(0);
    const [errors, setErrors] = useState("");
    const [displayBrackets, setDisplayBrackets] = useState([]);
    const bracketService = new BracketsService();
    const handleChange = (event) => {
        setNumber(event.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!number) {
            setErrors("Enter the number greater than zero");
        } else {
            const displayResults = await bracketService.displayCombination({ number_of_braces: parseInt(number) })
            console.log(displayResults, "displayresults")
            setErrors("");
            if (!!displayResults && displayResults.status) {
                setDisplayBrackets(displayResults.parantheses_result);
            }

        }

    }



    return (
        <>
            <h1>Display the Combination of Parantheses</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label className="form-label">Enter the number:</label>
                    <input type='number' name="no_of_brackets" value={number} onChange={handleChange} />
                    <br />
                    {errors && <span className={smartpodStyle.errorMsg}>{errors}</span>}

                </div>
                <br />
                <div className="form-group">
                    <label></label>
                    <button type="submit" className="form-button">Submit</button>

                </div>
            </form>
            <br />
            {displayBrackets.length > 0 &&
                < div >
                    <label>Print Combination of Parantheses: <br />{JSON.stringify(displayBrackets)}</label>

                </div >
            }
        </>
    )

}

export default GenerateParantheses;