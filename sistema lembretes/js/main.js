var recordatoriosSelecionados = [];

function textoValido(texto){
    if(texto == null || texto ==  "" || texto.lenght < 1){
        return false;
    }else{
        return true;
    }
} 

function mostrarError(){
    var html = "";
    html += '<div class="alert alert-danger" role="alert">';
    html += 'Please inser a thing';
    html += '</div>';

    document.gerElementById('error').innerHtml = html;
    mostrarError();

}

//Function for clear this errors
function limparError(){
    document.getElementById('error').innerHTML = "";

}

//Function for creat to lem...
function createRecordatorio(){
    var conteudoTextArea = document.getElementById("texto").value;
    if(!textoValido(conteudoTextArea)){
        mostrarError();
        return;

    }
    limparError();
    //create as variaveis para tempo...
    var referencia = new Date();
    var getElementById = referencia.getTime();
    var data = referencia.toLocaleString();
    var texto = conteudoTextArea;

    //JSON = js object...
    var recordatorio = {"id": id,"data": data,"texto": texto};

    //Function para comprovar se existe lembrete...
    comprovarRecordatorio(recordatorio);
    document.getElementById("texto").value = "";
}

 //Function para validar recordatorio...
 function recordatorioValido(recordatoriosExistentes){
    if(recordatoriosExistentes == null || 
        recordatoriosExistentes == "" || 
        typeof recordatoriosExistentes == "undefined" || 
        recordatoriosExistentes == "undefined"){
    return false;

    }else{
    return true;
    }
}

    //Function para comprovar recordatorio...
    function comprovarRecordatorio(recordatorio){
        var recordatoriosExistentes = localStorage.getItem("recordatorios");
        if(!recordatorioValido(recordatoriosExistentes)){
            var recordatorios = [];
            recordatorios.push(recordatorio);

            //save
            saveRecordatorio(recordatorios);

        }else{
        var recordatoriosRecuperados = JSON.parse(recordatoriosExistentes);

        //save
        recordatoriosRecuperados.push(recordatorio);
        saveRecordatorio(recordatoriosRecuperados);

        }

        //gravar todos os dados
        mostrarRecordatorio();
    }
    function selecionarRecordatorios(){
        var recordatorios = document.getElementsByClassName("recordatorio");
        for(var i =0; i < recordatorios.length;i++){
            document.getElementById(recordatorios[i].id).onclick(e)
            {
                e.stopPropagation();
                //caso tenha recordatorios...
                if(recordatoriosSelecionados.index0f(this.id) == -1){
                    this.style.backgroundColor = "red";

                }else{
                    this.style.backgroundColor = "#41dff4";
                    for(var b= 0< recordatoriosSelecionados.lenght; b++;){
                        if(recordatoriosSelecionados[b] == this.id){
                            recordatoriosSelecionados[b] = 0;

                        }
                    }
                }
            }
            var recordatorioTemporario = [];
            for(var j = 0; j< recordatoriosSelecionados; j++)
        {
        if(recordatoriosSelecionados[j]!=0){
            recordatorioTemporario.push(recordatoriosSelecionados[j]);
        }
    }
    recordatoriosSelecionados =recordatorioTemporario;
};
    
 function saveRecordatorio(recordatorios){
    var recordatoriosJSON =JSON.stringify(recordatorios);
    localStorage.setItem("recordatorios", recordatoriosJSON);
 }

 function mostrarRecordatorio(){
    var html = "";

    var recordatoriosExistentes = localStorage.getItem("recordatorios");
    if(!recordatorioValido(recordatoriosExistentes)){

        html ="Não existe nenhum lembrete..";
        document.getElementById("recordatorios").innerHTML = html;

    }else{
        var recordatoriosRecuperados  =JSON.parse(recordatoriosExistentes);
        for(var i = 0; i < recordatoriosRecuperados.lenght; i++){

            html += formatarRecordatorio(recordatoriosRecuperados[i]);
        }
        document.getElementById("recordatorios").innerHTML = html;

    }
 }

 //Funcao para exibir os lembretes
 function formatarRecordatorio(recordatorio){
    var html = "";
    html += '<div class="recordatorio" id="+ recordatorio.id +">';
    html += '<div class="row">';
    html += '<div class="col-6 text-left">';
    html += '<small><i class="fa fa-window-close" aria-hidden="true"></i>' + recordatorio.data + '</small>';
    html += '</div>';
    html += '<div class="col-6 text-right">';
    html += '<small><i class="fa fa-window-close" aria-hidden="true"></small>'
    html += '</div>';
    html += '</div>';
    html += '<br>';
    html += '<div class="row">';
    html += '<div class="col-12">';
    html += recordatorio.texto;
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '<br>';

    return html;
 }

  //comprovar se esta tudo ok...
  document.addEventListener('DOMContentLoaded', function(){
    console.log("this works");
    //mostrarError();
    //chamamos a funçao createRecordatorio...

    document.getElementById("buttonSave").onclick = createRecordatorio;

    mostrarRecordatorio();
    selecionarRecordatorios();
});
}

