import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchPagerComponent } from './git-search-pager.component';

describe('GitSearchPagerComponent', () => {
  let component: GitSearchPagerComponent;
  let fixture: ComponentFixture<GitSearchPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
