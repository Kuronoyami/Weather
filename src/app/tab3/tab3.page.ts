import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  public fav: any;

  constructor() {
    const storedFav = localStorage.getItem('fav');
    if (storedFav !== null) {
      this.fav = JSON.parse(storedFav);
      console.log(this.fav);
    }
  }
}
// export class Tab3Page {
//   public fav: any[];

//   constructor() {
//     const storedFav = localStorage.getItem('fav');
//     if (storedFav !== null) {
//       this.fav = JSON.parse(storedFav);
//       console.log(this.fav);
//     } else {
//       this.fav = [];
//     }
//   }

//   getFavoriteData(): any[] {
//     return this.fav;
//   }
// }
