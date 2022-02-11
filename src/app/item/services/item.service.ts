import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";

// INTERFACES
import { Item } from "../interfaces/item.interface";

@Injectable()
export class ItemService {
  constructor() {}

  public getItemById(itemId: string): Observable<Item> {
    // GET GRAPHQL REQUEST BUT MOCKED RESPONSE
    return of({
      id: "12345",
      preview: "http://localhost:4200/assets/img/preview.png",
      thumbnails: [
        {
          url: "http://localhost:4200/assets/img/preview.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-1.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-2.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-3.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-4.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-1.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-2.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-3.png",
          description: "",
        },
        {
          url: "http://localhost:4200/assets/img/thumb-4.png",
          description: "",
        },
      ],
      title: "Dress from a dream",
      collection: "Collezione Genesi",
      edition: "Edition. 1 of 1",
      content: [
        "This week the Italian luxury fashion house founded in 1985 in Legnano by Italian designers Domenico Dolce and Stefano Gabbana has announced the firm is launching a non-fungible token (NFT) collection. Dolce & Gabbana also known as D&G will reveal the first-ever Alta Moda NFT collection called “DGGenesi.”",
        "D&G followed the high fashion brand Gucci when the company recently sold its NFT “Gucci Aria” using the auction house Christie’s. The Gucci brand NFT sold for $25K and proceeds from the Gucci Aria NFT will be directed toward Unicef USA. Clothia, a luxury online retailer has also recently announced an NFT collection based on high fashion dresses.",
      ],
      features: [
        {
          icon: "http://localhost:4200/assets/img/digital-icon-white.svg",
          description: "Digital",
        },
        {
          icon: "http://localhost:4200/assets/img/physical-icon-white.svg",
          description: "Physical",
        },
        {
          icon: "http://localhost:4200/assets/img/experiential-icon-white.svg",
          description: "Experiential",
        },
      ],
      createdBy: [
        {
          userThumb: "http://localhost:4200/assets/img/user-thumb-0.svg",
          tag: "@Adidas",
        },
        {
          userThumb: "http://localhost:4200/assets/img/user-thumb-1.svg",
          tag: "@JuliaDallas",
        },
      ],
      ownedBy: [
        {
          userThumb: "http://localhost:4200/assets/img/user-thumb-1.svg",
          tag: "@JuliaDallas",
        },
      ],
      stories: [
        {
          title: "About the artists",
          content: [
            "Each shoe is represented by a 3D NFT of the shoe design, created by the MNTD studio. The MNTD platform is loaded with all of the shoes put up for auction along with a schedule of the individual auction dates. To increase attention and manage such a large auction, shoes are auctioned off by artist (5 shoes per day) over 10 days. After the auctions, NFTs are distributed to the winners. They can choose to redeem the NFT for the physical shoe, trade it on the secondary market, or hold onto the NFT forever. To simplify the logistics, all tokens must be redeemed within one year of the auction. Each owner redeeming a token will get an alternative NFT corresponding to a redeemed token. For example, the colors could be inverted or grayscale. It should be an interesting work of art in its own right, giving it the ability to command a value even after redemption.",
          ],
          img: {
            url: "http://localhost:4200/assets/img/history.jpg",
            desc: " Natively Digital is a collection of remarkable, unique artworks.",
            tag: "@Dolce&Gabbanna",
          },
        },
        {
          title: "The world’s largest NFT auction",
          content: [
            "Natively Digital is a collection of remarkable, unique artworks co-curated with Robert Alice. We showcase some of the earliest, raw NFTs built on pre-Ethereum chains alongside newer, complex NFTs that showcase the cutting edge technical innovation. From across four continents, we have sourced emerging crypto artists and the ‘old masters’ alike to exhibit their works. The multi-venue global exhibition is presented in partnership with @Samsung, featuring their lineup of innovative TVs and Projectors to showcase various NFT artworks. The landmark auction will provide an opportunity for collectors, curators, and enthusiasts to focus on the emerging ideas and aesthetics contained within these works. The Natively Digital auction will occur between June 3 and June 10 online at sothebys.com. Discover more about the sale below.",
          ],
        },
      ],
      state: "live",
    });
  }
}
