import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from 'src/app/models/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToHome(): void {
    this.router.navigateByUrl(AppRoutes.Home);
  }

  public goToInfo(): void {
    this.router.navigateByUrl(AppRoutes.Info);
  }

}
