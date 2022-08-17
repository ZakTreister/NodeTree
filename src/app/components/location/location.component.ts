import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TreeComponent } from 'src/@shared/tree/tree.component';
import { LocationComponentService } from './location.component.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  standalone: true,
  imports: [CommonModule, TreeComponent],
  providers: [LocationComponentService],
})
export class LocationComponent {
  public model = this.compService.getModel();

  constructor(private compService: LocationComponentService) {}
}
