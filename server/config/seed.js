/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Menu from '../api/menu/menu.model';

Menu.find({}).remove()
  .then(() => {
    Menu.create({
        'name': 'Pita wrap',
        'items': [
          {'name': 'Pita Giros', 'price': 4},
          {'name': 'Pita Kip', 'price': 4},
          {'name': 'Pita Suzuki', 'price': 4},
          {'name': 'Pita Worst', 'price': 4}
        ]
      },
      {
        'name': 'Bakjes',
        'items': [
          {'name': 'Giros', 'price': 4.8},
          {'name': 'Kip', 'price': 4.8},
          {'name': 'Suzuki', 'price': 4.8},
          {'name': 'Worst', 'price': 4.8}
        ]
      },
      {
        'name': 'Salades',
        'items': [
          {'name': 'Kip salade', 'price': 4.5},
          {'name': 'Griekse salade', 'price': 4.5},
          {'name': 'Tonijn salade', 'price': 4.5}
        ]
      },
      {
        'name': 'Sandwich',
        'items': [
          {'name': 'Ham, kaas, sla, tomaat, mayo', 'price': 3.8},
          {'name': 'Kip, kaas, sla, tomaat, mayo', 'price': 3.8},
          {'name': 'Ei, sla, tomaat, mayo', 'price': 3.8}
        ]
      },
      {
        'name': 'Bladerdeeg met',
        'items': [
          {'name': 'Spinazie', 'price': 2.5},
          {'name': 'Worst', 'price': 2.5},
          {'name': 'Ham kaas', 'price': 2.5},
          {'name': 'Feta', 'price': 2.5}
        ]
      },
      {
        'name': 'Yoghurt',
        'items': [
          {'name': 'Honing, walnoot', 'price': 2.5},
          {'name': 'Zure kers', 'price': 2.5},
          {'name': 'Sinaasappel', 'price': 2.5}
        ]
      },
      {
        'name': 'Drankjes',
        'items': [
          {'name': 'Sparood-Spablauw', 'price': 1.5},
          {'name': 'Cola-Cola light', 'price': 1.5},
          {'name': 'Cassis-Sprite', 'price': 1.5},
          {'name': 'Fant-Chocomel', 'price': 1.5}
        ]
      },
      {
        'name': 'Anders',
        'items': [
          {'name': 'Frites', 'price': 2},
          {'name': 'Coffee', 'price': 1.5},
          {'name': 'Thee', 'price': 1.5}
        ]
      });
  });

