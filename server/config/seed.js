/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Menu from '../api/menu/menu.model';

Menu.find({}).remove()
  .then(() => {
    Menu.create({
        'position': 1,
        'name': 'Voorgerechten',
        'items': [
          {
            'name': 'Tiropitakia',
            'price': 2.75,
            'desc': 'Bladerdeeg Gevuld Met Fetakaas'
          },
          {
            'name': 'Spanakopitakia',
            'price': 2.75,
            'desc': 'Bladerdeeg Gevuld Met Spinazie En Feta Kaas'
          },
          {
            'name': 'Loukanopitakia',
            'price': 2.75,
            'desc': 'Bladerdeeg Gevuldmet Griekse Worst'
          },
          {
            'name': 'Tzatziki',
            'price': 3.8,
            'desc': 'Griekse Yogurt Met Komkommer En Knoflook'
          },
          {
            'name': 'Feta',
            'price': 4.25,
            'desc': 'Griekse Kaas'
          },
          {
            'name': 'Keftedakia',
            'price': 4.5,
            'desc': 'Gehaktballetjes In Tomatosaus'
          },
          {
            'name': 'Oliven',
            'price': 3.25,
            'desc': ''
          },
          {
            'name': 'Dolmadakia',
            'price': 4.25,
            'desc': 'Gevulde Druivenbladeren Met Rijst'
          },
          {
            'name': 'Aubergine Salade',
            'price': 2.5,
            'desc': ''
          },
          {
            'name': 'Taramosalade',
            'price': 2.54,
            'desc': 'Viskuitsalade'
          },
          {
            'name': 'Tirosalade',
            'price': 2.5,
            'desc': 'Salade Gemaakt Op Basis Fetakaas'
          },
          {
            'name': 'Loukaniko',
            'price': 4.25,
            'desc': 'Griekse Worst'
          },
          {
            'name': 'Feta Fournou',
            'price': 5.5,
            'desc': 'Griekse Fetakaas Met Groente Uit De Oven'
          },
          {
            'name': 'Pikilia Koud',
            'price': 4.5,
            'desc': 'Olijven,aubergin Salade, Taramosalade,tirosalade,feta'
          },
          {
            'name': 'Pikilia Warm',
            'price': 4.8,
            'desc': 'Tiropitaki, Spanakopitaki, Loukanopitaki, Keftedaki, Loukaniko'
          }
        ]
      },
      {
        'position': 2,
        'name': 'Griekse traditionele schotels',
        'items': [
          {
            'name': 'Keftedes Schotel',
            'price': 10.5,
            'desc': 'Gehaktballetjes In Tomatensaus'
          },
          {
            'name': 'Mousaka',
            'price': 11.5,
            'desc': ''
          },
          {
            'name': 'Stifado',
            'price': 11.5,
            'desc': ''
          },
          {
            'name': 'Kolokithokeftedes',
            'price': 11.5,
            'desc': ''
          }
        ]
      },
      {
        'position': 3,
        'name': 'Schotels',
        'items': [
          {
            'name': 'Gyros Schotel',
            'price': 11.5,
            'desc': 'Gesneden Stukjes Varkensvlees'
          },
          {
            'name': 'Artemis Schotel',
            'price': 12.9,
            'desc': 'Souvlaki, Suzuki, Kipfilet En Gyros'
          },
          {
            'name': 'Suzuki Schotel',
            'price': 12.5,
            'desc': '3 Stuks Gekruid Gehakt En Gyros'
          },
          {
            'name': 'Kip Schotel',
            'price': 12.5,
            'desc': '3 Stuks Kipfilet En Gyros'
          },
          {
            'name': 'Souvlaki Schotel',
            'price': 12,
            'desc': '3 Souvlaki En Gyros'
          },
          {
            'name': 'Athene Schotel',
            'price': 12.9,
            'desc': 'Suzuki, Snitchel, Souvlaki En Gyros'
          },
          {
            'name': 'Hermes Schotel',
            'price': 13.25,
            'desc': 'Lamskotolet, Kip,souvlaki En Gyros'
          },
          {
            'name': 'Ouzo Schotel',
            'price': 12.9,
            'desc': '2 Suzuki En Gyros En 1 Souvlaki'
          },
          {
            'name': 'Matala Schotel',
            'price': 13.25,
            'desc': 'Souvlaki, Snitchel, Kip En Gyros'
          },
          {
            'name': 'Paidakia Schotel',
            'price': 14,
            'desc': 'Gegrilde Lamskotolet En Gyros'
          },
          {
            'name': 'Bifteki Schotel',
            'price': 12.5,
            'desc': 'Gekruid Gehakt Gevuld Met Fetakaas En Gyros'
          },
          {
            'name': 'Snitchel Schotel',
            'price': 12.9,
            'desc': '3 Stuks Snitchel En Gyros'
          },
          {
            'name': 'Korfu Schotel',
            'price': 12.5,
            'desc': 'Loukaniko, Souvlaki, Suzuki En Gyros'
          },
          {
            'name': 'Gouves Schotel',
            'price': 12.9,
            'desc': 'Lamskotolet, Bifteki, Souvlaki En Gyros'
          },
          {
            'name': 'Mix Grill',
            'price': 14.5,
            'desc': 'Souvlaki, Suzuki, Lamskotolet,loukaniko En Gyros'
          }
        ]
      },
      {
        'position': 4,
        'name': 'Schotels voor 2 personen',
        'items': [
          {
            'name': 'Akropolis Schotel',
            'price': 23.9,
            'desc': 'Gyros, 2 Souvlaki, 2 Suzuki, 2 Snitchel En 2 Kip Filet'
          },
          {
            'name': 'Kreta Schotel',
            'price': 37.5,
            'desc': '2 Kip Filet, 2 Bifteki, 2 Souvlaki, 2 Snitchel En Gyros, En 700ml Witte Wijn'
          },
          {
            'name': 'Family Budget',
            'price': 55,
            'desc': 'Schaal Van 45 Cm Met Gyros, 2 Souvlaki, 2 Suzuki, 2 Lamskoteletten, 2 Kipfilet, 2 Snitchel, 2 Loukaniko, Een Grote Boeren Salade (4 Personen), Grote Tzatziki, Patat En 4 Cola'
          }
        ]
      },
      {
        'position': 5,
        'name': 'Pita\'s',
        'items': [
          {
            'name':'Pita Gyros',
            'price':5,
            'desc':''
          },
          {
            'name':'Pita Souvlaki',
            'price':5,
            'desc':''
          },
          {
            'name':'Pita Suzuki',
            'price':5,
            'desc':''
          },
          {
            'name':'Pita Kip Filet',
            'price':5,
            'desc':''
          },
          {
            'name':'Pita Loukaniko',
            'price':5,
            'desc':'Griekse Worst'
          },
          {
            'name':'Pita Kaas',
            'price':5,
            'desc':'Griekse Gegrilde Kaas'
          },
          {
            'name':'Pita Speciaal',
            'price':8.9,
            'desc':'2 Pita Gevuld Met Gouda Kaas, Tomaten, Ui, Champignons, Mayo, En Vlees, Geserveerd Met Salade En Patat'
          }
        ]
      },
      {
        'position': 6,
        'name': 'Kinder menu',
        'items': [
          {
            'name':'Gyros',
            'price':5.9,
            'desc':''
          },
          {
            'name':'Souvlaki',
            'price':5.9,
            'desc':''
          },
          {
            'name':'Suzuki',
            'price':5.9,
            'desc':''
          },
          {
            'name':'Kipfilet',
            'price':5.9,
            'desc':''
          },
          {
            'name':'Loukaniko',
            'price':5.9,
            'desc':''
          }
        ]
      },
      {
        'position': 7,
        'name': 'Frisdranken',
        'items': [
          {
            'name':'Cola',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Cola Light',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Fanta',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Sprite',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Cassis',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Ijsthee',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Spa Rood',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Spa Blauw',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Red Bull',
            'price':2,
            'desc':''
          },
          {
            'name':'Chocomel',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Fristi',
            'price':1.5,
            'desc':''
          }
        ]
      },
      {
        'position': 8,
        'name': 'Extra',
        'items': [
          {
            'name':'Patat Met Mayo',
            'price':2.5,
            'desc':''
          },
          {
            'name':'Gyros',
            'price':4.8,
            'desc':''
          },
          {
            'name':'Suzuk',
            'price':2.5,
            'desc':''
          },
          {
            'name':'Souvlak',
            'price':2.5,
            'desc':''
          },
          {
            'name':'Loukaniko',
            'price':2.5,
            'desc':''
          },
          {
            'name':'Kip',
            'price':2.5,
            'desc':''
          },
          {
            'name':'Losse Pita',
            'price':1,
            'desc':''
          }
        ]
      },
      {
        'position': 9,
        'name': 'Sauzen',
        'items': [
          {
            'name':'Knoflooksaus',
            'price':2.5,
            'desc':''
          },
          {
            'name':'Mayo',
            'price':2,
            'desc':''
          },
          {
            'name':'Sambal',
            'price':2,
            'desc':''
          },
          {
            'name':'Appelmoes',
            'price':1.5,
            'desc':''
          },
          {
            'name':'Ketchup',
            'price':1.5,
            'desc':''
          }
        ]
      },
      {
        'position': 10,
        'name': 'Alcoholische dranken',
        'items': [
          {
            'name':'Heineken 330ml',
            'price':1.8,
            'desc':''
          },
          {
            'name':'Mythos 330ml',
            'price':1.8,
            'desc':''
          },
          {
            'name':'Griekse Rode Wijn Droog 700ml',
            'price':5.5,
            'desc':''
          },
          {
            'name':'Griekse Rode Wijn Half Zoet 700ml',
            'price':5.5,
            'desc':''
          },
          {
            'name':'Griekse Witte Wijn Droog 700ml',
            'price':5.5,
            'desc':''
          },
          {
            'name':'Griekse Witte Wijn Half Zoet 700ml',
            'price':5.5,
            'desc':''
          }
        ]
      });
  });

