import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css'],
})
export class IssueDetailComponent implements OnInit {
  //declare issue to be captured when selected
  @Input() issue: Issue | undefined;
  //event to fire after updating issue
  @Output() formClose = new EventEmitter();

  //declare the form to populate with the data
  issueForm: FormGroup | undefined;

  constructor(
    private builder: FormBuilder,
    private issueService: IssuesService
  ) {}

  ngOnInit(): void {
    // builds a form with issue data to be edited
    this.issueForm = this.builder.group({
      title: [this.issue?.title, Validators.required],
      description: [this.issue?.description],
      priority: [this.issue?.priority, Validators.required],
    });
  }

  // save the changes made and close the form
  save() {
    if (this.issue) {
      this.issueService.updateIssue(this.issue.issueNo, this.issueForm?.value);
      this.formClose.emit();
    }
  }
}
