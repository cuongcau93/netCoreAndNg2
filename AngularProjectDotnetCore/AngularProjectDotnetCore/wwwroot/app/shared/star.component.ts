import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
})

export class StarComponent implements OnChanges, OnInit {
    @Input() rating: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

    ngOnInit(): void {
        //console.log('lol'+this.ratingClicked);
    }
}