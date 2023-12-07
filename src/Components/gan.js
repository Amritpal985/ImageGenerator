import React from 'react'
import { Textarea } from 'evergreen-ui'
import "./gan.css"
import { useNavigate } from 'react-router-dom'

export default function GAN() {

// State for our summary of poem
const [summary, setSummary] = React.useState('')
const navigate=useNavigate();

const handleImageGeneration=()=>{

	const data=summary;
	navigate("result",{ state: { data: data } })
}

return (	
	<div id="gan" style={{
	display: 'block', width: 1520, padding: 20,
	}}>
	<h4 className="gen_heading" >Enter the description of the Person:</h4>
	<Textarea id='gen_textarea' style={{height:"350px"}}
		onChange={(e) => setSummary(e.target.value)}
		placeholder="Enter your description"
	/> <br></br>
	<button onClick={handleImageGeneration}>Generate Image</button>
	<p id="summ">
	Summary: {summary}
	</p>
	</div>
);
}


