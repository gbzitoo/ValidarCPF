
function getValueCPF(){
    let cpfDigitado = document.getElementById("cpf").value;
    if(!isNaN(cpfDigitado)){
        let quebrarCpf;
        let valueSomadosCPF = [];
        let valueSomadosCPFSegundo = [];
        let somaTotalCpf = 0;
        for(let i = 0; i < 9; i++){
            quebrarCpf = cpfDigitado[i]
            if(i == 0){
                valueSomadosCPF[i] = quebrarCpf * 10;
            }
            if(i == 1){
                valueSomadosCPF[i] = quebrarCpf * 9;
            }
            if(i == 2){
                valueSomadosCPF[i] = quebrarCpf * 8;
            }
            if(i == 3){
                valueSomadosCPF[i] = quebrarCpf * 7;
            }
            if(i == 4){
                valueSomadosCPF[i] = quebrarCpf * 6;
            }
            if(i == 5){
                valueSomadosCPF[i] = quebrarCpf * 5;
            }
            if(i == 6){
                valueSomadosCPF[i] = quebrarCpf * 4;
            }
            if(i == 7){
                valueSomadosCPF[i] = quebrarCpf * 3;
            }
            if(i == 8){
                valueSomadosCPF[i] = quebrarCpf * 2;
            }
            somaTotalCpf += valueSomadosCPF[i];
            
        }
        let restoDivisaoPrimeiro = somaTotalCpf%11;
        let numeroDigitoPrimeiro = 11 - restoDivisaoPrimeiro;
        somaTotalCpf = 0;
        if(numeroDigitoPrimeiro == cpfDigitado[9]){
            for(let i = 0; i < 10; i++){
                quebrarCpf = cpfDigitado[i]
                if(i == 0){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 11;
                }
                if(i == 1){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 10;
                }
                if(i == 2){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 9;
                }
                if(i == 3){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 8;
                }
                if(i == 4){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 7;
                }
                if(i == 5){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 6;
                }
                if(i == 6){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 5;
                }
                if(i == 7){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 4;
                }
                if(i == 8){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 3;
                }
                if(i == 9){
                    valueSomadosCPFSegundo[i] = quebrarCpf * 2;
                }
                somaTotalCpf += valueSomadosCPFSegundo[i];
            }
            let restoDivisaoSegundo = somaTotalCpf%11;
            let numeroDigitoSegundo = 11 - restoDivisaoSegundo;
            if(numeroDigitoSegundo == cpfDigitado[10]){
                alert('CPF Valido! :D')
            }else{
                alert('CPF Invalido! :C')
            }
        }else{
            alert('CPF Invalido! :C')
        }
        
    }else{
        alert('Favor, Enviar Somente Números.');
    }
}