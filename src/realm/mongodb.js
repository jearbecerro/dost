/* eslint-disable */
import * as Realm from "realm-web";
import axios from "axios";

const app = new Realm.App({ id: "rstw-2022-zcbne" });
const credentials = Realm.Credentials.anonymous();

const mongo = app.currentUser.mongoClient("Cluster0");
const db = mongo.db("RSTW")

async function login(){
    try {
        const user = await app.logIn(credentials);
        console.log(user.id === app.currentUser.id&& "DATABASE CONNECTED");
    } catch(err) {
         console.error("Failed to log in", err);
    }
}

login()

async function get(col_name, query){
    try {
        const collection = db.collection(col_name)
        const result = await collection.find(query);
        console.log(result)
    } catch (err) {
        console.log(err.message)
    }
}

get("exhibitor", {})