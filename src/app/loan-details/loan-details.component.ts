import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import /LoanDetailsService;
@Component({
  selector: "app-loan-details",
  templateUrl: "./loan-details.component.html",
  styleUrls: ["./loan-details.component.css"]
})
export class LoanDetailsComponent {
  name = new FormControl("");

  updateName() {
    this.name.setValue("Nancy");
  }

  showConfig() {
    this.LoanDetailsService.getConfig().subscribe(
      (data: Config) =>
        (this.config = {
          heroesUrl: data["heroesUrl"],
          textfile: data["textfile"]
        })
    );
  }
}
