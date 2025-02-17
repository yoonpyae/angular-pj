import { Component, OnInit } from '@angular/core';
import { ApiClientService } from '../services/api-client.service';
import { RootModel } from '../models/root.model';
import { ApiTownshipService } from '../services/api-township.service';

@Component({
  selector: 'app-township',
  imports: [],
  templateUrl: './township.component.html',
  styleUrl: './township.component.scss',
})
export class TownshipComponent implements OnInit {
  townships: any[] = [];
  constructor(private apiTownship: ApiTownshipService) {}

  ngOnInit(): void {
    this.apiTownship.getjson().subscribe((res) => {
      let result = res as RootModel;
      this.townships = result.data;
    });
  }
}
