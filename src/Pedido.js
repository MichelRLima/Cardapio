import './App.css';
import { useState, useEffect } from 'react'
import WhatsappLink from './WhatsappLink';
import styles from './pedido.module.css'; 

function Pedido() {
  
//Valor total do pedido
const [total, setTotal] = useState(0)

//Gerar pedido para envio
const [pedido, setPedido] = useState("PEDIDO DE: ")


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

//Adicionar endereço
const [cep, setCep] = useState("")
const [rua, setRua] = useState("")
const [numero, setNumero] = useState("")
const [referencia, setReferencia] = useState("")

//Selecionar forma de pagamento
const [nome, setNome] =  useState("")
const [pagamento, setPagamento] = useState('Sem forma de pagamento');
const [troco, setTroco] = useState('');
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


const handleButtonClick = (buttonName) => {
  setPagamento(buttonName);
  
};

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
  if(SanduicheA || SanduicheB || SanduicheC){
    setPedido(pedido => pedido+`${nome}`)
    setPedido(pedido => pedido+`\n`)
    setPedido(pedido => pedido+"SANDUICHES:")
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
        
  }
  //Sucos
  if(sucoA || sucoB || sucoC){
    setPedido(pedido => pedido+`\n`)
    setPedido(pedido => pedido+"\n SUCOS:")
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
      }
      //Sobremesas
    if(sobremesaA || sobremesaB || sobremesaC){
      setPedido(pedido => pedido+`\n`)
      setPedido(pedido => pedido+"\n SOBREMESA:")
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

      
    }

setPedido(pedido => pedido+`\n`)
setPedido(pedido => pedido+"ENDEREÇO:")
setPedido(pedido => pedido+`\n`)
setPedido(pedido => pedido+`CEP: ${cep}`)
setPedido(pedido => pedido+`\n`)
setPedido(pedido => pedido+`Rua: ${rua}, ${numero}`)
setPedido(pedido => pedido+`\n`)
setPedido(pedido => pedido+`Ponto de referência: ${referencia}`)
setPedido(pedido => pedido+`\n`)
setPedido(pedido => pedido+`\n`)
setPedido(pedido => pedido+"FORMA DE PAGAMENTO:")
setPedido(pedido => pedido+`\n`)

    if (pagamento){
      if(pagamento === 'Cartão de crédito'){
        setPedido(pedido => pedido+`Cartão de crédito`)
      }
        
      if(pagamento === 'Cartão de débito'){
        setPedido(pedido => pedido+`Cartão de débito`)
      }
      if(pagamento === 'Dinheiro'){
        setPedido(pedido => pedido+`Dinheiro com troco para R$${troco} \n`)
      }
    }
setPedido(pedido => pedido+` \n VALOR TOTAL: R$${total}`)
       
}

