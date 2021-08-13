
               //PASAMOS LOS DATOS DE LOS INPUT A JS, Y LOS GUARDAMOS EN UNAS VARIABLES
               var email=document.getElementById('inputEmail4');
               var telefono=document.getElementById('inputPassword4');
               var nombres=document.getElementById('nombre');
               var direccion=document.getElementById('direccion');
               var ciudad=document.getElementById('ciudad');
               

              

               function Form(){
              //CREAMOS UNA CONDICION QUE SI LA VARIABLE NO CONTIENE NADA MUESTRE UN ERROR
              if(nombres.value === '' || nombres.value === null){
                document.getElementById('ms3').innerHTML='CAMPO REQUERIDO';
                ms3.style.color = 'red';
              
              }else{
                document.getElementById('ms3').innerHTML='EXITO';
                ms3.style.color = 'blue';
              }

              if(telefono.value === '' || telefono.value === null){
                document.getElementById('ms2').innerHTML='CAMPO REQUERIDO';
                ms2.style.color = 'red';

              }else{
                document.getElementById('ms2').innerHTML='EXITO';
                ms2.style.color = 'blue';
              }

              if(email.value === '' || email.value === null){
                document.getElementById('ms').innerHTML='CAMPO REQUERIDO';
                ms.style.color = 'red';
              }else{
                document.getElementById('ms5').innerHTML='EXITO';
                ms5.style.color = 'blue';
              }

              if(ciudad.value === '' || ciudad.value === null){
                document.getElementById('ms5').innerHTML='CAMPO REQUERIDO';
                ms5.style.color = 'red';
              }else{
                document.getElementById('ms5').innerHTML='EXITO';
                ms5.style.color = 'blue';
              }

              if(direccion.value === '' || direccion.value === null){
                document.getElementById('ms4').innerHTML='CAMPO REQUERIDO';
                ms4.style.color = 'red';
              }else{
                document.getElementById('ms4').innerHTML='EXITO';
                ms4.style.color = 'blue';
              }

                
               

                return false;
                
               }