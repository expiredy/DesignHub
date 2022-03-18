#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/create-session/<user_id>")]
fn create_session(user_id: String) -> String{
    return user_id;
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, create_session])
}