import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  public inputs = [];

  constructor() {}

  onPinClicked(input: string) {
    if (this.inputs.length > 3) {
      return;
    }

    this.inputs.push(input);
  }
}
