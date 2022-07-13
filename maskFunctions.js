<script>
   function mascaraData(){

   var data = document.getElementById('txtData').value;
   if(data.length==2){
    document.getElementById('txtData').value = data +'/';
     }
   else if (data.length==5){
    document.getElementById('txtData').value = data +'/';
   }
}

   function mascaraRg(){

   var rg= document.getElementById('txtRg').value;
   if(rg.length==2){
    document.getElementById('txtRg').value = rg +'.';
     }
   else if (rg.length==6){
    document.getElementById('txtRg').value = rg +'.';
   }
   else if (rg.length==9){
    document.getElementById('txtRg').value = rg +'-';
   }
}

   function mascaraTelefone(){

   var telefone= document.getElementById('txtTelefone').value;
   if(telefone.length==1){
    document.getElementById('txtTelefone').value ='(' + telefone;
     }
   else if (telefone.length==3){
    document.getElementById('txtTelefone').value = telefone +')';
   }

   else if (telefone.length==8){
    document.getElementById('txtTelefone').value = telefone +'-';
   }
}

   function mascaraCel(){

   var celular= document.getElementById('txtCel').value;
   if(celular.length==1){
    document.getElementById('txtCel').value ='(' + celular;
     }
   else if (celular.length==3){
    document.getElementById('txtCel').value = celular +')';
   }
   else if (celular.length==9){
    document.getElementById('txtCel').value = celular +'-';
   }
}




   function mascaraCpf(){
   var cpf = document.getElementById('txtCpf').value;
    if(cpf.length==3){
     document.getElementById('txtCpf').value = cpf +'.';
}
    else if(cpf.length==7){
     document.getElementById('txtCpf').value = cpf +'.';
}
    else if (cpf.length==11){
     document.getElementById('txtCpf').value = cpf +'-';
}    
}  

function checarEmail(){

   var email= document.getElementById('txtEmail').value;
   if(email==""||email.indexOf('@')==-1||email.indexOf('.')==-1){

    alert("Por favor Insira um E-mail valido");

}
}

function limpa_formulário_cep() {

            document.getElementById('txtRua').value=("");
            document.getElementById('txtBairro').value=("");
            document.getElementById('txtCidade').value=("");
            document.getElementById('txtUf').value=("");
    }
 function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('txtRua').value=(conteudo.logradouro);
            document.getElementById('txtBairro').value=(conteudo.bairro);
            document.getElementById('txtCidade').value=(conteudo.localidade);
            document.getElementById('txtUf').value=(conteudo.uf);

        } 
        else {

            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

 function mascaraCep(){
   var cep = document.getElementById('txtCep').value;
    if(cep.length==5){
     document.getElementById('txtCep').value = cep +'-';
}
}
 function pesquisacep(valor) {


        var cep = valor.replace(/\D/g, '');


        if (cep != "") {


            var validacep = /^[0-9]{8}$/;


            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('txtRua').value="...";
                document.getElementById('txtBairro').value="...";
                document.getElementById('txtCidade').value="...";
                document.getElementById('txtUf').value="...";



                var script = document.createElement('script');


                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';


                document.body.appendChild(script);

            } 
            else {

                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {

            limpa_formulário_cep();
        }
    };
  </script>