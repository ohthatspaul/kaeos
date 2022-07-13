import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  // this toggles the appearance of the issue form
  showReportIssue = false;
  selectedIssue: Issue | null = null;
  editIssue: Issue | null = null;

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  //this method is called when the report issue form emits the formClose event
  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }
  // do nothing and return issues when user cancels on edit
  onCloseEdit() {
    this.editIssue = null;
    this.getIssues();
  }
  onConfirm(confirmed: boolean) {
    if (confirmed && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }
}
