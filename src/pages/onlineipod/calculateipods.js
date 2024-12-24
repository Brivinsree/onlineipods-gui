import { useEffect, useState } from 'react';

import { country_details } from '../../utils/constants'
import { IpodService } from "../../utils/services/ipodservice";
import smartpodStyle from "./ipodstyle.module.css";


const CalculateIpods = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [noofUnits, setNoOfUnits] = useState(0);
    const [ipodCostDetails, setIpodCostDetails] = useState({});
    const [errors, setErrors] = useState("");

    const ipodservice = new IpodService();
    const handleSelectChange = (event) => {
        console.log(event.target.value, "target.value");
        setSelectedCountry(event.target.value)
    }
    const handleChange = (event) => {
        setNoOfUnits(event.target.value);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!noofUnits) {
            setErrors("Units should be greater than zero");
        } else {
            const calculateCostDetails = await ipodservice.calculateIpodMinCost({ country_name: selectedCountry, no_of_units: parseInt(noofUnits) });
            setErrors("");
            if (!!calculateCostDetails && calculateCostDetails.status) {
                setIpodCostDetails(calculateCostDetails.calculate_result);
            }

        }

    }

    useEffect(() => {
        if (country_details?.country_name?.length) {
            const default_countryvalue = country_details.country_name[0].name;
            setSelectedCountry(default_countryvalue);

        }
    }, [country_details]);


    return (
        <>
            <h1>Calculate Online Ipods</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">
                        Select Country Name:
                    </label>
                    <select className="form-select"
                        value={selectedCountry} onChange={handleSelectChange}>
                        {country_details?.country_name.map((cn_details) => {
                            return (
                                <option key={cn_details.id} value={cn_details.name}>{cn_details.name}</option>

                            )
                        })}
                    </select>
                </div>
                <br />
                <div className="form-group">
                    <label className="form-label">No of Units:</label>
                    <input type='text' name="no_of_units" value={noofUnits} onChange={handleChange} />
                    <br />
                    {errors && <span className={smartpodStyle.errorMsg}>{errors}</span>}

                </div>
                <br />
                <div className="form-group">
                    <label></label>
                    <button type="submit" className="form-button">Calculate</button>

                </div>
            </form>
            <br />
            {ipodCostDetails?.calculateMinCost && (
                < div >
                    <label>Minimum Cost: {ipodCostDetails?.calculateMinCost}</label><br />
                    <label>No of stock left in India: {ipodCostDetails?.stocksLeftInIndia}</label><br />
                    <label>No of stock left at Srilanka: {ipodCostDetails?.stocksLeftInSrilanka}</label><br />

                </div >
            )}
        </>
    )

}

export default CalculateIpods;