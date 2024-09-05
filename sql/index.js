const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
let port = 3000;
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "/views")))
app.set("views", (path.join(__dirname, "/views")));
app.use(express.static(path.join(__dirname, "/public")))

app.listen(port, () => {
    console.log("app is listening...");
})



app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM USER`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", { count });

            // console.log(result);
        })
    } catch (err) {
        console.log("some error occured!!!");
    }
});
app.get("/users", (req, res) => {
    let q = `SELECT * FROM USER`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let data = result;
            res.render("user.ejs", { data });
            // console.log(result);
        })
    } catch (err) {
        console.log("some error occured!!!");
    }
});
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `select * from user where id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            let data = result[0];
            if (err) throw err;
            console.log(result);
            res.render("edit.ejs", { data });
        })
    } catch (error) {
        console.log("some error occured!!!");
    }


});

app.patch("/users/:id", (req, res) => {
    let { id } = req.params;
    let { username, password } = req.body;
    console.log(req.body);
    let q = `select * from user where id = '${id}'`;
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let user = result[0];
            if (password != user.password) {
                res.send("wrong password");
            } else {
                console.log(username);
                let q2 = `UPDATE user set username = '${username}' where id = '${id}'`;
                console.log(q2);
                connection.query(q2, (err, result) => {
                    if (err) throw err;
                    res.redirect("/users");
                });
            }
            // res.send("done");    
        })
    } catch (error) {
        console.log("some error occured!!!");
    }

})

app.get("/users/:id/delete", (req, res) => {
    let { id } = req.params;
    res.render("delete.ejs", { id });
})
app.delete("/users/:id", (req, res) => {
    let { id } = req.params;
    let { username, password } = req.body;
    let q = `delete from users where id = '${id}'`;
    if (username  && password) {   
        try {
            connection.query(q, [username, password], (err, result) => {
                let q2 = `delete from user where id = '${id}'`;
                connection.query(q2, (err, result) => {
                    res.redirect("/users")
                })
                
            });
        } catch (err) {
            console.log("some error occured!!!");
        }
    }
    else{
        res.send("wrong!!!!!!!!!!");
    }
})



let random_user = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "userdata",
    password: "wizardcloth"
});

//& for one query
// let q = "insert into user (id,username,email,password)values (?,?,?,?) ";
// let user = [1,"abc","abc@gmail.com",12345];
//&for multiple query
// let q = "insert into user (id,username,email,password) values ? ";
// let users = [
//     [2, "def", "def@gmail.com", 67894],
//     [3, "ghi", "ghi@gmail.com", 10233]
// ];

//& code to add data of 50 users at a time
// let q = "insert into user (id,username,email,password) values ? ";

// let data = [];
// for (let i = 0; i < 50; i++) {
//     data.push(random_user());
// }

// try {
//     connection.query(q, [data], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log("some error occured!!!");
// }



//&connectin .end is not needed when connection.query writing inside a function
//connection.end();
// console.log(random_user());