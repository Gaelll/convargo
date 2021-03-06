'use strict';
// test
//list of truckers
//useful for ALL 5 exercises
var truckers = [{
  'id': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'name': 'les-routiers-bretons',
  'pricePerKm': 0.05,
  'pricePerVolume': 5
}, {
  'id': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'name': 'geodis',
  'pricePerKm': 0.1,
  'pricePerVolume': 8.5
}, {
  'id': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'name': 'xpo',
  'pricePerKm': 0.10,
  'pricePerVolume': 10
}];

//list of current shippings
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var deliveries = [{
  'id': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'shipper': 'bio-gourmet',
  'truckerId': 'f944a3ff-591b-4d5b-9b67-c7e08cba9791',
  'distance': 100,
  'volume': 4,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury' : 0,
    'convargo': 0
  }
}, {
  'id': '65203b0a-a864-4dea-81e2-e389515752a8',
  'shipper': 'librairie-lu-cie',
  'truckerId': '165d65ec-5e3f-488e-b371-d56ee100aa58',
  'distance': 650,
  'volume': 12,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury' : 0,
    'convargo': 0
  }
}, {
  'id': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'shipper': 'otacos',
  'truckerId': '6e06c9c0-4ab0-4d66-8325-c5fa60187cf8',
  'distance': 1250,
  'volume': 30,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury' : 0,
    'convargo': 0
  }
}];

//list of actors for payment
//useful from exercise 5
const actors = [{
  'rentalId': 'bba9500c-fd9e-453f-abf1-4cd8f52af377',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '65203b0a-a864-4dea-81e2-e389515752a8',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '94dab739-bd93-44c0-9be1-52dd07baa9f6',
  'payment': [{
    'who': 'shipper',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'convargo',
    'type': 'credit',
    'amount': 0
  }]
}];

function shippingPrice(){
  for(var i = 0; i < deliveries.length; i++)
  {
    for(var j = 0; j < truckers.length; j++)
    {
      if(deliveries[i].truckerId == truckers[j].id)
      {
        var distance = deliveries[i].distance * truckers[j].pricePerKm;
        var volume = deliveries[i].volume * truckers[j].pricePerVolume;

        var priceFinal = distance + volume;
        deliveries[i].price = priceFinal;
      }
      
    }

  }
}

function shippingPrice2(){
  for(var i = 0; i < deliveries.length; i++)
  {
    for(var j = 0; j < truckers.length; j++)
    {
      if(deliveries[i].truckerId == truckers[j].id)
      {
        if(deliveries[i].volume >= 5 && deliveries[i].volume < 10)
        {
          truckers[j].pricePerVolume = truckers[j].pricePerVolume * 0.90;
        }
        else if(deliveries[i].volume >= 10 && deliveries[i].volume < 25)
        {
          truckers[j].pricePerVolume = truckers[j].pricePerVolume * 0.70;
        }
        else if(deliveries[i].volume >= 25)
        {
          truckers[j].pricePerVolume = truckers[j].pricePerVolume * 0.50;
        }
        else
        {

        }

        var distance = deliveries[i].distance * truckers[j].pricePerKm;
        var volume = deliveries[i].volume * truckers[j].pricePerVolume;

        var priceFinal = distance + volume;
        deliveries[i].price = priceFinal;
      }
      
    }

  }
}

function commission(){
  for(var i = 0; i < deliveries.length; i++)
  {
    var commissionG = 0.30 * deliveries[i].price;
    deliveries[i].commission.insurance = commissionG/2;
    deliveries[i].commission.treasury = Math.ceil(deliveries[i].distance/500);
    deliveries[i].commission.convargo = commissionG - (deliveries[i].commission.insurance + deliveries[i].commission.treasury);
  }
}

function commission2(){
  for(var i = 0; i < deliveries.length; i++)
  {
    if(deliveries[i].options.deductibleReduction == true)
    {
      var commissionG = 0.30 * deliveries[i].price;
      deliveries[i].commission.insurance = commissionG/2;
      deliveries[i].commission.treasury = Math.ceil(deliveries[i].distance/500);
      deliveries[i].commission.convargo = (commissionG + deliveries[i].volume) - (deliveries[i].commission.insurance + deliveries[i].commission.treasury);
      deliveries[i].price += deliveries[i].volume;
    }
    else
    {
      var commissionG = 0.30 * deliveries[i].price;
      deliveries[i].commission.insurance = commissionG/2;
      deliveries[i].commission.treasury = Math.ceil(deliveries[i].distance/500);
      deliveries[i].commission.convargo = commissionG - (deliveries[i].commission.insurance + deliveries[i].commission.treasury);
    }
  }
}

function payTheActors(){
  for(var i = 0; i < actors.length; i++)
  {
    for(var j = 0; j < deliveries.length; j++)
    {
      for(var k = 0; k < actors[i].payment.length; k++)
      {
        if(actors[i].rentalId == deliveries[j].id)
        {
          if(actors[i].payment[k].who == 'shipper')
          {
            actors[i].payment[k].amount = deliveries[j].price;
          }
          else if(actors[i].payment[k].who == 'owner')
          {
            actors[i].payment[k].amount = deliveries[j].price - (0.30 * deliveries[j].price);
          }
          else if(actors[i].payment[k].who == 'insurance')
          {
            actors[i].payment[k].amount = deliveries[j].commission.insurance;
          }
          else if(actors[i].payment[k].who == 'treasury')
          {
            actors[i].payment[k].amount = deliveries[j].commission.treasury;
          }
          else if(actors[i].payment[k].who == 'convargo')
          {
            actors[i].payment[k].amount = deliveries[j].commission.convargo;
          }
        }
      }
    }
  }
}


//shippingPrice();
shippingPrice2();
//commission();
commission2();
payTheActors();

console.log(truckers);
console.log(deliveries);
console.log(actors);
