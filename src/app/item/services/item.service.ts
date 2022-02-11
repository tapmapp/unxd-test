import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

// INTERFACES
import { Item } from '../interfaces/item.interface';

@Injectable()
export class ItemService {
  constructor() {}

  public getItemById(itemId: string): Observable<Item> {
    // GET GRAPHQL REQUEST BUT MOCKED RESPONSE
    return of({
      id: '12345',
      preview: './assets/img/preview.png',
      thumbnails: [
        { url: './assets/img/preview.png', description: '' },
        { url: './assets/img/thumb-1.png', description: '' },
        { url: './assets/img/thumb-2.png', description: '' },
        { url: './assets/img/thumb-3.png', description: '' },
        { url: './assets/img/thumb-4.png', description: '' },
        { url: './assets/img/thumb-1.png', description: '' },
        { url: './assets/img/thumb-2.png', description: '' },
        { url: './assets/img/thumb-3.png', description: '' },
        { url: './assets/img/thumb-4.png', description: '' },
      ],
      title: 'Dress from a dream',
      collection: 'Collezione Genesi',
      edition: 'Edition. 1 of 1',
      content: [
        'This week the Italian luxury fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana has announced the firm is launching a non-fungible token (NFT) collection. Dolce & Gabbana also known as D&G will reveal the first-ever Alta Moda NFT collection called “DGGenesi.”',
        'D&G followed the high fashion brand Gucci when the company recently sold its NFT “Gucci Aria” using the auction house Christie’s. The Gucci brand NFT sold for $25K and proceeds from the Gucci Aria NFT will be directed toward Unicef USA. Clothia, a luxury online retailer has also recently announced an NFT collection based on high fashion dresses.',
      ],
      features: [
        {
          icon: './assets/img/digital-icon-white.svg',
          description: 'Digital',
        },
        {
          icon: './assets/img/physical-icon-white.svg',
          description: 'Physical',
        },
        {
          icon: './assets/img/experiential-icon-white.svg',
          description: 'Experiential',
        },
      ],
      createdBy: [
        {
          userThumb: './assets/img/user-thumb-0.svg',
          tag: '@Adidas',
        },
        {
          userThumb: './assets/img/user-thumb-1.svg',
          tag: '@JuliaDallas',
        },
      ],
      ownedBy: [
        {
          userThumb: './assets/img/user-thumb-1.svg',
          tag: '@JuliaDallas',
        },
      ],
      state: 'live',
    });
  }
}
