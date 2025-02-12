const process = require("process");
const jsonServer = require('json-server');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
const authUser = {
  id: '1',
  username: 'taketo',
  displayName: 'Taketo Yoshida',
  email: 'taketo@example.com',
  profileImageUrl: '/users/1.png',
  description:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
};

let jsonData = {
  "products": [
    {
      "id": 1,
      "title": "サンプル本1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "book",
      "imageUrl": "/products/books/bible-1867195_1920.jpeg",
      "price": 5000,
      "condition": "new",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 2,
      "title": "サンプル本2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "book",
      "imageUrl": "/products/books/book-1283468_1920.jpeg",
      "price": 1000,
      "condition": "new",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 3,
      "title": "サンプル本3",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "book",
      "imageUrl": "/products/books/book-3510326_1920.jpeg",
      "price": 500,
      "condition": "used",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 4,
      "title": "サンプル本4",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "book",
      "imageUrl": "/products/books/paper-3061485_1920.jpeg",
      "price": 2000,
      "condition": "new",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 5,
      "title": "サンプル本5",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "book",
      "imageUrl": "/products/books/tea-time-3240766_1920.jpeg",
      "price": 3000,
      "condition": "new",
      "owner": {
        "id": 3,
        "username": "kourin",
        "displayName": "Yoshiki Takabayashi",
        "email": "kourin@example.com",
        "profileImageUrl": "/users/3.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 6,
      "title": "サンプル本6",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "book",
      "imageUrl": "/products/books/rashtravardhan-kataria.jpeg",
      "price": 6000,
      "owner": {
        "id": 3,
        "username": "kourin",
        "displayName": "Yoshiki Takabayashi",
        "email": "kourin@example.com",
        "profileImageUrl": "/users/3.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 20,
      "title": "サンプル服1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "clothes",
      "imageUrl": "/products/clothes/blank-1886001_1920.png",
      "price": 1000,
      "condition": "used",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 21,
      "title": "サンプル服2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "clothes",
      "imageUrl": "/products/clothes/black-shirts.jpeg",
      "price": 2000,
      "condition": "used",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 22,
      "title": "サンプル服3",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "clothes",
      "imageUrl": "/products/clothes/blank-1886008_1920.png",
      "price": 5000,
      "condition": "new",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 23,
      "title": "サンプル服4",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "clothes",
      "imageUrl": "/products/clothes/fashion-1283863_1920.jpeg",
      "price": 2000,
      "condition": "new",
      "owner": {
        "id": 2,
        "username": "takuya",
        "displayName": "Takuya Tejima",
        "email": "takuya@example.com",
        "profileImageUrl": "/users/2.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 24,
      "title": "サンプル服5",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "clothes",
      "imageUrl": "/products/clothes/man-407095_1920.jpeg",
      "price": 3000,
      "condition": "new",
      "owner": {
        "id": 2,
        "username": "takuya",
        "displayName": "Takuya Tejima",
        "email": "takuya@example.com",
        "profileImageUrl": "/users/2.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 25,
      "title": "サンプル服6",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "clothes",
      "imageUrl": "/products/clothes/shirt-2878932_1920.jpeg",
      "price": 3000,
      "condition": "new",
      "owner": {
        "id": 3,
        "username": "kourin",
        "displayName": "Yoshiki Takabayashi",
        "email": "kourin@example.com",
        "profileImageUrl": "/users/3.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 40,
      "title": "サンプルシューズ1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/baby-shoes-505471_1920.jpeg",
      "price": 6000,
      "condition": "new",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 41,
      "title": "サンプルシューズ2",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/belt-952834_1920.jpeg",
      "price": 12000,
      "condition": "used",
      "owner": {
        "id": 1,
        "username": "taketo",
        "displayName": "Taketo Yoshida",
        "email": "taketo@example.com",
        "profileImageUrl": "/users/1.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 42,
      "title": "サンプルシューズ3",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/boots-181744_1280.jpeg",
      "price": 10000,
      "condition": "used",
      "owner": {
        "id": 2,
        "username": "takuya",
        "displayName": "Takuya Tejima",
        "email": "takuya@example.com",
        "profileImageUrl": "/users/2.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 43,
      "title": "サンプルシューズ4",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/brown-shoes-1150071_1920.jpeg",
      "price": 7000,
      "condition": "used",
      "owner": {
        "id": 2,
        "username": "takuya",
        "displayName": "Takuya Tejima",
        "email": "takuya@example.com",
        "profileImageUrl": "/users/2.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 44,
      "title": "サンプルシューズ5",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/feet-1840619_1920.jpeg",
      "price": 9000,
      "condition": "new",
      "owner": {
        "id": 3,
        "username": "kourin",
        "displayName": "Yoshiki Takabayashi",
        "email": "kourin@example.com",
        "profileImageUrl": "/users/3.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 45,
      "title": "サンプルシューズ6",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/shoes-1433925_1920.jpeg",
      "price": 7000,
      "condition": "new",
      "owner": {
        "id": 3,
        "username": "kourin",
        "displayName": "Yoshiki Takabayashi",
        "email": "kourin@example.com",
        "profileImageUrl": "/users/3.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 46,
      "title": "サンプルシューズ7",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/shoes-2216498_1920.jpeg",
      "price": 2000,
      "condition": "new",
      "owner": {
        "id": 3,
        "username": "kourin",
        "displayName": "Yoshiki Takabayashi",
        "email": "kourin@example.com",
        "profileImageUrl": "/users/3.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    },
    {
      "id": 47,
      "title": "サンプルシューズ8",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nIt has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\nIt was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "category": "shoes",
      "imageUrl": "/products/shoes/shoes-153310_1280.png",
      "price": 6000,
      "condition": "new",
      "owner": {
        "id": 3,
        "username": "kourin",
        "displayName": "Yoshiki Takabayashi",
        "email": "kourin@example.com",
        "profileImageUrl": "/users/3.png",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      }
    }
  ],
  "users": [
    {
      "id": 1,
      "username": "taketo",
      "displayName": "Taketo Yoshida",
      "email": "taketo@example.com",
      "profileImageUrl": "/users/1.png",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
      "id": 2,
      "username": "takuya",
      "displayName": "Takuya Tejima",
      "email": "takuya@example.com",
      "profileImageUrl": "/users/2.png",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
      "id": 3,
      "username": "kourin",
      "displayName": "Yoshiki Takabayashi",
      "email": "kourin@example.com",
      "profileImageUrl": "/users/3.png",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
  ]
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

server.use(cookieParser());
server.use(express.json());

server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // クッキーを送信する場合に必要
}));

server.post('/auth/signin', async (req, res) => {
  console.log("[INFO] POST /auth/signin, Request body: ", req.body);
  sleep(1000)
  if (
    !(req.body['username'] === 'user' && req.body['password'] === 'password')
  ) {
    return res.status(401).json({
      message: 'Username or password are incorrect',
    });
  }

  res.cookie('token', 'dummy_token', {
    maxAge: 3600 * 1000,
    httpOnly: true,
  });
  res.status(201).json(authUser);
});

server.post('/auth/signout', (req, res) => {
  res.cookie('token', '', {
    maxAge: 0,
    httpOnly: true,
  });
  res.status(200).json({
    message: 'Sign out successfully',
  });
});

server.post('/products', async (req, res) => {
  console.log("[INFO] POST /products, Request cookie: ", req.cookies['token']);
  await sleep(2000);

  if (req.cookies['token'] !== 'dummy_token') {
    return res.status(401).json({
      message: 'Unauthorized !!',
    });
  }

  const id = jsonData["products"].length + 100;
  jsonData["products"].push({
    "id": `${id}`,
    "title": `${req.body["title"]}`,
    "description": `${req.body["description"]}`,
    "category": `${req.body["category"]}`,
    "imageUrl": `${req.body["imageUrl"]}`,
    "price": `${req.body["price"]}`,
    "condition": "new",
    "owner": {
      "id": 1,
      "username": "taketo",
      "displayName": "Taketo Yoshida",
      "email": "taketo@example.com",
      "profileImageUrl": "/users/1.png",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
  },)

  res.status(201).json({
    message: 'ok',
    id: 1
  });
});

server.post('/purchases', (req, res) => {
  if (req.cookies['token'] !== 'dummy_token') {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  res.status(201).json({
    message: 'ok',
  });
});

server.get('/users/me', (req, res) => {
  if (req.cookies['token'] !== 'dummy_token') {
    return res.status(401).json({
      message: 'Unauthorized',
    });
  }

  res.status(200).json(authUser);
});

server.get('/products/lazy', async (req, res) => {
  console.log("[INFO] GET /products/lazy Sleep 3 seconds ...");
  await sleep(3000);
  console.log("[INFO] GET /products/lazy Start");
  res.status(200).json(jsonData["products"]);
});

server.get('/products/quick', async (req, res) => {
  console.log("[INFO] GET /products/quick Start");
  res.status(200).json(jsonData["products"]);
});

server.get('[INFO] GET /products/lazy/:id', async (req, res) => {
  console.log("[INFO] GET /products/lazy/:id Sleep 2 seconds ..., id: ", req.params.id);
  await sleep(2000);
  console.log("[INFO] GET /products/lazy/:id Start");
  const { id } = req.params;
  const product = jsonData["products"].find((p) => Number(p.id) === Number(id));

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

server.get('/users/lazy/:id', async (req, res) => {
  console.log("[INFO] GET /users/lazy/:id Sleep 2 seconds ..., id: ", req.params.id);
  await sleep(2000);
  console.log("[INFO] GET /users/lazy/:id Start");
  const { id } = req.params;
  const user = jsonData["users"].find((p) => Number(p.id) === Number(id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

server.use(middlewares);
server.use(router);
server.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit();
    return;
  }
  console.log("Start listening...");
  console.log('http://localhost:' + port);
});
