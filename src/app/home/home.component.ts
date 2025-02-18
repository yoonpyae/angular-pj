import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';
import { RootModel } from '../models/root.model';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  navigateToTownship() {
    throw new Error('Method not implemented.');
  }
  states: any[] = [];
  constructor(private apiService: ApiClientService) {}

  ngOnInit(): void {
    this.apiService.getjson().subscribe((res) => {
      let result = res as RootModel;
      this.states = result.data;
    });
  }
}
