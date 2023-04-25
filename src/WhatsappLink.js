import React from 'react';
import styles from './WhatsappLink.module.css'; 
function WhatsappLink(props) {
  

  const phoneNumber = '5584998120957'; // número do WhatsApp com DDI e DDD
  const message = `${props.pedido}`; // mensagem pré-preenchida
  
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  
  return (
    <>
   <a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">Fazer pedido</a>
   
    </>
  );
}

export default WhatsappLink;