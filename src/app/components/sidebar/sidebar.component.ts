import { Component } from '@angular/core';
import { SpaceService } from 'src/app/services/space.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  FILTERS: {} = {
    'launch_year': {
      label: 'Launch Year',
      data: [...Array(15).keys()].map(d => d + 2006)
    },
    'launch_success': {
      label: 'Successful Launch',
      data: ['true', 'false']
    },
    'launch_landing': {
      label: 'Successful Landing',
      data: ['true', 'false']
    }
  };

  selectedBadge: any = {};

  constructor(private spaceService: SpaceService){}

  keepOrder = (a: any, b: any) => {
    return a;
  }

  onBadgeClick = (key: string, val: any) => {
    if (this.selectedBadge[key]) {
        this.selectedBadge[key] === val ? delete this.selectedBadge[key] : this.selectedBadge[key] = val;
    } else {
        this.selectedBadge[key] = val;
    }
    this.spaceService.filter.next(this.selectedBadge);
  }
}
