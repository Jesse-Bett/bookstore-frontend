import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  widgets: any[] = [
    { title: 'Widget 1', description: 'Description for Widget 1' },
    { title: 'Widget 2', description: 'Description for Widget 2' },
    { title: 'Widget 3', description: 'Description for Widget 3' },
  ];

  constructor(private router: Router) {}

  navigateToWidget(widget: any) {
    // You can navigate to the widget details page or any other route based on your application's routing configuration
    this.router.navigate(['/widget-details', widget.title]);
  }
}
