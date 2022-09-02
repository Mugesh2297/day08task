var request = new XMLHttpRequest ();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();
request.onload = function print()
{

    var data=JSON.parse(this.responseText);
   var asiaReg = data.filter((el) => el.region === "Asia");
   console.log(asiaReg);

   var population = data.filter((el) => el.population < 200000);
   console.log(population);

   data.forEach(ele => {
    console.log(ele.name);
    console.log(ele.capital);
    console.log(ele.flag);
  });

    var totalPopulation = data.reduce((acc,el) => {
      return acc+el.population;
    },0);
    console.log(totalPopulation);
    
    var USdollars = data.filter((el) => el.currencies == "USD:");
  console.log(USdollars);
  };
