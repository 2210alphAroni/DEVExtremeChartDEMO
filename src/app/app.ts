import { Component } from '@angular/core';
import { DxChartModule, DxSelectBoxModule, DxCheckBoxModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DxChartModule, DxSelectBoxModule, DxCheckBoxModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  chartType: any = 'line';
  showPoints = true;

  chartTypes = ['line', 'bar', 'area', 'spline'];

  financialData = [
    { month: 'Jan 2024', revenue: 1200, expense: 800 },
    { month: 'Feb 2024', revenue: 1850, expense: 950 },
    { month: 'Mar 2024', revenue: 1600, expense: 870 },
    { month: 'Apr 2024', revenue: 2100, expense: 1100 },
    { month: 'May 2024', revenue: 1950, expense: 1000 },
    { month: 'Jun 2024', revenue: 2300, expense: 1200 },
    { month: 'Jul 2024', revenue: 2050, expense: 1050 },
    { month: 'Aug 2024', revenue: 2400, expense: 1300 },
  ];
}