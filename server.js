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
          {
            title: "Pizza",
            price: 12,
            options: [
              {
                name: "Toppings",
                choices: [
                  {
                    name: "Pepperoni",
                    price: 2,
                  },
                  {
                    name: "Mushroom",
                    price: 2,
                  },
                ],
              },
              {
                name: "Cheeses",
                choices: [
                  {
                    name: "Mozzerella",
                    price: 2,
                  },
                  {
                    name: "Four cheeses",
                    price: 2,
                  },
                ],
              },
            ],
          },
          {
            title: "Subway Grinder Hero",
            price: 12,
            options: [
              {
                name: "Kind",
                choices: [
                  {
                    name: "Meatball",
                    price: 2,
                  },
                  {
                    name: "Ham and Cheese",
                    price: 2,
                  },
                ],
              },
              {
                name: "Lettuce",
                choices: [
                  {
                    name: "Yes",
                    price: 2,
                  },
                  {
                    name: "No",
                    price: 2,
                  },
                ],
              },
            ],
          }
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
              {
                name: "Add bread",
                choices: [
                  {
                    name: "Toast",
                    price: 1,
                  },
                  {
                    name: "Non Toasted Bread",
                    price: 1,
                  },
                ],
              }
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
