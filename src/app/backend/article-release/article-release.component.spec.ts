import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleReleaseComponent } from './article-release.component';

describe('ArticleReleaseComponent', () => {
  let component: ArticleReleaseComponent;
  let fixture: ComponentFixture<ArticleReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
