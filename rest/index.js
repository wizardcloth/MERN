const express = require("express");
const app = express();

let port = 3000;

app.set("view engine", "ejs");

let path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/views")))
app.use(express.static(path.join(__dirname, "/public")))

//uuid package for creating new ids
//uuidvr() give new id upon execution
const { v4: uuidv4 } = require("uuid");

//html dont support patch,put,delete so we are using this to override get or post request
const methodOverride = require("method-override");
app.use(methodOverride("_method"))

let posts = [
    {
        id: uuidv4(),
        username: "abc",
        about: "how are you?",
    },
    {
        id: uuidv4(),
        username: "def",
        about: "heloo world!!",
    },
    {
        id: uuidv4(),
        username: "def",
        about: "hiii...",
    }
]


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
})

app.post("/posts", (req, res) => {
    let { username, about } = req.body;
    let id = uuidv4();
    posts.push({ id, username, about });
    // redirect send get request by default
    res.redirect("/posts");
})

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) =>
        id === p.id
    )
    console.log(post);
    if (post) {
        res.render("show.ejs", { post });
    } else {
        res.render("error.ejs");
    }
})

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let content = req.body;
    console.log(content);
    let post = posts.find((p) => id === p.id)
    post.about = content.about;
    console.log(post);
    res.redirect("/posts");
    // res.send("working");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) =>
        id === p.id
    )
    res.render("edit.ejs", { post });
})

app.delete("/posts/:id",(req,res)=>{
    let {id} =  req.params;
    // console.log(id);
    posts = posts.filter((p)=> id !== p.id);
    // console.log(posts);
    res.redirect("/posts");
})






app.listen(port, () => {
    console.log("app is listening");
})