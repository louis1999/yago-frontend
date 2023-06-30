import { useEffect, useState } from "react"

import axios from "axios"

function Quote(props){
    const [coversAdvice, setCoversAdvice] = useState()
    const [quote, setQuote] = useState()
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [leadCreated, setLeadCreated] = useState(false);


    useEffect(()=>{
        if(props.quote){
            setQuote(props.quote)
        }
    }, [props.quote])

    useEffect(()=>{
        if(props.coversAdvice){
            setCoversAdvice(props.coversAdvice)
        }
    }, [props.coversAdvice])
    


    function handleFormSubmit(e){
        e.preventDefault();

        const payload = {
            lead:{
                email:email,
                phone_number: phone_number,
                address:address,
                first_name:firstName,
                last_name:lastName,
                quote_id:quote.quote_id
            }
        };

        axios.post("http://localhost:3001/api/v1/leads", payload)
        .then((response) => {
            setEmail("")
            setPhoneNumber("")
            setAddress("")
            setFirstName("")
            setLastName("")
            setLeadCreated(true)
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    }


    if(quote){

        return(
            <div>
                <div style={{display:"flex"}}>
                    <div style={{width:"40%", padding:"20px"}}>
                        <div>
                            <h2>Quote Information</h2>
                            <p>Available: {quote.available ? 'Yes' : 'No'}</p>
                            <p>Coverage Ceiling: {quote.coverage_ceiling}</p>
                            <p>Deductible: {quote.deductible}</p>
                            <p>Quote ID: {quote.quote_id}</p>
                            <h3>Gross Premiums</h3>
                            <p>After Delivery: {quote.coverPremiums.after_delivery}</p>
                            <p>Public Liability: {quote.coverPremiums.public_liability}</p>
                            <p>Professional Indemnity: {quote.coverPremiums.professional_indemnity}</p>
                            <p>Entrusted Objects: {quote.coverPremiums.entrusted_objects}</p>
                            <p>Legal Expenses: {quote.coverPremiums.legal_expenses}</p>
                            <h3>Some recommendations based on your profile</h3>
                            <ul>

                                {coversAdvice.map(element=>{
                                    return(
                                        <li>
                                            {element}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div style={{width:"60%", padding:"20px"}}>
                        <h2>Would you like to save that quote?</h2>
                        <form onSubmit={handleFormSubmit}>
                            <label>Email:</label>
                            <input
                            type="email"
                            name="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <br />
                            <label>Phone Number:</label>
                            <input
                            type="tel"
                            name="phone_number"
                            value={phone_number}
                            required
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            <br />
                            <label>Address:</label>
                            <input
                            type="text"
                            name="address"
                            value={address}
                            required
                            onChange={(e) => setAddress(e.target.value)}
                            />
                            <br />
                            <label>First Name:</label>
                            <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            required
                            onChange={(e) => setFirstName(e.target.value)}
                            />
                            <br />
                            <label>Last Name:</label>
                            <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            required
                            onChange={(e) => setLastName(e.target.value)}
                            />
                            <br />
                            <button type="submit">Save Quote & get by email</button>
                            <div style={leadCreated?{display:"block"}:{display:"none"}}>
                                <br/>
                                <h2 >
                                    Thanks for showing your interest, you just received the quote by email !
                                </h2>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>

    )
    }
}


export default Quote