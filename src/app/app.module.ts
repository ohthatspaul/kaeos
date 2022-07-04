import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';

@NgModule({
  declarations: [AppComponent, IssueListComponent],
  imports: [BrowserModule, ClarityModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
