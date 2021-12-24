//Question bank
var questionBank= [
    {
        question : ' ¿Cuál es el idioma más hablado en Suiza?',
        option : ['Aleman','Frances','Ingles','Italiano'],
        answer : 'Aleman'
    },
    {
        question : ' ¿Qué país está entre Perú y Colombia?',
        option : ['Paraguay','Uruguay','Bolivia','Ecuador'],
        answer : 'Ecuador'
    },
    {
        question : ' ¿Cuál es el río más largo de Europa Occidental?',
        option : ['Danubio','Volga','Rodano','Rin'],
        answer : 'Rin'
    },
    {
        question : '¿En qué país se encuentra el pico Aconcagua?',
        option : ['Peru','Chile','Argentina','Ecuador'],
        answer : 'Argentina'
    },
    {
        question : ' ¿A qué país pertenece la isla de Creta?',
        option : ['Rumania','Grecia','Georgia','Ghana'],
        answer : 'Grecia'
    },
    {
        question : '¿Cuál de los cinco sentidos se desarrolla el primero?',
        option : ['Olfato','Vista','Tacto','Todos son correctos'],
        answer : 'Olfato'
    },
    {
        question : '¿Cómo se llama la ciencia que estudia la sangre?',
        option : ['Dermatologia','Traumatología','Endocrinología',' Hematología'],
        answer : ' Hematología'
    },
    {
        question : '¿Cuál es el pájaro símbolo de la paz?',
        option : ['Paloma','Cuervo','Gorrion','Tordo'],
        answer : 'Paloma'
    },
    {
        question : '¿A qué le tiene miedo una persona que sufre vértigo?',
        option : ['A las arañas','A la oscuridad','Al encierro','A las alturas'],
        answer : 'A las alturas'
    },
    {
        question : '¿Cuántos jugadores tiene un equipo de voleibol?',
        option : ['7','6','8','5'],
        answer : '6'
    },
    {
        question : '¿Qué escribía un testador?',
        option : ['Test','Testamentos','Libros','Poemas'],
        answer : 'Testamentos'
    },
    {
        question : '¿Quién visitó un país gobernado por caballos?',
        option : ['Colon','Don Quijote','Darwin','Gulliver'],
        answer : 'Gulliver'
    },
    {
        question : ' ¿Cuál es la identidad secreta de Don Diego de la Vega?',
        option : ['El zorro','Batman','Superman','Flash'],
        answer : 'El zorro'
    },
    {
        question : '¿Cuál era el lema de los Tres Mosqueteros?',
        option : ['Unidos siempre','Mas vale malo conocido que bueno por conocer','Todos para uno y uno para todos','Clemencia para los vencidos'],
        answer : 'Todos para uno y uno para todos'
    },
    {
        question : '¿Quién escribió las aventuras de Sandokán?',
        option : ['Emilio Salgari','Luis Pasteur','Alberto Terra','Jaime Roos'],
        answer : 'Emilio Salgari'
    },
    {
        question : '¿Qué pieza de ajedrez puede hacer un movimiento en forma de L?',
        option : ['Torre','Alfil','Reina','Caballo'],
        answer : 'Caballo'
    },
    {
        question : '¿Qué deporte practican los Harlem Globetrotters?',
        option : ['Tenis','Futbol','Baloncesto','esgrima'],
        answer : 'Baloncesto'
    },
    {
        question : '¿Cuál era el nombre anterior de Muhammad Alí?',
        option : ['Rene Higuita','Cassius Clay','Frank Lampard','Neil Amstrong'],
        answer : 'Cassius Clay'
    },
    {
        question : '¿En qué país se encuentra el circuito de Le Mans?',
        option : ['España','Italia','Belgica','Francia'],
        answer : 'Francia'
    },
    {
        question : '¿Qué país fue llamado la Galia por los romanos?',
        option : ['Francia','Italia','Alemania','Rusia'],
        answer : 'Francia'
    },
    {
        question : '¿Quién era el emperador de Roma cuando murió Jesús?',
        option : ['Augusto','Calígula','Tiberio','Claudio'],
        answer : 'Tiberio'
    },
    {
        question : '¿En qué año la humanidad pisó la Luna por primera vez a bordo de la nave Apolo 11?',
        option : ['1969','1968','1958','1979'],
        answer : '1969'
    },
    {
        question : 'Los satélites Calisto, Europa, Ío y Ganímedes orbitan alrededor de un planeta. ¿Cuál es?',
        option : ['Saturno','Jupiter','Neptuno','Urano'],
        answer : 'Jupiter'
    },
    {
        question : '¿Qué selección ganó el Mundial de fútbol de Brasil en el 2014?',
        option : ['Italia','España','Brasil','Alemania'],
        answer : 'Alemania'
    },
    {
        question : '¿Qué selección ha ganado más mundiales de fútbol?',
        option : ['Brasil','Uruguay','Alemania','Italia'],
        answer : 'Brasil'
    },



]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Pregunta"+' '+(i+1)+' '+'de'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
