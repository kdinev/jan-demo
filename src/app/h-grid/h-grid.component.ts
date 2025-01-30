import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_HIERARCHICAL_GRID_DIRECTIVES } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { OrdersType } from '../models/northwind/orders-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-h-grid',
  imports: [IGX_HIERARCHICAL_GRID_DIRECTIVES],
  templateUrl: './h-grid.component.html',
  styleUrls: ['./h-grid.component.scss']
})
export class HGridComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindOrders: OrdersType[] = [];

  constructor(private northwindService: NorthwindService) {
  }

  ngOnInit() {
    this.northwindService.getOrders().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindOrders = data,
      error: (_err: any) => this.northwindOrders = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
