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
///////////////////////////////////////
//Atualizar quantidade de itens
const [SanduicheA, setSanduicheA] = useState(0)
const [SanduicheB, setSanduicheB] = useState(0)
const [SanduicheC, setSanduicheC] = useState(0)
const [obsSanduiche, SetObsSanduiche ] = useState("")
//Atualizar quantidade de itens
const [suco1, setSuco1] = useState(0)
const [suco2, setSuco2] = useState(0)
const [suco3, setSuco3] = useState(0)
const [obsSuco, SetObsSuco ] = useState("")

//Atualizar quantidade de itens
const [sobremesa1, setSobremesa1] = useState(0)
const [sobremesa2, setSobremesa2] = useState(0)
const [sobremesa3, setSobremesa3] = useState(0)
const [obsSobremesa, SetObsSobremsa ] = useState("")

//atualizar valor total de cada item do cardapaio
const [ totalSanduicheA , setTotalSanduicheA] = useState(0)
const [ totalSanduicheB , setTotalSanduicheB] = useState(0)
const [ totalSanduicheC , setTotalSanduicheC] = useState(0)
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

},[SanduicheA, SanduicheB, SanduicheC])

//Foi usado o useEffect para atualizar o valor total do pedido somando o total de todos as quantidade de pedido
useEffect ( () =>{
  setTotal(totalSanduicheA+totalSanduicheB+totalSanduicheC)
},[totalSanduicheA, totalSanduicheB, totalSanduicheC])




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
  if(suco1 !== 0){
    //pedido += `\n Suco tipo 1 x${suco1}`
    setPedido(pedido => pedido+`\n Suco tipo A x${suco1}`)
    
  }
  if(suco2 !== 0){
   // pedido += `\n Suco tipo 2 x${suco2}`
   setPedido(pedido => pedido+`\n Suco tipo B x${suco2}`)
   
  }
  if(suco3 !== 0){
  // pedido += `\n Suco tipo 3 x${suco3}`
  setPedido(pedido => pedido+`\n Suco tipo C x${suco3}`)
   
  }
  if(obsSuco !== ""){
   // pedido += `\n OBSERVAÇÕES: ${obsSuco}`
   setPedido(pedido => pedido+`\n OBSERVAÇÕES: ${obsSuco}`)
   
  }
  setPedido(pedido => pedido+`\n`)

if(sobremesa1 !== 0){
  //pedido += `\n sobremesa tipo 1 x${sobremesa1}`
  setPedido(pedido => pedido+`\n sobremesa tipo A x${sobremesa1}`)
  
}
if(sobremesa2 !== 0){
  //pedido += `\n Sobremesa tipo 2 x${sobremesa2}`
  setPedido(pedido => pedido+`\n Sobremesa tipo B x${sobremesa2}`)
 
}
if(sobremesa3 !== 0){
  //pedido += `\n Sobremesa tipo 3 x${sobremesa3}`
  setPedido(pedido => pedido+`\n Sobremesa tipo C x${sobremesa3}`)
 
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

          <div className="pedido">

            <span className="titutloPedido">Sanduiche tipo A</span>
            <button onClick={()=> setSanduicheA(SanduicheA+1)}>+</button>
            <span className="quantidade">{SanduicheA}</span>
            <button disabled={SanduicheA !== 0 ? false : true} onClick={()=> setSanduicheA(SanduicheA-1)}>-</button>
            
          </div>
          

          <div className="pedido">
            <span className="titutloPedido">Sanduiche tipo B</span>
            <button onClick={()=> setSanduicheB(SanduicheB+1)}>+</button>
            <span className="quantidade">{SanduicheB}</span>
            <button disabled={SanduicheB !== 0 ? false : true} onClick={()=> setSanduicheB(SanduicheB-1)}>-</button>
          </div>

          <div className="pedido">
            <span className="titutloPedido">Sanduiche tipo C</span>
            <button onClick={()=> setSanduicheC(SanduicheC+1)}>+</button>
            <span className="quantidade">{SanduicheC}</span>
            <button disabled={SanduicheC !== 0 ? false : true} onClick={()=> setSanduicheC(SanduicheC-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSanduiche(e.target.value)} type="text" placeholder="Observações"></input>

          <h3>Sucos</h3>
          <div className="pedido">
            <span className="titutloPedido">Suco tipo A</span>
            <button onClick={()=>setSuco1(suco1+1)}>+</button>
            <span className="quantidade">{suco1}</span>
            <button>-</button>
          </div>
    

          <div className="pedido">
            <span className="titutloPedido">Suco  tipo B</span>
            <button onClick={()=>setSuco2(suco2+1)}>+</button>
            <span className="quantidade">{suco2}</span>
            <button>-</button>
          </div>

          <div className="pedido">
            <span className="titutloPedido">Suco  tipo C</span>
            <button onClick={()=>setSuco3(suco3+1)}>+</button>
            <span className="quantidade">{suco3}</span>
            <button>-</button>
          </div>
          <input onChange={(e)=> SetObsSuco(e.target.value)} type="text" placeholder="Observações"></input>

          <h3>Sobremesas</h3>
          <div className="pedido">
            <span className="titutloPedido">Sobremesa tipo A</span>
            <button onClick={()=>setSobremesa1(sobremesa1+1)}>+</button>
            <span className="quantidade">{sobremesa1}</span>
            <button disabled={sobremesa1 !== 0 ? false : true} onClick={()=> setSobremesa1(sobremesa1-1)}>-</button>
          </div>
    

          <div className="pedido">
            <span className="titutloPedido">Sobremesa tipo B</span>
            <button onClick={()=>setSobremesa2(sobremesa2+1)}>+</button>
            <span className="quantidade">{sobremesa2}</span>
            <button disabled={sobremesa2 !== 0 ? false : true} onClick={()=> setSobremesa2(sobremesa2-1)}>-</button>
          </div>

          <div className="pedido">
            <span className="titutloPedido">Sobremesa tipo C</span>
            <button onClick={()=>setSobremesa3(sobremesa3+1)}>+</button>
            <span className="quantidade">{sobremesa3}</span>
            <button disabled={sobremesa3 !== 0 ? false : true} onClick={()=> setSobremesa3(sobremesa3-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSobremsa(e.target.value)} type="text" placeholder="Observações"></input>

          <h3>Total: R${total}</h3>
      </div>

      <button onClick={fazerPedido}><WhatsappLink pedido={pedido}/></button>
      
      
 
   
    </div>
  );
}

export default App;

