# 🚀 Introduction
This web application contains three different areas. A **client directory** that acts as the frontend of the application. A **express server directory**, which works as mocked REST service. And lastly we have a **graphql server** directory.

I will explain below how to install the dependencies needed and run the different servers on your local machine.

## 🧐 What's inside?
A quick look at the top level of directories of this project.

```
├── client
    ── node_modules
    ── public
    ── src
├── express-server
    ── node_modules
    ── src
├── graphql-server
    ── node_modules
    ── src
```
---
## ☝ FYI and notiable changes
This section is just to quickly explain some changes and liberties I chose to take in terms of the requirements from the assignment.

### **Return values**
In the assignment it is mentioned that the Graphql call should only return `val3` and `val5`. Hereafter the **frontend / client** should show an overlay that contains the result of multiplying `val3` by `val5`. I chose to remove the logic from the frontend and instead in the mutation handle the logic for calculating the data. Thereby extending the return values to also return the calculated value with `calculatedValue`.

### **Error handling in frontend**
In addition to validation I made a simple component that renders feedback for errors from the server.

---
## 🌍 Client directory
The client server is built using **React** and the css extension **Sass**. The **/src** directory contains a lot of directories. Look below to help get an overview of the directory structure of **/src**:

```
├── client
    ── components
    ── hooks
    ── styles
```

### **1. Instal dependencies**
Navigate into the client directory and run:
```
cd client
npm install
```

### **2. run client server**
Here you just simple run:
```
npm run start
```

The server will run on port *3000*.

---

## 🎓 Express-server directory
The express server uses the web framework Express. Here we have a **/src** directory. This directory contains a **/routes** directory, that handle all the endpoints we will be calling. For the logic of every endpoint we have a **/controllers** directory with different files for creating the objects needed.

Lastly we have a **/data** directory, that simple mimics a database by having different `JSON` files.

### **1. Instal dependencies**
From the root of the project navigate into the express server directory and run:
```
cd express-server
npm install
```

### **2. run express server**
Here you just simple run:
```
npm run start
```

The server will run on port *8080*.

---

## 🌟 Graphql-server directory
The graphql server also contains a **/src** directory with a **/endpoints** directory, that extracts the logic for using `node-fetch` to fetch data from our express server. In addition to that we have a **/graphql** directory, which contains our `resolvers` and `typeDefs`.

### **1. Instal dependencies**
From the root of the project navigate into the graphql server directory and run:
```
cd graphql-server
npm install
```

### **2. run graphql server**
Here you just simple run:
```
npm run start
```

The server will run on port *4000*.

