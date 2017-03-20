import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CommentService } from '../shared/comment/comment.service';

@Component({
  moduleId: module.id,
  selector: 'cities-comment',
  templateUrl: 'comment.component.html',
  inputs: [`fetchedCity`]
})
export class CommentComponent {
  private fetchedCity : any;
  private cityComments: any;

  constructor(private commentService: CommentService) {}

  onClick() {
    this.commentService.getCommentsOfCity(this.fetchedCity.cityId)
        .subscribe(
          fetchedComments => this.cityComments = fetchedComments
    );
  }
}
