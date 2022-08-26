import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FightersService } from 'src/app/core/services/fighters.service';
import { Fighter } from 'src/app/models/fighters.models';

@Component({
  selector: 'app-fighter-detail',
  templateUrl: './fighter-detail.component.html',
  styleUrls: ['./fighter-detail.component.scss']
})
export class FighterDetailComponent implements OnInit {

  public fighter!: Fighter;

  constructor(
    private fightersService: FightersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initFighters();
  }

  private initFighters(): void {
    const params: Params = this.route.snapshot.params;
    const fighterId: string = params['id'];

    const fighter: Fighter | undefined = this.fightersService.fighters.find((f: Fighter) => f.id === fighterId);

    if (fighter) {
      this.fighter = fighter;
    }

  }

}
