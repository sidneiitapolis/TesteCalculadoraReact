import React, {useState} from "react"
import './estilo.css'

export default ()=>{

//states
  let [num,setNum]=useState(0)
  let [anterior,setAnterior]=useState(0)
  let [operador,setOperador]=useState()


//Funções  
  function limpar(){
    setNum('')
  }

  function porcentagem(){
    setNum(num/100)
  }
  
  function mudarSinal(){
    if (num >0){
      setNum(-num)
    }else{
      setNum(-(num))
    }
  }
  
  function tipoOperador(e){ //passa o objeto que foi clicado, que seria o botao atual com todas suas propriedades atributos 
    setOperador(e.target.value)
    setAnterior(num)
    setNum('')
  }
  function calcular(){
       
   // console.log(anterior)
    //console.log(num)
    //console.log(operador)

    if (operador === '/'){
      setNum(anterior/num)
    }
    if (operador === 'X'){
      setNum(anterior*num)
    }
    if (operador === '-'){
      setNum(anterior-num)
    }
    if (operador === '+'){
      setNum(parseFloat(anterior)+parseFloat(num))
    }


  }


  return(
    <div className="caixa">
        <div id="res">     
            <h1>{num}</h1>
        </div>
        <div className="parte">
          <button className="cinza" onClick={limpar}>C</button>
          <button className="cinza" onClick={mudarSinal}>+/-</button>
          <button className="cinza" onClick={porcentagem}>%</button>
          <button className="laranja" value={'/'} onClick={tipoOperador}>/</button>
        </div>
        <div className="parte">
          <button value={7} onClick={(e)=>setNum(num + e.target.value)}>7</button>
          <button value={8} onClick={(e)=>setNum(num + e.target.value)}>8</button>
          <button value={9} onClick={(e)=>setNum(num + e.target.value)}>9</button>
          <button className="laranja" value={'X'} onClick={tipoOperador}>X</button>
        </div>
        <div className="parte">
          <button value={4} onClick={(e)=>setNum(num + e.target.value)}>4</button>
          <button value={5} onClick={(e)=>setNum(num + e.target.value)}>5</button>
          <button value={6} onClick={(e)=>setNum(num + e.target.value)}>6</button>
          <button className="laranja" value={'-'} onClick={tipoOperador}>-</button>
        </div>
        <div className="parte">
          <button value={1} onClick={(e)=>setNum(num + e.target.value)}>1</button>
          <button value={2} onClick={(e)=>setNum(num + e.target.value)}>2</button>
          <button value={3} onClick={(e)=>setNum(num + e.target.value)}>3</button>
          <button className="laranja" value={'+'} onClick={tipoOperador}>+</button>
        </div>
        <div className="parte">
          <button value={0} onClick={(e)=>setNum(num + e.target.value)}>0</button>
          <button value={'.'} onClick={(e)=>setNum(num + e.target.value)}>,</button>
          <button id="igual" onClick={calcular}>=</button>
        </div>


    </div>
  )

        
    
}