let promotionalMessages = [
    "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
    "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
    "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
];

function showRandomPromotion() {
    let index = Math.floor(Math.random() * promotionalMessages.length);
    document.getElementById("research").innerHTML = promotionalMessages[index];

}

setInterval(showRandomPromotion, 3000);

document.addEventListener('DOMContentLoaded', function() {
    var video1 = document.getElementById('video1');
    var video2 = document.getElementById('video2');
  
    video1.onended = function() {
        video1.style.display = 'none';
        video2.style.display = 'block';
        video2.play();
    };

    video2.onended = function() {
        video2.style.display = 'none';
        video1.style.display = 'block';
        video1.play();
      };
  
    video1.play();
  });
