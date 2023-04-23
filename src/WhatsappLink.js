import React from 'react';

function WhatsappLink(props) {
  

  const phoneNumber = '5584998120957'; // número do WhatsApp com DDI e DDD
  const message = `${props.pedido}`; // mensagem pré-preenchida
  
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  
  return (
    <>
   <a href={link} target="_blank" rel="noopener noreferrer">pedido</a>
   
    </>
  );
}

export default WhatsappLink;