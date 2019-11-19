import { Component } from '@angular/core';


@Component({
    'selector': 'app-warning-alert',
    'template': `
    <p> This is warning Message from warning alert component you are in danger </p>
    `,
    'styles': [
        `
        p {
            padding: 10px;
            background-color: mistyrose;
            border: 1px solid red;
        }
        `
    ]

})

export class WarningAlertComponent {

}