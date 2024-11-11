
        document.getElementById("x").addEventListener("click", function() {
            document.getElementById("caixaMensagem").style.display = "block";
            document.getElementById("resultadoMensagem").style.display = "none";  // Limpa resultado anterior
        });

        function fecharMensagem() {
            document.getElementById("caixaMensagem").style.display = "none";
        }

        function fazerCalculo() {
            var horas = parseInt(document.getElementById("horas").value);
            var minutos = parseInt(document.getElementById("minutos").value);

            var tempoDeSono = 90; // 90 minutos
            var ciclos = 5; // Ciclos de sono recomendados ( total 7:30 )

            var totalMinutos = horas * 60 + minutos; //conversor de horas em minutos e soma dos minutos totais 
            var tempoDeDespertar = totalMinutos + (tempoDeSono * ciclos); // resultado da soma dos minutos + 90x5 (minutos de cada ciclo e numero de ciclo necessario)

            var horasDespertar = Math.floor(tempoDeDespertar / 60) % 24; // Não passar de 24h
            var minutosDespertar = tempoDeDespertar % 60; // Não passar de 60 minutos 

            // Resultado 
            var resultadoDiv = document.getElementById("resultadoMensagem");
            resultadoDiv.innerHTML = `Para completar ${ciclos} ciclos de sono, você deve acordar às ${String(horasDespertar).padStart(2, '0')}:${String(minutosDespertar).padStart(2, '0')}.`;
            resultadoDiv.style.display = "block";  // padStar - usei para transformar 3 horsa da manha para 03 por exemplo

            fecharMensagem();
        }
