import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app_front';
  state = true;
  fetchCourses() {
    this.courseService.getCourses().subscribe(
      (data: any[]) => {
        this.courses = data; // Assign fetched courses to the component variable
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
  constructor(private router: Router) { }
  navigateToCourses() {
    this.state = false;
    //this.router.navigate(['/manage']); // Navigate to the 'courses' route
  }
}
