import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {
  @Input() flight;
  closeResult;

  constructor(private modalService: NgbModal, private service: FlightsService) {
  }

  ngOnInit(): void {
  }

  open(content) {
    this.closeResult = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult.close();
    });
  }

  isMultipleStopFlight() {
    return this.service.isMultipleStopFlight(this.flight);
  }
}
