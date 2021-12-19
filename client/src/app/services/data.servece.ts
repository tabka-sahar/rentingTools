import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Tools from '../Models/tool';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject<Tools>({
    title: '',
    description: '',
    price: '',
    categorie: '',
    available: true,
    pictures: '',
    createdAt: '',
    user: {
      username: '',
      fullname: '',
      adrress: '',
      connected: false,
      email: '',
      phone_number: '',
      fav_category: [''],
      profile_image_uri: '',
      verified: true,
    },
  });
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(message: Tools) {
    this.messageSource.next(message);
  }
}
