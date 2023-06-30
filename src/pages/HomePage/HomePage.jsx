import { useState } from "react"
import RequestAQuote from "./components/RequestAQuote"
import Quote from "./components/Quote"




function HomePage(){

    const [received, setReceived] = useState(false)
    const [quote, setQuote] = useState()
    const [coversAdvice, setCoversAdvice] = useState()


    function QuoteReceived(quote){
        setReceived(true)
        setQuote(quote)
    }

    function CoversAdviceReceived(coversAdvice){
        setCoversAdvice(coversAdvice)
    }

    return(
        <div style={{paddingTop:"10vh"}}>
            <h4>Welcome to Yago</h4>

            <div>
               <RequestAQuote QuoteReceived={QuoteReceived} CoversAdviceReceived={CoversAdviceReceived}/> 
            </div>
            <div style={received?{display:"block"}:{display:"none"}}>
                <Quote quote={quote} coversAdvice={coversAdvice}/>
            </div>
        </div>
    )
}


export default HomePage