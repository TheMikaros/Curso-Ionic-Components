import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNaci: Date = new Date();

  customYearValues = [2025, 2020, 2016, 2008, 2004, 2000, 1996];

  constructor(private pickerController: PickerController) { }

  ngOnInit() {
  }
  selectedAnimal: string = "";
  async presentPicker() {
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Confirm',
          handler: (selected) => {
            console.log(selected);
          }
        }
      ],
      columns: [
        {
          name: 'animal',
          options: [
            { text: 'Dog', value: 'dog' },
            { text: 'Cat', value: 'cat' },
            { text: 'Bird', value: 'bird' },
          ],
        },
        {
          name: 'size',
          options: [
            { text: 'small', value: 'small' },
            { text: 'middle', value: 'middle' },
            { text: 'big', value: 'big' },
          ]
        }
      ]
    });
    await picker.present();
  }



}
