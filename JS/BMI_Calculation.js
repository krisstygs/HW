// <h1>Изчисляване на BMI (Индекс на телесната маса)</h1>
// <p>Формулата за изчисляване на BMI e: <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/75508e7ad0fc780453684deec6aab53ea630ece7" class="mwe-math-fallback-image-inline" aria-hidden="true" style="vertical-align: -2.171ex; width:12.395ex; height:5.509ex;" alt="{\displaystyle BMI={\frac {W}{h^{2}}},}"> (Референция: <a href="https://bg.wikipedia.org/wiki/Индекс_на_телесната_маса" target="_blank">bg.wikipedia.org/wiki/Индекс_на_телесната_маса</a>)</p>
// <p><strong>Вашата задача е да напишете програма, която по зададени <i>височина в метри</i> и <i>тегло в килограми</i> на даден човек показава в конзолата индекса на телесната му маса.</strong></p>
// <p>Използвайте подходящи имена на променливи!</p>


function calculateBMI() {
    let heightInMeters = prompt("Въведете вашата височина в метри:", "1.75");
    let weightInKilos = prompt("Въведете вашето тегло в килограми:", "70");
    const bmi = weightInKilos / (heightInMeters * heightInMeters);
    console.log(`Вашият BMI е: ${bmi}`);
  }
  calculateBMI();