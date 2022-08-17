import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Node } from 'src/@core/model';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NodeComponent {
  @Input() public node: Node;
  @Input() public maxLevel: number;
  @Input() public level: number;

  public getChildWidth(): string {
    if (!this.node.children?.length) {
      return 'auto';
    }
    return `${100 / this.node.children.length}%`;
  }
}
