import { useState } from "react"
import axios from 'axios';




function RequestAQuote(props){

    const [annualRevenue, setAnnualRevenue] = useState(0) // required
    const [enterpriseNumber, setEnterpriseNumber] = useState('') // required // required
    const [legalName, setLegalName] = useState('') // required
    const [naturalPerson, setNaturalPerson] = useState(false) // required
    const [nacebelCodes, setNacebelCodes] = useState([]) // required
    const [deductibleFormula, setDeductibleFormula] = useState('medium'); // optional, initialized to medium
    const [coverageCeilingFormula, setCoverageCeilingFormula] = useState('small'); // optional, initialized to small
    

    // when the user filled the form and the "submit" btn is clicked
    // we send a request to the backend to get that particular quote
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const payload = {
            quote:{
                annualRevenue: Number(annualRevenue),
                enterpriseNumber,
                legalName,
                naturalPerson,
                nacebelCodes,
                deductibleFormula,
                coverageCeilingFormula,
            }
        };
  
        axios.post("http://localhost:3001/api/v1/quotes", payload)
        .then((response) => {
            console.log(response.data)
            props.QuoteReceived(response.data.quote)
            props.CoversAdviceReceived(response.data.covers_advice)
            setAnnualRevenue(0)
            setEnterpriseNumber('')
            setLegalName('')
            setNaturalPerson(false)
            setNacebelCodes([])
            setDeductibleFormula('medium')
            setCoverageCeilingFormula('small')
        })
        .catch((error) => {
            console.error("Error:", error);
        });
      };


    return(
        <div>
            <h2>Get a Quote</h2>
            <form onSubmit={handleFormSubmit}>
                <label>
                Annual Revenue:
                <input
                    type="number"
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(e.target.value)}
                    required
                />
                </label>
                <br />

                <label>
                Enterprise Number:
                <input
                    type="text"
                    value={enterpriseNumber}
                    onChange={(e) => setEnterpriseNumber(e.target.value)}
                    required
                />
                </label>
                <br />

                <label>
                Legal Name:
                <input
                    type="text"
                    value={legalName}
                    onChange={(e) => setLegalName(e.target.value)}
                    required
                />
                </label>
                <br />

                <label>
                Natural Person:
                <input
                    type="checkbox"
                    checked={naturalPerson}
                    onChange={(e) => setNaturalPerson(e.target.checked)}
                />
                </label>
                <br />

                <label>
                NACEBEL Codes (comma-separated):
                <input
                    type="text"
                    value={nacebelCodes}
                    onChange={(e) => setNacebelCodes(e.target.value.split(','))}
                    required
                />
                </label>
                <br />
                <label>
                    Deductible Formula:
                    <select
                        value={deductibleFormula}
                        onChange={(e) => setDeductibleFormula(e.target.value)}
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <br />

                <label>
                    Coverage Ceiling Formula:
                    <select
                        value={coverageCeilingFormula}
                        onChange={(e) => setCoverageCeilingFormula(e.target.value)}
                    >
                        <option value="small">Small</option>
                        <option value="large">Large</option>
                    </select>
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RequestAQuote