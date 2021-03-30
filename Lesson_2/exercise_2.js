// შექმენით ცვლადები movieName, releaseYear, rating, director შეავსეთ თქვენი საყვარელი ფილმის მონაცემებით

const movieName = 'Pirvelyofili shishi';
const releaseYear = 1996;
const rating = 10;
const director = 'Gregory Hoblit';

//  1.
//  თუ ფილმი გამოსულია 2000-წელს შემდეგ დაბეჭდეთ "ფილმი არის 21 საუკუნის" 
//  სხვა შემთხვევაში გამოიტანეთ "ფილმი მეოცე საუკუნისაა"

if (releaseYear > 2000) {
  console.log('filmi aris 21e saukunis');
} else {
  console.log('filmi meoce saukunisaa');
}

/* 2.
    თუ რეიტინგი 8ზე მეტია გამოიტანეთ "სგსგ კაი ფილმია დსზმ" 
    თუ 6ზე მეტია "ჟანრის მოყვარულები გაიგებენ ძმაო" 
    თუ ნაკლებია 6ზე "ბავშვობაში ვუყურე და მაგიტო"
*/

if (rating > 8) {
  console.log('sgsg kai filmia dszm');
} else if (rating > 6) {
  console.log('janris moyvarulebi gaigeben dzmao');
} else {
  console.log('bavshvobashi vuyure da magito');
}

// 3.
// თუ ფილმის რეჟისორია ელდარ შენგელაია ან Steven Spielberg დაბეჭდეთ "ო მაშინ კი იქნება კაი ფილმი აბა როგორ გინდა"

if (director === 'eldar shengelaia' || director === 'Steven Spielberg') {
  console.log('o mashin ki iqneba kai filmi aba rogor ginda');
}

// 4.
// თუ ფილმი 1970 წლამდე გამოვიდა და მისი რეიტინგი 8ზე მეტია გამოიტანეთ "კლასიკაა"

if (releaseYear < 1970 && rating > 8) {
  console.log('klasikaa');
}

// 5.
// თუ ფილმი 90იანებისაა და არ არის 1995-წლის გამოიტანეთ: 90იანების შუის არაა

if (releaseYear > 1990 && releaseYear < 2000 && releaseYear !== 1995) {
  console.log('90ianebis shuis araa');
}

// 6.
// თუ ფილმის რეიტინგი მეტია 6ზე და ნაკლებია 7ზე და ის არ არის 6.66 გამოიტანეთ: "საშუალო ფილმია"
// ხოლო თუ 6.66-ია მაშინ გამოიტანეთ: "ფუი ეშმაკს"

if (rating > 6 && rating < 7 && rating !== 6.66) {
  console.log('sashualo filmia');
}else if (rating === 6.66) {
  console.log('fui eshmaks');
}

/* 7.
  თუ გამოშვების წელის 1940-ზე მეტია გამოიტანეთ: "ძალიან ძველია მაგრამ ალბათ, ხმოვანია ფილმია"
  თუ გამოშვების წელი 1960-ზე მეტია გამოიტანეთ: "60იანებში უკვე ფერადი უნდა ყოფილიყო"
  თუ გამოშვების წელის 1970-ზე მეტია და 1980-ზე ნაკელბი გამოიტანეთ: "ალბათ პრაქტიკულ ეფექტებს იყენებს"
  თუ გამშვების წელის 1990-ზე მეტია გამოიტანეთ: "ალბათ კომპიუტერულ გრაფიკას იყენებს"
  სხვა ყველა შემთხვევაში გამოიტანეთ: "ფილმის გამოშვების წელის: (აქ ჩასვით გამოშვების წელი)"
*/

if (releaseYear > 1990) {
  console.log('albat kompiuterul grafikas iyenebs');
} else if (releaseYear > 1970 && releaseYear < 1980) {
  console.log('albat praktikul efeqtebs iyenebs');
} else if (releaseYear > 1960) {
  console.log('60ianebshi ukve feradi uda yofiliyo');
} else if (releaseYear > 1940) {
  console.log('dzalian dzvelia magram albat xmovania filmi');
} else {
  console.log('filmis gamoshvebis weli ', releaseYear);
}

