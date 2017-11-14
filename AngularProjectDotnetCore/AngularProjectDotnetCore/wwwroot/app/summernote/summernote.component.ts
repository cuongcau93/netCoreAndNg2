import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

declare var $: any;

@Component({
    moduleId: module.id,
    templateUrl: 'summernote.component.html',
    styleUrls: ['summernote.component.css']
})

export class SummernoteComponent implements OnInit {
    postText: string = "";
    errorMessage: string;
    postSaved: boolean = false;

    private _formBuilder: FormBuilder;
    savePostForm: FormGroup;

    constructor(formBuilder: FormBuilder) {
        this._formBuilder = formBuilder;
        this.savePostForm = this._formBuilder.group({});
    }

    ngOnInit() {
        // $ init summernote
        $('#summernote').summernotee();
    }

    // on submit method
    savePost(event: any) {
        let text = $('#summernote').summernote('code');
        console.log(text);
        if (text != null && text != '') {
            this.postText = text;
            this.postSaved = true;
            setTimeout(() => this.postSaved = false, 2000);
        }
        else {
            console.error("posts empty");
            this.postSaved = false;
        }
    }
}