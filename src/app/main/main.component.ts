import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerManagementService } from '../customer-management.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currentCustomer: Customer = new Customer();
  customerList: Customer[] = []

  constructor(private customerMng: CustomerManagementService) { }

  ngOnInit() {
    this.customerMng.getWaitingUsers().subscribe((res: any) => {
      JSON.parse(res).map(cus => this.customerList.push(new Customer().deserialize(cus)));
    });
  }

  insertToQueue(customerName): void {
    this.customerMng.insertToQueue(customerName).subscribe((res: any) => {
      this.customerList.push(new Customer().deserialize(JSON.parse(res)));
    });
  }

  callNextCustomer(): void {
    this.customerMng.getNext().subscribe((res: any) => {
      this.currentCustomer = this.customerList[0];
      this.customerList.splice(0, 1);
    });
  }
}
