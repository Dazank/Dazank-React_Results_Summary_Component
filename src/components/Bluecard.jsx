 import Button from "./Button"
 import Scorebar from "./Scorebar"
function Bluecard(){
return(
    <>
    <div className=" content-center flex-col flex md:flex-row mt-[0px] flex-wrap md:mt-[2em]  md:flex md:justify-center font-Hanken">
        <div className="bg-gradient-to-b from-[color:hsl(252,100%,67%)] to-[color:hsl(241,81%,54%)] md:w-[27%] pb-[2rem] rounded-b-3xl md:rounded-3xl md:min-w-[370px] md:max-w-[27rem] w-[100%] ">
        <p className="text-center mt-[1.5em] text-2xl font-[700] text-gray-300">Your Result</p>
            <div className="w-[55%] m-auto mt-[2em] aspect-square rounded-full flex flex-col justify-center bg-gradient-to-b from-[hsla(241,72%,46%)] to-[color:hsla(256,72%,46%,0)] md:max-w-[15rem] ">
                <p className="text-center font-[800] text-6xl align-middle text-white">76</p>
              <p className="text-center align-middle font-[700] text-lg text-gray-300">of 100</p>
            </div>
            <p className="text-center font-[600] text-3xl mt-[0.7em] text-white">Great</p>
            <p className="text-center mt-[1em] text-lg md:max-w-[16rem] m-auto text-gray-300 max-w-[20rem]"> You scored higher than 65% of the people who have taken these tests.</p>
           
          
        </div>
        <div className=" md:w-[27%] pb-[2rem] rounded-3xl flex flex-col shadow-[hsla(221,100%,96%,0.5)_1em_2em] min-w-[350px] content-center md:max-w-[27rem]">
            <p className="ml-12 mt-8 text-2xl font-[700]">Summary</p>
            <Scorebar topic='Reaction' icon= "./src/assets/images/icon-reaction.svg" color="bg-[color:hsla(0,100%,67%,0.2)]"  textColor="text-[color:hsl(0,100%,67%)]"
            score="80"/>
            <Scorebar topic='Memory' icon= "./src/assets/images/icon-memory.svg" color="bg-[hsla(39,100%,56%,0.2)]" score="92" textColor="text-[color:hsl(39,100%,56%)]"/>
            <Scorebar topic='Verbal' icon= "./src/assets/images/icon-verbal.svg" color="bg-[hsla(166,100%,37%,0.2)]" score="61" textColor="text-[color:hsl(166,100%,37%)]"/>
            <Scorebar topic='Visual' icon= "./src/assets/images/icon-visual.svg" color="bg-[hsla(234,85%,45%,0.2)]" score="72" textColor="text-[color:hsl(234,85%,45%)]"/>
            <Button />
        </div>
    

    </div>
    
    
    
    
    
    </>




)

}

export default Bluecard