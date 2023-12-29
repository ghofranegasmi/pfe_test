import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  @Input() course : any;

  deleteCourse(course: any) {
    this.courseService.deleteCourse(course.id).subscribe(
      () => {
        // Remove the course from the displayed list
        this.courses = this.courses.filter(c => c.id !== course.id);
      },
      (error) => {
        console.error('Error deleting course:', error);
      }
    );
  }

  editCourse(course: any) {
    this.courseService.editCourse(course.id).subscribe(
      () => {
        // Remove the course from the displayed list
        this.courses = this.courses.filter(c => c.id !== course.id);
      },
      (error) => {
        console.error('Error editing course:', error);
      }
    );
  }
}
