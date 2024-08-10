function Scorebar(props){
return(
    <div className={`flex justify-between ${props.color} mt-7 w-[85%] m-auto p-4 rounded-lg ${props.textColor}`}>
      <span className="flex justify-between gap-3"><img src={props.icon} alt="" /><span className="font-[700] text-lg">{props.topic}</span></span> 
<p className="text-black font-[700] text-lg">{props.score}<span className="text-gray-400 text-lg">/100</span></p>
    </div>

)




}

export default Scorebar