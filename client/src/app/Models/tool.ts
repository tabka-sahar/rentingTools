import * as moment from 'moment';

export default class Tools {
  constructor(
    public title: String,
    public description: String,
    public price: Number,
    public categorie: String,
    public available: Boolean,
    public pictures: String,
    public createdAt: any,
    public user: {
      username: String;
      fullname: String;
      connected: false;
      email: String;
      phone_number: String;
      fav_category: Array<String>;
      profile_image_uri: String;
      verified: boolean;
    }
  ) {}
}
