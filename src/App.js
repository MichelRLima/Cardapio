import './App.css';
import { useState, useEffect } from 'react'
import WhatsappLink from './WhatsappLink';

function App() {

//Valor total do pedido
const [total, setTotal] = useState(0)

//Gerar pedido para envio
const [pedido, setPedido] = useState("PEDIDO:")


const valorSanduicheA = 2;
const valorSanduicheB = 3;
const valorSanduicheC = 1;
const valorSucoA = 1.50;
const valorSucoB = 2;
const valorSucoC = 3;
const valorSobremesaA = 4;
const valorSobremesaB = 5;
const valorSobremesaC = 7;
///////////////////////////////////////
//Atualizar quantidade de itens
const [SanduicheA, setSanduicheA] = useState(0)
const [SanduicheB, setSanduicheB] = useState(0)
const [SanduicheC, setSanduicheC] = useState(0)
const [obsSanduiche, SetObsSanduiche ] = useState("")
//Atualizar quantidade de itens
const [sucoA, setSucoA] = useState(0)
const [sucoB, setSucoB] = useState(0)
const [sucoC, setSucoC] = useState(0)
const [obsSuco, SetObsSuco ] = useState("")

//Atualizar quantidade de itens
const [sobremesaA, setSobremesaA] = useState(0)
const [sobremesaB, setSobremesaB] = useState(0)
const [sobremesaC, setSobremesaC] = useState(0)
const [obsSobremesa, SetObsSobremsa ] = useState("")

//atualizar valor total de cada item do cardapaio
const [ totalSanduicheA , setTotalSanduicheA] = useState(0)
const [ totalSanduicheB , setTotalSanduicheB] = useState(0)
const [ totalSanduicheC , setTotalSanduicheC] = useState(0)
const [ totalSucoA , setTotalSucoA] = useState(0)
const [ totalSucoB , setTotalSucoB] = useState(0)
const [ totalSucoC , setTotalSucoC] = useState(0)
const [ totalSobremesaA , setTotalSobremesaA] = useState(0)
const [ totalSobremesaB , setTotalSobremesaB] = useState(0)
const [ totalSobremesaC , setTotalSobremesaC] = useState(0)
//foi usado o useEffect para atualizar o valor da quantiade de cada refeicao do cardapio
useEffect ( () => {
if(setSanduicheA){
  setTotalSanduicheA(SanduicheA*valorSanduicheA)

}
if(setSanduicheB){
  setTotalSanduicheB(SanduicheB*valorSanduicheB)

}

if(setSanduicheC){
  setTotalSanduicheC(SanduicheC*valorSanduicheC)

}
if(setSucoA){
  setTotalSucoA(sucoA*valorSucoA)

}
if(setSucoB){
  setTotalSucoB(sucoB*valorSucoB)

}
if(setSucoC){
  setTotalSucoC(sucoC*valorSucoC)

}
if(setSobremesaA){
  setTotalSobremesaA(sobremesaA*valorSobremesaA)

}
if(setSobremesaB){
  setTotalSobremesaB(sobremesaB*valorSobremesaB)

}

if(setSobremesaC){
  setTotalSobremesaC(sobremesaC*valorSobremesaC)

}

},[SanduicheA, SanduicheB, SanduicheC, sucoA, sucoB, sucoC, sobremesaA,sobremesaB, sobremesaC ])

//Foi usado o useEffect para atualizar o valor total do pedido somando o total de todos as quantidade de pedido
useEffect ( () =>{
  setTotal(totalSanduicheA+totalSanduicheB+totalSanduicheC+totalSucoA+totalSucoB+totalSucoC+totalSobremesaA+totalSobremesaB+totalSobremesaC)
},[totalSanduicheA, totalSanduicheB, totalSanduicheC, totalSucoA, totalSucoB, totalSucoC, totalSobremesaA, totalSobremesaB, totalSobremesaC])




function fazerPedido(){
  
  //Sanduiches
  if(SanduicheA !== 0){
    
    setPedido(pedido => pedido+` \n Sanduiche tipo A x ${SanduicheA}`)
    
  }
  if(SanduicheB !== 0){
  
    setPedido(pedido => pedido+` \n Sanduiche tipo B x ${SanduicheB}`)
   
  }
  if(SanduicheC !== 0){
 
    setPedido(pedido => pedido+`\n Sanduiche tipo C x ${SanduicheC}`)
   
  }
  if(obsSanduiche !== ""){
   // pedido += `\n OBSERVAÇÕES: ${obsSanduiche}`
   setPedido(pedido => pedido+`\n OBSERVAÇÕES: ${obsSanduiche}`)
  
    
  }
  setPedido(pedido => pedido+`\n`)

  //Sucos
  if(sucoA !== 0){
   
    setPedido(pedido => pedido+`\n Suco tipo A x${sucoA}`)
    
  }
  if(sucoB !== 0){
  
   setPedido(pedido => pedido+`\n Suco tipo B x${sucoB}`)
   
  }
  if(sucoC !== 0){

  setPedido(pedido => pedido+`\n Suco tipo C x${sucoC}`)
   
  }
  if(obsSuco !== ""){
   // pedido += `\n OBSERVAÇÕES: ${obsSuco}`
   setPedido(pedido => pedido+`\n OBSERVAÇÕES: ${obsSuco}`)
   
  }
  setPedido(pedido => pedido+`\n`)

if(sobremesaA !== 0){

  setPedido(pedido => pedido+`\n sobremesa tipo A x${sobremesaA}`)
  
}
if(sobremesaB !== 0){

  setPedido(pedido => pedido+`\n Sobremesa tipo B x${sobremesaB}`)
 
}
if(sobremesaC !== 0){

  setPedido(pedido => pedido+`\n Sobremesa tipo C x${sobremesaC}`)
 
}
if(obsSobremesa !== ""){
  //pedido += `\n OBSERVAÇÕES: ${obsSobremesa}`
  setPedido(pedido => pedido+`\n OBSERVAÇÕES: ${obsSobremesa}`)
 
}

setPedido(pedido => pedido+`\n`)


}

  return (
    <div className="App">
     
      <h1>Projeto restaurante</h1>
      <br/>
      
      <h2>Faça seu pedido</h2>

      <div className="Container-pedidos">
          <h3>Sanduiche</h3>

          <div className="pedido" >

            <p className="titutloPedido">Sanduiche tipo A (R$2,00) </p>
            <button onClick={()=> setSanduicheA(SanduicheA+1)}>+</button>
            <span className="quantidade">{SanduicheA}</span>
            <button disabled={SanduicheA !== 0 ? false : true} onClick={()=> setSanduicheA(SanduicheA-1)}>-</button>
            
          </div>
          

          <div className="pedido">
            <p className="titutloPedido">Sanduiche tipo B (R$3,00)</p>
            <button onClick={()=> setSanduicheB(SanduicheB+1)}>+</button>
            <span className="quantidade">{SanduicheB}</span>
            <button disabled={SanduicheB !== 0 ? false : true} onClick={()=> setSanduicheB(SanduicheB-1)}>-</button>
          </div>

          <div className="pedido">
            <p className="titutloPedido">Sanduiche tipo C (R$1,00)</p>
            <button onClick={()=> setSanduicheC(SanduicheC+1)}>+</button>
            <span className="quantidade">{SanduicheC}</span>
            <button disabled={SanduicheC !== 0 ? false : true} onClick={()=> setSanduicheC(SanduicheC-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSanduiche(e.target.value)} type="text" placeholder="Observações"></input>

          <h3>Sucos</h3>
          <div className="pedido">
            <p className="titutloPedido">Suco tipo A (R$1,50)</p>
            <button onClick={()=>setSucoA(sucoA+1)}>+</button>
            <span className="quantidade">{sucoA}</span>
            <button disabled={sucoA !== 0 ? false : true} onClick={()=> setSucoA(sucoA-1)}>-</button>
          </div>
    

          <div className="pedido">
            <p className="titutloPedido">Suco  tipo B (R$2,00)</p>
            <button onClick={()=>setSucoB(sucoB+1)}>+</button>
            <span className="quantidade">{sucoB}</span>
            <button disabled={sucoB !== 0 ? false : true} onClick={()=> setSucoB(sucoB-1)}>-</button>
          </div>

          <div className="pedido">
            <p className="titutloPedido">Suco  tipo C (R$3,00)</p>
            <button onClick={()=>setSucoC(sucoC+1)}>+</button>
            <span className="quantidade">{sucoC}</span>
            <button disabled={sucoC !== 0 ? false : true} onClick={()=> setSucoC(sucoC-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSuco(e.target.value)} type="text" placeholder="Observações"></input>

          <h3>Sobremesas</h3>
          <div className="pedido">
            <p className="titutloPedido">Sobremesa tipo A (R$4,00)</p>
            <button onClick={()=>setSobremesaA(sobremesaA+1)}>+</button>
            <span className="quantidade">{sobremesaA}</span>
            <button disabled={sobremesaA !== 0 ? false : true} onClick={()=> setSobremesaA(sobremesaA-1)}>-</button>
          </div>
    

          <div className="pedido">
            <p className="titutloPedido">Sobremesa tipo B (R$5,00)</p>
            <button onClick={()=>setSobremesaB(sobremesaB+1)}>+</button>
            <span className="quantidade">{sobremesaB}</span>
            <button disabled={sobremesaB !== 0 ? false : true} onClick={()=> setSobremesaB(sobremesaB-1)}>-</button>
          </div>

          <div className="pedido">
            <p className="titutloPedido">Sobremesa tipo C (R$7,00)</p>
            <button onClick={()=>setSobremesaC(sobremesaC+1)}>+</button>
            <span className="quantidade">{sobremesaC}</span>
            <button disabled={sobremesaC !== 0 ? false : true} onClick={()=> setSobremesaC(sobremesaC-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSobremsa(e.target.value)} type="text" placeholder="Observações"></input>

          <h3>Total: R${total}</h3>
      </div>

      <button onClick={fazerPedido}><WhatsappLink pedido={pedido}/></button>
      
    </div>
  );
}

export default App;