console.log(nome)
return (
  <>

      
      <h2>Faça seu pedido</h2>
    
      <div className={styles.ContainerPedidos}>

        <div className={styles.ContainerTitulo}>
          <h3>Sanduíche</h3>
        </div>

          <div className={styles.pedido} >

            <p className={styles.titutloPedido}>Sanduíche tipo A (R$2,00) </p>
            <button className={styles.buttonMais} onClick={()=> setSanduicheA(SanduicheA+1)}>+</button>
            <span className={styles.quantidade}>{SanduicheA}</span>
            <button className={styles.buttonMenos} disabled={SanduicheA !== 0 ? false : true} onClick={()=> setSanduicheA(SanduicheA-1)}>-</button>
            
          </div>
          

          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Sanduíche tipo B (R$3,00)</p>
            <button className={styles.buttonMais} onClick={()=> setSanduicheB(SanduicheB+1)}>+</button>
            <span className={styles.quantidade}>{SanduicheB}</span>
            <button className={styles.buttonMenos} disabled={SanduicheB !== 0 ? false : true} onClick={()=> setSanduicheB(SanduicheB-1)}>-</button>
          </div>

          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Sanduíche tipo C (R$1,00)</p>
            <button className={styles.buttonMais} onClick={()=> setSanduicheC(SanduicheC+1)}>+</button>
            <span className={styles.quantidade}>{SanduicheC}</span>
            <button className={styles.buttonMenos} disabled={SanduicheC !== 0 ? false : true} onClick={()=> setSanduicheC(SanduicheC-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSanduiche(e.target.value)} type="text" placeholder="Observações"></input>

          <br/>
          <br/>
          <br/>
          <br/>

          <div className={styles.ContainerTitulo}>
          <h3>Sucos</h3>
          </div>
          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Suco tipo A (R$1,50)</p>
            <button className={styles.buttonMais} onClick={()=>setSucoA(sucoA+1)}>+</button>
            <span className={styles.quantidade}>{sucoA}</span>
            <button className={styles.buttonMenos} disabled={sucoA !== 0 ? false : true} onClick={()=> setSucoA(sucoA-1)}>-</button>
          </div>
    

          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Suco  tipo B (R$2,00)</p>
            <button className={styles.buttonMais} onClick={()=>setSucoB(sucoB+1)}>+</button>
            <span className={styles.quantidade}>{sucoB}</span>
            <button className={styles.buttonMenos} disabled={sucoB !== 0 ? false : true} onClick={()=> setSucoB(sucoB-1)}>-</button>
          </div>

          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Suco  tipo C (R$3,00)</p>
            <button className={styles.buttonMais} onClick={()=>setSucoC(sucoC+1)}>+</button>
            <span className={styles.quantidade}>{sucoC}</span>
            <button className={styles.buttonMenos} disabled={sucoC !== 0 ? false : true} onClick={()=> setSucoC(sucoC-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSuco(e.target.value)} type="text" placeholder="Observações"></input>

          <br/>
          <br/>
          <br/>
          <br/>

          <div className={styles.ContainerTitulo}>
          <h3>Sobremesas</h3>
          </div>
          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Sobremesa tipo A (R$4,00)</p>
            <button className={styles.buttonMais} onClick={()=>setSobremesaA(sobremesaA+1)}>+</button>
            <span className={styles.quantidade}>{sobremesaA}</span>
            <button className={styles.buttonMenos} disabled={sobremesaA !== 0 ? false : true} onClick={()=> setSobremesaA(sobremesaA-1)}>-</button>
          </div>
    

          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Sobremesa tipo B (R$5,00)</p>
            <button className={styles.buttonMais} onClick={()=>setSobremesaB(sobremesaB+1)}>+</button>
            <span className={styles.quantidade}>{sobremesaB}</span>
            <button className={styles.buttonMenos} disabled={sobremesaB !== 0 ? false : true} onClick={()=> setSobremesaB(sobremesaB-1)}>-</button>
          </div>

          <div className={styles.pedido}>
            <p className={styles.titutloPedido}>Sobremesa tipo C (R$7,00)</p>
            <button className={styles.buttonMais} onClick={()=>setSobremesaC(sobremesaC+1)}>+</button>
            <span className={styles.quantidade}>{sobremesaC}</span>
            <button className={styles.buttonMenos} disabled={sobremesaC !== 0 ? false : true} onClick={()=> setSobremesaC(sobremesaC-1)}>-</button>
          </div>
          <input onChange={(e)=> SetObsSobremsa(e.target.value)} type="text" placeholder="Observações"></input>

          <br/>
          <br/>
          <h3>Total: R${total.toFixed(2)}</h3>
          <br/>

      
      </div>

      <div className={styles.containerEndereco}>
            <div className={styles.ContainerTitulo}>
            <h3>Endereço de entrega</h3>
            </div>  
            <p>Cliente:</p>
            <input type="text" step="any" placeholder='Seu nome' onChange={(e)=> setNome(e.target.value)}></input>
            <p>CEP:</p>
            <input type="number" step="any" placeholder='CEP' onChange={(e)=> setCep(e.target.value)}></input>
            <p>Rua: </p>
            <input  placeholder='Rua' type='text' onChange={(e)=> setRua(e.target.value)}></input>
            <p>Número e complemento: </p>
            <input placeholder='Número e complemento' type='text' onChange={(e)=> setNumero(e.target.value)}></input>
            <p>Ponto de referência: </p>
            <input placeholder='Ponto de referência' type='text' onChange={(e)=> setReferencia(e.target.value)}></input>
            <br/>
            <br/>
      </div>

      <div className={styles.containerPagamento}>
        <div className={styles.ContainerTitulo}>
      <h3>Forma de pagamento</h3>
      </div>
      <div className={styles.sessaoPagamento}>
      <button className={styles.botaoPagamento} onClick={() => handleButtonClick('Cartão de crédito')} style={{background: pagamento==='Cartão de crédito' && 'red',color: pagamento==='Cartão de crédito' && 'white' }}>Cartao de credito</button>
      <button className={styles.botaoPagamento} onClick={() => handleButtonClick('Cartão de débito')}  style={{background: pagamento==='Cartão de débito' && 'red',color: pagamento==='Cartão de débito' && 'white' }}>Cartao de debito</button>
      <button className={styles.botaoPagamento} onClick={() => handleButtonClick('Dinheiro')}  style={{background: pagamento==='Dinheiro' && 'red',color: pagamento==='Dinheiro' && 'white' }}>Dinheiro</button>
      <div style={{display: pagamento !=='Dinheiro' && 'none' }}>
        <p>Troco para quanto?</p>
        <span>R$</span> <input  onChange={(e)=> setTroco(e.target.value)} type="text" placeholder="Digite que pretendo pagar"></input>
      </div>
    </div>
      

      
      </div>
      
     
      <button className={styles.buttonEnviar} type='submit' onClick={fazerPedido}><WhatsappLink pedido={pedido}/></button>
  </>
)
}

export default Pedido;