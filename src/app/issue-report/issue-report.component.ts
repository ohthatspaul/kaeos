import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-report',
  templateUrl: './issue-report.component.html',
  styleUrls: ['./issue-report.component.css'],
})
export class IssueReportComponent implements OnInit {
  issueForm: FormGroup | undefined;

  constructor(
    private builder: FormBuilder,
    private issueService: IssuesService
  ) {}

  @Output() formClose = new EventEmitter();

  addIssue() {
    //mark all forms as touched so user can see validation message
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return;
    }
    // pass the value of each form control using the value property of the issueForm object.
    this.issueService.createIssue(this.issueForm?.value);
    this.formClose.emit();
  }

  ngOnInit(): void {
    //build the form with the same properties as the Issue interface
    this.issueForm = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required],
    });
  }
}
