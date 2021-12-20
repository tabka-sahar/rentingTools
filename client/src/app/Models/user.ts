export default class User {
  constructor(
    public _id: String,
    public username: String,
    public fullname: String,
    public adrress: String,
    public connected: false,
    public email: String,
    public phone_number: String,
    public fav_category: Array<String>,
    public profile_image_uri: String,
    public verified: boolean
  ) {}
}
