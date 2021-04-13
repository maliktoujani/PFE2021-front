import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Asia',
      data:[502,635,809,947,1402,3634,5268]
    },{
      name: 'Asia',
      data:[502,635,809,947,1402,3634,5268]
    },{
      name: 'Asia',
      data:[502,635,809,947,1402,3634,5268]
    },{
      name: 'Asia',
      data:[502,635,809,947,1402,3634,5268]
    },{
      name: 'Asia',
      data:[502,635,809,947,1402,3634,5268]
    }];
  }
}
