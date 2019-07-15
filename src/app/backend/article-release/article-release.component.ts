import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CommonService } from "src/app/service/common.service";
import marked from "marked";

@Component({
  selector: "app-article-release",
  templateUrl: "./article-release.component.html",
  styleUrls: ["./article-release.component.less"]
})
export class ArticleReleaseComponent implements OnInit {
  articleForm = this.fb.group({
    title: ["", Validators.required],
    summary: [""],
    tag: this.fb.array,
    isOriginal: [true, Validators.required],
    text_link: [""],
    content: ["", Validators.required],
    inputValue: [""]
  });

  // 可选的标签
  optionalTags = ["Movie", "Books", "Music", "Sports"];
  // 选中的标签
  selectedTags = [];
  inputVisible = false;

  @ViewChild("inputElement") inputElement: ElementRef;

  preview: any; // 预览markdown文件

  constructor(private fb: FormBuilder, private service: CommonService) {}

  ngOnInit() {}

  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    this.articleForm.value.tag = this.selectedTags;
    console.log("You are interested in: ", this.selectedTags);
  }

  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (
      this.articleForm.value.inputValue &&
      this.optionalTags.indexOf(this.articleForm.value.inputValue) === -1
    ) {
      this.optionalTags.push(this.articleForm.value.inputValue);
    }
    this.articleForm.value.inputValue = "";
    this.inputVisible = false;
  }

  onSubmit() {
    console.log(this.articleForm.value);
    this.service.post("/create", this.articleForm.value).subscribe(res => {
      console.log(res);
    });
  }

  getArticleList() {
    this.service.get("/articleList").subscribe(res => {
      console.log(res);
    });
  }

  getArticleDetail() {
    this.service
      .get("/articleDetail", { id: "5bee87165cdc81033c164c4a" })
      .subscribe(res => {
        console.log(res);
      });
  }

  showPreview() {
    console.log(this.articleForm.value.content);
    this.preview = marked(this.articleForm.value.content);
    console.log(this.preview);
  }
}
