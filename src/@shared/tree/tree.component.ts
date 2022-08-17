import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Node } from 'src/@core/model';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
  standalone: true,
  imports: [CommonModule, NodeComponent],
})
export class TreeComponent {
  @Input() public data: Node;
  @Input() public maxLevel: number;
}
