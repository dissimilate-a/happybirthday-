

// Получение доступа к микрофону
navigator.mediaDevices.getUserMedia({ audio: true })
  .then(function(stream) {
    var audioContext = new (window.AudioContext || window.webkitAudioContext)();
    var analyser = audioContext.createAnalyser();
    var microphone = audioContext.createMediaStreamSource(stream);

    // Подключение анализатора к микрофону
    microphone.connect(analyser);

    // Получение данных о громкости звука
    setInterval(function() {
      var dataArray = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(dataArray);

      // Вычисление среднего значения громкости
      var average = getAverageVolume(dataArray);

      // Проверка, превышает ли громкость заданное значение
      if (average > 90) {
        // Действия, если громкость превышает значение

        // $('.lit').addClass('out');
        // $('.lit').removeClass('lit');



        const button = document.getElementById('flame');
        const result = button.classList.replace('lit', 'out');
        button.classList.remove('lit');




        // document.getElementById('flame').this.classList.toggle('out');
        // document.getElementById('flame').flameToggle();
        
        // document.getElementById("flame").classList.remove("lit");
      } else {
        // Действия, если громкость не превышает значение
        // document.getElementById('flame').flameToggle();
        // document.getElementById("flame").classList.remove("lit");
      }
    }, 100);
  })
  .catch(function(err) {
    console.error(err);
  });

// Вычисление среднего значения громкости
function getAverageVolume(array) {
  var values = 0;
  var length = array.length;

  for (var i = 0; i < length; i++) {
    values += array[i];
  }

  return values / length;
}

function flameToggle() {
  this.classList.toggle('lit');
  this.classList.toggle('out');
}


// ---------------------------

// const button = document.getElementById('flame');

// if (average = 20) {
//   button.style.opacity = 0.6;
// }

// if (average = 30) {
//   button.style.opacity = 0.5;
// }
// if (average < 40) {
//   button.style.opacity = 1;
// }

// if (average > 40) {
//   button.style.opacity = 0.4;
// }

// if (average = 50) {
//   button.style.opacity = 0.2;
// }

// if (average > 60) {
//   button.style.opacity = 0;
// }




// let element = document.getElementById("flame");
//       let opacity = 1;
//       function fade() {
//          if (opacity >= 0) {
//             return;
//          }
//          opacity -= 0.01;
//          element.style.opacity = opacity;
//          requestAnimationFrame(fade);
//       }
//       requestAnimationFrame(fade);




document.getElementById('flame').addEventListener('click', flameToggle);

function flameToggle() {
    this.classList.toggle('lit');
    this.classList.toggle('out');
}
