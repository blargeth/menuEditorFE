const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello worlddd");
});

app.get("/menuTest", function (req, res) {
  res.json({
    sections: [
      {
        name: "Lunch Specials",
        items: [
          {
            title: "Chicken Over Rice",
            price: 12,
            options: [
              {
                name: "Add Rice",
                choices: [
                  {
                    name: "White Rice",
                    price: 2,
                  },
                  {
                    name: "Brown Rice",
                    price: 2,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Breakfast Specials",
        items: [
          {
            title: "Eggs and Sausage",
            price: 5,
            options: [
              {
                name: "Egg Type",
                choices: [
                  {
                    name: "Sunnyside Up",
                    price: 1,
                  },
                  {
                    name: "Scrambled",
                    price: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`My app listening at http://localhost:${port}`);
});
