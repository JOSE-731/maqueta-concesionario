var pago3 = document.getElementById('pago');
console.log(pago3);

function Compra(){
  if(pago3.value >= 800){
    document.getElementById('CAMPOS').innerHTML='COMPRA EXIOSA';
  }else{
    
    document.getElementById('CAMPOS').innerHTML='OHH UN PROBLEMA NO TIENE DINERO';
    CAMPOS.style.color = 'red';
  

  }
  

  return false;
}